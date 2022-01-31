
module.exports.set = app => {

    const basePath = '/campaign'

    app.get(`${basePath}/get/:id`, (req, res) => {
        let id = req.params.id;
        res.send({
            name: `Campaign ${id}`
        });
    });

    app.get(`${basePath}/getlist/:ownerid`, (req, res) => {
        let ownerid = req.params.ownerid;
        res.send({
            name: `Campaign(s) for ${ownerid}`
        });
    });

    app.put(`${basePath}/create`, (req, res) => {
        // Creation logic
        let campaign = req.body;
        res.send(campaign);
    });

    app.post(`${basePath}/update`, (req, res) => {
        // Update logic
        let campaign = req.body;

        if (campaign && campaign["id"]) {
            res.send(campaign);
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