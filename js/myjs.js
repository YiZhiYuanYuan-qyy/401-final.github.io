function Nextpic() {
  var value = document.getElementById("inputValueID").value;
  return "image/value.png";
}

function Nextpic1() {
  var value1 = document.getElementById("inputValueID1").value;
  return "image/value1.png";
}

function dataColumns() {
    const dataset = get_data()
    const nameset = get_name()
    var value = document.getElementById("inputValueID").value;
    var value1 = document.getElementById("inputValueID1").value;
    myColumns = {};
    myColumns['columns'] = ['HP','Attack','Defense','Sp.Atk','Sp.Def','Speed'];
    // Text Controller
    myColumns['data'] = dataset[nameset.indexOf(value)]
    myColumns['data1'] = dataset[nameset.indexOf(value1)]
    draw(myColumns)
    return myColumns;
    // var arr = document.getElementsByTagName('button');
    // for (var i = 0; i < arr.length; i++) {
    //     arr[i].onclick = function () {
    //         if (this.id == 'data_one') {
    //             myColumns['data'] = dataset[0];   // Data1
    //             draw(myColumns);
    //         } else if (this.id == 'data_two') {
    //             myColumns['data'] = [12, 17, 15, 20, 23];   // Data2
    //             draw(myColumns);
    //         }
    //     };
    // }
    // console.log(myColumns);
    // return myColumns;
}

// choose color according to properties
// var typecolor = {'Bug':'#A8B820','Dark': '#705848','Dragon': '#7038F8','Electric':'#F8D030',
// 'Fairy':'#EE99AC','Fighting':'# C03028','Fire':'#F08030','Flying':'#A890F0','Ghost':'#705898','Grass':'#78C850',
// 'Ground':'#E0C068','Ice':'#98D8D8','Normal':'#A8A878','Poison':'#A040A0','Psychic':'#F85888','Rock':'#B8A038',
// 'Steel':'#B8B8D0','Water':'#6890F0'}


myColumns = dataColumns();

