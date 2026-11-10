/**
 * Determina se algum elemento aparece pelo menos duas vezes no array.
 *
 * @param numeros - Array de numeros inteiros
 * @returns true se houver duplicata, false se todos forem unicos
 */
export function contemDuplicata(numeros: number[]): boolean {
  // Abordagem 1: Iteracao com Set e Early Return (Melhor caso O(1) de tempo ao achar logo no inicio)
  const vistos = new Set<number>();

  for (const numero of numeros) {
    if (vistos.has(numero)) {
      return true;
    }
    vistos.add(numero);
  }
  return false;

  // Abordagem 2: Comparacao de tamanho com Set dedup (Mais concisa / declarativa)
  // const unicos = new Set(numeros);
  // return unicos.size !== numeros.length;
}
