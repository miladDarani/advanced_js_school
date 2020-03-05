// all classes or constructorsin JS , should be in their own file , named after the class (constructor)
// the class name (constructor name) should math the filename
// this is the contrcutor
var Calc = function () {
    this.total = 0;
    this.tape ='';
}

Calc.prototype.add= function(num){
    this.total += num;
    this.tape+= '+' + num + "<br />"
    return this;
}
Calc.prototype.minus= function(num){
    this.total -= num;
    return this;
}
Calc.prototype.subtract= function(num){
    this.total /= num;
    return this;
}
Calc.prototype.multiply= function(num){``
    this.total *= num;
    return this;
}
Calc.prototype.getTotal =function () {
    return this.total;

}
Calc.prototype.getTape = function()
{
    return this.tape
}