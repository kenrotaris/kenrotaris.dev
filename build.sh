#!/bin/bash
# Script to build both frontend and backend with time tracking

start_time=$(date +%s)

# Navigate to backend and build using Gradle
echo "Building backend..."
cd backend
gradle build

# Navigate back to root, then go to frontend and build using npm
echo "Building frontend..."
cd ../frontend
npm install
npm run build

end_time=$(date +%s)
duration=$(( end_time - start_time ))
echo "Build process completed in $duration seconds!"