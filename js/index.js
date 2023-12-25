function multiplicar(cantMadejas){
    let pesoTotal= cantMadejas * 150
    return pesoTotal
}
function calculaPrecio(cantMadejas,precio) {
    peso = multiplicar(cantMadejas)
    let precioFinal = peso * precio
    console.log  ("El precio por" + cantMadejas "madejas de la lana seleccionada es: $" + precioFinal)
}
function precioPorArticulo(articulo){
    switch{
        case "cashmilon":
            return 1880
            break
        case "nevilan":
            return 2040
            break
        case "algodon":
            return 1500
            break
        case "afrodita":
            return 2500
            break
        default:
            console.warn("No tememos ese articulo momentaneamente")
            break
    }
}
function consultaPrecios() {
    let preguntar = true
    while(preguntar){
        let producto = prompt ("Ingrese el nombre del producto a consultar")
        let cantidad = prompt ("Ingrese cantidad de madejas que necesita")
        if (producto !== " " && producto!== null && cantidad !== " " && cantidad!== null){
            precioPorArticulo(producto,cantidad)
        }

    }
}