// get input value
function inputFieldValue(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = "";
    return inputFieldValue;

}

// get card title 
function cardTitle(titleId) {

    const title = document.getElementById(titleId).innerText;
    return title;
    
}




