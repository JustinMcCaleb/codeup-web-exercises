'use strict';

(function() {

    fetch( 'https://api.github.com/users/JustinMcCaleb/events',
        {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => response.json())
        .then(data => console.log(data))

})();