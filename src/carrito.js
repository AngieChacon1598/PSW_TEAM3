/**
 * Clase CarritoCompras - Ejemplo para pruebas unitarias
 */
class CarritoCompras {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    if (!producto.nombre || !producto.precio) {
      throw new Error('Producto inválido');
    }
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  obtenerCantidadProductos() {
    return this.productos.length;
  }

  vaciarCarrito() {
    this.productos = [];
  }
}

module.exports = CarritoCompras;
