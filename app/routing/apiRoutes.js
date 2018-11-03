module.exports = function(app, personnel) {
    app.get("/api/people", function(req, res) {
        return res.json(personnel);
    });

    app.post("/api/people", function(req, res) {
        personnel.push(req.body);
        return res.send(`Personnel added: ${JSON.stringify(req.body)}`);
    });
};