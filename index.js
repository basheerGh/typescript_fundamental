// 1 - ts is dynmaic static languges which has own compiler
// 2 - ts could catching error on compiler time 
// 3- to create tsconfig.json => tsc --init
// 4- watch result by => tsc name-of-file --watch
// TypsScript types
// boolean
var isCool = true;
// number
var age = 56;
//string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old";
//array
var pets = ['cat', 'dog', 'cow'];
var pets2 = ['cat', 'dog', 'cow'];
//object
var wizard = {
    a: 'john'
};
//null & undfiend
var meh = undefined;
var noo = null;
//tuple
var basket;
basket = ['basketball', 5];
//enum
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["mediun"] = 3] = "mediun";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
var sizeName = size[2];
//any => be carfull when use it 
var whatever = "nooooooooooooooooo!!!!";
//void => use with function when fuc return nothing
var sing = function () {
    console.log('lalalala');
};
//never
var error = function () {
    throw Error('oops');
};
var fightrobotsArmy = function (robots) {
    console.log('Fight!');
};
fightrobotsArmy({ count: 1, type: 'defender', magic: 'water spilting from roof' });
var dog = {};
dog.type;
//function
var fightrobotsArmy3 = function (robots) {
    console.log('Fight!');
};
var fightrobotsArmy4 = function (robots) {
    return 5;
};
//class 
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalala'; // this is should be private variable
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return 'hello';
    };
    return Animal;
}());
var lion = new Animal('Raaawwer');
lion.greet();
// union
var confused = "hello";
