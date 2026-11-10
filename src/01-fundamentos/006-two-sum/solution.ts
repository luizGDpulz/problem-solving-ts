/**
 * Encontra os indices de dois numeros cuja soma seja igual ao alvo.
 *
 * @param numeros - Array de numeros inteiros
 * @param alvo - Valor alvo da soma
 * @returns Tupla com os dois indices encontrados, ou null se nao houver par
 */
export function twoSum(numeros: number[], alvo: number): [number, number] | null {
  const mapaIndices: Record<number, number> = {};

  for (let i = 0; i < numeros.length; i++) {
    const complemento = alvo - numeros[i];

    if (mapaIndices[complemento] !== undefined) {
      return [mapaIndices[complemento], i];
    }
    
    mapaIndices[numeros[i]] = i;
  }

  return null;
}