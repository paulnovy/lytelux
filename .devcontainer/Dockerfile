FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
  ca-certificates curl git build-essential python3 pkg-config \
  openssl gnupg nginx supervisor tini \
  && rm -rf /var/lib/apt/lists/*

# Node 20 LTS (NodeSource)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs && npm i -g corepack pnpm@latest

# Nginx as reverse proxy
RUN adduser --disabled-password --gecos "" vscode
USER vscode
WORKDIR /workspace

