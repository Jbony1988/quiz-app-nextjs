export const pythonQuestions = [
  // Beginner Questions
  {
    section: "Beginner",
    questions: [
      {
        question: "What is Python and why is it popular?",
        options: [
          "A type of snake",
          "A programming language",
          "A web browser",
          "A database system"
        ],
        answer: "A programming language",
        explanation: "Python is a high-level, interpreted programming language known for its readability and simplicity. It is popular because of its extensive standard library, versatility, and community support, making it suitable for web development, data science, automation, and more."
      },
      {
        question: "What is a variable in Python and how do you declare it?",
        options: [
          "A value holder; x = 10",
          "A loop structure; for x in range(10)",
          "A conditional statement; if x == 10",
          "A function; def x()"
        ],
        answer: "A value holder; x = 10",
        explanation: "A variable in Python is a reserved memory location to store values. You declare a variable by assigning a value to it using the '=' operator. For example: `x = 10`."
      }
    ]
  },
  // Intermediate Questions
  {
    section: "Intermediate",
    questions: [
      {
        question: "What are lists and how do you use them in Python?",
        options: [
          "A collection of key-value pairs",
          "An unordered collection of unique items",
          "An ordered collection of items",
          "A mutable sequence of characters"
        ],
        answer: "An ordered collection of items",
        explanation: "Lists are ordered collections of items in Python, which can hold a variety of data types. You create a list by placing comma-separated values inside square brackets. For example: `my_list = [1, 2, 3, 'a', 'b']`."
      },
      {
        question: "What is a function in Python and how do you define one?",
        options: [
          "A block of code that runs indefinitely",
          "A block of reusable code that performs a specific task",
          "A keyword used to iterate over a sequence",
          "A data type used to store multiple values"
        ],
        answer: "A block of reusable code that performs a specific task",
        explanation: "A function is a block of reusable code that performs a specific task. You define a function using the `def` keyword followed by the function name and parentheses. For example:\n```python\ndef my_function():\n    print('Hello, world!')\n```"
      }
    ]
  },
  // Advanced Questions
  {
    section: "Advanced",
    questions: [
      {
        question: "What is exception handling in Python?",
        options: [
          "A way to write loops",
          "A way to handle errors gracefully",
          "A way to define functions",
          "A way to create dictionaries"
        ],
        answer: "A way to handle errors gracefully",
        explanation: "Exception handling allows you to manage errors in your code gracefully using `try`, `except`, `finally`, and `else` blocks. For example:\n```python\ntry:\n    1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\n```"
      },
      {
        question: "What are Python modules and how do you import them?",
        options: [
          "Files containing Python code; import statement",
          "Built-in functions; def statement",
          "Loops that run indefinitely; while statement",
          "Data types used for storage; list and dict"
        ],
        answer: "Files containing Python code; import statement",
        explanation: "Modules are files containing Python code that can be imported and used in other Python programs. You import a module using the `import` statement. For example: `import math` or `from math import sqrt`."
      }
    ]
  }
];
