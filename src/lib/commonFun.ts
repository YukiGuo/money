import dayjs from 'dayjs';
 function getList(data: RecordItem[],year: number,month: number,type: string){
    const a= data
        .filter((t: RecordItem)=>t.type===type)
        .filter(t => dayjs(t.createdDate).year() === year)
        .filter(t => dayjs(t.createdDate).month() === month - 1);
    return a
}

function getPieList(data: RecordItem[]) {
        const pieData: {value: number;name: string}[] = [];
        pieData[0]= {value:data[0].amount,name:data[0].tag.name};
        for(let i=1;i<data.length;i++){
            const tags= pieData.map(t=>t.name);
            const name =data[i].tag.name;
            const index=tags.indexOf(name);
            if(index>=0){
                pieData[index].value+= data[i].amount;
            } else{
                pieData.push({value: data[i].amount,name:name})
            }
        }
        return pieData;

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
export {getList,getPieList,getTotal};