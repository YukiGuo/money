const  m=[];
const y=[];
for (let i=1;i<=12;i++){
    m.push(i)
}
for(let j=1990;j<=2020;j++){
    y.push(j)
}
y.sort((a, b) => b-a);
const dateList={
    month:m,
    year:y,
};

export  default dateList;
