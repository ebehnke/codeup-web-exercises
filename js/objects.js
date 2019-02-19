(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: 'Erik',
    //     lastName: 'Behnke',
    //     sayHello : function () {
    //         return console.log("Hello " + this.firstName + " " + this.lastName);
    //     }
    // };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);
    // console.log(person.sayHello());



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // function sayHello() {
    //     return console.log("Hello " + person.firstName + " " + person.lastName);
    // }
    //
    // console.log(sayHello());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


// var shoppers = [
//     {name: 'Cameron', amount: 180},
//     {name: 'Ryan', amount: 250},
//     {name: 'George', amount: 320}
// ];
//
// shoppers.forEach(function (shopper, index, array) {
//     var output = "";
//     var discount = 0;
//     if (shopper.amount >= 200)
//         discount = shopper.amount * .12;
//     output += shopper.name;
//     output += " original bill price: ";
//     output += shopper.amount;
//     output += ", saved: ";
//     output += discount;
//     output += ", discounted: ";
//     output += shopper.amount - discount;
//     console.log(output);
// });



// for (var i = 0; i < shoppers.length; i++) {
//     console.log(
//         shoppers[i].name +
//         "'s before discount price: " +
//         shoppers[i].amount +
//         " . After discount price: " + discount());
// }

// function discount() {
//     if (shoppers[i].amount >= 200) {
//         return shoppers[i].amount * .88
//     } else {
//         return shoppers[i].amount
//     }
// }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: 'The Salmon of Doubt',
            author: {
                firstName: 'Douglas',
                lastName: 'Adams'
            }
        },
        {
            title: 'Dictionary',
            author: {
                firstName: 'Jeremiah',
                lastName: 'Webster'
            }
        },
        {title: 'A Game of Thrones', author: {firstName: 'George', lastName: 'Martin'}},
        {title: 'Eloquent Javascript', author: {firstName: 'Marjin', lastName: 'Haverbeke'}}

    ];
    books.push(
        {
            title: "The Professor and the Madman",
            author: {
                firstName: "Simon",
                lastName: "Winchester"
            }
        }
    );
    books.push({title: "The Cat in the Hat", author: {firstName: "Dr.", lastName: "Suess"}});

    //
    // console.log(books[0].title); // "The Salmon of Doubt"
    // console.log(books[0].author.firstName); // "Douglas"
    // console.log(books[0].author.lastName); // "Adams"
    // console.log(books);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    //
    // books.forEach(function (book, i, array) {
    //     console.log("Book # " + i + "1");
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + books[i].author.lastName);
    //     console.log("---");
    // });


    // for (var i = 0; i < books.length; i++) {
    //     var name = books[i].author.firstName + books[i].author.lastName;
    //     console.log(books[i].title + " " + books[i].name);
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var createBook = function(title, firstName, lastName){
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = firstName;
        book.author.lastName = lastName;
        return book;

    };

    function showBookInfo(book, i) {
        console.log("Book # " + i);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }

    books.forEach(showBookInfo);


    var booksBonus = [
        createBook("The Devil in the White City", "Erik", "Larson")
    ];
    books.push(createBook("The Professor and the Madman", "First", "Last"))

    // console.log(booksBonus);






})();

//Mini Exercise 1
//
//  Create a few beverage objects and assign values to each object for the following properties:
//
//    - brandName
//    - type
//    - volumeInLiters
//    - priceInCents
//    - expirationDate
//    - dateTimesOfLastSips
//    - isOpen
//
//  Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements.

// var beverages = {
//         brandName: 'City of Flint, Michigan',
//         type: 'Water',
//         volumeInLiters: Infinity,
//         priceInCents: Infinity,
//         expirationDate: 'Never',
//         dateTimeOfLastSips: [
//             '10:30am',
//             'Now'
//         ]
//         };
//     // [
//     //     brandName: 'Fiji',
//     //     type: 'Water',
//     //     volumeInLiters: 20,
//     //     priceInCents: 900,
//     //     expirationDate: 'Yesterday'
//     // ]
// // };
// beverages['dateTimesOfLastSips'] = '10:13am';
// beverages.isOpen = true;
//
// console.log(beverages);
// console.log(beverages.brandName);




//Mini Exercise 2

// var users = [
//  {
//      name: "Sam",
//      age: 21
//  },
//  {
//      name: "Cathy",
//      age: 34
//  },
//  {
//      name: "Karen",
//      age: 43
//  }
// ];

//  1. Log the names of all users in a single console log separated by spaces.

// var userMessage = "";
//
// users.forEach(function (element, index, array) {
//     userMessage += element.name + " ";
// });
//
// console.log(userMessage);
//
// //  2. Change the names of all users to "John Doe"
//
// users.forEach(function(element, index, array) {
//     element.name = "John Doe";
//     console.log(element.name);
// });
//
// //  3. Increase the current age of all users by 1
//
// users.forEach(function (element, index, array) {
//     element.age = element.age + 1;
//     console.log(element.age);
// });

//  Can you accomplish each step using iteration?


// console.log(JSON.stringify(users)); // shows string before the object gets changed

//Mini Exercise 3
//   PAIR UP!
//   Create a dog object...
//   The dog object should have properties for:
//     breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
//   The dog object should have methods to:
//     bark() - will console.log "Woof!"
//     getOlder() - will increase age by 1
//     fix() - will set sterile to true if dog sterilized property is false
//     vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

// var dog = {
//     breed: 'chihuahua',
//     weight: '10lbs',
//     age: 5,
//     color: 'sandy beach brown',
//     sterilized: false,
//     shotRecords: [{
//         shots: 'flue',
//         date: 'feb 14, 2019'
//     },
//     {
//         shots: 'hepB',
//         date: 'feb 14, 2020'
//     }
//     ],
//     bark: function bark() {
//         console.log('woof');
//         },
//     getOlder: function getolder() {
//         dog.age = dog.age + 1;
//         console.log(dog.age);
//
//     },
//     fix: function fix() {
//         dog.sterilized = !dog.sterilized;
//         console.log(dog.sterilized);
//     },
//     vaccinate: function vaccinate(input1, input2) {
//        dog.shotRecords.push({
//            shots: input1,
//            date: input2
//        })
//     }
// };
//
//
// dog.bark();
// dog.getOlder();
// dog.fix();
// dog.vaccinate('measles', 'feb, 15, 2047');
//
//
// console.log(dog.shotRecords);































