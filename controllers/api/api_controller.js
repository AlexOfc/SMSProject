exports.http = function(req, res) {
    res.render('pages/http',{title : "HTTP"});
};
exports.xml = function(req, res) {
    res.render('pages/xml',{title : "XML"});
};
exports.json = function(req, res) {
    res.render('pages/json',{title : "JSON"});
};
exports.smpp = function(req, res) {
    res.render('pages/smpp',{title : "SMPP"});
};
exports.xl_plugin = function(req, res) {
    res.render('pages/xl_plugin',{title : "XL Plugin"});
};