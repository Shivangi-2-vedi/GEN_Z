let signup=document.getElementById("signup");
let signin=document.getElementById("signin");
let namefield=document.getElementById("namefield");
let title=document.getElementById("title");

 const passwordInput=document.querySelector(".pass-field input")
 const eyeIcon=document.querySelector(".pass-field i")
 const requirementList=document.querySelectorAll(".requirement-list li");


 const Password=document.getElementById("contact-password");
 const Name=document.getElementById("contact-name");
 const Email=document.getElementById("contact-email");


 const name_error=document.getElementById('name_error');
 const email_error=document.getElementById('email_error');
 const password_error=document.getElementById('password_error');
 const form_error=document.getElementById('form_error');



  //---------------------------onClick Changes---------------------------
  Password.onclick=function(){
     passwordfield.style.opacity="2";
     passwordfield.style.maxHeight="2rem";
     btnField.style.opacity="0.2";
    lost.style.opacity="0";
 }
 Name.onclick=function(){
     passwordfield.style.opacity="0";
     passwordfield.style.maxHeight="0";
     btnField.style.opacity="1";
    lost.style.opacity="1";
 }
 Email.onclick=function(){
     passwordfield.style.opacity="0";
     passwordfield.style.maxHeight="0";
     btnField.style.opacity="1";
    lost.style.opacity="1";
 }



 signin.onclick=function(){
     namefield.style.maxHeight="0";
     title.innerHTML="Sign In";
     signup.classList.add("disable");
     signin.classList.remove("disable");
     if (validateForm()==false){
        alert("Enter Valid Details");
        return false;
     }
    
 }
 signup.onclick=function(){
     namefield.style.maxHeight="65px";
     title.innerHTML="Sign Up";
     signup.classList.remove("disable");
     signin.classList.add("disable");
     if (validateForm()==false){
        alert("Enter Valid Details");
        return false;
     }

 }

//---------------------------Form Validation---------------------------
function validateForm(){
    if(validateEmail()==false || validateName()==false || validatePassword()==false ){
        form_error.innerHTML='Invalid Details';
        return false;
    }

        form_error.innerHTML='Sucessfull';
        return true;
}
//---------------------------Name Validation---------------------------

 function validateName(){
     let name=document.getElementById("contact-name").value;

     if(name.length==0){
         name_error.innerHTML='Name is required';
         return false;
     }
     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
         name_error.innerHTML='Enter Full Name';
         return false;
     }
     name_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
         return true;   
 }

 // ---------------------------Email Validation---------------------------

 function validateEmail(){
     let email=document.getElementById("contact-email").value;

     if(email.length==0){
         email_error.innerHTML='Email is required';
         return false;
     }
     if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)){
         email_error.innerHTML='Email Invalid';
         return false;
     }
     email_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
     return true;   
  }

 //---------------------------Password Validation---------------------------
 const requirements=[
     {regex: /.{8,}/,index:0},//Minimum number of 8 characters
     {regex: /[0-9]/,index:1},//At least on number
     {regex: /[a-z]/,index:2},//At least one lowercase letter
     {regex: /[^A-Za-z0-9]/,index:3},//At least one special character
     {regex: /[A-Z]/,index:4},//At least one uppercase letter

 ]

 passwordInput.addEventListener("keyup",function (e){
     requirements.forEach(item =>{
         // Checks if the password matches the requirement regex
         const isValid = item.regex.test(e.target.value);
         const requirementItem = requirementList[item.index];

         // Updating icon of requirement item if reqirement matched or not
         if(isValid){
             requirementItem.firstElementChild.className="fa-solid fa-check";
         }
         else{
             requirementItem.firstElementChild.className="fa-solid fa-circle";
         }
     });
 });
 function matchInArray(string, expressions) {

    var len = expressions.length,
        i = 0;

    for (; i < len; i++) {
        if (string.match(expressions[i])) {
            return true;
        }
    }

    return false;

};

  function validatePassword(){
     const password=document.getElementById("contact-password").value;

     if(password.length==0){
         password_error.innerHTML='Enter the password';
         return false;
     }
      else if( !matchInArray(password,requirements  )){
        password_error.innerHTML='Inavlid password';
          return false;
      }
      else if( password.length>=4){
        password_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
      }
    
  }
 eyeIcon.addEventListener("click",()=>{
     //Toggle the password input type b/w "password" and "text"
     passwordInput.type=passwordInput.type === "password" ? "text ":"password";
    

     //Update the eye icon class based on the password input type
     eyeIcon.className=`fa-solid fa-eye ${passwordInput.type === "password" ? "" : "-slash"}`;
 });

