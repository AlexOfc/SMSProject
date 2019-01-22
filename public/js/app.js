/*
 Template Name: Network91 - Bootstrap 4 Admin Dashboard
 Author: Hacky
 File: Main js
 */



!function($) {
    "use strict";

    var MainApp = function() {};

    MainApp.prototype.initNavbar = function () {

        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.navigation-menu>li').slice(-1).addClass('last-elements');

        $('.navigation-menu li.has-submenu a[href="#"]').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    },
    MainApp.prototype.initLoader = function () {
        $(window).load(function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    },
    MainApp.prototype.initScrollbar = function () {
        $('.slimscroll-noti').slimScroll({
            height: '230px',
            position: 'right',
            size: "5px",
            color: '#98a6ad',
            wheelStep: 10
        });
    }
    // === fo,llowing js will activate the menu in left side bar based on url ====
    MainApp.prototype.initMenuItem = function () {
        $(".navigation-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) { 
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
            }
        });
    },
    MainApp.prototype.initComponents = function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    },
    MainApp.prototype.initToggleSearch = function () {
        $('.toggle-search').on('click', function () {
            var targetId = $(this).data('target');
            var $searchBar;
            if (targetId) {
                $searchBar = $(targetId);
                $searchBar.toggleClass('open');
            }
        });
    },

    MainApp.prototype.init = function () {
        this.initNavbar();
        this.initLoader();
        this.initScrollbar();
        this.initMenuItem();
        this.initComponents();
        this.initToggleSearch();
    },

    //init
    $.MainApp = new MainApp, $.MainApp.Constructor = MainApp
}(window.jQuery),

//initializing
function ($) {
    "use strict";
    $.MainApp.init();
    $('#quick_sms_page').click(function(event) {
        $.ajax({url: "send_sms/quick_sms", success: function(result){ 
                $("#main_page_content").html(result);
            }
        });
    });
    $('#bulk_sms_page').click(function(event) {
        $.ajax({url: "send_sms/bulk_sms", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#group_sms_page').click(function(event) {
        $.ajax({url: "send_sms/group_sms", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#customised_sms_page').click(function(event) {
        $.ajax({url: "send_sms/customised_sms", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#media_sms_page').click(function(event) {
        $.ajax({url: "send_sms/media_sms", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#add_group_page').click(function(event) {
        $.ajax({url: "pages/add_group", success: function(result){
                $("#main_page_content").html(result);
            } 
        });
    });

    $('#add_contacts_page').click(function(event) {
        $.ajax({url: "pages/add_contacts", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#add_templates_page').click(function(event) {
        $.ajax({url: "pages/add_templates", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#manage_templates_page').click(function(event) {
        $.ajax({url: "pages/manage_templates", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#add_sender_id_page').click(function(event) {
        $.ajax({url: "pages/add_senderid", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#manage_sender_id_page').click(function(event) {
        $.ajax({url: "pages/manage_senderid", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#transactions_page').click(function(event) {
        $.ajax({url: "pages/transactions", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#add_keywords_page').click(function(event) {
        $.ajax({url: "pages/add_keywords", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#manage_keywords_page').click(function(event) {
        $.ajax({url: "pages/manage_keywords", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#keyword_reports_page').click(function(event) {
        $.ajax({url: "pages/keyword_reports", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#camp_dashboard').click(function(event) {
        $.ajax({url: "pages/campaign_dashboard", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#sched_campaign').click(function(event) {
        $.ajax({url: "pages/scheduled_campaign", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

    $('#mis_stats').click(function(event) {
        $.ajax({url: "pages/mis_statisctics", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#deli_reports').click(function(event) {
        $.ajax({url: "pages/delivery_reports", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#manage_cust').click(function(event) {
        $.ajax({url: "pages/manage_customers", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#manage_account').click(function(event) {
        $.ajax({url: "pages/manage_accounts", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#create_route').click(function(event) {
        $.ajax({url: "pages/create_route", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });
    $('#create_rule').click(function(event) {
        $.ajax({url: "pages/create_rule", success: function(result){
                $("#main_page_content").html(result);
            }
        });
    });

}(window.jQuery);



//Disable cut copy paste
/*$('body').bind('cut copy paste', function (e) {
    e.preventDefault();
});*/

//Disable mouse right click
/*$("body").on("contextmenu",function(e){
    return false;
});*/
/*document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        alert('This is not allowed');
        return false;
    } else {
        return true;
    }
};*/

/*$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});

var isCtrl = !1;
document.onkeyup = function(a) {
   17 == a.which && (isCtrl = !1)
}, document.onkeydown = function(a) {
   if (17 == a.which && (isCtrl = !0), 85 == a.which || 67 == a.which && 1 == isCtrl) return !1
};*/