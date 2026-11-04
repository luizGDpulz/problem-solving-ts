/**
 * Verifica se duas strings sao anagramas validos (mesmas letras nas mesmas quantidades).
 *
 * @param s - Primeira string
 * @param t - Segunda string
 * @returns true se forem anagramas, false caso contrario
 */
export function eAnagrama(s: string, t: string): boolean {
  if (s.length !== t.length) return false; // Se os tamanhos forem diferentes, ja retorne false.

  const contagem: Record<string, number> = {};

  for (const char of s) {
    contagem[char] = (contagem[char] ?? 0) + 1;
  }

  for (const char of t) {
    if (!contagem[char]) return false;
    contagem[char]--
  }

  return true;
}