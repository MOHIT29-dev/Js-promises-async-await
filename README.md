# JavaScript Promises & Async/Await

## Overview
This repository explains the basics of asynchronous programming in JavaScript using Promises and async/await.  
It uses a simple delay function with setTimeout to demonstrate how JavaScript handles operations that take time.

## Purpose
- Understand what Promises are
- Learn async/await syntax
- Practice asynchronous execution flow
- Write clean and readable async code

## Example
```js
function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done after 2 seconds");
    }, 2000);
  });
}

async function run() {
  const msg = await delay();
  console.log(msg);
}

run();
