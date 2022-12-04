let qteCmd = document.querySelector("#qteCmd");
let prix = document.querySelector(".prix");
qteCmd.addEventListener("change", ()=>
{
    prix.textContent = `${parseFloat(qteCmd.value).toFixed(2) * 20.99} $`;
})

//Ajouter au panier
let btnAjouter = document.querySelector(".btnAjouter")
btnAjouter.addEventListener("click",()=>
{
    let detailsCmd = document.querySelector(".moreDetails");
    detailsCmd.style.display = "block";
})