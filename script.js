// 1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin.
// ???????????????????????????????????????


// Task 2
// Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin
// let eded = prompt('ededi daxil edin:')
//         let quvvet = prompt('quvveti daxil edin:')

//         console.log(Math.pow(eded, quvvet));








// Task 3
// 1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin.
// let cem = 0
// for (let i = 0; i < 1000; i++) {
//     if (i % 11 === 0 || i % 111 === 0) {
//         cem=cem+i
//     }

// }
// console.log(cem);





// Task 4
// Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.
// const arr = [20, 35, 42, 30, 37]
// let eb = 0
// for (let i = 0; i < arr.length; i++) {
//     if (eb < arr[i] && arr[i] % 2 === 0) {
//         eb = arr[i]

//     }

// }
// console.log(eb);



// Task 5
// Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.
// const arr = [24, 21, 13, 41, 57]
// let ek = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (ek > arr[i] && arr[i] % 2 === 1) {
//         ek = arr[i]


//     }


// }
// console.log(ek);




// Task 6
// Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.
// const arr = [30, 37, 25, 12, 73]
// let num = 0
// let snum=0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 || arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0) {
//         num = num + 1

//     } else {
// snum=snum+1
//     }

// }
// console.log(`murekkeb eded sayi: ${num}`);
// console.log(`sade eded sayi: ${snum}`);




// Task 7
// Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.
// let arr = [4, 34, 4, 54, 2, 343, 22]

// let kicik = arr[0]
// let boyuk = arr[0]
// let cem = 0
// for (let i = 0; i < arr.length; i++) {
//     if (kicik > arr[i]) {
//         kicik = arr[i]
//     }
//     else if (boyuk < arr[i]) {
//         boyuk = arr[i]
//     }
//     cem += arr[i]
// }
// let orta = cem / arr.length

// if (orta < kicik + boyuk) {
//     console.log('min+max ededi ortadan boyukdur')
// } else console.log('min+max ededi ortadan kicikdir')

// console.log(`kicik eded + boyuk eded: ${ boyuk + kicik}`);
// console.log(`ededi orta: ${ orta }`);




// Task 8
// Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.
// let promt1 = prompt('ededi daxil edin:')
//         let boyuk  = promt1[0]
//         for (let i = 0; i < promt1.length; i++) {
//             if (boyuk < +promt1[i]) {
//                 boyuk = promt1[i]
//             }
//         }
//         console.log(boyuk);






