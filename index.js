var express = require('express'),
cors = require('cors'),
app = express(),
morgan = require('morgan'),
bodyParser = require('body-parser'),
logger = require('./config/winston'),
apiRouter = require('./routes/api');

app.use(morgan('dev', { "stream": logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.send('So Came onto me..')
});

app.listen(8080, () => {
    console.log('http://localhost:8080')
})