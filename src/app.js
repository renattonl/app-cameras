const express = require('express');
const PORT = process.env.APP_PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: true,
  });
});

app.listen(PORT, () => {
  console.log(`Runnung in port: http://localhost:${PORT}`);
});

module.exports = app;