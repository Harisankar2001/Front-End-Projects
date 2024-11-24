function poclick(val)
{
    document.getElementById("inp").value+=val
}

function clearscreen()
{
    document.getElementById("inp").value=null
    console.log("clear");
}

function equalclick()
{
    var text=document.getElementById("inp").value
    var result=eval(text)
    document.getElementById("inp").value=result
}


