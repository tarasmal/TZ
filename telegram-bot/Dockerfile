FROM node:14
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
ENV BOT_TOKEN=6033679393:AAEOiZWxdYKSFgOxVi-5-08pciAsi0JDLRk
CMD ["npm", "start"]
