FROM node:12

WORKDIR /app

ADD package.json /app/package.json

RUN npm config set registry http://registry.npmjs.org

RUN npm install

# I'm getting problems with higher versions of reactr-scripts such as 3.4.3 
RUN npm install react-scripts@3.4.0

ADD . /app

EXPOSE 3000

CMD ["npm", "run", "start"]