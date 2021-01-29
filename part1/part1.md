1. 2 will be printed, because var has no block scope
2. 150 will be printed, because var has no block scpe
3. finalPrice is declared in this code block (also var has no block scope), so 150 will be printed
4. The function returns [50,100,150], as each element in the array passed is reduced by 50%, and added to the discounted array.
5. There will be an error because i is not defined as it is declared in a different block using let
6.  There will be an error because discountedPrice is not defined as it is declared in a different block using let
7.  finalPrice is declared in this code block so 150 will be printed
8.  The function returns [50,100,150], as each element in the array passed is reduced by 50%, and added to the discounted array.
9.  There will be an error because i is not defined as it is declared in a different block using let
10. There is an error because discountedPrice is not defined as it was declared in a different block using const
11. There is an error earlier with finalPrice because the code tries to modify a const variable
12. The function returns [50, 100, 150], as discounted is a constant variable, but it is an array so elements can be added
13. 
    a. student.name
    b. student['Grad Year']
    c. student.greeting()
    d. student['favorite teacher'].name
    e. student.courseLoad[0]
14. 
    a. 32, because '3' is treated as a string and 2 is appended
    b. 1, because you cannot subtract from strings, so 3 is treated as a number
    c. 3, because null evaluates to 0
    d. 3null, because '3' is a string and null is appended
    e. 4, because true evaluates to 1
    f. 0, because both false and null evaluate to 0
    g. 3undefined, because '3' is a string and undefined is appended
    h. NaN, because subtraction cannot be done with undefined.
15. 
    a. True, because the string '2' becomes a number
    b. False, because the first digit of '2' is greater than the first digit of '12' and both are strings
    c. True, because the string '2' becomes a number
    d. False, because the === operator checks if both are the same type
    e. False, because true evaluates to 1
    f. True, because both are of boolean type, and  Boolean(n) is true for n>=1
16. == only checks value, while === also checks object type
17. 'How are you' is printed because 2==true is false as true evaluates to 1, while 2 is true when converted to a boolean value because it is not 0.
18. see file
19. [4, 6, 8] will be returned, as each element has 1 added to it and then is mutliplied by 2.
20. see file
21. 1
    4
    3
    2
    Because 1 and 4 print immediately, 3 is added to the queue after them, and 2 has a 1000 millisecond delay