# Dockerfile

# Pull the base image
FROM node:16.17.0-alpine

# Set the working directory
WORKDIR /code/admin

# Copy app dependencies to container
COPY ./package*.json ./

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /code/admin/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 4000 --disableHostCheck true