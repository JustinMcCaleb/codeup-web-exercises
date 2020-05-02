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

        var person = {
            firstName: 'Justin',
            lastName: 'McCaleb',
        };

        console.log(person.firstName);
        console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

        person.sayHello = function() {
            return ('Yoooooo, ' + person.firstName + ' ' + person.lastName + '!' + ' How\'s life?')
        };

    console.log(person.sayHello());

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

        var shoppers = [
            {
                name: 'Cameron',
                amount: 180
            },
            {
                name: 'Ryan',
                amount: 250
            },
            {
                name: 'George',
                amount: 320
            }
        ];

        //console log needs to display the persons name, the amount before discount, the discount, and the amount after the discount (if applicable)
        shoppers.forEach(function (shopper) {
            if (shopper.amount >= 200) {
                var discount = shopper.amount * .12;
                var amountAfterDiscount = shopper.amount - discount;
                console.log(shopper.name + ', your total before the discount is $' + shopper.amount + ', and your total discount is $' + discount + ', which brings your new total after discount to: $' + amountAfterDiscount);
            } else {
                console.log(shopper.name + ', thank your for shopping with us today. Your total comes out to $' + shopper.amount);
            }
        });

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
                       title: 'The Alchemist',
                        author: {
                                firstName: 'Paulo',
                                lastName: 'Coelho',
                                },
                    },
                    {
                        title: 'Why We Sleep',
                        author: {
                            firstName: 'Matthew',
                            lastName: 'Walker',
                        },
                    },
                    {
                        title: '1984',
                        author: {
                            firstName: 'George',
                            lastName: 'Orwell',
                        },
                    },
                    {
                        title: 'Rant: The Oral Biography of Buster Casey',
                        author: {
                            firstName: 'Chuck',
                            lastName: 'Palahniuk',
                        },
                    },
                    {
                        title: 'Outliers',
                        author: {
                            firstName: 'Malcolm',
                            lastName: 'Gladwell',
                        },
                    },
            ];

    console.log(books[2].title);
    console.log(books[2].author.firstName + ' ' + books[2].author.lastName);
    console.log(books[books.length - 1].title);

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

        function booksArrayLoop() {
            //Initializing the variable w/ an empty string to hold the book info returned from the forEach loop.
            var bookInfo = '';

            //For loop to get the index of the book in the array.
            // for (var i = 0; i < books.length; i++) {
            //     bookInfo += 'Book # ' + (i + 1) + '\n';
            //     bookInfo += 'Title: ' + books[i].title + '\n';
            //     bookInfo += 'Author: ' + books[i].author.firstName + ' ' + books[i].author.lastName + '\n';
            //     bookInfo += '---' + '\n';
            // }

            // forEach loop to do the same. I think this is cleaner in this situation.
            books.forEach(function (book, index) {
                bookInfo += 'Book # ' + (index + 1) + '\n';
                bookInfo += book.title + '\n';
                bookInfo += book.author.firstName + ' ' + book.author.lastName + '\n';
                bookInfo += '---' + '\n';
            });
            return bookInfo;
        }
        console.log(booksArrayLoop());

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

})();
