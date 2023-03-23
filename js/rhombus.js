document.getElementById("btn-rhombus").addEventListener("click", function () {
    
    const d1_Value = inputFieldValue("rhombus-d1");
    const d2_Value = inputFieldValue("rhombus-d2");
    const title = cardTitle("rhombus-title");


    if ((d1_Value < 0) || (d2_Value < 0) || isNaN(d1_Value) || isNaN(d2_Value)) {

        alert("Invalid Input");

    } else {

        const rhombusArea = (0.5 * d1_Value * d2_Value).toFixed(2);
        result(title, rhombusArea);

    }
})