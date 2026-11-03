/**
 * Verifica se uma string e um palindromo utilizando a tecnica de dois ponteiros.
 *
 * @param texto - String de entrada
 * @returns true se for palindromo, false caso contrario
 */
export function ePalindromo(texto: string): boolean {
  let esquerda = 0;
  let direita = texto.length - 1;

  while (esquerda < direita) {
    if (texto[direita] !== texto[esquerda]) {
      return false;
    }
    esquerda++;
    direita--;
  }
  return true;
}
