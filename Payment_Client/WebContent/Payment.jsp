<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ page import="paymentModel.Payment" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
	<script src="Components/payment.js"></script>
	
</head>
<body>

	<div class="container"><div class="row"><div class="col-6"> 
	
	<h1>Payment Management</h1>
	<form id="formItem" name="formItem">
 		 Card number: 
 		 <input id="cardNumber" name="cardNumber" type="text" 
 				class="form-control form-control-sm">
 				
 		 <br> Date: 
		 <input id="date" name="date" type="text" 
		 		class="form-control form-control-sm">
		 		
		 <br> CVV: 
		 <input id="cvv" name="cvv" type="text" 
		 		class="form-control form-control-sm">
		 		
		 <br> Name: 
		 <input id="name" name="name" type="text" 
		 		class="form-control form-control-sm">
		 
		 <br> Address: 
		 <input id="address" name="address" type="text" 
		 		class="form-control form-control-sm">
		 		
		 <br> City: 
		 <input id="city" name="city" type="text" 
		 		class="form-control form-control-sm">
		 		
		 <br> Postal code: 
		 <input id="postalCode" name="postalCode" type="text" 
		 		class="form-control form-control-sm">
		 		
		 <br> Phone: 
		 <input id="phone" name="phone" type="text" 
		 		class="form-control form-control-sm">
		 		
		 <br> Email: 
		 <input id="email" name="email" type="text" 
		 		class="form-control form-control-sm">
		 		
		 <br>
		 <input id="btnSave" name="btnSave" type="button" value="Save" 
		 		class="btn btn-primary">
		 <input type="hidden" id="hidItemIDSave" 
		 		name="hidItemIDSave" value="">
	</form>
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	<br>
	<div id="divItemsGrid">
		 <%
			 Payment payObj = new Payment(); 
			 out.print(payObj.getPay()); 
		 %>
	</div>
</div> </div> </div>

</body>
</html>