document.addEventListener('DOMContentLoaded', function () {
    const planets = document.querySelectorAll('.planet');

  
});
function loadLanguage(lang) {
    var fullPath = window.location.pathname;
    var filename = fullPath.split('/').pop();
    let page = filename.split("_");


    if (lang == 'english') 
        window.location.href = page[0].concat("_eng.html");
    if (lang == 'srpski') 
        window.location.href = page[0].concat("_srb.html");

}

function validateForm() {
    var fullPath = window.location.pathname;
    var filename = fullPath.split('/').pop();
    let page = filename.split("_");
    let language = page[1].split(".")[0];

    var isValid = true;
    var message = '';

    var name = document.getElementById("name").value;
    if (!/^[a-zA-Z-' ]+\s[a-zA-Z-' ]+$/.test(name)) {
        if (language == 'eng'){
            message = "This field can't be empty. First and last name must be separated with space";
        }
        else{
            message = "Ovo polje ne sme biti prazno. Ime i prezime moraju biti odvojeni zarezom.";
        }
        document.getElementById("first_name_error").innerText = message;
        isValid = false;
    } else {
        document.getElementById("first_name_error").innerText = "";
    }

    var email = document.getElementById("email").value;
    if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email)) {
        if (language == 'eng'){
            message = "This field can't be empty. Email should be in proper format";
        }
        else{
            message = "Ovo polje ne sme biti prazno. Email mora biti u odgovarajucem formatu";
        }
        document.getElementById("email_error").innerText = message;
        isValid = false;
    } else {
        document.getElementById("email_error").innerText = "";
    }

    var message = document.getElementById("message").value;
    if (message.trim() === "" || message.length > 255) {
        if (language == 'eng'){
            message = "This field can't be empty and message can't be longer than 255 characters.";
        }
        else{
            message = "Ovo polje ne sme biti prazno i poruka mora biti do 255 karaktera."
        }
        document.getElementById("message_error").innerText = message;
        isValid = false;
    } else {
        document.getElementById("message_error").innerText = "";
    }

    if (isValid) {
        document.getElementById("contactForm").submit();
        if (language  ==  'eng') {
            window.location.href = "poruka_eng.html";
            }
            else{
            window.location.href = "poruka_srb.html";
            }
    }
}
