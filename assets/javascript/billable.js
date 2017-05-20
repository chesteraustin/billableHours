var database = firebase.database();

$(document).ready(function(){
  console.log("ready");

	$("#add-user").on("click", function() {
		console.log("click");

		event.preventDefault();

		var employeeName = $("#name-input").val();
		var monthlyRate = $("#monthly-rate-input").val();
		var role = $("#role-input").val();
		var startDate = $("#start-date-input").val();

		database.ref().push({
			"employeeName": employeeName,
			"monthlyRate": monthlyRate,
			"role": role,
			"startDate": startDate
			
		});
	});
});

database.ref().on("child_added", function(snapshot, prevChildKey){
		var newPost = snapshot.val();
		console.log ("Name: " + newPost.employeeName);
		console.log ("Monthly Rate: " + newPost.monthlyRate);
		console.log ("Role: " + newPost.role);
		console.log ("Start Date: " + newPost.startDate);

});




