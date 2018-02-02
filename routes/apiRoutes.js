var tableData = require("../data/tableData.js");

var waitinglistData = require("../data/waitinglistData.js");



module.exports = function(app) {
    app.get("/api/:option?", function(req, res) {
        switch (req.params.option) {
            case "tables":
                return res.json(tableData);

            case "waiting":
                return res.json(waitinglistData);

            default:
                return res.end("Not Found");


        }
    });

    app.post("/api/new", function(req, res) {
        var newReservation = req.body;

        console.log(newReservation);

        if (tableData.length < 5) {
            tableData.push(newReservation);

            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                success: true
            }));
        } else {
            waitinglistData.push(newReservation);

            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                success: false
            }));
        }
    });

    app.post("/api/clear", function(req, res) {
        tableData = [];
        waitinglistData = [];

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
            success: true
        }));

    })
}