const app= require('./App');
const port = process.env.RUNNING_PORT || 8080;


// port listen
app.listen(port,()=>{
    console.log('Server is running on port '+port);
})