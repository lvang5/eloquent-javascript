console.log("js");

// Your code here.

function countBs(str) {
    let counter = 0;
    if (typeof str != "string")
        return false;
    else
        for (let i = 0; i < str.length; i++) {
            if(str[i] == "B"){
                counter += 1;
            }
        }
        return counter;
}


function countChar(str, char){
      let counter = 0;
    if (typeof str != "string" && (typeof char != "string" && char.length != 1))
        return false;
    else
        for (let i = 0; i < str.length; i++) {
            if(str[i] == char){
                counter += 1;
            }
        }
        return counter;
  
}


console.log(countBs("BBCbB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4