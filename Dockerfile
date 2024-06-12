###############################################################################
FROM node:22.3.0-alpine3.20 AS base

RUN apk add --update --no-cache make

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

###############################################################################
FROM base AS lint

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

RUN apk add --update --no-cache make nodejs npm
RUN apk add --update --no-cache yamllint

RUN npm install -g --ignore-scripts markdownlint-cli

# [!TIP] Use a bind-mount to "/app" to override following "copys"
# for lint and test against "current" sources in this stage

CMD ["make", "lint"]

###############################################################################
FROM base AS development

###############################################################################
FROM development AS builder

COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/
COPY ./tsconfig.json ${WORKDIR}/tsconfig.json

RUN npm ci --verbose --ignore-scripts

###############################################################################
### In testing stage, can't use USER, due permissions issue
## in github actions environment:
##
## https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions
##
FROM builder AS testing

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false

WORKDIR /app

COPY ./.eslintrc /app/.eslintrc
COPY ./.prettierrc /app/.prettierrc
COPY ./jest.config.ts /app/jest.config.ts
COPY --from=builder /app/node_modules /app/node_modules
RUN ls -alh

CMD ["npm", "run", "test"]

###############################################################################
### In production stage
## in the production phase, "good practices" such as
## WORKSPACE and USER are maintained
##
FROM builder AS production

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false

WORKDIR /app

COPY ./.eslintrc /app/.eslintrc
COPY ./.prettierrc /app/.prettierrc
COPY ./jest.config.ts /app/jest.config.ts
COPY --from=builder /app/node_modules /app/node_modules
RUN ls -alh

USER node
CMD ["npm", "run", "test"]
