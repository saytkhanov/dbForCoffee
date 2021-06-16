const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/index')
const router = require('./routes/index')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(router)

const start = async () => {
  try {
    await mongoose.connect(config.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    app.listen(config.port, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log('Произошла ошибка при соединении...')
  }
}

start()