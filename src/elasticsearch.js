var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
   hosts: [ 'http//localhost:9200']
});
const indexName= "kids-central-activities"
const docType='activity'

// client.ping({
//     requestTimeout: 30000,
// }, function(error) {
//     if (error) {
//         console.error('elasticsearch cluster is down!');
//     } else {
//         console.log('Everything is ok');
//     }
// });

// def state ={
//     location,
//     age,
//     startDate,
//     endDate
// };


//Search elasticsearch for any results that fit in the 
function search(state) {
    client.search({
        index: indexName,
        type: docType,
        body: {
            query: {
                match: {
                    "location": state.location
                }
            }
        }
    }).then(function(resp) {
        console.log(resp);
    }, function(err) {
        console.trace(err.message);
    });
}