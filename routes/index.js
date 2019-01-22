var express = require('express');
var router = express.Router();
var RedisConnections    = require('../lib/RedisConnections');
global.redis= new RedisConnections({ip : process.env.redis_ip, port : process.env.redis_port, process : 'ui', connections : ['redisClient']});
global.jwt = require('jsonwebtoken');


// Require controller modules.
var dashboard = require('../controllers/dashboard/dashboard_controller');
var send_sms = require('../controllers/send_sms/send_sms_controller');
var phonebook = require('../controllers/phonebook/phonebook_controller');
var templates = require('../controllers/templates/templates_controller');
var keywords = require('../controllers/keywords/keywords_controller');
var sender_id = require('../controllers/sender_id/sender_id_controller');
var reports = require('../controllers/reports/reports_controller');
var history = require('../controllers/history/history_controller');
var api = require('../controllers/api/api_controller');
var user_mgmt = require('../controllers/user_mgmt/user_mgmt');
var routing = require('../controllers/routing/routing');

/* GET home page. */
router.get('/',dashboard.index); 

router.get('/dashboard/test',dashboard.test);
router.get('/dashboard/test1',dashboard.test1);

router.get('/send_sms/quick_sms',send_sms.quick_sms);
router.get('/send_sms/bulk_sms',send_sms.bulk_sms); 
router.get('/send_sms/group_sms',send_sms.group_sms);
router.get('/send_sms/customised_sms',send_sms.customised_sms);
router.get('/send_sms/media_sms',send_sms.media_sms);

router.get('/pages/add_group',phonebook.add_group);
router.post('/pages/list_group',phonebook.list_group);
router.post('/pages/contactList',phonebook.contactList);
router.get('/pages/add_contacts',phonebook.add_contacts);

router.get('/pages/add_templates',templates.add_templates);
router.get('/pages/manage_templates',templates.manage_templates);

router.get('/pages/add_senderid',sender_id.add_senderid);
router.get('/pages/manage_senderid',sender_id.manage_senderid);

router.get('/pages/transactions',history.transactions);

router.get('/pages/add_keywords',keywords.add_keywords);
router.get('/pages/manage_keywords',keywords.manage_keywords);
router.get('/pages/keyword_reports',keywords.keywords_reports);

router.get('/pages/campaign_dashboard',reports.campaigndashboard);
router.get('/pages/scheduled_campaign',reports.scheduledcampaign);
router.get('/pages/mis_statisctics',reports.misstatisctic);
router.get('/pages/delivery_reports',reports.deliveryreports);

router.get('/pages/manage_customers',user_mgmt.manage_customers);
router.get('/pages/manage_accounts',user_mgmt.manage_accounts);

router.get('/pages/create_route',routing.create_route);
router.get('/pages/create_rule',routing.create_rule);


module.exports = router;