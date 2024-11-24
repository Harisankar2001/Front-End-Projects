function convert()
{
    const cmvalue=Number(document.getElementById("input").value)
    const inchvalue=cmvalue/2.54;
    const result=document.getElementById("result")
    result.innerHTML=inchvalue.toFixed(2)+" inches";
}