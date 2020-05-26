'use strict';

(function() {

    //https://api.github.com/users/JustinMcCaleb/repos

    fetch( 'https://api.github.com/repos/JustinMcCaleb/codeup-web-exercises/commits',
        {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => response.json())
        // .then(data => console.log(data))
        .then((data) => {
            let newDate = new Date(data[0].commit.author.date);
            console.log(newDate)
        });
        // .then(data => console.log(data[0].commit.author.date));
            // - use with https://api.github.com/repos/JustinMcCaleb/codeup-web-exercises/commits to get last commit from codeup-web-exercises




    function wait(number) {

        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve();
            }, number);
        });
        return myPromise;
    }

    wait(1000).then(() => console.log('You will see this after 1 second'));
    wait(3000).then(() => console.log('You will see this after 3 seconds'))


})();