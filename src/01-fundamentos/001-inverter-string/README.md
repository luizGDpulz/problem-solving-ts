# Desafio 001: Inversão de String (Sem Métodos Prontos)

> **Fase:** 01 — Fundamentos  
> **Dificuldade:** Fácil  
> **Rastreamento:** Issue #1

---

## 📚 Pílula de Conteúdo: TypeScript & Strings

Antes de sair codando, entenda como o motor do JavaScript/TypeScript lida com texto:

### 1. Imutabilidade de Strings
No JavaScript/TypeScript, **strings são primitivos imutáveis**. Isso significa que você nunca consegue alterar um caractere existente diretamente via índice:
```typescript
let nome = "casa";
nome[0] = "v"; // ❌ No TypeScript em strict mode isso dá erro, e no JS simplesmente não faz nada!
console.log(nome); // Continua "casa"
```
Para transformar ou inverter uma string, você precisa **construir uma nova string** a partir dos caracteres da original.

### 2. Acesso a Caracteres por Índice
Você pode acessar qualquer caractere de uma string da mesma forma que acessa um array (usando `[index]` ou `.charAt(index)`):
```typescript
const texto = "dev";
console.log(texto[0]); // "d"
console.log(texto[texto.length - 1]); // "v" (último caractere)
```

### 3. Tipagem no TypeScript
Neste exercício, garantimos que nossa função receba uma `string` e retorne obrigatoriamente uma `string`:
```typescript
export function inverterString(texto: string): string { ... }
```

---

## 🎯 O Desafio

Escreva uma função `inverterString(texto: string): string` que receba uma string qualquer e retorne essa string invertida.

### ⚠️ Regras Inegociáveis:
1. **É PROIBIDO usar o atalho pronto:** `.split('').reverse().join('')`.
2. O objetivo é exercitar o raciocínio cru: use estruturas de repetição (`for`, `while`) ou acumulação manual.
3. Considere os casos de borda:
   - String vazia `""` deve retornar `""`.
   - String com 1 caractere `"a"` deve retornar `"a"`.
   - Strings com espaços e pontuação `"olá mundo!"` devem ser invertidas mantendo todos os caracteres `" !odnum álo"`.

---

## 🧠 Como Pensar no Algoritmo

1. Como você percorreria uma palavra de trás para frente no papel?
2. Em qual índice você começa? (`length - 1`)
3. Até qual índice você vai? (`0`)
4. Onde você acumula cada caractere visitado?

---

## ⏱️ Complexidade Esperada
- **Tempo:** $O(n)$ — você visita cada um dos $n$ caracteres da string exatamente uma vez.
- **Espaço:** $O(n)$ — você cria uma nova string com o mesmo tamanho da original.
