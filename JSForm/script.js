const btn = document.querySelector('#signup-btn');




// sign up button event listener
btn.addEventListener("click", function(e){
    e.preventDefault();
    const uname = document.getElementById('uname');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const cpass = document.getElementById('cpass');



    const isTrue = (uname.value.length>=3 && uname.value.length<=25) && (validatePassword(pass.value)) && (validateEmail(email.value)) && (pass.value==cpass.value);
    console.log("hero");
    if(isTrue){
        // alert("You are signed up.")
        let modalContainer = document.getElementById("modal-container");
        modalContainer.style.display = "block";
        let closeBtn = document.getElementById("close-btn");
        closeBtn.addEventListener("click", function(){
            modalContainer.style.display = "none";
        })
    }else{
        if(uname.value.length<3 || uname.value.length>25){
            uname.classList.add("border-danger")
            document.getElementById('p-uname').style.display = "block";
        }else{
            uname.classList.add("border-success")
        }
        if(validateEmail(email.value)){
            email.classList.add("border-success");
        }else{
            email.classList.add("border-danger");
            document.getElementById('p-email').style.display = "block";
        }
        if(validatePassword(pass.value)){
            pass.classList.add("border-success");
        }else{
            pass.classList.add("border-danger");
            document.querySelector("i").style.top = "52%";
            document.getElementById('p-pass').style.display = "block";
        }
        if(cpass==pass){
            cpass.classList.add("border-success");
        }else{
            cpass.classList.add("border-danger");
            document.getElementById('p-cpass').style.display = "block";
        }
    }
});


function validatePassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d#$@!%&*?]{8,}$/;
    if (!regex.test(password)) {
       return false;
    } else {
       return true;
    }
}
function validateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }else{
    return (false)
  }
}

const toggleEye = document.querySelector('i');

const password = document.querySelector("#pass");

toggleEye.addEventListener("click", ()=>{

    if(toggleEye.classList.contains("bi-eye")){
        toggleEye.classList.remove("bi-eye");
        toggleEye.classList.add("bi-eye-slash");
    }else{
        toggleEye.classList.remove("bi-eye-slash");
        toggleEye.classList.add("bi-eye");
    }
        
    const type = password
    .getAttribute('type') === 'password' ?
    'text' : 'password';
        
        password.setAttribute('type', type);

         
})
