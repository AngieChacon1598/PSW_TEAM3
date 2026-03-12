const Usuario = require('../src/usuario');

describe('Usuario - Pruebas Unitarias con Patrón AAA', () => {
  
  /**
   * PRUEBA 1: Verificar si un usuario es mayor de edad
   * Patrón AAA implementado
   */
  test('debe identificar correctamente a un usuario mayor de edad', () => {
    // ARRANGE: Crear un usuario con edad mayor a 18
    const nombre = 'Juan Pérez';
    const edad = 25;
    const email = 'juan@example.com';
    const usuario = new Usuario(nombre, edad, email);

    // ACT: Verificar si es mayor de edad
    const esMayor = usuario.esMayorDeEdad();

    // ASSERT: Debe retornar true
    expect(esMayor).toBe(true);
  });

  /**
   * PRUEBA 2: Validar formato de email correcto
   * Patrón AAA implementado
   */
  test('debe validar correctamente un email válido', () => {
    // ARRANGE: Crear usuario con email válido
    const usuario = new Usuario('María', 30, 'maria.lopez@universidad.edu');

    // ACT: Validar el email
    const emailValido = usuario.validarEmail();

    // ASSERT: Debe retornar true
    expect(emailValido).toBe(true);
  });

  /**
   * PRUEBA 3: Obtener información formateada del usuario
   * Patrón AAA implementado
   */
  test('debe retornar la información del usuario formateada', () => {
    // ARRANGE: Crear usuario con datos específicos
    const nombre = 'Carlos';
    const edad = 22;
    const email = 'carlos@test.com';
    const usuario = new Usuario(nombre, edad, email);
    const informacionEsperada = 'Carlos (22 años) - carlos@test.com';

    // ACT: Obtener la información
    const informacion = usuario.obtenerInformacion();

    // ASSERT: Verificar el formato
    expect(informacion).toBe(informacionEsperada);
  });
});
