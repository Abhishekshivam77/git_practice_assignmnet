let N = 6;
let str = nrupul;

for(i=0;i<=N-1;i++){
    for(j=(N-1); j>=0; j--){
        if(str[j]==str[i]){
            x = true;
        }
        else{
            x= false;
        }
    }
} if(x===true){
    console.log("Yes");
} else{
    console.log("No");
}
 