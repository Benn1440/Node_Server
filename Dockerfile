FROM buildpack-deps:bullseye
# Install Node.js and npm
#RUN apk add --update nodejs npm

# Working directory inside the container
WORKDIR /app

# Copy code into the container
COPY . .

# Build the server
RUN npm run build -o NODE_SERVER .

# stage for a lightweight image
FROM alpine:3.18

# working directory inside the container
WORKDIR /app

# Copy the built binary from the previous stage
#COPY --from=builder /app/NODE_SERVER .
COPY package*.json ./

#RUN npm install

# Expose the port which the server listens on
EXPOSE 3200

# Set the default command to run the server
CMD ["node", "server.js"]
