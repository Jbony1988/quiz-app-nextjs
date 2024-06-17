export const pythonQuestions = [
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
      },
      {
        question: "What is Python's `print()` function used for?",
        options: [
          "To perform mathematical calculations",
          "To display output to the console",
          "To define a loop",
          "To import modules"
        ],
        answer: "To display output to the console",
        explanation: "`print()` is a built-in Python function used to display output to the console or terminal. For example: `print('Hello, world!')` will print 'Hello, world!' to the console."
      },
      {
        question: "What is a string in Python?",
        options: [
          "A data type used for storage",
          "An ordered collection of items",
          "A sequence of characters",
          "An immutable collection of items"
        ],
        answer: "A sequence of characters",
        explanation: "A string in Python is a sequence of characters enclosed in single quotes ('') or double quotes (\"\"). It is a fundamental data type used to represent text."
      },
      {
        question: "How do you comment in Python?",
        options: [
          "# This is a comment",
          "// This is a comment",
          "/* This is a comment */",
          "// This is a comment //"
        ],
        answer: "# This is a comment",
        explanation: "In Python, comments start with the '#' character and extend to the end of the line. They are used to annotate code with explanations or to temporarily disable code."
      }
    ]
  },
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
      },
      {
        question: "What are tuples in Python and how do they differ from lists?",
        options: [
          "Tuples are ordered, mutable collections",
          "Tuples are ordered, immutable collections",
          "Tuples are unordered, mutable collections",
          "Tuples are unordered, immutable collections"
        ],
        answer: "Tuples are ordered, immutable collections",
        explanation: "Tuples are similar to lists but are immutable, meaning their elements cannot be changed once defined. You create a tuple by placing comma-separated values inside parentheses. For example: `my_tuple = (1, 2, 3)`."
      },
      {
        question: "What is the difference between '==' and 'is' in Python?",
        options: [
          "'==' checks for value equality, 'is' checks for object identity",
          "'==' checks for object identity, 'is' checks for value equality",
          "'==' is used for assignment, 'is' is used for comparison",
          "'==' checks for value equality, 'is' checks for logical equality"
        ],
        answer: "'==' checks for value equality, 'is' checks for object identity",
        explanation: "In Python, '==' checks whether two variables have the same value, while 'is' checks whether two variables refer to the same object in memory."
      },
      {
        question: "What is list comprehension in Python?",
        options: [
          "A way to perform mathematical operations on lists",
          "A concise way to create lists",
          "A way to remove elements from lists",
          "A way to sort lists"
        ],
        answer: "A concise way to create lists",
        explanation: "List comprehension is a concise way to create lists in Python. It allows you to generate lists using a single line of code rather than writing traditional loops. For example: `[x for x in range(10)]` creates a list from 0 to 9."
      }
    ]
  },
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
      },
      {
        question: "What are Python decorators and how do you use them?",
        options: [
          "Functions that perform input validation",
          "Functions that modify the behavior of other functions",
          "Functions that generate random numbers",
          "Functions that handle exceptions"
        ],
        answer: "Functions that modify the behavior of other functions",
        explanation: "Decorators are a powerful feature in Python that allow you to modify the behavior of a function or class without changing its source code directly. They are defined using the `@decorator_name` syntax before the function definition."
      },
      {
        question: "What is the difference between 'global' and 'local' variables in Python?",
        options: [
          "'global' variables are defined within a function, 'local' variables are defined outside a function",
          "'global' variables are defined outside a function, 'local' variables are defined within a function",
          "'global' variables can be accessed anywhere in the program, 'local' variables are only accessible within a specific scope",
          "'global' variables are constant variables, 'local' variables are mutable variables"
        ],
        answer: "'global' variables are defined outside a function, 'local' variables are defined within a function",
        explanation: "Global variables are defined outside any function and can be accessed from any part of the program. Local variables are defined within a function and are only accessible within that function or a nested function."
      },
      {
        question: "What is the purpose of the `__init__` method in Python classes?",
        options: [
          "To initialize a Python interpreter",
          "To define a class constructor",
          "To perform mathematical operations",
          "To iterate over a sequence"
        ],
        answer: "To define a class constructor",
        explanation: "`__init__` is a special method in Python classes used to initialize objects. It is called automatically when a new instance of the class is created. You define the `__init__` method within the class definition."
      }
    ]
  }
];
