const express = require("express");
const app = express();
const porta = 8080;

app.get('/banana', (req, res) => {
    res.send("banana é ruim")
}

);

app.get('/pedido', (req, res) => {

    let precoCafe = 12;
    let total = 0;

    for (i = 0; i < 7; i++) {
        total += precoCafe;
        console.log(`fazendo um cafe ${i + 1}. Total acumulado:R$ ${total}`);
        


    }

if (total >=30) {
    total = total - 5
    console.log ("desconto aplicado:"+ total)
}
else if (total > 50){
    console.log("recebestes um croissant de brinde")
}


else {
    console.log ("Sem desconto")
}

    res.send("requisitando um copo de café")
}

);

app.listen(porta, () => { });
