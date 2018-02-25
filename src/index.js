module.exports = function check(str, bracketsConfig) {
    arrB = [];
    for(let i=0, l = str.length; i < l; i++){
        for (let j=0, lb = bracketsConfig.length; j < lb; j++){
           if((str[i] === bracketsConfig[j][0] && str[i] !== bracketsConfig[j][1])|
               (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1] && str[i]!==arrB[arrB.length-1])){
               arrB.push(str[i]);
               break;
           }else if(str[i] === bracketsConfig[j][1]){
                if(arrB[arrB.length-1] === bracketsConfig[j][0]){
                    arrB.splice(arrB.length-1,1);
                    break;
                } else {
                    return false;
                }
           }
        }
    }
    return !arrB.length;

}
