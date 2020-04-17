"use strict";

// JS Working with Data Types, Operators and Variables

//Exercise 2
    var sample = 'Hello Codeup';
    sample.toLowerCase();
    var sample = sample + ' ' + 'Students';



// Exercise 3 Part 1
    var moviePricePerDay = 3;
    var littleMermaid = 3;
    var brotherBear = 5;
    var hercules = 1;

    var movieRentalPrice = (littleMermaid + brotherBear + hercules) * moviePricePerDay;

// Part 2
    var googlePay = 400;
    var amazonPay = 380;
    var facebookPay = 350;

    var googleHours = 6;
    var amazonHours = 4;
    var facebookHours = 10;

    var weeklyPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);

//Part 3
    var seatsAvailable = true;
    var noScheduleConflict = false;

    var canEnroll = (seatsAvailable && noScheduleConflict);
        //Result: False

//Part 4
    var numberOfItems = 3; // <-- True if > 2
    var productOffer = true;
    var premiumMember = true;

    var discountOffer = ((numberOfItems || premiumMember) && productOffer);
        //Result: True

    var itemsPurchased = 5;
    var offerNotExpired = true;
    var premiumMember = false
    var productOffer = ((itemsPurchased > 2) || premiumMember) && offerNotExpired;
