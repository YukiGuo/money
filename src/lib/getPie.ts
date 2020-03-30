function getPie(data: PieList){
    return{
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name: '分类统计',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                labelLine:{
                    show: true
                },
                label: {
                    normal: {
                        show: true,
                        smooth:true,
                        formatter: '{b} {c}'
                }},
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                data:data
            }
        ]
    };
}
export  default getPie