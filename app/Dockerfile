FROM node:13.12.0-alpine

WORKDIR /usr/publish

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/publish/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY public ./

RUN npm install
RUN npm install react-scripts -g --silent

COPY . ./

CMD ["npm", "start"]
