'use stict';

(function() {


    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    //Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    let filteredLanguages = users.filter(user => {
        return user.languages.length >= 3
    });
    console.log(filteredLanguages);

    //Use .map to create an array of strings where each element is a user's email address

    let filteredEmails = users.map(user => {
        return user.email
    });
    console.log(filteredEmails);

    //Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average
    let totalYears = users.reduce((accumulator, user) => {
        return accumulator + user.yearsOfExperience;
    }, 0);
    console.log(`The total years of experience is: ${totalYears}`);

    let average = (user) => `Your average sales experience is: ${totalYears / user.length}`;
    console.log(average(users));


    //Use .reduce to get the longest email from the list of users
    let longestEmail = users.reduce((accumulator, user) => {
        if(user.email.length > accumulator.length) {
            return user.email;
        }else {
            return accumulator;
        }
    }, '');
    console.log(longestEmail);

    //Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    let nameString = users.reduce((accumulator, user, index) => {
        if(index < users.length -1) {
            return `${accumulator}${user.name}, `
        }else {
            return `${accumulator}${user.name}.`
        }
    }, 'Your instructors are: ');
    console.log(nameString);

    //BONUS - getting each unique language into an array
    let languageList = users.reduce((langList, user) => {
        for (let lang of user.languages) {
            if(!langList.includes(lang)) {
                langList.push(lang);
            }
        }
        return langList;
    }, []);
    console.log(languageList);

})();