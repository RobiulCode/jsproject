const result = document.getElementById("output");
result.style.display = "none";
document.getElementById("form-area").onchange= () =>{
    const bill = Number (document.getElementById("inputBill").value);
    const tipInput = document.getElementById("tipInput").value;
    const tipOutput = document.getElementById("tipOutput");
    const tipTotal = document.getElementById("tipTotal");
    const billTotal = document.getElementById("totalBill");
    tipOutput.innerHTML = `${tipInput}%`;
    const tip = bill * (tipInput/100);
    const totalBill = bill + tip;
    tipTotal.value = tip.toFixed(2);
    billTotal.value = totalBill.toFixed(2);
    result.style.display = "block";  
}
