# Type Mismatch in Function Arguments

This repository demonstrates a common TypeScript error: type mismatch in function arguments. The TypeScript compiler prevents runtime errors by catching type mismatches during compilation.

## Bug

The function `add` is designed to accept two numbers as input and return their sum. However, the example code attempts to pass a string as the first argument, which causes a type error.

## Solution

The solution involves ensuring that the types of the function arguments match the types of the values being passed.  In this case, it is required to only pass numerical values to the `add` function or to create an overloaded function that can handle other data types like strings.