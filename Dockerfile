# Use an official Node runtime as a parent image
FROM node:14-slim

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the build files and host it
COPY . .

# Build the Next.js app
RUN npm run build

# Start the app
CMD ["npm", "start"]