export const javascriptQuestions = [
    // Beginner Questions
    {
      section: "Beginner",
      questions: [
        {
          question: "What is JavaScript?",
          options: [
            "A programming language",
            "A type of coffee",
            "A web server",
            "A database system"
          ],
          answer: "A programming language",
          explanation: "JavaScript is a versatile, high-level programming language primarily used for creating interactive elements on web pages."
        },
        {
          question: "How do you declare a variable in JavaScript?",
          options: [
            "let x = 10;",
            "var x = 10;",
            "const x = 10;",
            "All of the above"
          ],
          answer: "All of the above",
          explanation: "In JavaScript, you can declare variables using `let`, `var`, or `const` keywords."
        },
        {
          question: "Which company developed JavaScript?",
          options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Apple"
          ],
          answer: "Netscape",
          explanation: "JavaScript was developed by Netscape Communications Corporation, which later became part of Mozilla Foundation."
        },
        {
          question: "Which symbol is used for comments in JavaScript?",
          options: [
            "// for single-line, /* */ for multi-line",
            "# for single-line, ''' ''' for multi-line",
            "// for single-line, # for multi-line",
            "' for single-line, \"\" for multi-line"
          ],
          answer: "// for single-line, /* */ for multi-line",
          explanation: "In JavaScript, single-line comments start with `//` and multi-line comments are enclosed in `/* */`."
        },
        {
          question: "Which of the following is a JavaScript framework?",
          options: [
            "React",
            "Django",
            "Laravel",
            "Flask"
          ],
          answer: "React",
          explanation: "React is a popular JavaScript framework for building user interfaces, particularly for single-page applications."
        },
        {
          question: "What does DOM stand for in JavaScript?",
          options: [
            "Document Object Model",
            "Data Object Management",
            "Digital Ordinance Model",
            "Desktop Object Model"
          ],
          answer: "Document Object Model",
          explanation: "DOM stands for Document Object Model, which is a programming interface for HTML and XML documents."
        },
        {
          question: "Which of the following is used to define a function in JavaScript?",
          options: [
            "function myFunction() {}",
            "def myFunction() {}",
            "function: myFunction() {}",
            "func myFunction() {}"
          ],
          answer: "function myFunction() {}",
          explanation: "In JavaScript, functions are defined using the `function` keyword followed by the function name and parentheses."
        },
        {
          question: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "<script src='script.js'></script>",
            "<script href='script.js'></script>",
            "<script ref='script.js'></script>",
            "<script name='script.js'></script>"
          ],
          answer: "<script src='script.js'></script>",
          explanation: "To refer to an external JavaScript file, use the `<script src='script.js'></script>` syntax."
        },
        {
          question: "Which event occurs when the user clicks on an HTML element?",
          options: [
            "onmouseover",
            "onchange",
            "onclick",
            "onmouseclick"
          ],
          answer: "onclick",
          explanation: "The `onclick` event occurs when the user clicks on an HTML element."
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = ['red', 'green', 'blue'];",
            "var colors = 'red', 'green', 'blue';",
            "var colors = (1:'red', 2:'green', 3:'blue');",
            "var colors = {'red', 'green', 'blue'};"
          ],
          answer: "var colors = ['red', 'green', 'blue'];",
          explanation: "JavaScript arrays are written with square brackets. Array items are separated by commas."
        }
      ]
    },
    // Intermediate Questions
    {
      section: "Intermediate",
      questions: [
        {
          question: "What is the purpose of the `this` keyword in JavaScript?",
          options: [
            "To refer to the current function",
            "To refer to the current object",
            "To refer to the current variable",
            "To refer to the current event"
          ],
          answer: "To refer to the current object",
          explanation: "The `this` keyword in JavaScript refers to the object that is currently executing the code."
        },
        {
          question: "How do you create an object in JavaScript?",
          options: [
            "var obj = {};",
            "var obj = [];",
            "var obj = ();",
            "var obj = <>;"
          ],
          answer: "var obj = {};",
          explanation: "Objects in JavaScript are created using curly braces `{}` and can hold multiple key-value pairs."
        },
        {
          question: "What are JavaScript Promises used for?",
          options: [
            "For handling asynchronous operations",
            "For creating loops",
            "For styling web pages",
            "For defining classes"
          ],
          answer: "For handling asynchronous operations",
          explanation: "Promises in JavaScript are used to handle asynchronous operations and represent the eventual completion or failure of an asynchronous task."
        },
        {
          question: "What is the difference between `let` and `var`?",
          options: [
            "`let` has block scope, `var` has function scope",
            "`let` has global scope, `var` has local scope",
            "`let` cannot be reassigned, `var` can be reassigned",
            "`let` is used for constants, `var` is used for variables"
          ],
          answer: "`let` has block scope, `var` has function scope",
          explanation: "`let` declares a block-scoped variable, while `var` declares a function-scoped or globally-scoped variable."
        },
        {
          question: "What is the output of `console.log(typeof null)`?",
          options: [
            "null",
            "object",
            "undefined",
            "string"
          ],
          answer: "object",
          explanation: "In JavaScript, `null` is an object. This is a bug in the language that dates back to its first version."
        },
        {
          question: "What is a closure in JavaScript?",
          options: [
            "A function combined with its lexical environment",
            "A function that is immediately invoked",
            "A variable that holds a function",
            "A method that binds an object"
          ],
          answer: "A function combined with its lexical environment",
          explanation: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope."
        },
        {
          question: "What is the use of the `bind` method?",
          options: [
            "To bind an event to a function",
            "To bind a function to an object",
            "To bind a variable to a value",
            "To bind two arrays together"
          ],
          answer: "To bind a function to an object",
          explanation: "The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value."
        },
        {
          question: "How can you convert a string to a number in JavaScript?",
          options: [
            "Using the `parseInt` function",
            "Using the `parseFloat` function",
            "Using the `Number` function",
            "All of the above"
          ],
          answer: "All of the above",
          explanation: "JavaScript provides multiple ways to convert a string to a number, including `parseInt`, `parseFloat`, and `Number`."
        },
        {
          question: "What does the `===` operator do?",
          options: [
            "Compares both value and type",
            "Compares only value",
            "Compares only type",
            "Compares values loosely"
          ],
          answer: "Compares both value and type",
          explanation: "The `===` operator compares both the value and the type of the operands, ensuring strict equality."
        },
        {
          question: "What is hoisting in JavaScript?",
          options: [
            "The default behavior of moving declarations to the top",
            "The process of creating closures",
            "The method of asynchronous programming",
            "The use of promises and async/await"
          ],
          answer: "The default behavior of moving declarations to the top",
          explanation: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope."
        }
      ]
    },
    // Advanced Questions
    {
      section: "Advanced",
      questions: [
        {
          question: "What is the `event loop` in JavaScript?",
          options: [
            "A programming construct that waits for and dispatches events",
            "A function that runs in a loop",
            "A loop that iterates over an array",
            "A method to handle promises"
          ],
          answer: "A programming construct that waits for and dispatches events",
          explanation: "The event loop is a fundamental part of JavaScript's concurrency model, allowing non-blocking I/O operations."
        },
        {
          question: "What are web workers in JavaScript?",
          options: [
            "Scripts that run in the background, separate from the main execution thread",
            "Functions that handle web requests",
            "Methods that manage web storage",
            "Scripts that interact with the DOM"
          ],
          answer: "Scripts that run in the background, separate from the main execution thread",
          explanation: "Web workers allow you to run scripts in background threads, enabling parallel execution without blocking the main thread."
        },
        {
          question: "What is the purpose of `async` and `await` in JavaScript?",
          options: [
            "To write asynchronous code in a synchronous manner",
            "To define and call functions",
            "To handle errors in JavaScript",
            "To create and manage objects"
          ],
          answer: "To write asynchronous code in a synchronous manner",
          explanation: "The `async` and `await` keywords allow you to write asynchronous code that looks and behaves like synchronous code."
        },
        {
          question: "What is the `Symbol` type in JavaScript?",
          options: [
            "A unique and immutable primitive value",
            "A data type for storing large integers",
            "A method for iterating over collections",
            "A placeholder for unknown values"
          ],
          answer: "A unique and immutable primitive value",
          explanation: "Symbols are unique and immutable primitive values often used to identify object properties."
        },
        {
          question: "What does the `Reflect` object do?",
          options: [
            "Provides methods for interceptable JavaScript operations",
            "Reflects on the state of objects",
            "Creates shallow copies of objects",
            "Monitors changes in objects"
          ],
          answer: "Provides methods for interceptable JavaScript operations",
          explanation: "The `Reflect` object provides methods for interceptable JavaScript operations, which are used with proxies."
        },
        {
          question: "How can you prevent object modification in JavaScript?",
          options: [
            "Using `Object.freeze()`",
            "Using `Object.preventExtensions()`",
            "Using `Object.seal()`",
            "All of the above"
          ],
          answer: "All of the above",
          explanation: "JavaScript provides several methods to prevent object modification, including `Object.freeze()`, `Object.preventExtensions()`, and `Object.seal()`."
        },
        {
          question: "What are generators in JavaScript?",
          options: [
            "Functions that can be paused and resumed",
            "Methods to create iterators",
            "Functions that run indefinitely",
            "Objects that store state"
          ],
          answer: "Functions that can be paused and resumed",
          explanation: "Generators are functions that can be paused and resumed, allowing for the generation of sequence values on demand."
        },
        {
          question: "What is the `Proxy` object used for?",
          options: [
            "To define custom behavior for fundamental operations",
            "To create proxies for network requests",
            "To handle asynchronous events",
            "To intercept and monitor DOM events"
          ],
          answer: "To define custom behavior for fundamental operations",
          explanation: "The `Proxy` object allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.)."
        },
        {
          question: "What is a 'closure' in JavaScript?",
          options: [
            "A function combined with its lexical environment",
            "A way to declare variables",
            "A method to create new objects",
            "A technique to optimize performance"
          ],
          answer: "A function combined with its lexical environment",
          explanation: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope."
        },
        {
          question: "What is the `WeakMap` object used for?",
          options: [
            "To store key-value pairs where keys are weakly referenced",
            "To map over collections of data",
            "To create immutable maps",
            "To manage large datasets efficiently"
          ],
          answer: "To store key-value pairs where keys are weakly referenced",
          explanation: "The `WeakMap` object allows you to store key-value pairs where keys are weakly referenced, meaning they can be garbage collected if there are no other references to them."
        }
      ]
    }
  ];
  