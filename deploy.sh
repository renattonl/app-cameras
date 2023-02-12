git pull origin main
pm2 restart app-cameras --update-env

# pm2 start ./src/index.js --name app-cameras