function sum(num1, num2){
    return num1 + num2
}

var result = sum(10,5)
console.log(result)

function get_max(num1, num2, num3)
{
    var max = Math.max(num1, num2, num3);
    return max;
}
console.log(get_max(10,20,3));

var max = [10, 3, 2];
console.log(Math.max(...max));

var number = 36;
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

var str = " Learning this stuff is neato!"
console.log(str.slice(14));

var sum = 0;
var count = 6;
Fibnum = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
for (var i = 0; i < count; i++){
    sum += Fibnum[i];
}
console.log(sum);

var string = "monday night football";
    counter = {};

for (var i = 0, len = string.length; i < len; i += 1) {
    counter[string[i]] = (counter[string[i]] || 0) + 1;
}

var biggest = -1, str;
for (var key in counter) {
    if (counter[key] > biggest) {
        biggest = counter[key];
        str = key;
    }
}

console.log(str);




