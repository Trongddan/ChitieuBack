FROM node:18-alpine
WORKDIR /chitieuback
COPY . .
RUN npm install 
CMD ["node", "src/index.js"]