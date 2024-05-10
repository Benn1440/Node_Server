FROM alpine:3.18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3200

CMD [ "npm",  "run",  "dev" ]
