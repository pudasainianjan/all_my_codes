var d = ["a", "b"];
console.log(d.toString()); //not helpful because it reeturns object
console.log(typeof d); //weird array is still object
console.log(Object.prototype.toString.call(d)); //[object Array]  better!
console.log(typeof null);

function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(typeof john);
console.log(john instanceof Person); //looks in prototype chain, if finds Person type true
console.log(typeof undefined);
console.log(typeof null); //weird bug in js
console.log(typeof function () {});
