/*
 * Logic for D3 visualization of Enron Data Set
 * For CS 467, Spring 2014.
 * Authors: Mike Luo, Mike Styve, Jay Bensal, Fernando Araujo, Kyle Grage
 */

/* Data storage */

/* Load in the data */
var loadData = function() {
  /*
  d3.json('test.json', function(json){
      alert(hello + json);
  }, function(error, rows){
      if (error) {
        console.log('Error loading player data: ', error);
      }
    dataIsLoaded();
  });
  */

 d3.json('./subset.json', function(json){
      console.log("Loading data...");
      window.json = json;
  });

dataIsLoaded();
}; // end function



/* The data is loaded at this point. */
var dataIsLoaded = function() {
  console.log('All data loaded.');
  makeGraph();
};

/* Make a scatterplot graph for the life expectancies*/
var makeGraph = function(){
  console.log("Making graph ...");

}; // end makeGraph function

// start the entire process
window.addEventListener("DOMContentLoaded", function() {
  loadData();
}, false);