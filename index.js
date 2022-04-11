const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});

app.use(express.static('public'));