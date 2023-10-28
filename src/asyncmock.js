const misProductos = [
    { id: 1, nombre: "Buzo Eren Yaeger", precio: 1000, img: "../img/buzo1.jpeg", idCat:"1"},
    { id: 2, nombre: "Buzo Sasuke", precio: 1100, img: "../img/buzo2.jpeg", idCat:"1"},
    { id: 3, nombre: "Remera Naruto", precio: 600, img: "../img/remera1.jpg", idCat:"2"},
    { id: 4, nombre: "Remera Sasuke", precio: 700, img: "../img/remera2.jpg", idCat:"2"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una funcion que retorne un array nuevo con las caracteristicas solicitadas

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout(()=> {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}