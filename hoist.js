// #1 Prediction - undefined because variable not declared before console log
console.log(hello);                                   
var hello = 'world';                                 
// Interpreter:
var hello;
console.log(hello);
var hello = 'world';



// #2 Prediction - 'magnet'
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// Interpreter:
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}



// #3 Prediction - 'only okay only okay'
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Interpreter:
function print(){
    brendan = 'only okay';
    console.log(brendan)
}
var brendan ;
brendan = 'super cool';
print();
console.log(brendan);



// #4 Prediction: chicken, half-chicken
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Interpreter:
var food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();



// #5 Prediction: chicken, fish, fish, fish, error for mean (not a function)
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// Interpreter:
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);



// #6 Prediction: undefined, rock, r&b, disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// Interpreter:
console.log(genre);
var genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);



// #7 Prediction: 'san jose' 'undefined 'seattle' 'burbank' 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// Interpreter:
dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);



// #8 Prediction: Chicago 65, error because dojo is a constant
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// Interpreter:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));