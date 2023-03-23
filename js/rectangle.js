document.getElementById("btn-rectangle").addEventListener("click", function () {
    
    const w_Value = inputFieldValue("rectangle-w");
    const l_Value = inputFieldValue("rectangle-l");
    const title = cardTitle("rectangle-title");

    if ((w_Value < 0) || (l_Value < 0) || isNaN(w_Value) || isNaN(l_Value)) {

        alert("Invalid Input");

    } else {

        const rectangleArea = (w_Value * l_Value).toFixed(2);
        result(title, rectangleArea);

    }

})