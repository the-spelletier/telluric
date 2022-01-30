const { locationREST } = require("./rest");

module.exports.set = app => {

    app.get('/', (req, res) => {
        res.send("Welcome to the Oasis.");
    });
    
    app.get('/test', (req, res) => {
        res.send("This is not a test");
    });

    locationREST.set(app);
}