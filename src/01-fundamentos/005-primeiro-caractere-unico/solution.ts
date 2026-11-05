/**
 * Encontra o primeiro caractere que nao se repete em uma string.
 *
 * @param texto - String de entrada
 * @returns O primeiro caractere com frequencia 1, ou null se nao houver nenhum
 */
export function primeiroCaractereNaoRepetido(texto: string): string | null {
  const contagem: Record<string, number> = {};

  for (const char of texto) {
    contagem[char] = (contagem[char] ?? 0) + 1;
  }

  for (const char of texto) {
    if (contagem[char] === 1) return char
  }

  return null;
}