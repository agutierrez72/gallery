$(document).ready(function(){
	// The entire database should be displayed when your app starts
	// The Search button should be programmed to hit the /search endpoint along with the query string from the text box

	$("#animal").keyup(function(event){
        if(event.keyCode === 13){
            $("#search").click();
        }
    });


	$("#search").click(function(){
		var find = $("#animal").val();
		

		console.log(find);
		//alert(find);


		$.get("/search", {q:find}, function(response){
			var data = JSON.parse(response);
			var htmlCode= "";
			console.log(response);

			console.log(data);

			console.log(data["animals"]);

			if(data["animal"]== "Not Found"){
				$("#area").html("Not Found");
	
				console.log("hi");
				return;
			
			}

			for(var i in data){
				htmlCode +="<div class='row'>";
				var theList = data[i];	
				for(var j in theList){
					htmlCode += "<div class='col'><img style='width:200px' src='images/" + theList[j] +"'></div>";
					console.log(theList[j]);
				}
				htmlCode += "</div>"
				
			$("#area").html(htmlCode);
			}
			console.log(htmlCode);
		});
	});
});
