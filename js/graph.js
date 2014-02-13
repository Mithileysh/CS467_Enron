/*
 * Logic for D3 visualization of Enron Data Set
 * For CS 467, Spring 2014.
 * Authors: Mike Luo, Mike Styve, Jay Bensal, Fernando Araujo, Kyle Grage
 */

 /* Data storage */

 /* Load in the data */

 var loadData = function() {
  console.log("loading data...");
  d3.json('./d3dumpfinal.json', function(json){
  	window.json = json;
  	dataIsLoaded();
  });

}; // end loading data function


/* The data is loaded at this point. */
var dataIsLoaded = function() {
  console.log('All data loaded.');
  makeGraph();
};

/* Make a scatterplot graph for the life expectancies*/
var makeGraph = function(){
	console.log("Making graph ...");

	var colors = d3.scale.category20();
	keyColor = function(d, i) {return colors(d.key)};

	var chart;
	nv.addGraph(function() {
	  chart = nv.models.stackedAreaChart()
	                .width(1000).height(750)
	                .useInteractiveGuideline(true)
	                .x(function(d) { return d[0] })
	                .y(function(d) { return d[1] })
	                .color(keyColor)
	                .transitionDuration(300);
	                //.clipEdge(true);
	  chart.xAxis
	      .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });

	  chart.yAxis
	      .tickFormat(d3.format(',.2f'));

	  d3.select('#chart1')
	    .datum(window.json)
	    .transition().duration(1000)
	    .call(chart)
	    // .transition().duration(0)
	    .each('start', function() {
	        setTimeout(function() {
	            d3.selectAll('#chart1 *').each(function() {
	              console.log('start',this.__transition__, this)
	              // while(this.__transition__)
	              if(this.__transition__)
	                this.__transition__.duration = 1;
	            })
	          }, 0)
	      })
	    // .each('end', function() {
	    //         d3.selectAll('#chart1 *').each(function() {
	    //           console.log('end', this.__transition__, this)
	    //           // while(this.__transition__)
	    //           if(this.__transition__)
	    //             this.__transition__.duration = 1;
	    //         })});

	  nv.utils.windowResize(chart.update);

	  // chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

	  return chart;
	});

}; // end makeGraph function


// start the entire process
window.addEventListener("DOMContentLoaded", function() {
  loadData();
}, false);