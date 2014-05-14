var Addition = function() {
    var globalSum = 0;

    this.add = function() {
        var result = 0;

        if(arguments.length > 1) {
            var i;

            for(i = 0; i < arguments.length; i++) {
                result += arguments[i];
            }
        } else if(arguments.length === 1) {
            globalSum += arguments[0];
            result = globalSum;
        } else {
            result = globalSum;
        }

        return result;
    }

    this.reset = function() {
        globalSum = 0;
    }
}

function run() {
    var adder = new Addition();
    console.log("Adding 2 numbers: 2 + 4");
    console.log(adder.add(2, 4));
    console.log("Adding 5 numbers: 1, 2, 3, 4, 5");
    console.log(adder.add(1, 2, 3, 4, 5));
    console.log("Adding lonely 1");
    console.log(adder.add(1));
    console.log("Adding lonely 1");
    console.log(adder.add(1));
    console.log("Adding lonely 1");
    console.log(adder.add(1));
    console.log("Adding lonely 1");
    console.log(adder.add(1));
    console.log("Adding lonely 1");
    console.log(adder.add(1));
    console.log("Adding lonely 1");
    console.log(adder.add(1));
}

console.log('type run()');


