'use strict';

(function() {

    //https://api.github.com/users/JustinMcCaleb/repos - get array of repos
    //https://api.github.com/repos/JustinMcCaleb/codeup-web-exercises/commits - gets last commit from codeup-web-exercises


    function getLastCommit(username) {

        fetch( `https://api.github.com/repos/${username}/codeup-web-exercises/commits`,
            {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
            .then(response => response.json())
            .then((data) => {
                let newDate = new Date(data[0].commit.author.date);
                console.log(newDate)
            });
    }
    getLastCommit('JustinMcCaleb');




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