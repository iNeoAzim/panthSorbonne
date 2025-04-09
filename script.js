function calculerSalaire() {
    
    const salaire = document.getElementById("sal").value;

    const impot = salaire * 0.10;
    document.getElementById("impot"),value = impot.toFixed(2);

    const ass = salaire * 0.07;
    document.getElementById('ass').value = ass.toFixed(2);

    var pen = salaire * 0.05;
    document.getElementById('pen').value = pen.toFixed(2);

    if (document.getElementById(form).checked) {
        total += 150
    }
       
    if (document.getElementsById("100K").checked) {
        total += 150
    }
    
    var total = salaire - impot - ass + pen;

    document.getElementById('salNet').value = total.toFixed(2);
}