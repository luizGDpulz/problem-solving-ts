# Desafio #002: Verificar Palíndromo

Um **palíndromo** é uma palavra ou sequência de caracteres que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda (ex: `"radar"`, `"arara"`, `"asa"`).

---

## Pílula de Teoria & Estrutura de Linguagem

### 1. O Padrão Algorítmico: Dois Ponteiros (Two Pointers)
No Desafio #001, você inverteu uma string inteira gastando memória extra ($O(n)$ de espaço) para guardar a cópia invertida.

Se o objetivo for apenas **verificar** se ela é igual nas duas pontas, gastar memória criando uma string invertida e depois comparar `texto === invertido` é desperdício de memória e CPU.

A técnica de **Dois Ponteiros** resolve isso com $O(1)$ de memória auxiliar (zero memória extra alocada):
- Colocamos um ponteiro/índice no início: `esquerda = 0`
- Colocamos um ponteiro/índice no final: `direita = texto.length - 1`
- Entramos em um loop comparando se `texto[esquerda]` é igual a `texto[direita]`.
- Se em qualquer momento forem diferentes, você já sabe a resposta imediatamente!
- Avançamos `esquerda++` e recuamos `direita--` até eles se encontrarem no meio.

```
 r   a   d   a   r
 ^               ^
 |               |
esquerda       direita   -> 'r' === 'r' (avança)

 r   a   d   a   r
     ^       ^
     |       |
  esquerda direita       -> 'a' === 'a' (avança)

 r   a   d   a   r
         ^
      esquerda/direita   -> cruzaram! É palíndromo!
```

---

### 2. Recursos do TypeScript / JavaScript neste Desafio

#### Booleanos e Early Return
Em funções que respondem "sim/não" (`boolean`), a melhor prática de clareza e performance é o **Early Return** (retorno antecipado):
- Assim que encontrar uma discrepância, retorne imediatamente `return false;`. O loop para na hora sem processar o resto à toa.
- Se o loop terminar sem encontrar nada errado, retorne `return true;`.

#### O laço `while`
Você usou o `for` no desafio anterior. Quando temos dois índices caminhando um em direção ao outro, o `while` costuma ser muito mais legível que o `for`:

```ts
let esquerda = 0;
let direita = texto.length - 1;

while (esquerda < direita) {
  // sua comparação aqui
  esquerda++;
  direita--;
}
```

---

## Requisitos do Desafio

1. Implemente a função `ePalindromo(texto: string): boolean`.
2. Não utilize `.reverse()` nem crie uma string invertida auxiliar na memória.
3. Considere strings vazias `""` e de 1 caractere como palíndromos válidos.
4. Complexidade esperada:
   - **Tempo:** $O(n)$ no pior caso (se for palíndromo, olha metade da string: $n/2$).
   - **Espaço:** $O(1)$ (apenas duas variáveis numéricas na memória).
