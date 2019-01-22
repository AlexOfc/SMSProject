exports.create_route = function(req, res) {
    res.render('pages/create_route',{title : "Create Route"});
};
exports.create_rule = function(req, res) {
    res.render('pages/create_rule',{title : "Create Rule"});
};