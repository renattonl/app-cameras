const express = require('express');
const PORT = process.env.APP_PORT || 3000;
const app = express();

const test = () => {
  const fs = require('fs');
  const directories = fs.readdirSync( process.env.STORAGE_PATH_LOCAL );
  return directories;
}

app.get('/', (req, res) => {
  res.status(200).json({
    status: true,
    directories: test(),
  });
});

app.use((req, res) => res.status(404).json({ error: true, message: 'Page not found'}));

app.listen(PORT, () => {
  console.log(`Runnung in port: http://localhost:${PORT}`);
});

module.exports = app;