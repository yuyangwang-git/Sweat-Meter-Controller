const chartDom = document.getElementById('graph')
const myChart = echarts.init(chartDom)

function randomData(timeOffset = 0) {
    now = new Date().getTime() + timeOffset;
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            now,
            Math.round(value)
        ]
    };
}

let data = [];
let value = Math.random() * 1000;

for (var i = -60 * 10; i < 0; i++) {
    data.push(randomData(1000*i));
}

const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: 'Voltage',
            type: 'line',
            showSymbol: false,
            data: data
        }
    ]
};

setInterval(function () {
    data.shift();
    data.push(randomData());
    // console.log(data)
    myChart.setOption({
        series: [
            {
                data: data
            }
        ]
    });
}, 1000);

option && myChart.setOption(option);