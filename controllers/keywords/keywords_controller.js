exports.add_keywords = function(req, res) {
    res.render('pages/add_keywords',{title : "Add Keywords"});
};
exports.manage_keywords = function(req, res) {
    res.render('pages/manage_keywords',{title : "Manage Keywords"});
};
exports.keywords_reports= function(req, res) {
    res.render('pages/keyword_reports',{title : "Keyword Reports"});
};