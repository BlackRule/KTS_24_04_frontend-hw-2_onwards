FROM node:20
COPY package*.json ./
RUN npm install
#ARG CACHEBUST=1 # and run with --build-arg CACHEBUST=$(date +%s)
#RUN ls node_modules
COPY . .
