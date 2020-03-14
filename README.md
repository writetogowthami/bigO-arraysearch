# Array Search to find a element's double and code with efficient algorithmic approach and least run time possible

## Problem: 
Given an array of positive integers, write a function that returns true if an element in that array is the double of any other element. Return false, if no such elemet exists.
If Input array is [8, 4, 7], return true //As 4 is the double of 8
If the array is [3, 5, 7] return false

## Soulution Algorithm: 
Task: Determine the double of each number in the array, then Check to the see if the array includes any of the doubles.
### One of the efficient approach to use some()
i. Use some() to search the array and includes to match the values in the array 
### Second approach is to use Hash maps with keys as array element values
i. Use Hash tables with maps - make keys for new hash table with numbers in array
ii. Check the keys in hash table against current number to see if there is a key that is already double or half of our current number and return true or false accordingly
Big O - O(n) is 3

# Time complexity 
- is the amount of time it takes an algorithm or set of code to run
- is used to compare the efficiency of different approaches to a problem
- most often measured in Big O notation, O(n) where 
  O stands for “order of magnitude” and 
  n represents what we are comparing the complexity of a task against
  
# Big O notation is the execution time of a task in relation to the number of steps required to complete it
| Name | Time Complexity | Scenario |
| :--- | :---: | :--- |
| Constant | O(1) | Simple print statement, Look-up table(on average), Odd or Even |
| Logarithmic | O(log n) | Find an element in sorted array with binary search ; A logarithmic algorithm that performs a binary search | looks through only half of an increasingly smaller data set. Time is decreased at magnitude of inversely proportional to n |
| Linearithmatic | O(n log n) | Sorting array with merge sort |
| Linear Complexity | O(n) | while loop, duplicate elements in an array with hash map, find the largest element in an unsorted array |
| Quadratic Complexity | O(n²) | 2 nested for loops, Sorting an array using bubble sort |
| Cubic | O(n^3) | 3 variables equation solution |
| Exponential | O(2^n) | Finding all subsets, a function whose step-time doubles with each subsequent step, it has a complexity of O(2^n) |
| Factorial | O(n!) | Find all permutations of a given string |

## Array Operations Time Complexities
| Action | Array Method | Time Complexity |
| :--- | :--- | :---: |
| Access | Array.[] | O(1) |
|Insert head |Array.unshift	| O(n) |
| Insert tail	| Array.push	| O(1) |
| Search value | Array.some() | O(n) |
| Delete | Array.splice	| O(n) |
