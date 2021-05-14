$(document).ready(function()
{ 
	if ($("#alertSuccess").text().trim() == "") 
	{ 
		$("#alertSuccess").hide(); 
	} 
	$("#alertError").hide(); 
}); 

//SAVE
$(document).on("click", "#btnSave", function(event)
{ 
	// Clear alerts---------------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide();
 
	// Form validation-------------------
	var status = validatePayForm(); 
	if (status != true) 
	{ 
		$("#alertError").text(status); 
		$("#alertError").show(); 
		return; 
 	} 

	// If valid------------------------
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
	 $.ajax( 
	 { 
	 url : "PaymentAPI", 
	 type : type, 
	 data : $("#formItem").serialize(), 
	 dataType : "text", 
	 complete : function(response, status) 
	 { 
	 	onPaySaveComplete(response.responseText, status); 
	 } 
 }); 
});

function onPaySaveComplete(response, status)
{ 
	if (status == "success") 
	{ 
		 var resultSet = JSON.parse(response); 
		 if (resultSet.status.trim() == "success") 
		 { 
		 $("#alertSuccess").text("Successfully saved."); 
		 $("#alertSuccess").show(); 
		 $("#divItemsGrid").html(resultSet.data); 
		 } else if (resultSet.status.trim() == "error") 
		 { 
		 $("#alertError").text(resultSet.data); 
		 $("#alertError").show(); 
		 } 
		 } else if (status == "error") 
		 { 
		 $("#alertError").text("Error while saving."); 
		 $("#alertError").show(); 
		 } else
		 { 
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
		 } 
		 $("#hidItemIDSave").val(""); 
		 $("#formItem")[0].reset(); 
	}

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{ 
	 $("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val()); 
	 $("#cardNumber").val($(this).closest("tr").find('td:eq(0)').text()); 
	 $("#date").val($(this).closest("tr").find('td:eq(1)').text()); 
	 $("#cvv").val($(this).closest("tr").find('td:eq(2)').text()); 
	 $("#name").val($(this).closest("tr").find('td:eq(3)').text()); 
	 $("#address").val($(this).closest("tr").find('td:eq(4)').text()); 
	 $("#city").val($(this).closest("tr").find('td:eq(5)').text()); 
	 $("#postalCode").val($(this).closest("tr").find('td:eq(6)').text()); 
	 $("#phone").val($(this).closest("tr").find('td:eq(7)').text()); 
	 $("#email").val($(this).closest("tr").find('td:eq(8)').text()); 
});

// CLIENT-MODEL================================================================
function validatePayForm() 
{ 
	// CARD NUMBER
	if ($("#cardNumber").val().trim() == "") 
	{ 
	 	return "Insert card number."; 
	} 
	// DATE
	if ($("#date").val().trim() == "") 
	{ 
	 	return "Insert date."; 
	}
	// CVV-------------------------------
	if ($("#cvv").val().trim() == "") 
	{ 
	 	return "Insert cvv."; 
	} 
	// NAME------------------------
	if ($("#name").val().trim() == "") 
	{ 
	 	return "Insert name."; 
	} 
	// ADDRESS------------------------
	if ($("#address").val().trim() == "") 
	{ 
	 	return "Insert address."; 
	}
	// CITY------------------------
	if ($("#city").val().trim() == "") 
	{ 
	 	return "Insert city."; 
	}
	// POSTAL CODE------------------------
	if ($("#postalCode").val().trim() == "") 
	{ 
	 	return "Insert postal code."; 
	}
	// PHONE------------------------
	if ($("#phone").val().trim() == "") 
	{ 
	 	return "Insert phone."; 
	}
	// EMAIL------------------------
	if ($("#email").val().trim() == "") 
	{ 
	 	return "Insert email."; 
	}
	return true;
}

$(document).on("click", ".btnRemove", function(event)
{ 
	 $.ajax( 
	 { 
		 url : "PaymentAPI", 
		 type : "DELETE", 
		 data : "id=" + $(this).data("id"),
		 dataType : "text", 
	 complete : function(response, status) 
	 { 
	 	onUserDeleteComplete(response.responseText, status); 
	 } 
 }); 
});

function onUserDeleteComplete(response, status)
{ 
if (status == "success") 
	 { 
	 var resultSet = JSON.parse(response); 
	 if (resultSet.status.trim() == "success") 
	 { 
	 $("#alertSuccess").text("Successfully deleted."); 
	 $("#alertSuccess").show(); 
	 $("#divItemsGrid").html(resultSet.data); 
	 } else if (resultSet.status.trim() == "error") 
	 { 
	 $("#alertError").text(resultSet.data); 
	 $("#alertError").show(); 
	 } 
	 } else if (status == "error") 
	 { 
	 $("#alertError").text("Error while deleting."); 
	 $("#alertError").show(); 
	 } else
	 { 
	 $("#alertError").text("Unknown error while deleting.."); 
	 $("#alertError").show(); 
	 } 
}