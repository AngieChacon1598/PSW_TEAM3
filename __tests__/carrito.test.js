const CarritoCompras = require('../src/carrito');

describe('CarritoCompras - Pruebas Unitarias con Patrón AAA', () => {
  
  /**
   * PRUEBA 1: Agregar productos y calcular total
   * Patrón AAA implementado
   */
  test('debe calcular el total correctamente con múltiples productos', () => {
    // ARRANGE: Preparar el carrito y los productos
    const carrito = new CarritoCompras();
    const producto1 = { nombre: 'Laptop', precio: 1000 };
    const producto2 = { nombre: 'Mouse', precio: 25 };
    const producto3 = { nombre: 'Teclado', precio: 75 };
    const totalEsperado = 1100;

    // ACT: Agregar productos y calcular total
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);
    const total = carrito.calcularTotal();

    // ASSERT: Verificar el total
    expect(total).toBe(totalEsperado);
  });

  /**
   * PRUEBA 2: Contar cantidad de productos en el carrito
   * Patrón AAA implementado
   */
  test('debe contar correctamente la cantidad de productos', () => {
    // ARRANGE: Crear carrito y productos
    const carrito = new CarritoCompras();
    const producto1 = { nombre: 'Libro', precio: 15 };
    const producto2 = { nombre: 'Cuaderno', precio: 5 };

    // ACT: Agregar productos y obtener cantidad
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    const cantidad = carrito.obtenerCantidadProductos();

    // ASSERT: Verificar la cantidad
    expect(cantidad).toBe(2);
  });

  /**
   * PRUEBA 3: Vaciar el carrito
   * Patrón AAA implementado
   */
  test('debe vaciar el carrito correctamente', () => {
    // ARRANGE: Crear carrito con productos
    const carrito = new CarritoCompras();
    carrito.agregarProducto({ nombre: 'Producto1', precio: 50 });
    carrito.agregarProducto({ nombre: 'Producto2', precio: 30 });

    // ACT: Vaciar el carrito
    carrito.vaciarCarrito();
    const cantidad = carrito.obtenerCantidadProductos();

    // ASSERT: Verificar que está vacío
    expect(cantidad).toBe(0);
  });
});
