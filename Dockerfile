FROM node:9.2.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Run
EXPOSE 3000
EXPOSE 53645
CMD [ "npm", "start" ]
