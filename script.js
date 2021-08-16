let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let taskbar2 = document.getElementsByClassName("taskbar2")[0]
taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
startmenu.addEventListener("click", ()=>{
    console.log("clicked");
    if(taskbar2.style.bottom == "50px"){
        taskbar2.style.bottom = "-1255px"
    }
    else{
        taskbar2.style.bottom = "50px"
    }
})
taskbar2.addEventListener("click", ()=>{
    console.log("clicked");
    if(taskbar2.style.bottom == "50px"){
        taskbar2.style.bottom = "-855px"
        
    }
    else{
        taskbar2.style.bottom = "50px"
    }
})