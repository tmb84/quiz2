
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js">
</script>

<script type = "text/javascript">
     $(function(){
	     $("input[type = submit], a, button").button();
	 })
     function request(){
     var xhttp = new XMLHttpRequest();
     xttp.open("GET", "http://www.mattbowytz.com/simple_api.json",true);
     xttp.send();

 }

     $(function(){
	     // This is where you will write your function for the programming challenge
	     // Do not commit console.log statements
	     // Use ajax to reach the api endpoint
	     // Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	     $mouseover = $('.mouseover');
	     $click     = $('.click');
	     $sub       = $('.submit');



	     $(".mouse-over").mouseover(function() {
		     
		     $(this).html('Scrooge McDuck!');
		     $(this).height($(this).height() + 50);
		 });

	     $("click.click").click(function() {
		     $(this).hmtl('Peace Out!')
			 $(this).fadeout(1500);
		     return false;
		 })

		 $(".submit").on('submit', function(e) {
			 e.preventDefault();
			 if ($(this).find('input[type="text"]').val() !== '') {
			     $(this).find('input').foreach(function() {
				     $(this).fadeout('slow');
				 });
			     $(this).appendwith("<h2>Congratulations! You've entered some text!</h2>");
			 }
		     });
	     $(document).on(ready, function() {
		     setTimeout({
			     $timeout.fadeIn('slow');
			 }, 1000);
		 });
	 })

	 

</script>
</head>
<body>
	 <button> Get title</button>

</body>
</html>