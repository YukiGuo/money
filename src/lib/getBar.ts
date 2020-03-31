function getBar(data: BarList) {
    return {
        xAxis: {
            type: 'category',
            data: data.map(t => t.name),
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    color: '#ccc',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#c3c3c3'
                }
            },
            axisLabel: {
                interval: 0,
                color: '#333',
                fontSize: 6
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            show: false,
        },
        series: [{
            data: data.map(t => t.value),
            type: 'bar',
            barWidth: 4,
            itemStyle: {
                color: '#E44E4E'
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 8,
                color: '#E44E4E',
                formatter: function (params: { value: number }) {
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                }
            }
         }]
     }
}
    export default getBar;
