"use strict";

//JavaScript with HTML Exercises
    // Part 1 Task 6
       console.log('Hello from external JavaScript');

    // Part 2
        alert('Welcome to my Website!');
        var userFavoriteColor = prompt('What\'s your favorite color?');
        alert('Whaaaaat, ' + userFavoriteColor + '!' +' That is my favorite color too!');

    // Part 3 (steps from exercise 3 in previous lesson)
    //When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
    //Use an alert to show the results of each problem.
    //Task 1
        var littleMermaid = parseInt(prompt('How long are you renting the Little Mermaid?'));
        var brotherBear = parseInt(prompt('How long are you renting Brother Bear?'));
        var hercules = parseInt(prompt('How long are you renting Hercules?'));
        var priceOfMoviePerDayDollars = parseInt(prompt('What is the daily rent price?'));

        var totalSpentOnMovies = (littleMermaid + brotherBear + hercules) * priceOfMoviePerDayDollars;
        alert(totalSpentOnMovies);

    //Task 2
        var googleRatePerHourDollar = parseInt(prompt('What is your Google hourly rate?'));
        var amazonRatePerHourDollar = parseInt(prompt('What is your Amazon hourly rate?'));;
        var facebookRatePerHourDollar = parseInt(prompt('What is your Facebook hourly rate?'));;

        var googleWeeklyHours = parseInt(prompt('How many hours did you work for google this week?'));
        var amazonWeeklyHours = parseInt(prompt('How many hours did you work for amazon this week?'));
        var facebookWeeklyHours = parseInt(prompt('How many hours did you work for facebook this week?'));

        var totalWeeklyPay = (googleRatePerHourDollar * googleWeeklyHours) + (amazonRatePerHourDollar * amazonWeeklyHours) + (facebookRatePerHourDollar * facebookWeeklyHours);
        alert(totalWeeklyPay);

     //Task 3
        var availableSeatsInClass = false;
        var noScheduleConflict = true;

        var canEnroll = (availableSeatsInClass && noScheduleConflict);
        alert(canEnroll);

     //Task 4
        var itemsInCart = parseInt(prompt('How many items do you have in your cart?'));
        var offerValid = true;
        var premiumMember = false;

        var offerCanBeApplied = (itemsInCart > 2 || premiumMember) && offerValid;
        alert(offerCanBeApplied);