const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://localhost:27017/angular-test-DB';


module.exports = async (app) => {
    try {
        mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};


