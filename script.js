function saludoGenerico() {
    let nombreUsuario = prompt("Cual es tu nombre")
    let apellidoUsuario = prompt("Cual es tu apellido")
    let aniosUsuario = parseInt(prompt("Cuantos años tenés"))
    alert(`Hola ${nombreUsuario} ${apellidoUsuario}`)
}
alert("Bienvenido a CamisetasQatar22")
saludoGenerico()



let productos = [
   {id: 1, nombre: 'Argentina', precio: 17000},
   {id: 2, nombre: 'Brasil', precio: 13000},
   {id: 3, nombre: 'Croacia', precio: 11000},
   {id: 4, nombre: 'Alemania', precio: 15000},
   {id: 5, nombre: 'Holanda', precio: 11500},
   {id: 6, nombre: 'Francia', precio: 13000},
   {id: 7, nombre: 'Uruguay', precio: 11500},
   {id: 8, nombre: 'Portugal', precio: 12500},
];

let carrito = [] 

let mostrar = (idONombre) => {
   if (idONombre === '1') {
      let idProd = parseInt(prompt('Ingresa el ID de la camiseta que buscas'));
      let buscarId = productos.find(encontrar => encontrar.id === idProd);
      if (buscarId) {
         alert(`ID: ${buscarId.id} \nNombre: ${buscarId.nombre} \nPrecio: $${buscarId.precio}`);
      }else{
         alert('Producto no encontrado. Volve a intentarlo');
      }
   }else if (idONombre === '2') {
      let nProd = prompt('Para encontrar tu camiseta, ingresa el nombre del pais con mayuscula');
      let buscarN = productos.find(encontrar => encontrar.nombre === nProd);
      if (buscarN) {
         alert(`ID: ${buscarN.id} \nNombre: ${buscarN.nombre} \nPrecio: $${buscarN.precio}`);
      }else{
         alert('Producto no encontrado. Volve a intentarlo');
      }
   }
}


let compra = (idONombre) => {

   if (idONombre === '1') {
      let comProd = parseInt(prompt('Ingresa el ID de la camiseta que buscas'));
      let buscarId = productos.find(encontrar => encontrar.id === comProd);
      if (buscarId) {
         carrito.push({id: buscarId.id, nombre: buscarId.nombre, precio: buscarId.precio})
         let precioFinal = carrito.reduce((acum, item) => acum + item.precio, 0);
         alert(`ID: ${buscarId.id} \nNombre: ${buscarId.nombre} \nPrecio: $${buscarId.precio} \n\nProducto agregado al carrito \nTotal de la compra: $${precioFinal}`);
      }else{
         alert('Producto no encontrado. Volve a intentarlo');
      }
   }else if (idONombre === '2') {
      let comProd = prompt('Para encontrar tu camiseta, ingresa el nombre del pais con mayuscula');
      let buscarN = productos.find(encontrar => encontrar.nombre === comProd);
      if (buscarN) {
         carrito.push({id: buscarN.id, nombre: buscarN.nombre, precio: buscarN.precio})
         let precioFinal = carrito.reduce((acum, item) => acum + item.precio, 0);
         alert(`ID: ${buscarN.id} \nNombre: ${buscarN.nombre} \nPrecio: $${buscarN.precio} \n\nProducto agregado al carrito \nTotal de la compra: $${precioFinal}`)
      }else{
         alert('Producto no encontrado. Volve a intentarlo')
      }
   }
}


let opciones = '';
let numProducto = 0



while (true) {
   opciones = prompt('Elije la opcion que desees \n1. Buscar alguna camiseta \n2. Comprar \n3. Visitar nuestra pagina');
   if (opciones === '1' || opciones === '2' || opciones === '3') {
      break;
   }else{
      alert('Opcion no valida')
   }
}


if (opciones === '1'){

   while (true) {
   
      let elegir = prompt('Deseas buscar el producto por \n1. ID del producto \n2. Nombre del Pais \n\n3. Salir');

      if (elegir === '1' || elegir === '2') {
         mostrar(elegir);
      }else if ( elegir === '3') {
         break;
      }else{
         alert('Opcion no valida. Volve a intentarlo.');
      }
   }
}


if ( opciones === '2' ) {

   while (true) {
      let comprar = prompt('Deseas comprar por \n1. ID del producto \n2. Nombre del Pais \n\n3. Ver el Carrito \n4. Salir')
      if ( comprar === '1' || comprar === '2') {
         compra(comprar)
      }else if ( comprar === '3') { 
         carrito.forEach(carritoB => {
            numProducto++
            alert(`Producto n°${numProducto}: ${carritoB.nombre} $${carritoB.precio}`)
            if ( numProducto === carrito.length) {
               numProducto = 0;
               console.log(numProducto);
            }
         })
      }else if ( comprar === '4' ) {
         break;
      }else{
         alert('Opcion no valida. Volve a intentarlo')
      }
   }
}