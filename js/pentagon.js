document.getElementById("btn-pentagon").addEventListener("click", function () {
    
    const p_Value = inputFieldValue("pentagon-p");
    const b_Value = inputFieldValue("pentagon-b");
    const title = cardTitle("pentagon-title");


    if ((p_Value < 0) || (b_Value < 0) || isNaN(p_Value) || isNaN(b_Value)) {

        alert("Invalid Input");

    } else {

        const pentagonArea = (0.5 * p_Value * b_Value).toFixed(2);
        result(title, pentagonArea);

    }
})