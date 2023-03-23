// Triangle button click function
document.getElementById("btn-triangle").addEventListener("click", function () {

    const b_Value = inputFieldValue("triangle-b");
    const h_Value = inputFieldValue("triangle-h");
    const title = cardTitle("triangle-title");


    if ((b_Value < 0) || (h_Value < 0) || isNaN(b_Value) || isNaN(h_Value)) {

        alert("Invalid Input");

    } else {

        const triangleArea = (0.5 * b_Value * h_Value).toFixed(2);
        result(title, triangleArea);

    }
    
})
