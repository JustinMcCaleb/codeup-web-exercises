'use strict';

(function() {

    //https://api.github.com/users/JustinMcCaleb/repos

    fetch( 'https://api.github.com/repos/JustinMcCaleb/codeup-web-exercises/commits',
        {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => response.json())
        // .then(data => console.log(data))

        .then(data => console.log(data[0].commit.author.date))
            // - use with https://api.github.com/repos/JustinMcCaleb/codeup-web-exercises/commits to get last commit from codeup-web-exercises

})();