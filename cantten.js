function total(){
    let idliqty = document.getElementById("idliqty").value;
    let dosaqty = document.getElementById("dosaqty").value;
    let pooriqty = document.getElementById("pooriqty").value;
    let pulqty = document.getElementById("pulqty").value;
    let chapataiqty = document.getElementById("chapataiqty").value;
    let teaqty = document.getElementById("teaqty").value;
    let Coffeeqty = document.getElementById("Coffeeqty").value;

    let idliprice = 30;
    let dosaprice = 40;
    let pooriprice = 50;
    let pulprice = 40;
    let chapataprice = 40;
    let teaprice = 10;
    let coffeeprice = 12;

    let total = ((idliprice*idliqty)+(dosaprice*dosaqty)+(pooriprice*pooriqty)+(pulprice*pulqty)+(chapataiqty*chapataprice)+(teaprice*teaqty)+(coffeeprice*Coffeeqty));
    
    let price = document.getElementById("total");

    price.innerHTML = "The total bill is"+" "+total;
}