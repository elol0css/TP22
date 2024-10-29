let prenom= document.getElementById("prenom").value;
let nom= document.getElementById("nom").value;
let date= document.getElementById("dateRamassage").value;
let heure= document.getElementById("heureRamasage").value;
let taille= document.getElementById("size").value;
let num= document.getElementById("telephone").value;


function validation()
{

    //  let prenom= document.getElementById("prenom").value;
    //  let nom= document.getElementById("nom").value;
    //  let date= document.getElementById("dateRamassage").value;
    //  let heure= document.getElementById("heureRamasage").value;
    //  let taille= document.getElementById("size").value;
    //  let num= document.getElementById("telephone").value;

    let soumettre= document.getElementById("info_commande");
    let validiteSoumettre= soumettre.reportValidity();

    if(validiteSoumettre == false)
{
    return;
}

else {
    alert("Merci" + prenom + " " + nom + " votre commande a bien été reçue pour le " + date + " à " + heure + " , pour une pizza "+ taille + " pouces. Lorsque votre commande sera prête, nous communiquerons avec vous au numéro " + num);
}
}