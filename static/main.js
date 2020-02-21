$(document).ready(function(){
	// The entire database should be displayed when your app starts
	// The Search button should be programmed to hit the /search endpoint along with the query string from the text box

	$("#search").click(function(){
		var find = $("#animal").val();

		var message ="Find " + find;
		alert(message);
	});
});
