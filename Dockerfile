ARG BASE_IMAGE=node:26.9.0-alpine3.24

###############################################################################
FROM ${BASE_IMAGE} AS base

RUN apk add --update --no-cache "make=4.4.1-r4" \
  && apk upgrade --update --no-cache openssl libcrypto3 libssl3 # FIX CVE-2024-5535

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

###############################################################################
FROM base AS lint

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

# [!TIP] Use a bind-mount to "/app" to override following "copys"
# for lint and test against "current" sources in this stage

# Code source
COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./tsconfig.json ${WORKDIR}/
COPY ./Makefile ${WORKDIR}/

# Dependencies
RUN npm ci --verbose --ignore-scripts

CMD ["make", "lint"]

###############################################################################
FROM base AS development

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

# Code source
COPY ./src ${WORKDIR}/src
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json
COPY ./Makefile ${WORKDIR}/
COPY ./tsconfig.json ${WORKDIR}/tsconfig.json
COPY ./tsconfig.prod.json ${WORKDIR}/tsconfig.prod.json

# Dependencies
COPY --from=lint /app/node_modules ${WORKDIR}/node_modules

RUN ls -alh

# CMD []
###############################################################################
FROM development AS builder

ENV WORKDIR=/app
WORKDIR ${WORKDIR}

RUN npm run build

CMD ["ls", "-alh"]

###############################################################################
### In testing stage, can't use USER, due permissions issue
## in github actions environment:
##
## https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions
##
FROM development AS testing

ENV LOG_LEVEL=info
ENV BRUTEFORCE=false
ENV WORKDIR=/app
WORKDIR ${WORKDIR}

COPY ./jest.config.ts /app/jest.config.ts
RUN ls -alh

CMD ["make", "test"]

###############################################################################
### In production stage
## in the production phase, "good practices" such as
## WORKSPACE and USER are maintained
##
FROM base AS production

ENV NODE_ENV=production
ENV LOG_LEVEL=info
ENV BRUTEFORCE=false
ENV WORKDIR=/app
WORKDIR ${WORKDIR}

COPY --from=builder /app/dist ${WORKDIR}/dist

COPY ./Makefile ${WORKDIR}/
COPY ./package.json ${WORKDIR}/package.json
COPY ./package-lock.json ${WORKDIR}/package-lock.json

RUN npm ci --verbose --omit=dev --omit=optional --ignore-scripts --no-cache \
  && ls -alh

USER 1000
CMD ["ls", "-alh"]
