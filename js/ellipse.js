document.getElementById("btn-ellipse").addEventListener("click", function () {
    
    const a_Value = inputFieldValue("ellipse-a");
    const b_Value = inputFieldValue("ellipse-b");
    const title = cardTitle("ellipse-title");

    if ((a_Value < 0) || (b_Value < 0) || isNaN(a_Value) || isNaN(b_Value)) {

        alert("Invalid Input");

    } else {

        let ellipseArea = parseFloat((Math.PI * a_Value * b_Value).toFixed(2));
        result(title, ellipseArea);


    }
    return;
})