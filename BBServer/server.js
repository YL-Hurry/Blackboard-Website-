let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/blackboard', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let initApp = require('./api/app');
initApp(app);

let Users = require('./api/routes/Users-route');

app.use('/users', Users);

app.listen(port);
console.log('BlackBoard start on ' + port);
