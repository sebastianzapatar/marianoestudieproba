import 'colors';
import Carro  from './Carro.interface';
import { SuperHero } from './SuperHero.class';

let r4:Carro={
    brand:"Renault",
    model:"Renault 4 Master",
    year:1974,
    color:"red",
    price:1300
}
const {brand,model}=r4;//destructuracion de objetos
console.log(brand,model);
r4.brand='lo que sea';
console.log(r4);
r4={
    ...r4,//spread operator
    price:r4.price+100,
    brand:'Dasia'
}
console.log(r4);
let superman:SuperHero=new SuperHero
('Superman','Fly','Clark Kent',35,'Metropolis');
console.log(superman.Name);
superman.Name='Clark Kent';