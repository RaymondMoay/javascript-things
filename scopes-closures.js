/**
 * This is why we don't use vars...
 * Try predicting the console.log outputs.
 * The answer is below...
 */

var greeting = "Hello Ray.";
console.log(greeting);
saySomething();
console.log(greeting);

function saySomething() {
  // functions are Value Hoisted, hence it can be referenced and called even before its supposed 'declaration / initialization';
  console.log(greeting);
  {
    {
      var greeting = "Anyeong!"; // var is not block scoped, hence it can be accessed outside of it. Undefined, pre-initialization
      // however, this is function-scoped, and will not affect the global scope var ("Helllo ray created below").
      console.log(greeting);
      for (let i = 0; i < 2; i++) {
        // for is block-scoped, not function scoped, hence it will mutate function-scoped var.
        var greeting = "What, I'm a loop!";
      }
    }
  }
  console.log(greeting);
}

/** ANSWER: ==========================================
 * Hello Ray.
 * Undefined
 * Anyeong!
 * What, I'm a loop!
 * Hello Ray.
 */
