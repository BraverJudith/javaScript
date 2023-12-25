function multiplicar(cantMadejas){
    const pesoCadaMadeja = 1.5
    let pesoTotal= cantMadejas * pesoCadaMadeja
    return pesoTotal.toFixed(2)
}
function calculaPrecio(cantMadejas,precio,producto) {
    let peso = multiplicar(cantMadejas)
    let precioFinal = peso * precio
    console.log  ("El precio por " + cantMadejas, "madejas de " +producto,  "es: $" + precioFinal)
}
function precioPorArticulo(producto,cantidad){
    if (Number.isInteger(cantidad)){
    let cantMadejas= cantidad
        switch(producto){
            case "cashmilon":
                calculaPrecio(cantMadejas,1800,producto)
                break
            case "nevilan":
                calculaPrecio(cantMadejas,2400,producto)
                break
            case "algodon":
                calculaPrecio(cantMadejas,1500,producto)
                break
            case "afrodita":
                calculaPrecio(cantMadejas,2500,producto)
                break
            default:
                console.warn("Disculpe,no tememos ese articulo momentaneamente")
                break
            }
        }
    else {
        alert("ingrese un numero correcto")
    }
}    
function consultaPrecios() {
    let preguntar = true
    while(preguntar){
        let producto = prompt ("Ingrese el nombre del producto a consultar")
        if (producto !== "" && producto!== null){
            let cantidad = prompt ("Ingrese cantidad de madejas que necesita")
            if(cantidad !== "" && cantidad!== null){
                precioPorArticulo(producto.trim().toLowerCase(),parseInt(cantidad))
            }
            else{
                alert ("Ingresa una cantidad de madejas valida")
            }
        }
        else{
            alert ("No ingreso ningun nombre, vuelva a intentar")
        }
        preguntar = confirm("Desea consultar por otro producto?")
    }
}