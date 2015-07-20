nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .transitionDuration(350)
            .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
            .rotateLabels(0)      //Angle to rotate x-axis labels.
            .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
            .groupSpacing(0.3)    //Distance between each group of bars.
            .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
            .showValues(true)


        ;

//    chart.xAxis
//        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',f'));

    d3.select('#chart1 svg')
        .datum(exampleData())
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});

d3.selectAll(".menu_item")
    .on("click", function() {
        nv.addGraph(function() {
            var chart = nv.models.multiBarChart()
                    .transitionDuration(350)
                    .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                    .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                    .groupSpacing(0.5)    //Distance between each group of bars.
                ;

            chart.xAxis
                .tickFormat(d3.format(',f'));

            chart.yAxis
                .tickFormat(d3.format(',f'));

            d3.select('#chart1 svg')
                .datum(exampleData())
                .call(chart);

            nv.utils.windowResize(chart.update);

            return chart;
        });

    });

//Generate some nice data.
function exampleData() {

    return data_example;
  return stream_layers(3,16,0).map(function(data, i) {
//stream_layers 返回值为//函数返回值为包含三个元素的数组,每个元素(又是一个数组)代表一门课程的16次得分
// [
//  [{x:1,y:600},{x:2,y:602},{x:3,y:603},....{x,16,y:616}],
//  [{x:1,y:500},{x:2,y:502},{x:3,y:303},....{x,16,y:346}],
//  [{x:1,y:500},{x:2,y:462},{x:3,y:553},....{x,16,y:436}]
// ]
//
//
      var course_name="";
      switch (i) {
          case 0:
              course_name="阅读";
              break;
          case 1:
              course_name="语法";
              break;
          case 2:
              course_name="数学";
              break;
      }
    return {
      key: course_name,
      values: data
    };
  });
    //exampleData 函数返回值为
    // [
    //      {key: "阅读",values: [{x:1,y:600},{x:2,y:602},{x:3,y:603},....{x,16,y:616}] } ,
    //      {key: "zzz",values: [{x:1,y:500},{x:2,y:502},{x:3,y:303},....{x,16,y:346}] } ,
    //      {key: "数学",values: [{x:1,y:600},{x:2,y:602},{x:3,y:603},....{x,16,y:616}] }

    // ]
}
