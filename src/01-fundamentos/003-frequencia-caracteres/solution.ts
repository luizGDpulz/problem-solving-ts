/**
 * Conta a frequencia de cada caractere presente em uma string.
 *
 * @param texto - String de entrada
 * @returns Objeto com cada caractere como chave e sua contagem como valor
 */
export function contarFrequencia(texto: string): Record<string, number> {
  const frequencia: Record<string, number> = {};
  
  for (const char of texto) {
    frequencia[char] = (frequencia[char] ?? 0) + 1;
  }
  return frequencia;
}
