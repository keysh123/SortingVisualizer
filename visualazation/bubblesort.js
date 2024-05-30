function generate() {
    x = slider.value;
    document.getElementById("holder").innerHTML="";
    document.getElementById("step").innerHTML="";
    document.getElementById("comparison").innerHTML="0";
    document.getElementById("swap").innerHTML="0";
    document.getElementById("sort").removeAttribute("disabled");
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
    c=document.getElementById("comparison");
    s=document.getElementById("swap");
   b=1;

    s.value=0;
    c.value=0;
    
    console.log(x);
    arr = [];
    for (let i = 0; i < x; i++) {
        arr[i] = document.getElementById(i).value;
    }
    if(c==1){
        document.getElementById("step").innerHTML="";
        return;
    }
    setTimeout(sorting1, 1000);
}
async function sorting1() {
    document.getElementById("sort").setAttribute("disabled","true");
    // console.log("call");
    // for (let i = 0; i < x; i++) {
    //     console.log(arr[i]);
    // }
    c.innerHTML="0";
    s.innerHTML="0";
    if(c==1){
        document.getElementById("step").innerHTML="";
        return;
    }
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x - 1 - i; j++) {
            if(c==1){
                document.getElementById("step").innerHTML="";
                return;
            }
            let num1 = parseInt(arr[j]);
            let num2 = parseInt(arr[j + 1]);
            document.getElementById(j).style.backgroundColor = "yellow";
            document.getElementById(j + 1).style.backgroundColor = "yellow";
            // document.getElementById(j + 1).style.textAlign = "center";
            // document.getElementById(j).style.textAlign = "center";
            document.getElementById(j).style.fontSize = "25px";
            document.getElementById(j + 1).style.fontSize = "25px";
            document.getElementById("step").innerHTML="Comparing "+arr[j]+" & "+arr[j+1];
            c.innerHTML=parseInt(c.innerHTML)+1;
            await sleep(2000);
            if (num1 > num2) {
                if(c==1){
                    document.getElementById("step").innerHTML="";
                    return;
                }
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                document.getElementById("step").innerHTML="Since "+arr[j]+" < "+arr[j+1]+" swap!";
                document.getElementById(j).value = arr[j];
                document.getElementById(j + 1).value = arr[j + 1];
                document.getElementById(j).style.backgroundColor = "green";
                document.getElementById(j + 1).style.backgroundColor = "green";
                s.innerHTML=parseInt(s.innerHTML)+1;
                await sleep(2000);
            } 
            else{
                if(c==1){
                    document.getElementById("step").innerHTML="";
                    return;
                }
                document.getElementById("step").innerHTML="Since "+arr[j]+" < "+arr[j+1]+" no swap!";
                await sleep(2000);
            }
            document.getElementById(j).style.backgroundColor = "white";
            document.getElementById(j + 1).style.backgroundColor = "white";
       
            document.getElementById(j).style.fontSize = "20px";
            document.getElementById(j + 1).style.fontSize = "20px";
        
            console.log(arr);
            await sleep(1000);
        }
        if(c==1){
            document.getElementById("step").innerHTML="";
            return;
        }
        document.getElementById(x - i - 1).style.backgroundColor = "red";
        document.getElementById("step").innerHTML="Pass "+(i+1)+" is completed "+arr[x-i-1]+" is at correct position";
        document.getElementById(x - i - 1).style.color = "white";
        document.getElementById(x - i - 1).style.textAlign = "center";
        await sleep(2000);
    }
    document.getElementById("step").innerHTML="SORTED!!";
    document.getElementById("sort").removeAttribute("disabled");

b=0;
c=0;
}

