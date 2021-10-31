anychart.onDocumentReady(function () {

  // data

  var dseymour = [
    {x: "Environment & Climate Change", value: 25},
    {x: "Law & Justice", value: 58},
    {x: "Infrastructure & \n Primary Industries", value: 82},
    {x: "Progressive \n Social Reform", value: 81},
    {x: "Education", value: 45},
    {x: "Māori Affairs", value: 26},
    {x: "Fiscal Conservatism", value: 93},
    {x: "Health", value: 44}
  ];

  // create radar chart
  var chart = anychart.radar();

  // set chart yScale settings
  chart.yScale()
    .minimum(0)
    .maximum(100)
    .ticks({'interval':10});

  // color alternating cells
  chart.yGrid().palette(["black 1"]);

  // configure the appearance of the y-axis
  chart.yAxis().enabled(false);

  chart.yGrid().stroke({
    color: "#FFE500",
    thickness: 2,
    opacity: 0.5,
  });

  // configure the appearance of the X-axis
  chart.xAxis().stroke({
    color: "#FFE500",
    thickness: 1,
  });

  var labels = chart.xAxis().labels();
  labels.enabled(true);
  labels.fontFamily("Charter");
  labels.fontSize(15);
  labels.fontColor("#000000");
  labels.fontWeight("bold");
  labels.useHtml(false);
  labels.hAlign("center");

  // background settings
  var xLabelsBackground = chart.xAxis().labels().background();
  xLabelsBackground.enabled(true);
  xLabelsBackground.stroke("#cecece");
  xLabelsBackground.cornerType("round");
  xLabelsBackground.corners(5);

  // create first series
  chart.area(dseymour).name('David Seymour').markers(false).fill("#FFE500", 0.5).stroke("#FFE500")

  // set container id for the chart
  chart.container('radar');
  // initiate chart drawing
  chart.draw();

});
