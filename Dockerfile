# Use an official Node runtime as a parent image
FROM node:16-slim

# Set the working directory to /app
WORKDIR /app

# Copy both package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the app to listen on
EXPOSE 3000

# Start the app using Yarn
CMD ["yarn", "start"]
