function generate() {
    x = slider.value;
    document.getElementById("holder").innerHTML="";
    document.getElementById("key").innerHTML="-";
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
    

    console.log(x);
    arr = [];
    for (let i = 0; i < x; i++) {
        arr[i] = document.getElementById(i).value;
    }
    if(c==1){
        c=0;
        document.getElementById("step").innerHTML="";
        return;
    }
    b=1;
    setTimeout(sorting1, 1000);

}
async function sorting1() {
    document.getElementById("sort").setAttribute("disabled","true");
    console.log("call");
    for (let i = 0; i < x; i++) {
        console.log(arr[i]);
    }
   
    if(c==1){
        c=0;
        document.getElementById("step").innerHTML="";
        return;
    }
    for (i = 1; i < x; i++) {
        if(c==1){
            c=0;
            document.getElementById("step").innerHTML="";
            return;
        }
        key = parseFloat(arr[i]);
        document.getElementById("step").innerHTML="Key is "+key;
        document.getElementById("key").innerHTML=""+key;
        j = i - 1;
        document.getElementById(i).style.backgroundColor="red";

        if(c==1){
            c=0;
            document.getElementById("step").innerHTML="";
            return;
        }
        await sleep(2000);
        while (j >= 0 && parseFloat(arr[j]) > key) {
            if(c==1){
                c=0;
                document.getElementById("step").innerHTML="";
                return;
            }
            document.getElementById("step").innerHTML="Since "+arr[j]+" is > "+key+" assigning its previous value";
            arr[j + 1] = arr[j];
            document.getElementById(j + 1).value = arr[j + 1];
            document.getElementById(j + 1).style.fontSize="35px";
            document.getElementById(j + 1).style.backgroundColor="skyblue";
          
            await sleep(2000);
          
            document.getElementById(j + 1).style.fontSize="30px";
            j = j - 1;
        }
        arr[j + 1] = key;
        if(c==1){
            c=0;
            document.getElementById("step").innerHTML="";
            return;
        }
        document.getElementById("step").innerHTML="Placing key at its correct position(inserting)";
        document.getElementById(j + 1).value = key;
        document.getElementById(j + 1).style.backgroundColor = "red";
        await sleep(1500);
        if(c==1){
            c=0;
            document.getElementById("step").innerHTML="";
            return;
        }
        document.getElementById(i).style.color="black";
        await sleep(2000);
        document.getElementById("step").innerHTML="Upto green they are sorted";
        for(k=0;k<=i;k++){
            if(c==1){
                c=0;
                document.getElementById("step").innerHTML="";
                return;
            }
            document.getElementById(k).style.backgroundColor="lightgreen";

        }
        if(c==1){
            c=0;
            document.getElementById("step").innerHTML="";
            return;
        }

        await sleep(2000);
    }
    document.getElementById("step").innerHTML="SORTED";
document.getElementById("key").innerHTML="-";
b=0;
c=0;
}

