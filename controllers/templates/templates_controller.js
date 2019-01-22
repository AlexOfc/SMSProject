exports.add_templates = function(req, res) {
    res.render('pages/add_templates',{title : "Add Templates"});
};
exports.manage_templates = function(req, res) {
    res.render('pages/manage_templates',{title : "Manage Templates"});
};