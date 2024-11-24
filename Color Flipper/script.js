const color=document.getElementById("color")
const wrap=document.getElementById("wrap")
const button=document.getElementById("btn")
const hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
button.addEventListener('click',changeBackground)
console.log(randhexValue());

function randhexValue()
{
    let randIndex=Math.floor(Math.random()*16)
    return hex[randIndex]
}

function changeBackground()
{
    let hexcolor='#'

    for(let i=1;i<=6;i++)
    {
        hexcolor=hexcolor+randhexValue()
    }

    wrap.style.backgroundColor=hexcolor
    color.innerHTML=hexcolor
}
