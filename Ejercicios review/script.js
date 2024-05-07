//PUNTO 1

let nombreLista ="Lista de compras semana 1";
let listaCompras = [];
const iva = 0.19;
let precios = {
    manzana:1500,
    pera:1200,
    arroz:4500,
    maiz:2400,
    sal:600,
    pepino:3200,
    azucar:1200
}


//PUNTO 2

while (true) {
    let producto =prompt("Ingrese un producto (o escriba 'salir' para terminar el programa: ");
     
    if (producto.toLowerCase() === "salir") {
        break;
    }
    listaCompras.push(producto);
    alert(`${producto} agregado a la lista.`);
}   

//PUNTO 3

console.log("Su lista de compras fue:");
listaCompras.forEach(producto => console.log(producto));

//PUNTO 4
while (true){
  let productoABuscar = prompt("Ingrese el producto que busca: (o ingrese 'salir' para no buscar.)");
  if (productoABuscar.toLocaleLowerCase() === "salir"){
    break;
  }
  for (let i = 0; i < listaCompras.length; i++) {
      if (listaCompras[i].toLowerCase() === productoABuscar.toLowerCase()) {
        console.log(`El producto ${productoABuscar} esta en la posición ${i + 1} de la lista.`);
        encontrado = true;
        break; 
      }
      else{
          console.log(`El producto ${productoABuscar} no se encuntra en la lista.`)
      }
  }
}


 //PUNTO 5
 while (true){
  let productoBorrar = prompt("Ingrese un producto para eliminar (si no desea eliminar ninguno producto ingrese 'salir')");
  if (productoBorrar.toLocaleLowerCase() === "salir"){
    break;
  }
  for (let i = 0; i < listaCompras.length; i++) {
    if (listaCompras[i].toLocaleLowerCase() === productoBorrar.toLocaleLowerCase()){
        listaCompras.splice(productoBorrar);
        console.log(`El producto ${productoBorrar} ha sido eliminado de la lista.`);
        borar = true;
    }
    else{
        console.log(`El producto ${productoBorrar} no se encuntra en la lista.`)
    }
}

}




//PUNTO 6
let total = 0;
for (let producto of listaCompras) {
  if (precios.hasOwnProperty(producto)) {
    total += precios[producto] * (1 + iva);
  } else {
    console.log(`No se encontro el precio del producto: ${producto}`);
  }
}   
console.log(`El total de la compra es de: $${total}`);


//PUNTO 9
listaCompras.sort();
console.log("Los articulos adquiridos son:")
listaCompras.forEach(producto => console.log(producto));