const express = require('express');
const app = express();
const {PORT} = require('./config/server-config');
const apiRoutes = require('./routes')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING at ${PORT}` );
})