
module.exports.set = app => {

    app.get('/user/:id', (req, res) => {
        let id = req.params.id;
        res.send({
            name: `User ${id}`
        });
    });
}