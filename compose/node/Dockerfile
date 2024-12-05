FROM keymetrics/pm2:14-alpine
WORKDIR /server
COPY ./server/* /server/ 
COPY ./static /server/static
RUN npm install --production  --registry https://registry.npmmirror.com 
CMD [ "pm2-runtime", "start", "pm2start.yml" ]
	
