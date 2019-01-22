// Display detail page for a Daskboard
exports.index = function(req, res) {
    if(req.body.access_level == '0') {
        res.render('pages/index',{title : "Dashboard",access : "super_admin"});
    } else {
        res.render('pages/user',{title : "Dashboard",access : "user"});
    }
    
};

exports.test = function(req, res) {
    res.render('pages/dashboard');
};

exports.test1 = function(req, res) {
    res.render('pages/dashboard1');
};