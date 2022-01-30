
module.exports.set = app => {

    app.get('/campaign/:id', (req, res) => {
        let id = req.params.id;
        res.send({
            name: `Campaign ${id}`
        });
    });
}