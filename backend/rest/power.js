
module.exports.set = app => {

    app.get('/power/:id', (req, res) => {
        let id = req.params.id;
        res.send({
            name: `Power ${id}`
        });
    });
}