const Mongoose = require('mongoose');

const connect = () => {
   return Mongoose.connect('mongodb://localhost:27017/DB2');   
}


connect()
.then(async connection => {
   console.log('DB2 is up');
})
.catch(err => console.log(err));