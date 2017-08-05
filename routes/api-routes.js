// Dependencies
// =============================================================

// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
        var burgerObject = {
            burger:data
        };
        res.render("index", burgerObject);
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/", function(req, res) {
    db.burgers.create(req.body).then(function(data) {
        res.redirect("/");
    });
  });

  // PUT route for updating burgers. The updated todo will be available in req.body
  app.put("/", function(req, res) {
    db.burgers.update({
        devoured: true
    },
    {
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.redirect("/");
    });
  });

  // DELETE route for deleting burgers. You can access the burgers's id in req.params.id
  app.delete("/:id", function(req, res) {
    db.burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.redirect("/");
    });
  });

};