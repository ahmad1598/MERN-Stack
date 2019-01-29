let Person = {
    name : "John",
    age: 25,
    friends: ["Bob" , "Steve" , "Nate" , "Autin"],
    address = {
        country: "United States",
        state: "UT",
        city: "Salt Lake City",
        street: "State Street",
        zipCode: 84101
    },
    wakeUpTime = function(){
        return this.name + "wakes up at 7:30 AM"
    },
    hobbies: {
        traveling: {
            US:["Seattle","LA","Austin","New York","San Fransisco"],
            europe:["Italy","German","France","Finland"],
            Asia:["China","Japan","Korea","Australia"]
        },
        eating:["Mexican Food" , "Persian Food","Tai Food"],
        coding:["HTML","CSS","JacaScript","React","MongoDB"]
    },
    expenses: {
        house:{
            rent: ["rent","food","bills","HOA"],
            own: ["payment","food","bills","insurance","Other"]
        },
        Car:["gas","insurance","tires","car wash","Other"]
    }
  }