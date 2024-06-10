
export const pythonQuestions  = [
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
          question: "What is a loop in Python, and what are the types of loops available?",
          options: [
            "A structure that executes code once; if and else loops",
            "A structure that executes code repeatedly; for and while loops",
            "A structure that stores multiple values; list and dict loops",
            "A structure that defines a function; def and return loops"
          ],
          answer: "A structure that executes code repeatedly; for and while loops",
          explanation: "A loop is used to execute a block of code repeatedly. Python has two types of loops: `for` loops, which iterate over a sequence, and `while` loops, which continue to execute as long as a condition is true."
        },
        {
          question: "What are dictionaries in Python and how do you use them?",
          options: [
            "Ordered collections of items",
            "Unordered collections of key-value pairs",
            "Immutable sequences of characters",
            "Functions that return values"
          ],
          answer: "Unordered collections of key-value pairs",
          explanation: "Dictionaries are collections of key-value pairs. They are unordered and mutable. You create a dictionary using curly braces with keys and values separated by colons. For example: `my_dict = {'name': 'Alice', 'age': 25}`."
        },
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
          question: "What is the purpose of `self` in Python classes?",
          options: [
            "To refer to a global variable",
            "To access class attributes and methods",
            "To define a function",
            "To create a loop"
          ],
          answer: "To access class attributes and methods",
          explanation: "`self` is a reference to the current instance of the class and is used to access variables and methods associated with the object. It is the first parameter of methods in a class."
        },
        {
          question: "What is the difference between `append()` and `extend()` methods in Python lists?",
          options: [
            "`append()` adds multiple elements; `extend()` adds one element",
            "`append()` adds one element; `extend()` adds multiple elements",
            "`append()` creates a new list; `extend()` modifies the existing list",
            "`append()` sorts the list; `extend()` reverses the list"
          ],
          answer: "`append()` adds one element; `extend()` adds multiple elements",
          explanation: "`append()` adds its argument as a single element to the end of a list, while `extend()` iterates over its argument and adds each element to the list. For example:\n```python\nlist1 = [1, 2]\nlist1.append([3, 4])  # list1 becomes [1, 2, [3, 4]]\nlist1.extend([3, 4])  # list1 becomes [1, 2, 3, 4]\n```"
        }
      ];
      
