function generate() {
    x = slider.value;
    document.getElementById("holder").innerHTML="";
    document.getElementById("step").innerHTML="";
    document.getElementById("p").innerHTML="-";

   
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
    document.getElementById("sort").setAttribute("disabled","true");
    setTimeout(sorting1, 1000);
}
async function sorting1() {
    
    quickSort(arr,0,x-1);


}
async function quickSort(arr, lb, ub) {
    if(ub<lb){
        return;
    }
    if(c==1){
        c=0;
        return;
    }
    document.getElementById("step").innerHTML="Array from "+lb+" to "+ub;
    await sleep(1000);
if (lb < ub) {
    for (let l = lb; l <= ub; l++) {
        if(c==1){
            c=0;
            return;
        }
        document.getElementById(l).style.borderRadius = "30%";
    }
    console.log(lb + "  " + ub);
    let left = lb;
    let key = arr[lb];
    if(c==1){
        c=0;
        return;
    }
    document.getElementById(lb).style.backgroundColor = "lightgreen";
    document.getElementById("p").innerHTML=key;
    document.getElementById("step").innerHTML="Pivot element "+arr[lb];
    if(c==1){
        c=0;
        return;
    }
    await sleep(2000);
    let right = ub + 1;
    if(c==1){
        c=0;
        return;
    }
    await sleep(2000);

    let flag = 1;
    while (flag) {
        if(c==1){
            c=0;
            return;
        }
        document.getElementById(left).style.borderColor = "black";
        left = left + 1;
       
        document.getElementById(left).style.backgroundColor = "yellow";
        document.getElementById(left).style.borderColor = "orange";
        document.getElementById("step").innerHTML="Now we will move till we will find element > "+key;
        await sleep(2000);

        while (parseFloat(arr[left]) <= key && left < ub) {
            if(c==1){
                c=0;
                return;
            }
            console.log("key "+key);
            document.getElementById(left).style.backgroundColor = "white";
            document.getElementById(left).style.borderColor = "black";
            left++;
            document.getElementById(left).style.borderColor = "orange";
            await sleep(500);
            if(left>ub){
                document.getElementById("step").innerHTML="Since left exceeds upperbound we stop!";
                break;
            }
            document.getElementById(left).style.backgroundColor = "yellow";
            if(c==1){
                c=0;
                return;
            }
            await sleep(4000);
        }
        if(c==1){
            c=0;
            return;
        }
        if(left<=ub && arr[left]>key){
        document.getElementById("step").innerHTML="Since "+arr[left]+" > "+key+" we stop!";
        }
        else if(left>=ub){
            document.getElementById("step").innerHTML="Since left exceeds upperbound we stop!";
        }
        if(c==1){
            c=0;
            return;
        }
        await  sleep(4000);
        if(c==1){
            c=0;
            return;
        }
        if(arr[right]!=null && right!=left){
        document.getElementById(right).style.borderColor = "black";
        }
        right = right - 1;
        document.getElementById(right).style.backgroundColor = "lightblue";
        if(right!=left){
       
        document.getElementById(right).style.borderColor = "blue";
        }
        if(c==1){
            c=0;
            return;
        }
        document.getElementById("step").innerHTML="For right Now we will move till we will find element < "+key;
        await sleep(4000);

        while (parseFloat(arr[right]) >=key && right > lb) {

            if(c==1){
                c=0;
                return;
            }
            document.getElementById(right).style.backgroundColor = "white";
            if(left!=right){
            document.getElementById(right).style.borderColor = "black";
            }
            right--;
            if(left!=right){
                document.getElementById(right).style.borderColor = "blue";
            }
            if(right<lb){
                document.getElementById(right).style.backgroundColor = "lightblue";
                break;
            }
            // if (left == right) {
            //     break;
            // }
            document.getElementById(right).style.backgroundColor = "lightblue";
            await sleep(2000);
        }
        if(c==1){
            c=0;
            return;
        }
        await sleep(2000);
        if (left < right) {
            if(c==1){
                c=0;
                return;
            }
            document.getElementById("step").innerHTML="Since "+arr[right]+" <= "+key+" we stop!";
            if(c==1){
                c=0;
                return;
            }
            await sleep(2000);
            document.getElementById("step").innerHTML="Now swapping left and right";
            if(c==1){
                c=0;
                return;
            }
            await sleep(2000);
             temp = arr[left];
            arr[left] = arr[right];
            document.getElementById(left).value = arr[left];
            arr[right] = temp;
            document.getElementById(right).value = arr[right];
            if(c==1){
                c=0;
                return;
            }
            await sleep(2000);
            document.getElementById(left).style.backgroundColor = "white";
            document.getElementById(right).style.backgroundColor = "white";
            if(c==1){
                c=0;
                return;
            }
            await sleep(2000);
        } else {
            if(c==1){
                c=0;
                return;
            }
            document.getElementById("step").innerHTML="Since we crossed left so now putting pivot element i.e. "+key+" to its correct position!";
            document.getElementById(left).style.backgroundColor = "white";
            document.getElementById(right).style.backgroundColor = "pink";
            if(c==1){
                c=0;
                return;
            }
            await sleep(2000);
            flag = 0;
            break;
        }
    }
    if(c==1){
        c=0;
        return;
    }

     temp = arr[right];
    arr[right] = arr[lb];
    document.getElementById(right).value = arr[right];
    arr[lb] = temp;
    document.getElementById(lb).value = arr[lb];
    document.getElementById(lb).style.backgroundColor = "white";
    if(c==1){
        c=0;
        return;
    }
    await sleep(2000);
    document.getElementById(right).style.backgroundColor = "red";
    if(c==1){
        c=0;
        return;
    }
    await sleep(2000);
    for (let l = lb; l <= ub; l++) {
        if(c==1){
            c=0;
            return;
        }
        document.getElementById(l).style.borderRadius = "50%";
    }
    if(c==1){
        c=0;
        return;
    }
    await sleep(2000);
    document.getElementById(right).style.borderColor = "black";
    document.getElementById(left).style.borderColor = "black";
    await quickSort(arr, lb, right - 1);
    await quickSort(arr, right + 1, ub);
} else {
    if (lb == ub) {
        if(c==1){
            c=0;
            return;
        }
        document.getElementById(lb).style.borderRadius="30%";
        if(c==1){
            c=0;
            return;
        }
        await sleep(2000);
        document.getElementById("step").innerHTML="Since size<=1 Sorted";
        if(c==1){
            c=0;
            return;
        }
        await sleep(2000);
        document.getElementById(lb).style.backgroundColor = "red";
        document.getElementById(lb).style.borderRadius="50%";
    }
}
}


