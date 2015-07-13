
/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
  //if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.1 + Math.random()),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
      var a = [], i;
      for (i = 0; i < m; i++) a[i] =600 +Math.floor( 200 * Math.random());

      return a.map(stream_index); // [{x:1,y:600},{x:2,y:602},{x:3,y:603},....{x,16,y:616}]
    });

    //函数返回值为包含三个元素的数组,每个元素(又是一个数组)代表一门课程的16次得分 [ [{x:1,y:600},{x:2,y:602},{x:3,y:603},....{x,16,y:616}], [{x:1,y:600},{x:2,y:602},{x:3,y:603},....{x,16,y:616}], [{x:1,y:600},{x:2,y:602},{x:3,y:603},....{x,16,y:616}]  ]
}



function stream_index(d, i) {
  return {x: i+1, y: Math.max(0, d)};
}

