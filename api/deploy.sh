#!/bin/bash

# ssh cms.toffeeshare.com  "mv   /var/www/cms.toffeeshare.com/public_html  rm -rf /var/www/cms.toffeeshare.com/public_html"
NODE_ENV=production npm run build
SERVER="cms.toffeeshare.com"
LOCATION="/var/www/cms.toffeeshare.com/public_html"
ssh $SERVER "mv  $LOCATION/node_modules $LOCATION/.. && mv $LOCATION/public/uploads $LOCATION/.. && rm -rf $LOCATION/*"
mv node_modules ../
scp -r ./* $SERVER:$LOCATION/.  
mv ../node_modules ./
ssh $SERVER "mv  $LOCATION/../node_modules $LOCATION && mv  $LOCATION/../uploads $LOCATION/public"
