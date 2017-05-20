
$(document).ready(function(){
  console.log("ready");


var name = $("#name-input").val();
var role = $("#role-input").val();
var startDate = $("#start-date-input").val();
var monthlyRate = $("monthly-rate-input").val();



$("#add-user").on("click", function() {
	event.preventDefault();
		console.log("click");
	
	
});


datebase.ref().push({
	name: name,
	role: role,
	startDate: startDate,
	monthlyRate: monthlyRate,


});


