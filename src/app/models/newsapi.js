const axios = require('axios');

class Search {

    searchName;
    url;

    constructor(searchName) {
        this.searchName = searchName;
        this.url = 'https://newsapi.org/v2/everything?q='+ searchName +'&apiKey=' + process.env.NEWSAPIKEY;
    }

    find() {
        return axios.get(this.url);
    }
    
}

module.exports = Search;