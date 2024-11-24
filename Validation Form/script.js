const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const cpassword=document.getElementById('cpassword')
const button=document.querySelector('button')

form.addEventListener('submit',(event)=>{
    if(!validateInputs()){
        event.preventDefault()
    }
})

function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()
    let success=true

    if(usernameVal===''){
        success=false
        setError(username,'User name is Required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success=false
        setError(email,'Email is Required')
    }
    else if(!validateEmail(emailVal)){
        success=false
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal===''){
        success=false
        setError(password,'Password is Required')
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,'Password must be atleast 8 characters')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success=false
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!=passwordVal){
        success=false
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(element)
    }

    return success
}

function setError(element,message){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message

    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail=(email)=>{
    return String(email).toLowerCase().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};

