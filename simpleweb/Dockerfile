# Base Image
# FROM alpine
# alpine image doesn't have npm installed
# specific node version
# FROM node:6.14
# alpine version means minimal programs are installed
# most of the images offers an alpine version
FROM node:alpine

# Dependencies

# Copy files

# when copying all files will be stored in this folder
WORKDIR /usr/simpleweb

# ./ => build context (last parameter of docker build)
# copy all
#COPY ./ ./

# this command requires a package.json file
# if we make a change in the code the dependencies will be isnstall again
# which is not good, because it takes time, and there is no need to do it
# package.json was not updated, so dependencies didn't change
# RUN npm install

# --- v2 --- #
COPY ./package.json ./
RUN npm install

COPY ./ ./

# Default command
CMD ["npm", "start"]
