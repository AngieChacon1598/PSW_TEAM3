const Calculadora = require('../src/calculadora');

describe('Calculadora - Pruebas Unitarias con Patrón AAA', () => {
  
  /**
   * PRUEBA 1: Suma de dos números positivos
   * Patrón AAA implementado
   */
  test('debe sumar dos números positivos correctamente', () => {
    // ARRANGE (Preparar): Configurar los datos de prueba y el objeto
    const calculadora = new Calculadora();
    const numero1 = 5;
    const numero2 = 3;
    const resultadoEsperado = 8;

    // ACT (Actuar): Ejecutar la función que queremos probar
    const resultado = calculadora.sumar(numero1, numero2);

    // ASSERT (Afirmar): Verificar que el resultado es el esperado
    expect(resultado).toBe(resultadoEsperado);
  });

  /**
   * PRUEBA 2: División por cero debe lanzar error
   * Patrón AAA implementado
   */
  test('debe lanzar error al dividir por cero', () => {
    // ARRANGE: Preparar la calculadora y los datos
    const calculadora = new Calculadora();
    const dividendo = 10;
    const divisor = 0;

    // ACT & ASSERT: Verificar que se lanza el error esperado
    expect(() => {
      calculadora.dividir(dividendo, divisor);
    }).toThrow('No se puede dividir por cero');
  });

  /**
   * PRUEBA 3: Multiplicación de números negativos
   * Patrón AAA implementado
   */
  test('debe multiplicar números negativos correctamente', () => {
    // ARRANGE: Configurar el escenario de prueba
    const calculadora = new Calculadora();
    const numero1 = -4;
    const numero2 = -5;
    const resultadoEsperado = 20;

    // ACT: Ejecutar la multiplicación
    const resultado = calculadora.multiplicar(numero1, numero2);

    // ASSERT: Verificar el resultado
    expect(resultado).toBe(resultadoEsperado);
  });
});
