let FedorPoints = 5;
let PetorPoints = 22;
let result = "";
if ( FedorPoints > PetorPoints && FedorPoints <= 21) {
    result = "Fedor won";
}
else if (PetorPoints > FedorPoints && PetorPoints <= 21) {
    result = "Petor won";
}
else if (FedorPoints > 21){
    result = "Petor won";
}
else if (PetorPoints > 21){
    result = "Fedor won";
}
else if ( PetorPoints === FedorPoints ){
    result = "Standoff";
}
else {
    result = "error";
}
console.log(result);
