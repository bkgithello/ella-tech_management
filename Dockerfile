# Use official Node.js LTS image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port 3000 (NestJS default)
EXPOSE 3000

# Start the application in dev mode
CMD ["npm", "run", "start:dev"]
