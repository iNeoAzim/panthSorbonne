function calculerSalaire() {
    
    const salaire = document.getElementById("sal").value;

    const impot = salaire * 0.10;
    document.getElementById("impot"),value = impot.toFixed(2);

    const ass = salaire * 0.07;
    document.getElementById('ass').value = ass.toFixed(2);
}