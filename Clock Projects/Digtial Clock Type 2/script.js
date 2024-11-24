let ampm=document.getElementById("ampm")
function displayTime(){
    let dateTime=new Date()
    let hr=dateTime.getHours()
    let min=dateTime.getMinutes()
    let sec=dateTime.getSeconds()

    if(hr>12)
    {
        hr=hr-12
        ampm.innerHTML="PM"
    }
    else{
        ampm.innerHTML="AM"
    }
    document.getElementById("hours").innerHTML=padZero(hr)
    document.getElementById("mins").innerHTML=padZero(min)
    document.getElementById("seconds").innerHTML=padZero(sec)
}


setInterval(displayTime,1000)

function padZero(num){
    return num<10?"0"+num:num
}