/* Send SMS Object*/

function sendSMSfunction() {};

sendSMSfunction.prototype.datePickerSett = function(frmObj) {
    var date = new Date();
    var dtpicker = frmObj;
	date.setDate(date.getDate()+1);
	$("#"+dtpicker+"").datepicker({
	    startDate: date
	});
};

sendSMSfunction.prototype.mobFileupload = function(frmObj) {
	var uploadId = frmObj;
	var ext = $("#"+uploadId+"").val().split('.').pop().toLowerCase();
    if($.inArray(ext,['csv','txt','xls','xlsx']==-1)){
        alert("Invalid Extenion, It should be csv,txt,xls or xlsx");
        $("#"+uploadId+"").val("");
    }
};

sendSMSfunction.prototype.insertLink = function(frmObj) {
	if($("#link_url").val()==""){
		alert("Media URL should not be empty");
		$("#link_url").addClass("parsley-error");
		return;
	}else{
		$("#link_url").removeClass("parsley-error");
	}
	var str_link = $("#link_url").val();
	$("#media_txtmessage").append("<a href='"+str_link+"'>"+str_link+"</a>");
};

sendSMSfunction.prototype.messCount = function(frmObj) {
	var txtareaId = frmObj.txtarea;
    var msgcntId = frmObj.msgcount;
	var charstr = $("."+txtareaId+"").val();
	var strCharlength = charstr.length;
	console.log(strCharlength);
	if(strCharlength < 153){
		$("#mess_count").html("1");
	}else if(strCharlength > 153){
		$("#mess_count").html("2");
	}else if(strCharlength > 200){
		console.log("ADKSADKS");
	}
};

sendSMSfunction.prototype.gencampname = function() {
		 // return 'id-' + Math.random().toString(36).substr(2, 16);
		  //let uniqId = 'id-' + Math.random().toString(36).substr(2, 16));
		this.uniqCampID = 'Camp-id-' + Math.random().toString(36).substr(2, 16);
		//alert('id-' + Math.random().toString(36).substr(2, 16));
		return this;
};
var formObject = new sendSMSfunction();

formObject.datePickerSett("datepicker-autoclose");
//var newCampname = formObject.gencampname();
$("#file_upload").change(function(){
	formObject.mobFileupload("file_upload");
});

$("#insert_link").click(function(){
	formObject.insertLink();
});

/*$("#textarea").keyup(function(){

});*/
