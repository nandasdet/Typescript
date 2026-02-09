//forEach, map, reduce, some, every , filter

const subjectNames = ['maths','science','english','hindi','vedicmaths'];
for(let i in subjectNames){
    console.log(`subjectnames along with indexes ${i}` , subjectNames[i]);
}

console.log('printing elements using foreach method');

subjectNames.forEach((subject)=>{
    console.log(`${subject.toUpperCase()} `)
});

//map creates new array with the result of calling each and every element in an array

let data:number[]=[1,2,3,4,5];
let square=data.map((d)=>{
   return d*d;
   
})

console.log(square);

let marks=[1,2,3,4,5];
let doubleMarks=marks.map((m)=>m*2);
console.log(doubleMarks);

//filter function returns an array based on the condition
let filterData =data.filter((d)=>{
    if(d%2==0){
        return d;
    }
})

console.log("filter data is:",filterData);

let startWith=subjectNames.filter((s)=>{
    if(s.startsWith('m')){
        return s;
    }
})

console.log("subject name start with letter M", startWith);

//some function returns true if atleast one element satisfies the condition

let neagativeInfo=data.some((d)=>d<0);
console.log(neagativeInfo);


//every function returns true if all the elements inside the array satisfy the condition

let everyData=data.every((d)=>d%2==0);
console.log(everyData);

let gerterData=data.every((d)=>d>0);
console.log(gerterData);

let total=0;
let reduceData=data.reduce((total,d)=>total+d);
console.log(reduceData);