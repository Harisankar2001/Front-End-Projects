const button=document.querySelector('button')
let resultdiv=document.createElement('div')
resultdiv.id='result'
document.querySelector('#wrapper').appendChild(resultdiv)

button.addEventListener('click',displaystats)

function displaystats()
{
    const city=input.options[input.selectedIndex].value
    
    let population=0,literacyrate=0,language='';

    
    switch (city) {
        case 'Bengaluru':
            population=8443675
            literacyrate=88.71
            language='Kannada'
            break;
        
        case 'Chennai':
            population=4646732
            literacyrate=9.20
            language='Tamil'
            break;

        case 'Mumbai':
            population=12442373
            literacyrate=89.73
            language='Marathi'
            break;
        
        case 'Delhi':
            population=16787941
            literacyrate=86.20
            language='Hindi'
            break;
    }

    let text=`The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyrate}`;
    console.log(text);

    

    document.getElementById('result').innerHTML=text
}