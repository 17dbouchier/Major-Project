anychart.onDocumentReady(function () {

  // data
  var jardern = [
    {x: "Environment & Climate Change", value: 77},
    {x: "Law & Justice", value: 47},
    {x: "Infrastructure & Primary Industries", value: 52},
    {x: "Progressive Social Reform", value: 100},
    {x: "Education", value: 77},
    {x: "Maori Affairs", value: 70},
    {x: "Fiscal Conservatism", value: 38},
    {x: "Health", value: 87}
  ];

  var jcollins = [
    {x: "Environment & Climate Change", value: 71},
    {x: "Law & Justice", value: 76},
    {x: "Infrastructure & Primary Industries", value: 86},
    {x: "Progressive Social Reform", value: 80},
    {x: "Education", value: 58},
    {x: "Maori Affairs", value: 34},
    {x: "Fiscal Conservatism", value: 83},
    {x: "Health", value: 63}
  ];

  var dseymour = [
    {x: "Environment & Climate Change", value: 25},
    {x: "Law & Justice", value: 58},
    {x: "Infrastructure & Primary Industries", value: 82},
    {x: "Progressive Social Reform", value: 81},
    {x: "Education", value: 45},
    {x: "Maori Affairs", value: 26},
    {x: "Fiscal Conservatism", value: 93},
    {x: "Health", value: 44}
  ];

  var jshaw = [
    {x: "Environment & Climate Change", value: 98},
    {x: "Law & Justice", value: 40},
    {x: "Infrastructure & Primary Industries", value: 53},
    {x: "Progressive Social Reform", value: 91},
    {x: "Education", value: 75},
    {x: "Maori Affairs", value: 70},
    {x: "Fiscal Conservatism", value: 15},
    {x: "Health", value: 89}
  ];

  var rwaititi = [
    {x: "Environment & Climate Change", value: 59},
    {x: "Law & Justice", value: 40},
    {x: "Infrastructure & Primary Industries", value: 47},
    {x: "Progressive Social Reform", value: 74},
    {x: "Education", value: 71},
    {x: "Maori Affairs", value: 100},
    {x: "Fiscal Conservatism", value: 23},
    {x: "Health", value: 87}
  ];

  // create radar chart
  var chart = anychart.radar();

  // set chart yScale settings
  chart.yScale()
    .minimum(0)
    .maximum(100)
    .ticks({'interval':10});

  // color alternating cells
  chart.yGrid().palette(["gray 0.1", "gray 0.2"]);

  // create first series
  chart.area(dseymour).name('David Seymour').markers(true).fill("#FFE500", 0.2).stroke("#FFE500")
  // create second series
  chart.area(jardern).name('Jacinda Ardern').markers(false).fill("#D82C20", 0.2).stroke("#D82C20")
  // create third series
  chart.area(jshaw).name('James Shaw').markers(false).fill("#09BB00", 0.2).stroke("#09BB00")
  // create fourth series
  chart.area(jcollins).name('Judith Collins').markers(false).fill("#7B8CFF", 0.2).stroke("#7B8CFF")
  // create fifth series
  chart.area(rwaititi).name('Rawiri Waititi').markers(false).fill("#970000", 0.2).stroke("#970000")

  // set container id for the chart
  chart.container('radar');
  // initiate chart drawing
  chart.draw();

});
