rows=+prompt("enter the NO of rows:")
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows;j++){
        if(i==j){
            res=res+i+" "
        }
        else if(i+j==rows+1){
            res=res+j+" "
        }
        else{
            res=res+"  "
        }
    }
    console.log(res)
}
//       ANS:
//    enter the NOof rows:5
// 1       5 
//   2   4   
//     3     
//   2   4   
// 1       5 

str="10kcoders"
rows=1,ind=0
while(str[ind]!==undefined){
    res=""
    for(i=1;i<=rows;i++){
        if(str[ind]==undefined){
            res=res+"* "
        }
        else{
            res=res+str[ind]+" "
            ind++
        }
    }
    console.log(res)
    rows++
    
}

// 1 
// 0 k 
// c o d 
// e r s *