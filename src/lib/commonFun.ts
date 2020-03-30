import dayjs from 'dayjs';

function getList(data: RecordItem[], year: number, type: string, month?: number,) {
    let a;
    if(month===undefined){
        a = data
            .filter((t: RecordItem) => t.type === type)
            .filter(t => dayjs(t.createdDate).year() === year);
    }else {
        a = data
            .filter((t: RecordItem) => t.type === type)
            .filter(t => dayjs(t.createdDate).year() === year)
            .filter(t => dayjs(t.createdDate).month() === month - 1);
    }
    return a;
}

function getPieList(data: RecordItem[]) {
    const pieData: PieList = [];
    if (data.length<1){
        console.log('无数据');
        return [] as PieList
    }else{
    pieData[0] = {value: data[0].amount, name: data[0].tag.name};
    for (let i = 1; i < data.length; i++) {
        const tags = pieData.map(t => t.name);
        const name = data[i].tag.name;
        const index = tags.indexOf(name);
        if (index >= 0) {
            pieData[index].value += data[i].amount;
        } else {
            pieData.push({value: data[i].amount, name: name});
        }
    }
    }
    return pieData;

}
function barOrigin(interval: string) {
    const arr=[];
    if(interval==="year"){
        for(let i=1;i<=12;i++){
            arr.push({value:0,name:i+'月'})
        }
    }else if(interval==='month'){
        for(let i=1;i<=31;i++){
            arr.push({value:0,name:i.toString()})
        }
    }
    return arr
}

function getBarList(data: RecordItem[], interval: string) {////createDate
    const barList: BarList =barOrigin(interval);
    if (interval==='year') {
        for (let i = 1; i < data.length; i++) {
            const names = barList.map(t => t.name);
            const name = dayjs(data[i].createdDate).format('M月');
            const index = names.indexOf(name);
            if (index >= 0) {
                barList[index].value += data[i].amount;
            } else {
               console.log('错误')
            }
        }
    } else if (interval==='month') {
        for (let i = 1; i < data.length; i++) {
            const names = barList.map(t => t.name);
            const name = dayjs(data[i].createdDate).date().toString();
            const index = names.indexOf(name);
            if (index >= 0) {
                barList[index].value += data[i].amount;
            } else {
                console.log('错误')
            }
        }
    }
    return barList;
}

function getTotal(data: RecordItem[]) {
    data.reduce((sum, item) => {
        if (item.type === '-') {
            return sum - item.amount;
        } else {
            return sum + item.amount;
        }
    }, 0);
}

export {getList, getPieList, getTotal, getBarList};