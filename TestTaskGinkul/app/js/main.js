(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('active');
    $('body').toggleClass('activ');
    return false;
	})
})();	


$(".settings").click(function () {
  $(".settings").toggleClass("clicked");
  $(".menu-right").toggleClass("show");
  $("body").toggleClass("overflow");
});

Highcharts.chart('cont', {
    chart: {
      type: 'area',
      color: '#fefefe',
      spacingLeft: 21,
      spacingBottom: 25,
      marginRight: 30,
      spacingTop: 30,
      height: 447,
      
    },
    title: {
      text: 'Динамика показателей за год',
      align: 'left',
      margin: 37,
       style: {
          color: '#4E8FF4',
          fontSize: "18px",
          fontWeight: 700,
       }
    },
    subtitle: {
      text: '(+5) больше в 2021',
      align: 'left',
        style: {
          color: '#68D391' 
        }
    },
    xAxis: {
      categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      labels: {
        y: 35
      }
    },
    yAxis: {
      gridLineColor: '#51515C',
      gridLineDashStyle: 'dash',
      max: 450,
      title: {
        text: false
      }
    },
    plotOptions: {
        series: {
            pointPlacement: 'on'
        },
        line: {
          dataLabels: {
            enabled: false
          },
        enableMouseTracking: false
      }
    },
    series: [{
      showInLegend: false,
      color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(23, 86, 155, 0.7)'],
            [1, 'rgb(100%, 100%, 100%, 0.2)']
          ]
        },
      lineColor: '#17569B',
      marker: {
        symbol: 'circle',
        fillColor: '#17569B'
      },
      data: [0, 190, 160, 240, 140, 290, 310, 400, 440, 360, 460, 500]
    }, {
      showInLegend: false,
      color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(104, 211, 145, 0.7)'],
            [1, 'rgb(100%, 100%, 100%, 0.2)']
          ]
        },
      lineColor: '#68D391',
      marker: {
        symbol: 'circle',
        fillColor: '#68D391'
      },
      data: [[0.3, 0], [1.5, 110], [2.8, 360], [3.9, 410], [5.1, 310], [6.1, 260], [7.4, 230], [8.8, 120], [9.9, 190], [11.0, 100]],   
    }]
});



//Graph 1

var solid1 = {

  chart: {
    type: 'solidgauge',
    spacingTop: 20,
    backgroundColor: '#FEFEFE'

  },
  
  title: {
    text: 'Смещение сроков реализации проекта на (мес)',
    style: {
        color: '#51515C',
        fontSize: "15px",
        fontWeight: 700,
        
     }
  },
  
  pane: {
    center: ['50%', '85%'],
    size: '170%',
    startAngle: -90,
    endAngle: 90,
    background: { 
      innerRadius: '80%',
      outerRadius: '100%',
      shape: 'arc'
    }
 
  },

  yAxis: {
    lineWidth: 0,
    minorTickInterval: null,
     tickColor: 'transparent',
    tickAmount: 0,
    labels: {
      y: 12
    }
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: -5,
        borderWidth: 0,
        useHTML: true
      },
      innerRadius: '100%'
    },
    gauge: {
      dial: {
        radius: '90%',
        backgroundColor: '#252230',
        baseWidth: 10,
        topWidth: 1,
        baseLength: '5%',
        rearLength: '1%'
      },
      dataLabels: {
        y: -5,
        borderWidth: 0,
        useHTML: true
      },
    }
    
  }
};

var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(solid1, {
  yAxis: {
    min: 0,
    max: 18,
    tickPositions: [0, 18],
    plotBands: [{
      from: 0,
      to: 9.5,
      color: '#4CD964',
      outerRadius: '100%',
      innerRadius: '80%'
    },{
      from: 9.5,
      to: 13.7,
      color: '#F8B407',
      outerRadius: '100%',
      innerRadius: '80%'
    },{
      from: 13.7,
      to: 18,
      color: '#FF3B30',
      outerRadius: '100%',
      innerRadius: '80%'
    }],
    labels: {
      align: 'center',
      distance: -10,
    }
  },

  credits: {
    enabled: false
  },

  series: [{
    name: 'Speed',
    data: [18],
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:15px;color:' +
        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || '#FF3B30') + '">{y}</span><br/>'
    },
    name: 'Arrow',
    type: 'gauge',
    data: [18]
  }]

}));
  

//Graph 2
var solid2 = {

  chart: {
    type: 'solidgauge',
    spacingTop: 20,
    backgroundColor: '#FEFEFE'

  },
  
  title: {
    text: 'Соблюдение бюджета проекта (%)',
    style: {
        color: '#51515C',
        fontSize: "15px",
        fontWeight: 700,
        
     }
  },
  
  pane: {
    center: ['50%', '85%'],
    size: '170%',
    startAngle: -90,
    endAngle: 90,
    background: { 
      innerRadius: '80%',
      outerRadius: '100%',
      shape: 'arc'
    }
     
  },

  yAxis: {
    lineWidth: 0,
    minorTickInterval: null,
     tickColor: 'transparent',
    tickAmount: 0,
    labels: {
      y: 12
    }
  },

  plotOptions: {
    solidgauge: {
      innerRadius: '100%'
    },
    gauge: {
      dial: {
        radius: '90%',
        backgroundColor: '#252230',
        baseWidth: 10,
        topWidth: 1,
        baseLength: '5%',
        rearLength: '1%'
      },
      dataLabels: {
        y: -5,
        borderWidth: 0,
        useHTML: true
      },
    }
  }
};

