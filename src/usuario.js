/**
 * Clase Usuario - Ejemplo para pruebas unitarias con patrón AAA
 */
class Usuario {
  /**
   * Constructor de la clase Usuario
   * @param {string} nombre - Nombre del usuario
   * @param {number} edad - Edad del usuario
   * @param {string} email - Email del usuario
   */
  constructor(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }

  /**
   * Verifica si el usuario es mayor de edad
   * @returns {boolean} true si es mayor de 18 años
   */
  esMayorDeEdad() {
    return this.edad >= 18;
  }

  /**
   * Valida el formato del email
   * @returns {boolean} true si el email tiene formato válido
   */
  validarEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(this.email);
  }

  /**
   * Obtiene la información del usuario formateada
   * @returns {string} Información del usuario en formato: "Nombre (edad años) - email"
   */
  obtenerInformacion() {
    return `${this.nombre} (${this.edad} años) - ${this.email}`;
  }
}

module.exports = Usuario;
