const mongoose = require('mongoose');
//const URL = "mongodb+srv://kerensht:3qHs4wYm4JJsY4AW@cluster0.a29ph.mongodb.net/messages-project?retryWrites=true&w=majority"


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});