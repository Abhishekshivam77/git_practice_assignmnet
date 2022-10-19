let str = "oppo";

for(i=0; i<=str.length-1; i++){
    for(j=str.length-1; j>=0; j--){
        if(str[j]==str[i]){
            x = true;
        }
      else{
        x= false;
      }
    }
} 
if(x == true){
    console.log("Yes");
} else{
    console.log("No");
}
 