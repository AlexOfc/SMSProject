exports.transactions = function(req, res) {
    res.render('pages/transactions',{title : "Transactions"});
};
exports.event_logs = function(req, res) {
    res.render('pages/event_logs',{title : "Event Logs"});
};