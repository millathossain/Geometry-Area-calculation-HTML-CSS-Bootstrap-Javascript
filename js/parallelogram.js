document.getElementById("btn-parallelogram").addEventListener("click", function () {
    
    const b_Value = inputFieldValue("parallelogram-b");
    const h_Value = inputFieldValue("parallelogram-h");
    const title = cardTitle("parallelogra-title");


    if ((b_Value < 0) || (h_Value < 0) || isNaN(b_Value) || isNaN(h_Value)) {

        alert("Invalid Input");

    } else {

        const parallelogramArea = (b_Value * h_Value).toFixed(2);
        result(title, parallelogramArea);

    }

})