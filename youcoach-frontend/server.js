const express = require('express');
const app = express();

app.use(express.static('./dist/youcoach'));

app.listen(process.env.PORT || 9000);
