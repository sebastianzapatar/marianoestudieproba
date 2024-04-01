import Carro from "./Carro.interface";

let carros:Carro[]=[{
    brand:"Renault",
    model:"Renault 4 Master",
    year:1974,
    color:"blue",
    price:1500
},
{
    brand:"Ford",
    model:"Ford Mustang",
    year:1974,
    color:"red",
    price:40000
},{
    brand:"BMW",
    model:"BMW M3",
    year:2024,
    color:"red",
    price:25000
},{
    brand:"Mercedes",
    model:"Mercedes Benz",
    year:2024,
    color:"gray",
    price:15000
},{
    brand:"Jaguar",
    model:"Jaguar XF",
    year:2024,
    color:"black",
    price:180000
}];
carros.filter(carro=>carro.year>=2000).
forEach(carro=>console.log(carro));
let busqueda=carros.find(carro=>carro.brand=='Ford');
console.log("EL carro buscado es ",busqueda);
/*
Reduce
GroupBy
*/
