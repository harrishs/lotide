const assertEqual = require('../assertEqual');
const tail = require("../tail");
assertEqual(tail([1,2,2]),[2,2]);