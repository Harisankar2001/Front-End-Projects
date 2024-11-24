function convert()
{
    const faranheit=document.getElementById("input").value;
    const convert=(faranheit-32)*5/9;
    const result=document.getElementById("result")
    result.innerHTML=convert.toFixed(2)+"F"
}