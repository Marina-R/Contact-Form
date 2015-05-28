$(document).ready(start);

function start () {
	var $btn = $('button');
	var $name = $('#name');
	var $email = $('#email');
	var $web = $('#website');
	var $msg = $('#message');

	$btn.mouseover(function () {
		$btn.css('transition', 'background-color 0.5s ease');
		$btn.css('background-color', '#88C470');
		setTimeout(function() {
			$btn.css('background-color', 'black');	
		}, 500);
	});

	$btn.click(submitForm);

	function submitForm (e) {
		e.preventDefault();
		if (validate() == true) {
			var success = 'Thanks for contacting us ' + $name.val() +' . We have recieved your message and will be in touch with you shortly.'
			$('#main').css('height', '100px');
			$('#main').css('padding', '80px 30px');
			$('#main').html(success);
		}
		
		function validate () {
			var validationResult = true;
			validationResult = validateElement('#nameDiv', validator.isAlpha, $name, 'Name cannot be left empty');
			validationResult = validateElement('#emailDiv', validator.isEmail, $email, 'Email must have contain an "@"');
			validationResult = validateElement('#webDiv', isWebLink, $web, 'Website must start with http://');
			validationResult = validateElement('#msgDiv', validator.isAlpha, $msg, 'Message cannot be left empty');
			
			return validationResult;
			
			function isWebLink (value) {
				return validator.contains(value, 'http://');
			}

			function validateElement (elementId, validationFunc, element, errorMessage) {
				var validationResult = true;
				if (!validationFunc(element.val())) {
					$(elementId).html(errorMessage);
					element.css('border-left', '3px solid red');
					validationResult = false;
				} 
				else $(elementId).html('');
				return validationResult;
			}
		}
	}
}