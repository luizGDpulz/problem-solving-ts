# Desafio #005: Primeiro Caractere Não Repetido

Dada uma string, encontre o primeiro caractere que não se repete ao longo dela e retorne-o. Se todos os caracteres se repetirem ou se a string for vazia, retorne `null`.

Exemplos:
- `"abacabad"` -> `"c"` (o `'a'` e o `'b'` se repetem, o `'c'` é o primeiro com frequência 1)
- `"loveleetcode"` -> `"v"`
- `"aabbcc"` -> `null`
- `""` -> `null`

---

## Pílula de Teoria & Estruturas do TypeScript

### 1. O Padrão: Duas Passadas (Two Passes com Hash Map)
Como saber se um caractere é único se ainda não terminamos de ler a string inteira?
- Se você olhar apenas o primeiro caractere de `"abacabad"` (que é `'a'`), você não sabe se ele vai se repetir mais para a frente a menos que olhe o resto da palavra.
- A força bruta seria, para cada caractere, rodar outro loop para frente contando quantas vezes ele aparece. Isso geraria dois loops aninhados: **$O(n^2)$** de tempo (muito lento!).

A solução ideal divide o problema em **duas etapas lineares ($O(n) + O(n) = O(n)$)**:

1. **Passada 1 (Contagem):**
   Percorra a string inteira montando o mapa de frequência `{ [char]: quantidade }`, exatamente como você já fez nos desafios 003 e 004.
2. **Passada 2 (Consulta na Ordem Original):**
   Percorra a string **novamente**, do início ao fim. Para cada caractere, consulte o mapa:
   - Se a contagem dele no mapa for exatamente `1`, você achou o primeiro caractere único! Retorne-o imediatamente com `return char;` (**Early Return**).
3. **Caso nenhum seja único:**
   Se o segundo loop terminar sem retornar nada, significa que todos se repetem. Retorne `null`.

---

### 2. Recursos do TypeScript: Union Types (`string | null`)
No TypeScript, quando uma função pode devolver um valor real ou a ausência dele, usamos a barra vertical `|` (tipo união / Union Type):

```ts
export function primeiroCaractereNaoRepetido(texto: string): string | null {
  // se encontrar: return 'c';
  // se não encontrar: return null;
}
```
O compilador do TypeScript obriga qualquer um que chamar essa função a tratar o caso `null`, evitando erros comuns em tempo de execução.

---

## Requisitos do Desafio

1. Implemente `primeiroCaractereNaoRepetido(texto: string): string | null`.
2. Para string vazia `""` ou caso todos se repitam, retorne `null`.
3. Considere case-sensitive por padrão (`'A'` e `'a'` contam separadamente).
4. Complexidade esperada:
   - **Tempo:** $O(n)$
   - **Espaço:** $O(k)$ (onde $k$ é a quantidade de caracteres distintos)
