//numbers
let d = 15;
console.log(typeof d);
//string
let f = "BB";
console.log(typeof f);
//length
let beauty = "Naomi";
beauty.length;
//extraction
let names ="Janet Essien";
let initials = names[0]+names[6];
console.log(initials);
//replace
let text = "I love you";
let del = "you";
let boring = text.replace(del, 'her');
console.log(boring);
//uppercase
let something = 'aebhevnujaavn';
let another = something.toUpperCase();
console.log(another);
//string to array using the split method
let pad = "Virony";
let out = pad.split('');
console.log(out);

let woman = {
    firstname: "Blessing",
    lastname: "Essien",
    age: 70,
    gadget: "Tablet",

};
console.log(woman);

woman.age=200;
woman.city="New York";

console.log(woman.city);

delete woman.gadget;
console.log(woman);

