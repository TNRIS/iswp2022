FROM node:8

#Debian repositories were moved.
RUN sed -i -e 's/deb.debian.org/archive.debian.org/g' \
           -e 's|security.debian.org|archive.debian.org/|g' \
           -e '/stretch-updates/d' /etc/apt/sources.list

# update debian
RUN apt-get update

# set NODE_ENV to staging
ENV NODE_ENV production

# install babel
RUN npm install \
    babel-cli \
    babel-preset-env \
    babel-preset-es2015 \
    babel-preset-react \
    babel-plugin-transform-class-properties

# chdir into /usr/src/iswp2022
WORKDIR /usr/src/iswp2022

# copy app build dir to image
ADD src/ .

# install dependencies
RUN npm install

# run webpack
RUN npm run webpack

# set default container command
ENTRYPOINT ["npm", "run", "start"]
