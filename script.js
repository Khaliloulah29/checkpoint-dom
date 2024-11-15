var box = document.getElementsByClassName("box")
for (let i = 0; i < box.length; i++) {
    let bntPlus = box[i].children[4].children[2]
    console.log(bntPlus);
    
    let bntMoins = box[i].children[4].children[0]
    let nombre = box[i].children[4].children[1]
    let total = box[i].children[3].children[1]
    let prixUni = box[i].children[2].children[1]
    let supp = box[i].children[5].children[1]
    let qty = parseInt(nombre.innerText)
    let prixUnitaire=parseInt(prixUni.innerText)
    let like = box[i].children[5].children[0].children[0]
    let remove = box[i].children[5].children[1].children[0]
    console.log(remove);
    let produit=box[i]
    if(produit){
        remove.addEventListener("click",function(){
            produit.remove(
                
            )
        })
    }

    
        
    //calcule-total-unitaire-des-artivles
    bntPlus.addEventListener('click', function () {
        qty++;
        nombre.innerText = qty;
        total.innerText = prixUnitaire * qty;
        updateTotalcommande()
    
    })
    //diminution-total-unitaire-des-articles
    
bntMoins.addEventListener('click' , function () {
    if (qty>0){
        qty--;  
    }
    nombre.innerText = qty;
    total.innerText = prixUnitaire * qty;

})
like.addEventListener("click",function(){
    if (like.style.color =="red") {
        like.style.color = "black"
    }
    else{
        like.style.color = "red"
    }

})

}
var btnhvar1 = document.getElementsByClassName('icon3');
function updateTotalcommande() {
    let totalCommande = 0;
    for (let i = 0; i < box.length; i++) {
        let totalUnit = box[i].children[3].children[1]; 
         totalCommande += parseInt(totalUnit.innerText);
    }
    document.getElementById('tyu').innerHTML = totalCommande;
}




