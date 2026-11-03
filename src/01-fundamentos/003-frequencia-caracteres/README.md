# Desafio #003: Contagem de Frequência de Caracteres

Dada uma string qualquer, determine quantas vezes cada caractere aparece nela.

Exemplo:
- Entrada: `"banana"`
- Saída: `{ b: 1, a: 3, n: 2 }`

---

## Pílula de Teoria & Estruturas do TypeScript

### 1. A Estrutura de Dados: Hash Map (Tabela Hash / Dicionário)
Em C++, você usaria um `std::unordered_map<char, int>`.
Em TypeScript/JavaScript, a estrutura mais comum para pares chave-valor é o próprio **Objeto literal (`{}`)** ou a classe `Map`.

Para este desafio, usaremos o **Objeto**, tipado pelo TypeScript como:
```ts
Record<string, number>
```
Isso significa: um objeto onde as **chaves** são `string` (o caractere) e os **valores** são `number` (a contagem).

---

### 2. Acessando e Modificando Chaves Dinâmicas
Para acessar ou atribuir uma propriedade cujo nome está em uma variável (como o caractere atual `c`), usamos a notação de colchetes `objeto[chave]`:

```ts
const frequencia: Record<string, number> = {};
const caractere = 'a';

// Lendo o valor atual:
console.log(frequencia[caractere]); // undefined (se a chave ainda não existir!)
```

---

### 3. O Padrão: "Se já existe soma 1, senão começa com 1"

Ao percorrer a string caractere por caractere, para cada caractere você tem duas situações:
1. É a **primeira vez** que o caractere aparece? Você define o valor como `1`.
2. O caractere **já foi visto** antes? Você incrementa `+ 1`.

#### Abordagem 1: Com `if / else`
```ts
if (frequencia[caractere] !== undefined) {
  frequencia[caractere] += 1;
} else {
  frequencia[caractere] = 1;
}
```

#### Abordagem 2: Operador Nullish Coalescing (`??`) ou `||`
Em TypeScript moderno, existe um atalho idiomático muito elegante:
```ts
// Se frequencia[caractere] for undefined, usa 0 como padrão e soma 1
frequencia[caractere] = (frequencia[caractere] ?? 0) + 1;
```

---

### 4. Percorrendo Strings em JS/TS (`for...of`)
Além do `for (let i = 0; i < texto.length; i++)`, JavaScript possui o loop **`for...of`**, que entrega diretamente cada caractere (como um `range-based for` de C++: `for (char c : str)`):

```ts
for (const caractere of texto) {
  // caractere é uma string de 1 letra a cada volta!
}
```

---

## Requisitos do Desafio

1. Implemente `contarFrequencia(texto: string): Record<string, number>`.
2. Para string vazia `""`, retorne um objeto vazio `{}`.
3. Considere todos os caracteres (incluindo espaços, números e pontuações).
4. O algoritmo deve ser case-sensitive (ex: `'A'` e `'a'` contam separadamente).
5. Complexidade esperada:
   - **Tempo:** $O(n)$ — uma única passada pela string.
   - **Espaço:** $O(k)$ — onde $k$ é o número de caracteres únicos (no pior caso $k \le n$).
