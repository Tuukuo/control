//Quiz 1.
//Write a program that takes in an array of numbers
// and consoles the first four items multiplied by itself  
//and the last two added by 10. Return the array with the 
//new values

let arr=[2,5,9,4,6,10];

function program(numbers){

    let newarr=[];

    for(let i=0 ; i<numbers.length; i ++){

        if(i<=4){
            let result=numbers[i]*numbers[i];
            newarr.push(result)
        }
        else{
        (i>=numbers.length)
            result=numbers[i] + 10;
            newarr.push(result)
        
    }
}
    return newarr;
}
console.log(program(arr));


//Quiz 2.
//Write a program that takes in the following array 
//and use a while loop to iterate and break when the item
// is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

let x=[1,2,3,4,5,6,7,8,9]
y=[]
function fourth(arrnums){
    let size=x.length
    let i=0

    while(i<size){
        if(y[i]===3){
            break;
        }
      else{
        console.log(arrnums[i]);
      }
      i++

    }
}
fourth(x)

//Quiz 3.
let fruits=['apple','plum','banana','strawberries','kiwi'];

function arrstrings(words){
    for (let index=0;index < words.length;index++){
        if(index===2){

            continue;

        } else{
            console.log(words[index]);
        }
    }
}
arrstrings(fruits);

//Qiz 4.
text=["Dorcas","Njeri","Tuukuo"]

function arra(str){
    for (let i=0;1<arra.length; i ++){
        console.log(arra[1])
    }
}
arra(text)

//Quiz 5
function reverse(text){
let q = true

while(q){
    console.log(text.split("").reverse().join(''))

    break;
}}
reverse("Nairobi")
