var Validator = function(){
		this.error = [];
}

Validator.prototype.validateEmail = function(email) {

		var pattern = /^[\w]{1,32}(\.[\w]{1,32}){0,3}@[\w]{1,32}\.[a-z]{2,10}$/;
		//way#1
		if(email.match(pattern) === null){
			this.error.push('Please Enter a Valid Email')
		}

		// way #2 this is to do it turnary way
		// return(email.amtch(pattern) !== null) ? true : false

		// way#3
		// if(matches[0] === email)
}

Validator.prototype.validateString = function(string,fields){
		var pattern = /^[\w\s\'\-]{1,255}$/;

		if(string.match(pattern) === null){
			this.error.push(fields +'Strings can only have letters, numbers, spaces, apostrophes and dashes')
		}
}
