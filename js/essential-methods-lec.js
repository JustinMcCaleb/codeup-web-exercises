"use strict";

$(document).ready(function() {

    //name input goes through random sorting here
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
        $('#main-heading').click(function() {
            $(this).css('font-size', '4em');
        });
    //    How can font size be changed using .html()?

        // $('#main-heading').click(function() {
        //     $(this).html('<h4> My Sorting Hat</h4>');
        // });

    // TODO TOGETHER: store the inner text of #main-heading in a variable

        var mainHeading = $('#main-heading').text();
        alert(mainHeading);

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector

        $('.banner').css('background-color', 'black');

    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'

        // $('#highlight-houses').click(function() {
        //     $('.house-name').addClass('house');
        //
        // });

    // TODO: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //  Write the event listener to remove the class instead

    // $('#highlight-houses').click(function() {
    //     $('.house-name').removeClass('house');
    // });


    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead

        $('#highlight-houses').click(function(){
            $('.house-name').toggleClass('house');
    });

    /**********************************************
     * 			       Traversing
     *********************************************/

    // TODO TOGETHER: console log each list element's text

        $('li').each(function() {
            console.log($(this).html())
        });

    // TODO TOGETHER: select all list elements and console log the first match

    console.log($('li').first().html());

    // TODO TOGETHER: select all list elements and console log the last match

    console.log($('li').last().html());

    // TODO TOGETHER: When I click on a list element, highlight its parent

        $('li').click(function() {
            $(this).parent().css('background-color', 'lightblue')
        });

    // TODO TOGETHER: When I click into a <ul>, console log last child in that group

        $('ul').click(function() {
            console.log($(this).children().last().html());
        });

    // TODO TOGETHER: When I click on any list element, console log the next element





});
