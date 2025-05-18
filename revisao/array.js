function editarArray(arr){
    arr.push(12); //add no final
    return arr
}
function inicio(arr){
    
    arr.unshift(12); //add no inicio

    return arr
}
function edit(arr){
    
    arr.pop(); //remove do final
    return arr
}
function fim(arr){
    
    arr.shift(); //remove do comeco
    return arr

}
 let arr = [23, 45, 33, 89];
 console.log(editarArray(arr));
 console.log(inicio(arr));
 console.log(edit(arr));
 console.log(fim(arr));