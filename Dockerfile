FROM node:12.13.0-alpine
WORKDIR /back
COPY package.json package.json
COPY index.js index.js
RUN ["npm", "i"]
CMD ["npm", "start"]
EXPOSE 3000
