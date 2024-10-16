const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/peakyblinders').then(() => {
        console.log("connection sucessfull")
    }).catch((err) => {
        console.log(err)
    });

  }

  main()