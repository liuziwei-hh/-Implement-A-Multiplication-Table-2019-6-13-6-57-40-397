function createMultiplyTable(col, row) {
    let statusCode = isValidParam(col, row);
    if(statusCode.isValid == false){
     return statusCode;
    }
       return getMultiplyTable(col, row);
   }
   
   function isValidParam(col, row) {
    let reg_float = /^(-?\d+)(\.\d+)?$/;
    let statusCode = {isValid: false, status: ""};
    if(col == null || row == null || col == undefined || col == undefined){
     statusCode.status = "有空值异常";
     return statusCode;
    }
    if(!reg_float.test(col) || !reg_float.test(row)){
     statusCode.status = "其他字符异常";
     return statusCode;
    }
    let reg_int = /^-?\d+$/ ;
    if(!reg_int.test(col) || !reg_int.test(row)){
     statusCode.status = "非整形异常";
     return statusCode;
    }
    let col_int = parseInt(col);
    let row_int = parseInt(row);
    if(col_int == 0 || row_int == 0){
     statusCode.status = "0值异常";
     return statusCode;
    }
    if(col_int < 0 || row_int < 0){
     statusCode.status = "有负数异常";
     return statusCode;
    }
    
    statusCode.isValid = true;
    return statusCode;
   }
   
   function getMultiplyTable(col, row) {
    let result = "";
    if(col > row){
     let temp = row;
     row = col;
     col = temp;
    }
    for(let i = 0; i <= (row - col); i++){
     for(let j = col; j <= (col + i); j++){
      let value = getMultiResult(j, (col + i));
      result = result + j + "*" + (col + i) + "=" + value;
      if(j != (col + i)){
       result += " ";
      }
     }
     if(i != (row - col)){
      result += "\r\n";
     }
    }
    return result;
   }
   
   function getMultiResult(param_a, param_b) {
    return param_a * param_b;
   }