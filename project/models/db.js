const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pethuvignesh:5UqVHHLlZJ9JVEOy@cluster0.9hylf.mongodb.net/EmployeeDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');



//mongodb://localhost:27017/EmployeeDB