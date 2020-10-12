const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express(); 



var server = app.listen(3000, function () {
    console.log('PS Project Running on port 3000!');
});