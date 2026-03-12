/**
 * Clase Calculadora - Ejemplo para pruebas unitarias con patrón AAA
 */
class Calculadora {
  /**
   * Suma dos números
   * @param {number} a - Primer número
   * @param {number} b - Segundo número
   * @returns {number} Resultado de la suma
   */
  sumar(a, b) {
    return a + b;
  }

  /**
   * Resta dos números
   * @param {number} a - Primer número
   * @param {number} b - Segundo número
   * @returns {number} Resultado de la resta
   */
  restar(a, b) {
    return a - b;
  }

  /**
   * Multiplica dos números
   * @param {number} a - Primer número
   * @param {number} b - Segundo número
   * @returns {number} Resultado de la multiplicación
   */
  multiplicar(a, b) {
    return a * b;
  }

  /**
   * Divide dos números
   * @param {number} a - Dividendo
   * @param {number} b - Divisor
   * @returns {number} Resultado de la división
   * @throws {Error} Si el divisor es cero
   */
  dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a / b;
  }
}

module.exports = Calculadora;
