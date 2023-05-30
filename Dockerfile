FROM node:20.2.0-alpine3.16 as base

RUN apk add --update --no-cache make

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

FROM base as development

FROM development as builder

COPY ./Makefile ${WORKDIR}/
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./src ${WORKDIR}/src
COPY ./tsconfig.json ${WORKDIR}/tsconfig.json

RUN npm ci --verbose

### In testing stage, can't use USER, due permissions issue
## in github actions environment:
##
## https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions
##
FROM builder as testing

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false

WORKDIR /app

COPY ./.eslintrc /app/.eslintrc
COPY ./.prettierrc /app/.prettierrc
COPY ./jest.config.ts /app/jest.config.ts
COPY --from=builder /app/node_modules /app/node_modules
RUN ls -alh

CMD ["npm", "run", "test"]

### In production stage
## in the production phase, "good practices" such as
## WORKSPACE and USER are maintained
##
FROM builder as production

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