var chartRun = Highcharts.chart('container-run', Highcharts.merge(solid2, {
  yAxis: {
    min: 80,
    max: 150,
    tickPositions: [80, 150],
    plotBands: [{
      from: 80,
      to: 120,
      color: '#4CD964',
      outerRadius: '100%',
      innerRadius: '80%'
    },{
      from: 120,
      to: 134,
      color: '#F8B407',
      outerRadius: '100%',
      innerRadius: '80%'
    },{
      from: 134,
      to: 150,
      color: '#FF3B30',
      outerRadius: '100%',
      innerRadius: '80%'
    }],
    labels: {
      align: 'center',
      distance: -10,
    }
  },

  credits: {
    enabled: false
  },

  series: [{
    name: 'Run',
    data: [115],
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:15px;color:' +
        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || '#4CD964') + '">{y}</span><br/>'
    },
    name: 'Arrow',
    type: 'gauge',
    data: [115]
  }]

  
}));




const color = document.getElementById("color-picker");

color.addEventListener("onclick", function(){});

function fillPixel () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
var pix1 =document.getElementsByClassName("pix");
function reset(){
  for(var l=0; l< pix1.length; l++){
    pix1[l].removeAttribute("style");
  }
   document.getElementById("pix").removeAttribute("style");
}



Highcharts.setOptions({
  chart: {
      inverted: true,
      type: 'bullet',
      backgroundColor: 'rgba(198, 198, 212, 0.12)',
      events: {
        load() {
         
            const chart = this;
            const point = chart.series[0].points[0];
            const dataLabel = point.dataLabels[1];
            const target = point.targetGraphic;
            const y = dataLabel.translateY;
            const x = chart.yAxis[0].toPixels(point.target) - 40;
            dataLabel.translate(x, y)
          
    }
  },
    
    
  },
  title: {
      text: null
  },
  legend: {
      enabled: false
  },
  yAxis: {
      gridLineWidth: 0,
      min: -100,
      max: 30,
      labels: {
              enabled: false
       
          },
  },
  
  xAxis: {
      lineWidth: 0,
 minorGridLineWidth: 100,
 labels: {
     enabled: false
 },
 minorTickLength: 150,
 tickLength: 1,
    tickWidth: 2000
  
  },
  plotOptions: {
      series: {
          pointPadding: 0.15,
          borderWidth: 0,
          color: '#000',
          targetOptions: {
              width: 60,
            },
          dataLabels: [{
      enabled: true,
      inside: false
    }, {
      enabled: true,
      formatter() {
        return this.point.target
          },
      style:{
        color: "#f05000"
      }
    }],
      }
  },
  credits: {
      enabled: false
  },
  exporting: {
      enabled: false
  }
});
Highcharts.chart('container1', {
  chart: {
      marginTop: 40,
  },
  title: {
      text: null
  },
  xAxis: {
      categories: null
  },
  yAxis: {
      plotBands: [ {
          from: 0,
          to: -60,
          color: '#C6C6D4'
      }],
      title: null,
      opposite: true,
      labels: {
              enabled: true,
              y: -30
             
          },
  },
  series: [{
      data: [{
          y: 0,
          target: 0,
      }]
  }],
});
Highcharts.chart('container2', {
  chart: {
      marginTop: 10
  },
  title: {
      text: null
  },
  xAxis: {
      categories: null
  },
  yAxis: {
      plotBands: [{
          from: 0,
          to: 5,
          color: '#4CD964'
      }, {
          from: 0,
          to: -50,
          color: '#C6C6D4'
      }],
      title: null
  },
  series: [{
      data: [{
          y: 5,
          target: 0,
      }]
  }],
});
Highcharts.chart('container3', {
  chart: {
      marginTop: 10
  },
  title: {
      text: null
  },
  xAxis: {
      categories: null
  },
  yAxis: {
      plotBands: [{
          from: 0,
          to: 20,
          color: '#4CD964'
      }, {
          from: 0,
          to: -40,
          color: '#C6C6D4'
      }],
      title: null
  },
  series: [{
      data: [{
          y: 20,
          target: 0,
      }]
  }],
});

Highcharts.chart('container4', {
  chart: {
      marginTop: 10
  },
  title: {
      text: null
  },
  xAxis: {
      categories: null
  },
  yAxis: {
      plotBands: [{
          from: 0,
          to: 20,
          color: '#4CD964'
      }, {
          from: 0,
          to: -70,
          color: '#C6C6D4'
      }],
      title: null
  },
  series: [{
      data: [{
          y: 20,
          target: 0,
      }]
  }],
});

Highcharts.chart('container5', {
  chart: {
      marginTop: 10
  },
  title: {
      text: null
  },
  xAxis: {
      categories: null
  },
  yAxis: {
      plotBands: [{
          from: 0,
          to: -30,
          color: '#938FA0',
          zIndex: 1,
      }, {
          from: 0,
          to: -120,
          color: '#C6C6D4'
      }],
      title: null
  },
  series: [{
      data: [{
          y: -60,
          target: -50,
      }]
  }],
});

Highcharts.chart('container6', {
  chart: {
      marginTop: 10
  },
  title: {
      text: null
  },
  xAxis: {
      categories: null
  },
  yAxis: {
      plotBands: [{
          from: 0,
          to: 20,
          color: '#4CD964'
      }, {
          from: 0,
          to: -70,
          color: '#C6C6D4'
      }],
      title: null
  },
  series: [{
      data: [{
          y: 20,
          target: 0,
      }]
  }],
});


var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("footer__item-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}