
$(document).ready(function(){
  console.log("ready");

	$("#add-user").on("click", function() {
		console.log("click");

		var employeeName = $("#name-input").val();
		var monthlyRate = $("#monthly-rate-input").val();
		var role = $("#role-input").val();
		var startDate = $("#start-date-input").val();

		datebase.ref().push({
			"employeeName": employeeName,
			"monthlyRate": monthlyRate,
			"role": role,
			"startDate": startDate
			
		});
	});
});

