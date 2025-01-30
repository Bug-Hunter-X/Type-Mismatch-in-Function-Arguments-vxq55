function add(a: number, b: number): number {
  return a + b;
}

function add(a: string, b: string): string {
  return a + b; 
}

let result1 = add(5, 3); // Correct: result1 will be 8
let result2 = add("hello", "world"); //Correct: result2 will be "helloworld"

//let result3 = add("hello", 5); // Error: Argument of type 'string' is not assignable to parameter of type 'number'. 