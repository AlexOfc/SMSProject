// Display detail page for Quick SMS.
exports.quick_sms = function(req, res) {
    res.render('pages/quick_sms',{title : "Quick SMS"});
};
exports.bulk_sms = function(req, res) {
    res.render('pages/bulk_sms',{title : "Bulk SMS"});
};
exports.group_sms = function(req, res) {
    res.render('pages/group_sms',{title : "Group SMS"});
};
exports.customised_sms = function(req, res) {
    res.render('pages/customised_sms',{title : "Customized SMS"});
};
exports.media_sms = function(req, res) {
    res.render('pages/media_sms',{title : "Media SMS"});
}; 