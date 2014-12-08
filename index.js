var yelp = require("yelp").createClient({
  consumer_key: "KnkwP8iOsUjL94sfc26EmQ", 
  consumer_secret: "sJT04HnKl5KtKVsUADpayA8l3OA",
  token: "uYQu8lmU2RokAXkZebKDQvzLsHLpUelu",
  token_secret: "oCBjq7_ADREJXeTZnrj5PLBkKao"
});
var yelp_id;

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "post lofts", location: "77002",limit:1}, function(error, data) {
  console.log("Yelp Search ...........");
  console.log(error);
  console.log(data);
  console.log("-----------");
  console.log(data.businesses[0].name);
  console.log(data.businesses[0].id);
  yelp_id = data.businesses[0].id;
  console.log(yelp_id);
  yelp.business("north-post-oak-lofts-houston", function(error, data) {
    console.log("Yelp Business Details .............");
    console.log(error);
    console.log(data);
})
});

// See http://www.yelp.com/developers/documentation/v2/business
//yelp.business("north-post-oak-lofts-houston", function(error, data) {
//  console.log("Yelp Business Details .............");
//  console.log(error);
//  console.log(data);
//});
