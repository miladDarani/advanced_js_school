
// All classes (constructors in Javascript) should be
// in their own file, named after the class (constructor)
// 
// It is a convention in Object Oriented Programming,
// that classes begin with an uppercase-letter.
//
// The class name (constructor name) should match the
// file name

// Constructor function for Calculator object
var Calculator = function()
{
	// Running total of all calculations
	this.total = 0;

	// String list of all operations
	this.tape = '';

}

/**
 * Add a number
 * @param {Number} num to be added to total
 * @return {Calculator}
 */
Calculator.prototype.add = function(num) {
	this.total += num;
	// By return 'this', which is the calculator,
	// we can chain methods onto it.
	this.tape += "+ " + num + "<br />"
	return this;
}

/**
 * Subtract a number
 * @param  {Number} num to be subtracted
 * @return Calculator 
 */
Calculator.prototype.subtract = function(num) {
	this.total -= num;
	this.tape += "- " + num + "<br />"
	return this;
}

/**
 * Multiply by a number
 * @param  {Number} num the number to multiply by
 * @return Calculator 
 */
Calculator.prototype.multiply = function(num) {
	this.total *= num;
	this.tape += "* " + num + "<br />"
	return this;
}

/**
 * Divide by a number
 * @param  Number num to divide by
 * @return Calculator
 */
Calculator.prototype.divide = function(num) {
	this.total /= num;
	this.tape += "/ " + num + "<br />"
	return this;
}


/**
 * Get the running total
 * @return {Number} Total of all calculations
 */
Calculator.prototype.getTotal = function() {
	return this.total;
}

/**
 * Get the tape
 * @return String tape
 */
Calculator.prototype.getTape = function() {
	return this.tape;
}



