const { campaignREST, userREST, powerREST } = require("./rest");

module.exports.set = app => {

    app.get('/', (req, res) => {
        res.send("Welcome to the Teluric.");
    });
    
    app.get('/test', (req, res) => {
        res.send("This is a test");
    });

    campaignREST.set(app);
    userREST.set(app);
    powerREST.set(app);
}