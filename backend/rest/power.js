
module.exports.set = app => {

    const basePath = '/power'

    app.get(`${basePath}/get/:id`, (req, res) => {
        let id = req.params.id;
        res.send({
            name: `Power ${id}`
        });
    });

    app.get(`${basePath}/getlist`, (req, res) => {
        res.send({
            name: `Power(s)`
        });
    });

    app.put(`${basePath}/create`, (req, res) => {
        // Creation logic
        let power = req.body;
        res.send(power);
    });

    app.post(`${basePath}/update`, (req, res) => {
        // Update logic
        let power = req.body;

        if (power && power.id) {
            res.send(power);
        }
        else {
            res.send("Id required for update");
        }
    });

    app.delete(`${basePath}/delete/:id`, (req, res) => {
        let id = req.params.id;
        // Delete logic
        res.send(`Deleted ${id}`);
    });
}