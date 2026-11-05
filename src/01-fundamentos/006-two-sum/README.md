# Desafio #006: Two Sum (Soma de Dois Números)

Dado um array de números inteiros `numeros` e um número inteiro `alvo`, retorne os **índices** dos dois números de forma que a soma deles seja igual a `alvo`.

Se não houver solução, retorne `null`.

Exemplos:
- Entrada: `numeros = [2, 7, 11, 15]`, `alvo = 9`
  - Saída: `[0, 1]` (pois `numeros[0] + numeros[1] = 2 + 7 = 9`)
- Entrada: `numeros = [3, 2, 4]`, `alvo = 6`
  - Saída: `[1, 2]` (pois `numeros[1] + numeros[2] = 2 + 4 = 6`)
- Entrada: `numeros = [3, 3]`, `alvo = 6`
  - Saída: `[0, 1]`

---

## Pílula de Teoria & Estruturas do TypeScript

### 1. A Ideia do Complemento (Trade-off de Espaço por Tempo)

A abordagem ingênua (força bruta) é testar todas as combinações possíveis com dois loops:
```ts
// Força bruta: O(n²) de tempo!
for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] + numeros[j] === alvo) return [i, j];
  }
}
```
Isso é quadrático ($O(n^2)$). Se o array tiver 100.000 números, o computador trava.

Como fazer em **uma única passada linear $O(n)$**?
Pense em matemática básica:
$$\text{numeroAtual} + \text{complemento} = \text{alvo}$$
Logo:
$$\text{complemento} = \text{alvo} - \text{numeroAtual}$$

Em vez de procurar quem combina com o número atual no futuro, você guarda em um mapa o que você **já viu no passado**:
- **Chave do mapa:** O número que você viu (`number`).
- **Valor do mapa:** O índice onde você o viu (`number`).

A cada iteração:
1. Calcule: `complemento = alvo - numeroAtual`.
2. Pergunte ao mapa: *"Eu já vi esse `complemento` antes?"*
3. **Se sim:** você achou o par! O índice do complemento está no mapa, e o índice atual é o seu `i`. Retorne `[indiceDoComplemento, i]`.
4. **Se não:** salve o `numeroAtual` e seu índice `i` no mapa para os próximos números consultarem.

---

### 2. Cuidados no TypeScript com Hash Map Numérico

No TypeScript, um objeto que guarda números como chave e índice como valor pode ser tipado como:
```ts
const mapaIndices: Record<number, number> = {};
```

⚠️ **Atenção com o índice `0`:**
Lembre-se que o índice do primeiro elemento é `0`. No JavaScript:
```ts
if (!mapaIndices[complemento]) // CUIDADO! Se o índice for 0, !0 é verdadeiro!
```
Para checar se uma chave realmente existe no mapa sem cair na pegadinha do zero:
```ts
if (mapaIndices[complemento] !== undefined) {
  return [mapaIndices[complemento], i];
}
```

---

### 3. Tuplas em TypeScript: `[number, number]`
No retorno `[number, number] | null`, estamos usando uma **Tupla**. Uma tupla é um array com tamanho fixo e tipos exatos em cada posição (neste caso, exatamente dois números).

---

## Requisitos do Desafio

1. Implemente `twoSum(numeros: number[], alvo: number): [number, number] | null`.
2. Você não pode usar o mesmo elemento duas vezes (ou seja, os dois índices devem ser diferentes).
3. Complexidade esperada:
   - **Tempo:** $O(n)$ — uma única passada.
   - **Espaço:** $O(n)$ — mapa para armazenar até $n$ elementos visitados.
