# Desafio #008: Mover Zeros para o Final

Dado um array de inteiros `numeros`, mova todos os `0`s para o final dele, mantendo a **ordem relativa** de todos os elementos diferentes de zero.

⚠️ **Regra Fundamental:** Você deve fazer isso **in-place** (modificando o próprio array recebido), sem criar uma cópia dele. A função retorna `void`.

Exemplo:
- Entrada: `numeros = [0, 1, 0, 3, 12]`
- Resultado após a função rodar: `numeros` passa a ser `[1, 3, 12, 0, 0]`

---

## Pílula de Teoria & Estruturas do TypeScript

### 1. O Conceito de Modificação In-place e `void`
Em TypeScript, quando uma função retorna `void`, significa que ela não retorna nenhum valor (`return;` ou simplesmente nada).
Como arrays em JavaScript/TypeScript são passados por **referência**, qualquer alteração em `numeros[i]` modifica o array original de quem chamou a função!

❌ **O que NÃO pode fazer:**
```ts
// Isso aloca um novo array na memória (O(n) de espaço)! Viola o requisito in-place:
const naoZeros = numeros.filter(n => n !== 0);
```

---

### 2. Padrão Algorítmico: Dois Ponteiros na Mesma Direção (Leitor e Escritor)

No Desafio #002 (Palíndromo), usamos dois ponteiros convergentes (um no começo e outro no fim).
Aqui, usamos **dois ponteiros andando na mesma direção**:
- **Ponteiro Escritor (`posicaoNaoZero`):** Marca onde deve ser gravado o próximo número válido (não-zero). Começa em `0`.
- **Ponteiro Leitor (`i`):** Percorre o array do início ao fim procurando números que não sejam zero.

#### O Raciocínio (Passo a Passo):
1. Percorra o array com o leitor `i`:
   - Se `numeros[i] !== 0`:
     - Coloque esse número na posição do escritor: `numeros[posicaoNaoZero] = numeros[i];`
     - Avance o escritor: `posicaoNaoZero++`.
2. Quando o leitor `i` terminar de percorrer todo o array, todos os números não-zero já foram compactados no início do array, em ordem!
3. Agora, do índice `posicaoNaoZero` até o final do array (`numeros.length`), preencha com `0`:
   ```ts
   for (let i = posicaoNaoZero; i < numeros.length; i++) {
     numeros[i] = 0;
   }
   ```

*(Ou você pode fazer um swap/troca de valores entre `numeros[posicaoNaoZero]` e `numeros[i]` em um único loop! Ambas são $O(n)$ de tempo e $O(1)$ de espaço).*

---

## Requisitos do Desafio

1. Implemente `moverZeros(numeros: number[]): void`.
2. Altere o array original diretamente.
3. Não crie novos arrays.
4. Mantenha a ordem relativa dos elementos não-zero.
5. Complexidade esperada:
   - **Tempo:** $O(n)$
   - **Espaço:** $O(1)$ (In-place)
