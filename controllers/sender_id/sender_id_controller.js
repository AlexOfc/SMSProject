exports.add_senderid = function(req, res) {
    res.render('pages/add_senderid',{title : "Add SenderID"});
};
exports.manage_senderid = function(req, res) {
    res.render('pages/manage_senderid',{title : "Manage SenderID"});
};