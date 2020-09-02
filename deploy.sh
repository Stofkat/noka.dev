SERVER="stofkat@noka.dev"
LOCATION="/var/www/noka.dev"
# cd api
# NODE_ENV=production npm run build
# ssh $SERVER "mv  $LOCATION/api/node_modules $LOCATION/.. && mv $LOCATION/api/public/uploads $LOCATION/api/.. && rm -rf $LOCATION/api/*"
# mv node_modules ../
# scp -r ./* $SERVER:$LOCATION/api  
# mv ../node_modules ./
# ssh $SERVER "mv  $LOCATION/api/../node_modules $LOCATION && mv  $LOCATION/api/../uploads $LOCATION/api/public"

cd app
npm run build
scp -r build/* $SERVER:$LOCATION/app 
