# Use an existing docker image as base
FROM alpine

# Download and install dependency
RUN apk add --update redis

# What to do when it starts as container
CMD ["redis-server"]
