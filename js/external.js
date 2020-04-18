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
        var priceOfMoviePerDayDollars = 3;

        var totalSpentOnMovies = (littleMermaid + brotherBear + hercules) * priceOfMoviePerDayDollars;
        alert(totalSpentOnMovies);

    //Task 2
        var googleRatePerHourDollar = 400;
        var amazonRatePerHourDollar = 380;
        var facebookRatePerHourDollar = 350;

        var googleWeeklyHours = parseInt(prompt('How many hours did you work for google this week?'));
        var amazonWeeklyHours = parseInt(prompt('How many hours did you work for amazon this week?'));
        var facebookWeeklyHours = parseInt(prompt('How many hours did you work for facebook this week?'));

        var totalWeeklyPay = (googleRatePerHourDollar * googleWeeklyHours) + (amazonRatePerHourDollar * amazonWeeklyHours) + (facebookRatePerHourDollar * facebookWeeklyHours);
        alert(totalWeeklyPay);

