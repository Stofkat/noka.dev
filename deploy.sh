echo Building front-end source
cd app
npm run build
cd ..
echo Copying front-end
rsync -av -e ssh  ./app/build/ stofkat@noka.dev:/var/www/noka.dev/app
echo Copying backed-end
rsync -av -e ssh --exclude='node_modules' --exclude '.cache' --exclude 'docker-compose.yml' --exclude 'build'  --exclude 'public/uploads/' ./api/ stofkat@noka.dev:/var/www/noka.dev/api
