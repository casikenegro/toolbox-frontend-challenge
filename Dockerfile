# set node version
FROM node:14.20.0
# set working directory
WORKDIR usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL="https://toolbox-server-test.onrender.com"

# copy these files from the host into the image
COPY yarn.lock ./
COPY package.json ./

# run the command to install dependencies
RUN yarn

# copy the rest of the app's source code from the host to the image filesystem
COPY . .

# make the app available on port 3000
EXPOSE 3000

# start the app within the container:
CMD ["npm", "start"]