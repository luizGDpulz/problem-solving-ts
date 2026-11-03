/**
 * Inverte uma string sem utilizar métodos prontos (.reverse(), etc).
 *
 * @param texto - String de entrada a ser invertida
 * @returns Nova string com os caracteres na ordem inversa
 */
export function inverterString(texto: string): string {
  let textoInverso = '';
  for (let i = texto.length -1; i >= 0; i--) {
    textoInverso += texto[i];
  }
  return textoInverso;
}
