'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

var fecha = new Date();

app.get('/fecha', (req, res) => {
	res.send({ fecha: fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear() ,
				hora: fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()}) 
})

var fibonacci_series = fibonacci(100);
var serie = fibonacci_series.toString();


app.get('/fib', (req, res) => {
	res.send({serie})
})

app.listen(port, () => {
	console.log(`API rest corriendo en http//localhost:${port}`)
})


function fibonacci (n)
{

  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};