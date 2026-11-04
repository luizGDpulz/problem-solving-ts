# Desafio #004: Verificar Anagrama Válido

Dadas duas strings `s` e `t`, determine se `t` é um **anagrama** de `s`.

Um anagrama ocorre quando duas palavras são formadas reorganizando exatamente as mesmas letras, com as **mesmas quantidades** (frequências).

Exemplos:
- `"amor"` e `"roma"` -> `true`
- `"listen"` e `"silent"` -> `true`
- `"rat"` e `"car"` -> `false`
- `"a"` e `"ab"` -> `false`

---

## Pílula de Teoria & Estruturas do TypeScript

### 1. Conexão com o Desafio #003
No desafio anterior, você aprendeu a montar a tabela de frequência de uma string:
`"amor"` -> `{ a: 1, m: 1, o: 1, r: 1 }`

Para saber se duas palavras são anagramas:
- Se os comprimentos (`length`) forem diferentes, elas **nunca** poderão ser anagramas! (Early return: `if (s.length !== t.length) return false;`).
- Se forem do mesmo tamanho, as contagens de cada caractere em `s` e em `t` devem ser idênticas.

### 2. Estratégias Algorítmicas

#### Abordagem 1: Dois Maps de Frequência
Você conta as letras de `s` em um mapa e as de `t` em outro mapa. Depois compara se para cada chave as contagens batem.

#### Abordagem 2: Um Único Map (Mais elegante e eficiente!)
1. Cria um único mapa de contagem: `const contagem: Record<string, number> = {};`
2. Percorre `s` somando: `contagem[c] = (contagem[c] ?? 0) + 1;`
3. Percorre `t` subtraindo:
   - Se o caractere de `t` nem existir no mapa ou a contagem dele já for `0`, já sabemos que **não é anagrama** (`return false;`).
   - Senão, subtrai `contagem[c]--`.
4. Se o loop de `t` terminar com sucesso, então todas as contagens zeraram perfeitamente (`return true;`).

### 3. Iterando sobre Chaves ou Valores de um Objeto
Caso você precise olhar dentro de um objeto em JavaScript:
- `Object.keys(obj)` -> Retorna array com os nomes das propriedades (`string[]`).
- `for (const chave in obj)` -> Loop tradicional pelas chaves de um objeto.

---

## Requisitos do Desafio

1. Implemente `eAnagrama(s: string, t: string): boolean`.
2. Considere letras maiúsculas e minúsculas como distintas (case-sensitive por enquanto).
3. Duas strings vazias `""` e `""` são anagramas válidos (`true`).
4. Complexidade esperada:
   - **Tempo:** $O(n)$
   - **Espaço:** $O(k)$ (onde $k$ é a quantidade de caracteres distintos)
