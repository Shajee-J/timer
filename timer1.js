// arg will store values parsed from cmd line
const arg = process.argv.slice(2);


const x = (num) => {
  // loop will run per each value set in array
  for (let i = 0; i <= num.length; i++) {
    // will iterate over array values
    for (let val of num)
      // will compare array values against condtions, and will only activate setTimeout if requirements are met
      if (val >= 0 && val !== isNaN) {
        setTimeout(() => {
          // will play system sound
          process.stdout.write('\x07');
          // will mutiply the Timeout (set at 1000ms or 1sec) setting by the current val being iterated over
        }, val * 1000);
      }
  }
};

// will call functiona and pass in arg value after sorting values in the array
x(arg.sort());

// will provide additional information
console.log(arg.sort());
console.log(arg.length);


// note: if values passed into the array from the arg variable are with-in 1+/- only one system sound will play. this was tested on Windows computer running WSL2.