function draw(myColumns) {
    var typecolor = {'Bug':'#A8B820','Dark': '#705848','Dragon': '#7038F8','Electric':'#F8D030',
  'Fairy':'#EE99AC','Fighting':'# C03028','Fire':'#F08030','Flying':'#A890F0','Ghost':'#705898','Grass':'#78C850',
  'Ground':'#E0C068','Ice':'#98D8D8','Normal':'#A8A878','Poison':'#A040A0','Psychic':'#F85888','Rock':'#B8A038',
  'Steel':'#B8B8D0','Water':'#6890F0'};
    let myChart = echarts.init(document.getElementById('new_line'));
    myChart.clear();

    var value = document.getElementById("inputValueID").value;
    var value1 = document.getElementById("inputValueID1").value;

    // Config and Data
    var option = {
    backgroundColor: '#222',
    // Background Color，Default: No Background    rgba(51,255,255,0.7)
    // title: {
    //     text: 'Pokemen',
    //     // link:
    //     target: 'blank',
    //     top: '0%',
    //     left: '3%',
    //     textStyle: {
    //         color: 'rgba(255,255,255,1)',
    //         fontSize: 20,
    //     }
    // },

    legend: { // Legends
        show: true,
        icon: 'rect',
        // 图例项的 icon。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'也可以通过 'image://url' 设置为图片，其中 url 为图片的链接，或者 dataURI。可以通过 'path://' 将图标设置为任意的矢量路径。
        top: '35%',
        // 图例距离顶部边距
        left: '65%',
        // 图例距离左侧边距
        itemWidth: 10,
        // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 10,
        // 图例标记的图形高度。[ default: 14 ]
        itemGap: 30,
        // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        orient: 'vertical',
        color:'rgba(255,255,255,1)',
        // 图例列表的布局朝向,'horizontal'为横向,''为纵向.
        textStyle: { // 图例的公用文本样式。
            fontSize: 20,
            color: 'rgba(255,255,255,1)'
        },
        data: [{ // 图例的数据数组。数组项通常为一个字符串，每一项代表一个系列的 name（如果是饼图，也可以是饼图单个数据的 name）。图例组件会自动根据对应系列的图形标记（symbol）来绘制自己的颜色和标记，特殊字符串 ''（空字符串）或者 '\n'（换行字符串）用于图例的换行。
            name: value,
            // 图例项的名称，应等于某系列的name值（如果是饼图，也可以是饼图单个数据的 name）。
            icon: 'rect',
            // 图例项的 icon。
            textStyle: { // 图例项的文本样式。
                color: 'rgba(255,255,255,1)',
                fontWeight: 'bolder' // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
            }
        },
        {name: value1,
        // 图例项的名称，应等于某系列的name值（如果是饼图，也可以是饼图单个数据的 name）。
        icon: 'rect',
        // 图例项的 icon。
        textStyle: { // 图例项的文本样式。
            color: 'rgba(255,255,255,1)',
            fontWeight: 'bolder' // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
        }
      }

      ],
    },

    radar: [{ // Radar Components Only apply to radar chart
        center: ['30%', '50%'],
        // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: 200,
        // 圆的半径，数组的第一项是内半径，第二项是外半径。
        startAngle: 90,
        // 坐标系起始角度，也就是第一个指示器轴的角度。[ default: 90 ]
        name: { // (圆外的标签)雷达图每个指示器名称的配置项。
            formatter: '{value}',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: 'rgba(255,255,255,1)'
            }
        },
        nameGap: 15,
        // 指示器名称和指示器轴的距离。[ default: 15 ]
        splitNumber: 4,
        // (这里是圆的环数)指示器轴的分割段数。[ default: 5 ]
        shape: 'circle',
        // 雷达图绘制类型，支持 'polygon'(多边形) 和 'circle'(圆)。[ default: 'polygon' ]
        axisLine: { // (圆内的几条直线)坐标轴轴线相关设置
            lineStyle: {
                color: '#fff',
                // 坐标轴线线的颜色。
                width: 1,
                // 坐标轴线线宽。
                type: 'solid',
                // 坐标轴线线的类型。
            }
        },
        splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
            lineStyle: {
                color: '#fff',
                // 分隔线颜色
                width: 2,
                // 分隔线线宽
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgba(250,250,250,0.5)', 'rgba(200,200,200,0.5)'],
                // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        indicator: [{ // 雷达图的指示器，用来指定雷达图中的多个变量（维度）,跟data中 value 对应
            name: myColumns.columns[0],

            // 指示器名称
            max: 200,
            // 指示器的最大值，可选，建议设置
            color: 'rgba(255,255,255,1)' // 标签特定的颜色。
        },
        {
            name: myColumns.columns[1],
            max: 200,
            color: 'rgba(255,255,255,1)'
        },
        {
            name: myColumns.columns[2],
            max: 200,
            color: 'rgba(255,255,255,1)'
        },
        {
            name: myColumns.columns[3],
            max: 200,
            color: 'rgba(255,255,255,1)'
        },
        {
            name: myColumns.columns[4],
            max: 200,
            color: 'rgba(255,255,255,1)'
        },
        {
            name: myColumns.columns[5],
            max: 200,
            color: 'rgba(255,255,255,1)'
        }]
    }],
    series: [{
        name: 'radarchart',
        // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        type: 'radar',
        // 系列类型: 雷达图
        itemStyle: {
          color:'#9F79EE',// 折线拐点标志的样式。
            normal: { // 普通状态时的样式
                lineStyle: {
                    width: 1
                },
                opacity: 0
            },
            emphasis: {
              color:'#9F79EE',
              // 高亮时的样式
                lineStyle: {
                    width: 0.1
                },
                opacity:1
            }
        },
        data: [
        {
            name: value,
            value: myColumns.data,
            symbol: 'circle',
            symbolSize: 5,
            label: {
                emphasis: {
                    show: true,
                    position:  'top',
                    distance: 5,
                    color: 'rgba(255,255,255,1)',
                    fontSize: 14,
                    formatter: function(params) {
                        return params.value;
                    }
                }
            },
            itemStyle: {

                normal: {
                    borderColor: '#9F79EE',
                    borderWidth: 3,
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            areaStyle: {
                normal: {
                    color: '#9F79EE',
                }
            }
        }]
    },
    {name: 'radarchart',
    // 系列名称,用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
    type: 'radar',
    // 系列类型: 雷达图
    itemStyle: {
      color: '#FFC1C1',// 折线拐点标志的样式。
        normal: { // normal
            lineStyle: {
                width: 1
            },
            opacity: 0
        },
        emphasis: {
          color: '#FFC1C1', // Highlight
            lineStyle: {
                width: 0.1
            },
            opacity: 1
        }
    },
    data: [
    {
        name: value1,
        value: myColumns.data1,
        symbol: 'circle',
        symbolSize: 5,
        label: {
            emphasis: {

                show: true,
                position:  'top',
                distance: 5,
                color: 'rgba(255,255,255,1)',
                fontSize: 14,
                formatter: function(params) {
                    return params.value;
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#FFC1C1',
                borderWidth: 3,
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.5
            }
        },
        areaStyle: {
            normal: {
                color: '#FFC1C1',
            }
        }
    }]
}
    ]
};

    // Display charts using the configuration items and data just specified
    myChart.setOption(option, true);
}

draw(myColumns);
