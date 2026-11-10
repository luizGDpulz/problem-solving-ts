# Desafio #007: Contém Duplicata

Dado um array de números inteiros `numeros`, retorne `true` se qualquer valor aparecer **pelo menos duas vezes** no array, e retorne `false` se todos os elementos forem **distintos**.

Exemplos:
- `[1, 2, 3, 1]` -> `true` (o 1 repete)
- `[1, 2, 3, 4]` -> `false` (todos únicos)
- `[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]` -> `true`
- `[]` -> `false`
- `[42]` -> `false`

---

## Pílula de Teoria & Estruturas do TypeScript

### 1. A Estrutura de Dados: O Conjunto Matemático (`Set`)
Até agora usamos o **Objeto/Hash Map** (`Record<string, number>`) onde precisávamos de chave **e** valor (ex: letra e quantidade, ou número e índice).

Mas e quando você só quer saber: *"Eu já vi esse cara antes? Sim ou Não?"*
Não precisamos guardar um valor associado! Para isso existe o **`Set`** (conjunto matematicamente falando, equivalente ao `std::unordered_set` de C++ ou `HashSet` de Java/C#).

Propriedades fundamentais de um `Set`:
1. **Unicidade:** Um `Set` só guarda elementos únicos. Se você tentar inserir o mesmo elemento 10 vezes, ele só guarda uma vez.
2. **Busca $O(1)$:** Saber se um elemento existe no conjunto é instantâneo em média ($O(1)$).

---

### 2. Métodos Essenciais do `Set` em TypeScript

```ts
// Criando um conjunto de números vazio
const vistos = new Set<number>();

// Adicionando elementos
vistos.add(10);
vistos.add(20);

// Verificando se já existe (retorna boolean: true / false)
vistos.has(10); // true
vistos.has(99); // false

// Tamanho do conjunto (quantidade de elementos únicos)
console.log(vistos.size); // 2
```

---

### 3. Duas Formas de Pensar no Algoritmo

#### Abordagem A: Com Early Return (Mais rápida na prática)
Você percorre o array com um `for (const num of numeros)`.
A cada número:
- Se `vistos.has(num)` já for verdadeiro, achou uma duplicata! `return true;` na hora!
- Senão, adiciona: `vistos.add(num);`.
- Se o loop terminar sem achar repetido, `return false;`.

#### Abordagem B: Criando o Set de uma vez (O "one-liner" do JS)
Você pode passar um array inteiro no construtor:
```ts
const unicos = new Set(numeros);
```
Como o `Set` elimina duplicatas automaticamente, se o tamanho de `unicos.size` for menor que `numeros.length`, significa que haviam duplicatas!

*(Recomendação pedagógica: implemente a Abordagem A primeiro para exercitar o `has()` e o `add()`, pois o Early Return economiza tempo se a duplicata estiver logo no começo do array!)*

---

## Requisitos do Desafio

1. Implemente `contemDuplicata(numeros: number[]): boolean`.
2. Para array vazio ou com 1 elemento, retorne `false`.
3. Complexidade esperada:
   - **Tempo:** $O(n)$
   - **Espaço:** $O(n)$
