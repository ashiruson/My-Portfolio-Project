    
    
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const footer = document.createElement("footer");
    
    let name;
    let email;
    let textarea;
    let submit = document.querySelector("#my-form");
    let nameError;
    let emailError;  
    let enquiryError;
    let feedback;
  

    submit.addEventListener("submit", function(){
      nameError = document.querySelector("#name-error")
      emailError = document.querySelector("#email-error")
      enquiryError = document.querySelector("#enquiry-error")
      feedback = document.querySelector("#feedback")

      email = document.querySelector("#email");
      name = document.querySelector("#name");
      let emailValue = email.value;
      let nameValue = name.value;
      textarea = document.querySelector("#textarea");
      let textareaValue = textarea.value;
      error  = document.querySelector("#error")
    if (nameValue.length === 0){

      nameError.innerHTML = "Name is required";
      nameError.style.color = "red";
      emailError.style.marginTop = "-15px";
      nameError.style.display = "block";

      name.onfocus = function(){

nameError.style.display = "none";s

} 



} else if (emailValue.length === 0){

  emailError.innerHTML = "Email or phone is required";
  emailError.style.color = "red";
  emailError.style.marginTop = "-15px";

  emailError.style.display = "block"

  email.onfocus = function(){

emailError.style.display = "none";

} 




} else if ( textareaValue.length  === 0){

      enquiryError.innerHTML = "This field is required";
      enquiryError.style.color = "red";
      emailError.style.marginTop = "-55px";
      enquiryError.style.display = "block"

      textarea.onfocus = function(){

            enquiryError.style.display = "none";
         
      } 

     
}   else {

        textareaValue = "";
        emailValue = "";
        nameValue = "";
        feedback.innerHTML = "Thanks for your interest in our products.";
        feedback.style.display = "inline";
        feedback.style.color = "green";
        feedback.style.fontSize= "30px"



        setTimeout(function(){
           feedback.style.display = "none"
           feedback.display = "inline"

        }, 6000)
        setTimeout(function(){
           location.reload()

        }, 3200)

}





    })

