FROM node:14-alpine
WORKDIR /
COPY package*.json ./
RUN npm install --only=production
COPY . .
CMD [ "npm", "run", "start:prod" ]
