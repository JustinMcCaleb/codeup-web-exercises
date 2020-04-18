"use strict";

// JS Working with Data Types, Operators and Variables

//Exercise 2
//     var sample = 'Hello Codeup';
//     sample.toLowerCase();
//     var sample = sample + ' ' + 'Students';



// Exercise 3
        // part 1
        //You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
            var moviePricePerDay = 3;
            var littleMermaid = 3;
            var brotherBear = 5;
            var hercules = 1;

            var movieRentalPrice = (littleMermaid + brotherBear + hercules) * moviePricePerDay;

        // part 2
        //Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
            var googlePay = 400;
            var amazonPay = 380;
            var facebookPay = 350;

            var googleHours = 6;
            var amazonHours = 4;
            var facebookHours = 10;

            var weeklyPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);

        //part 3
        //A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
            var seatsAvailable = true;
            var noScheduleConflict = false;

            var canEnroll = (seatsAvailable && noScheduleConflict);
                //Result: False

        //part 4
        //A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
            var numberOfItems = 3;
            var productOfferValid = true;
            var isPremiumMember = true;

            var discountOffer = ((numberOfItems > 2)|| isPremiumMember) && productOfferValid;
                //Result: True

// Exercise 4

        //Use the following code to follow the instructions below:
         var username = 'codeup';
         var password = 'notastrongpassword';
        //Create a variable that holds a boolean value for each of the following conditions:
            //the password must be at least 5 characters
            //the password must not include the username
            //the username must be no more than 20 characters
            //neither the username or password can start or end with whitespace
        var minLength = 5;
        var maxLentgh = 20;

        var passwordLength = password.length >= minLength;
        var passwordNotIncludeUsername = password.indexOf(username) < 0;
        var usernameLength = username.length <= maxLentgh;
        var noWhiteSpacePassword = password.trim();
        var noWhiteSpaceUsername = username.trim();
