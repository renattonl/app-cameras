git pull origin main
pm2 restart app-cameras1 --update-env

# pm2 start ./src/index.js --name app-cameras