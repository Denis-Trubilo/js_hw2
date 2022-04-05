//Массивы

//Задача 1

/*let arr1 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}*/

//Задача 2

/*let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < arr2.length; i++) {
    if (arr2[i] > -10 && arr2[i] < -3) {
        console.log(arr2[i]);
    }
}*/

//Задача 3

/*let arr3 = [];

//1 способ

for(let i = 23; i < 58; i++) {
    arr3.push(i);
}
console.log(arr3);*/

//2 способ

/*let arr4 = [];
let i = 23;

while(i < 58) {
    arr4.push(i);
    i++;
}
console.log(arr4);


let resault = 0;
for(let j = 0; j < arr4.length; j++) {
    resault += +arr4[j];
}
console.log(resault);*/

//Задача 4

/*let arr5 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr5.length; i++) {
    numArr = arr5[i];
    if (numArr[0] == 1 || numArr[0] == 2 || numArr[0] == 5) {
        console.log(numArr);
    }
}*/

//Задача 5

/*let arr6 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']; 

for (let i = 0; i < arr6.length; i++) {
    if (i < 4) {
        document.write(arr6[i] + '<br>');
    }
    else {
        document.write(arr6[i] + '<strong>' + '<br>');
    }
}*/

//Задача 6

/*let arr7 = ['5', 12, true, 'ПН'];

arr7[arr7.length] = 'Привет мир';
console.log(arr7);
console.log(arr7[arr7.length - 1]);*/

//Задача 7

/*let arr8 = [];
let i = 0;
let flag = true

while (flag) {
    let a = +prompt('Введите числовое значение');
    if (a != '' && !isNaN(a)) {
        arr8[arr8.length] = a;
    }else if(isNaN(a)) {
        alert('Ввели не число');
        continue
    }else {
        flag = !flag;
    } 
}
document.write(arr8 + '<br>');

arr8.sort(function(b, c){
    return b - c;
})
document.write(arr8);*/

//Задача 8

/*let arr9 = [12, false, 'Текст', 4, 2, -5, 0];
let i = 0;
let arrReverse = arr9.reverse();
while (i < arrReverse.length) {
    console.log(arrReverse[i]);
    i++;
}*/

//Задача 9
 
/*let arr10 = [5, 9, 21, , , 9, 78, , , , 6];
let sum = 0;
for(let i = 0; i < arr10.length; i++) {
    if (arr10[i] == undefined) {
        sum += 1;
    }
}
console.log(sum);*/

//Задача 10

/*let arr11 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let sum = 0;
let index1 = arr11.indexOf(0);
let index2 = arr11.lastIndexOf(0);

for(let i = index1 + 1; i < index2; i++) {
    sum += arr11[i];
}

console.log(sum);*/