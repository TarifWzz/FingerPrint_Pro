/*Scroll up*/

let bbtn = document.getElementById("upp");

window.onscroll  = function()
{
    if(window.scrollY >= 600)
    {
      bbtn.style.display = "block";
    }
    else
    {
        bbtn.style.display = "none";
    }
}

bbtn.onclick  = function ()
{
    window.scrollTo({
        left :0,
        top: 0 ,
        behavior: "smooth"
    });
}


let s= "";
let a= "1112031584";

for(let i=1  ; i<a.length ; i++)
{
    console.log(a[i])
    if (a[i] %2 == a[i-1] %2) 
    {
        
        s += Math.max(a[i],a[i-1]);
        
    }
}

console.log(s);