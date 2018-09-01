const a = 5;
let s = "h";
s = a;
let b = 10;
b = b + 1;
b += 1;
b++;
c = 1;
b = b + c;
let li = [1, 2, 3, 4, 5, 6, 7, 8];
li.splice(3, 3);
li.push(10, 5e12);
let ob = {
    numbers: '',
};
ob.numbers = li;
let str = li.join('; ');
let str1 = str.split(';');
str1.push(6, 6);
let str2 = str1.join('; ');
ob.newNumbers = str2;

console.log(str2);

