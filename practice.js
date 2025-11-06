const myobj = {
    name: "Jalal Uddin",
    age : 24,
    profession: "Web Developer",
    "myfunc": function(anameext){
        this.name = this.name + " " + anameext;
    }
}

console.log(myobj.name);
console.log(myobj.age);
console.log(myobj.profession);
console.log(myobj.myfunc("Khan"));
console.log(myobj.name);