exports.campaigndashboard = function(req, res) {
    res.render('pages/campaign_dashboard',{title : "Campaign Dashboard"});
};
exports.scheduledcampaign = function(req, res) {
    res.render('pages/scheduled_campaign',{title : "Scheduled Campaign"});
};
exports.misstatisctic = function(req, res) {
    res.render('pages/mis_statisctics',{title : "MIS Statistics"});
};
exports.deliveryreports = function(req, res) {
    res.render('pages/delivery_reports',{title : "Delivery Reports"});
};
exports.statistics = function(req, res) {
    res.render('pages/statistics',{title : "Statistics"});
};
exports.delivery_logs = function(req, res) {
    res.render('pages/delivery_logs',{title : "Delivery Logs"});
};