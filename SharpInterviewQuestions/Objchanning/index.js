let result = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
      
    },
    multiply: function(num) {
        this.value *= num;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};

// Example of object chaining
let output = result.add(2).multiply(2).getValue();
console.log(output); // Output: 4
console.log(null === undefined)

console.log(null == undefined)

