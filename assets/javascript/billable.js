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

		var employeeNames = newPost.employeeName;
		var monthlyRates = newPost.monthlyRate;
		var roles = newPost.role;
		var startDates = newPost.startDate;

		var names_td = $("<td>").text(employeeNames);
		var monthlyRates_td = $("<td>").text(monthlyRates);
		var roles_td = $("<td>").text(roles);
		var startDates_td = $("<td>").text(startDates);

		var employees_tr = $("<tr>").append(names_td)
									.append(monthlyRates_td)
									.append(roles_td)
									.append(startDates_td);

		$("#employees > tbody").append(employees_tr);
});



