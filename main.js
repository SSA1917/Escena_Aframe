/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//hacer menu para navegar sobre los temas de interes

function Gordo (D2){
    return console.log(D2);
}

const Gordo1 = (D2) =>{
    return console.log(D2);
};

Gordo(1);
Gordo1(2);

//callback

function Suma(A1){
    return A1*2;
}
function calc(A1,callback){
    return callback(A1);
}
console.log(calc(2,Suma));



const gordo = () =>{
    return new Promise ((resolve,reject) => {
        
    });
};
