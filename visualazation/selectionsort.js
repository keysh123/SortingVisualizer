function generate() {
    x = slider.value;
    document.getElementById("holder").innerHTML="";
    document.getElementById("k1").innerHTML="-";
    document.getElementById("step").innerHTML="";
   
   
    for (let i = 0; i < x; i++) {
        const m = document.createElement("input");
        m.setAttribute("id", i);
        m.setAttribute("type", "number");
        m.setAttribute("class", "num");
    
        m.value=0;
        document.getElementById("holder").appendChild(m);
    }

}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function sorting() {
    b=1;

    console.log(x);
    arr = [];
    for (let i = 0; i < x; i++) {
        arr[i] = document.getElementById(i).value;
    }
    if(c==1){
        c=0;
        return;
    }
    setTimeout(sorting1, 1000);
}
async function sorting1() {
    document.getElementById("sort").setAttribute("disabled","true");
      
    if(c==1){
        c=0;
        return;
    }
    for (i = 0; i < x; i++){
   document.getElementById("k1").innerHTML=""+document.getElementById(i).value;
   document.getElementById("step").innerHTML="Considering min value as "+arr[i];
   document.getElementById(i).style.backgroundColor="blue";
   document.getElementById(i).style.borderRadius="30%";
   await sleep(2000);
    min_idx = i;
    if(c==1){
        c=0;
        return;
    }
    for (j = i+1; j < x; j++){
        if(c==1){
            c=0;
            return;
        }
        document.getElementById(j).style.fontSize="25px";
        document.getElementById("step").innerHTML="Comparing "+arr[i]+" with "+arr[j];
        document.getElementById(j).style.backgroundColor="pink";
        await sleep(500);
        document.getElementById(j).style.backgroundColor="white";
        await sleep(2000);
      if (arr[j] < arr[min_idx]) {
        document.getElementById("step").innerHTML="Updating min index"
      document.getElementById(min_idx).style.backgroundColor="white";
        min_idx = j;
        document.getElementById("k1").innerHTML=""+document.getElementById(j).value;
        document.getElementById(j).style.backgroundColor="blue";
        document.getElementById(j).style.fontSize="20px";
        if(c==1){
            c=0;
            return;
        }
       
}
else{
    if(c==1){
        c=0;
        return;
    }
    document.getElementById("step").innerHTML="Min value not to be updated"
    document.getElementById(j).style.fontSize="30px";
}
if(c==1){
    c=0;
    return;
}

await sleep(2000);
    }
   
       if(min_idx != i){
        if(c==1){
            c=0;
            return;
        }
        await sleep(2000);
        document.getElementById("step").innerHTML="Selected min value be placed"
          document.getElementById(i).style.backgroundColor="yellow";
          document.getElementById(min_idx).style.backgroundColor="yellow";
          await sleep(2000);
          temp=arr[i];
          arr[i]=arr[min_idx];
          arr[min_idx]=temp;
          document.getElementById(i).value=arr[i];
          document.getElementById(min_idx).value=arr[min_idx];
          document.getElementById(i).style.backgroundColor="white";
          document.getElementById(min_idx).style.backgroundColor="white";
          if(c==1){
            c=0;
            return;
        }
        await sleep(2000);
       }
       else{
        if(c==1){
            c=0;
            return;
        }
        document.getElementById("step").innerHTML=arr[i]+" is at its correct index"
        await sleep(2000);
       }
       if(c==1){
        c=0;
        return;
    }
       await sleep(1500);
       document.getElementById(i).style.borderRadius="50%";
       for(k=0;k<=i;k++){
        document.getElementById("step").innerHTML="Array sorted upto green color"
        document.getElementById(k).style.backgroundColor="lightgreen";
    }
    await sleep(2000);
       
}
b=0;
c=0;


}

