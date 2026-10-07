FROM ubuntu:stonking-20260705

RUN apt-get update && apt-get install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

WORKDIR /var/www/app

COPY . .

RUN npm install