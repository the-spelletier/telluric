
module.exports.set = app => {

    app.get('/location/:locationId', (req, res) => {
        let locationId = req.params.locationId;
        res.send({
            name: `location ${locationId}`
        });
    });
}