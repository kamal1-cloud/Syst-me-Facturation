let addbuttom = document.getElementById("adding");
let container = document.getElementById("main");
let datej = document.getElementById("date");
let counter = 0;
let limit = 5;





addbuttom.addEventListener("click", function () {
    counter ++
    console.log(counter)
    var x = document.createElement("form");
    x.innerHTML = " <div id='form1' class='d-flex flex-row justify-content-around align-items-center'><div class='form-group'><label for='nomproduit'> Le nom de produits</label><input type='text' id='nomproduit' class='form-control'></div><div class='form-group'><label for='quantite'>La quantité</label><input type='text' id='quantite' class='form-control'></div><div class='form-group'><label for='price'>Prix unitaire</label><input type='text' id='price' class='form-control'></div><div class='form-group'><label for='tva'>TVA</label><select name='tva' id='tva' name='tva' class='form-control'><option value=''>--Please choose an option--</option><option value='7'>7%</option><option value='10'>10%</option><option value='14'>14%</option><option value='20'>20%</option></select></div><div class='form-group'><label for='R1'>Total</label><p type='text' id='R1' class='form-control px-5'>00.00</p></div> <div onclick='del(this)'><img src='delete.svg' alt='' width='20px'></div>";
    container.appendChild(x)



    // counter++
    // if (counter == limit) {
    //     alert('you can't add more row then " + counter + " form")

    // } else {

    //     switch (counter) {
    //         case (2):
    //             var form2 = document.getElementById("form2")
    //             form2.classList.remove("d-none");


    //             break;
    //         case (3):
    //             var form3 = document.getElementById("form3")
    //             form3.classList.remove("d-none");

    //             break;
    //         case (4):
    //             var form4 = document.getElementById("form4")
    //             form4.classList.remove("d-none");

    //             break;

    //     }
    // }
});


function del(ok) {
    ok.parentElement.remove();
}


var Q = document.getElementById("quantite");
let p = document.getElementById("price");
var R1 = document.getElementById("R1");
var tva = document.getElementById("tva");
var productN = document.getElementById("nomproduit")
var tHorsT = document.getElementById("tHorst");
var tTVA = document.getElementById("tTva");
var tTTC = document.getElementById("totalTtc");


tva.addEventListener("blur", updatePrice);
Q.addEventListener("blur", updatePrice);
p.addEventListener("blur", updatePrice);


function updatePrice() {

    if (p.value == "" && Q.value == "" && productN.value === "") {
        alert("please add product Name and the value of fields ")

    } else {


        console.log(p.value * Q.value);
        var tHt = Q.value * p.value;
        var R1 = document.getElementById("R1").innerHTML = (Q.value * p.value);
        var tva = document.getElementById("tva").value;
        console.log(tva);
        tHorsT.innerHTML = tHt;
        tTVA.innerHTML = tHt * (tva/100);
        tTTC.innerHTML=(tHt * (tva/100))+tHt;
        console.log(tTTC);


    }




}

