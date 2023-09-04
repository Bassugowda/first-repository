const btn=document.querySelectorAll("button");

btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        let mon=document.querySelector(".monitor");
        mon.innerHTML+=button.innerHTML;
       
    })
})