const express = require('express');

import React from 'react';
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/home').default;

const app = express();

app.get('/',(req,res) =>{
  const content = renderToString('<Home />');
});

app.listen(3000,() =>{
  console.log('listening on 3000');
});
