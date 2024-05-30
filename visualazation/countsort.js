function generate() {
    
  
    x = slider.value;
    document.getElementById("holder").innerHTML="";
    document.getElementById("step").innerHTML="";
    document.getElementById("info1").innerHTML="";
    document.getElementById("info2").innerHTML="";
   
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
    var zi = document.querySelectorAll(".temp1");
    if (zi.length > 0) {
        console.log("length " + zi.length);
        zi.forEach(function (element) {
            console.log("JJJ hu " + element.value+" n "+o);
            element.remove();
        });
    }

    var zi=document.getElementsByClassName("temp2");
    for(var o=0;o<zi.length;o++){
       console.log(" JJJ"+zi[o].value);
        zi[o].remove();
    }


   b=1;
   document.getElementById("info1").innerHTML="";
   document.getElementById("info2").innerHTML="";
   
    console.log(x);
    arr = [];
    for (let i = 0; i < x; i++) {
        arr[i] = document.getElementById(i).value;
    }
    if(c==1){
        document.getElementById("num2").style.display="none";
        document.getElementById("sort").removeAttribute("disabled");
        document.getElementById("num1").style.display="none";
        c=0;
        return;
    }
    document.getElementById("num1").style.display="flex";
    document.getElementById("sort").setAttribute("disabled","true");
    setTimeout(sorting1, 2000);
    
}
async function sorting1() {
    
    
    if(c==1){
        document.getElementById("num2").style.display="none";
        document.getElementById("num1").style.display="none";
        
            
    
        c=0;
        return;
    }

        max=arr[0];
        for(j=1;j<x;j++){
           if(arr[j]>max){
               max=arr[j];
           }
        }
        temp=[];
        sol=[];
        console.log("MM "+max);
        document.getElementById("info1").innerHTML="";
        document.getElementById("info2").innerHTML="";

    
        for (let i = 0; i <= max; i++) {
               const m = document.createElement("input");
               m.setAttribute("id", parseInt(i+parseInt(x)));
               m.setAttribute("type", "number");
               m.setAttribute("class", "temp1");
               document.getElementById("num1").appendChild(m);
           }
           if(c==1){
            document.getElementById("num2").style.display="none";
            document.getElementById("num1").style.display="none";

            c=0;
            return;
        }
         
           document.getElementById("info2").innerHTML="Creating temporary array of size "+(parseInt(max)+1);
           await sleep(2000);
           document.getElementById("info2").innerHTML="initializing with 0";
           await sleep(1000);
       for(j=0;j<=max;j++){
           temp[j]=0;
           // console.log("HOOO "+j+" "+(parseInt(x)+parseInt(j)));
           document.getElementById((parseInt(x)+parseInt(j))).value="0";
           // sol[j]=0;
           // document.getElementById(parseInt(x)+parseInt(j)+parseInt(x)).value="0";
       } 
       if(c==1){
        document.getElementById("num2").style.display="none";
        document.getElementById("num1").style.display="none";
        c=0;
        return;
    }
   
       for(j=0;j<x;j++){
           document.getElementById(j).style.backgroundColor="lightblue";
           document.getElementById("info2").innerHTML="incrementing index "+arr[j]+" of temp array";
           await sleep(2000);
           if(c==1){
            document.getElementById("num2").style.display="none";
            document.getElementById("num1").style.display="none";
           
            c=0;
            return;
        }
          temp[arr[j]]=parseInt(temp[arr[j]])+1;
          document.getElementById(parseInt(parseInt(x)+parseInt(arr[j]))).style.backgroundColor="pink";
          await sleep(700);
           document.getElementById(parseInt(parseInt(x)+parseInt(arr[j]))).value=temp[arr[j]];
           await sleep(500);
           document.getElementById(parseInt(parseInt(x)+parseInt(arr[j]))).style.backgroundColor="white";
           await sleep(2000);
           document.getElementById(j).style.backgroundColor="white";
           if(c==1){
            document.getElementById("num2").style.display="none";
            document.getElementById("num1").style.display="none";
         
            return;
        }
       }
       document.getElementById("info2").innerHTML="Calculating cumilative sum";
       await sleep(2000);
       for ( i = 1; i <= max; i++) {
        if(c==1){
            document.getElementById("num2").style.display="none";
            document.getElementById("num1").style.display="none";
            
            c=0;
            return;
        }
           document.getElementById(parseInt(parseInt(x)+parseInt(i))-1).style.backgroundColor="yellow";
           document.getElementById(parseInt(parseInt(x)+parseInt(i))).style.backgroundColor="yellow";
           document.getElementById("info2").innerHTML="Now "+temp[i-1]+" + "+temp[i]+" = "+(parseInt( temp[i - 1])+parseInt(temp[i]));
       temp[i] = parseInt( temp[i - 1])+parseInt(temp[i]);
      
       await sleep(2000);
   
       document.getElementById(parseInt(parseInt(x)+parseInt(i))).value=temp[i];
       await sleep(1000);
       document.getElementById(parseInt(parseInt(x)+parseInt(i))-1).style.backgroundColor="white";
           document.getElementById(parseInt(parseInt(x)+parseInt(i))).style.backgroundColor="white";
          
     }
     document.getElementById("num2").style.display="flex";
     zi=document.getElementsByClassName("temp2");
        for(i=0;i<zi.length;i++){
            zi[i].remove();
        }
     for (let i = 0; i < x; i++) {
        if(c==1){
            document.getElementById("num2").style.display="none";
            document.getElementById("num1").style.display="none";
            
            c=0;
            return;
        }
               const m = document.createElement("input");
               m.setAttribute("id", parseInt(i+parseInt(x)+parseInt(max)+1));
               m.setAttribute("type", "number");
               m.setAttribute("class", "temp2");
               document.getElementById("num2").appendChild(m);
           }
           for(j=0;j<x;j++){
           sol[j]=0;
           
           document.getElementById(parseInt(parseInt(parseInt(x)+parseInt(max))+parseInt(j)+1)).value="0";
       }
     document.getElementById("info2").innerHTML="";
     document.getElementById("info1").innerHTML="Now placing Elements at correct position!"
     await sleep(2000);
       for(i=x-1;i>=0;i--){
        if(c==1){
            document.getElementById("num2").style.display="none";
            document.getElementById("num1").style.display="none";
           
            c=0;
            return;
        }
           document.getElementById("info1").innerHTML="Finding correct position of "+arr[i];
           document.getElementById(parseInt(parseInt(x)+parseInt(temp[parseInt(arr[i])])+parseInt(max))).style.backgroundColor="red";
           await sleep(500);
           sol[temp[parseInt(arr[i])]-1]=arr[i];
      
           document.getElementById(parseInt(parseInt(x)+parseInt(temp[parseInt(arr[i])])+parseInt(max))).value= sol[temp[parseInt(arr[i])]-1];
           await sleep(2000);
           temp[parseInt(arr[i])]=parseInt(temp[(parseInt(arr[i]))])-1;
       }

       for( i=0;i<x;i++){
        if(c==1){
            document.getElementById("num2").style.display="none";
            document.getElementById("num1").style.display="none";
            
            c=0; 
            return;
        }
        arr[i]=sol[i];
        document.getElementById(i).value=arr[i];
       }
       
   for(i=0;i<x;i++){
       console.log("s "+sol[i]);
   }
   document.getElementById("num1").style.display="none";
   document.getElementById("num2").style.display="none";
   document.getElementById("sort").removeAttribute("disabled");
   b=0;
c=0;
   }
       
   
       
   




