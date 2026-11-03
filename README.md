# 🧠 Problem Solving em TypeScript (`problem-solving-ts`)

> **Jornada Prática de Lógica, Algoritmos e Estruturas de Dados**  
> *"Não terceirizar o pensamento básico para a IA: fortalecer o raciocínio na prática com TDD, análise de complexidade Big-O e TypeScript estrito."*

---

## 🎯 Sobre o Repositório

Este repositório documenta minha evolução técnica e contínua em resolução de problemas algorítmicos (*problem-solving*) e estruturas de dados usando **TypeScript puro**.

Cada desafio segue um fluxo rigoroso:
1. **Conceitos de TypeScript & Teoria:** Compreensão das nuances da linguagem, imutabilidade, sistema de tipos estrito (`strict mode`), generics e comportamento de memória.
2. **Lógica Crua (Zero IA na Solução):** Decomposição do algoritmo no papel/quadro e mapeamento dos cenários de borda (*edge cases*) antes de escrever código.
3. **TDD (Test-Driven Development):** Testes unitários com Vitest cobrindo entradas padrão, casos vazios, strings/arrays extremos e situações limites.
4. **Análise de Complexidade:** Avaliação formal de Big-O de Tempo e Espaço.
5. **Commits Atômicos & Issues:** Cada desafio é acompanhado por uma Issue dedicada e commits semânticos no GitHub.

---

## 🗺️ Trilha de Progressão

| Fase | Categoria | Foco Principal |
| :---: | :--- | :--- |
| **01** | **Fundamentos & Manipulação Crua** | Strings, Arrays, Loops, Acumuladores, Imutabilidade, Tipos Primitivos |
| **02** | **Dois Ponteiros & Janela Deslizante** | *Two Pointers*, *Sliding Window*, Redução de $O(n^2)$ para $O(n)$, Tuplas TS |
| **03** | **Estruturas de Dados Lineares** | Hash Maps (`Record`, `Map`), Pilhas (*Stacks*), Filas (*Queues*), Generics `<T>` |
| **04** | **Recursão & Busca** | Busca Binária, Divisão e Conquista, Type Guards |
| **05** | **Árvores & Grafos** | BFS, DFS, Árvores Binárias de Busca (BST), Discriminated Unions |

---

## 📊 Tabela de Desafios & Soluções

| # | Desafio | Fase | Conceitos TS / Algoritmo | Complexidade | Status | Issue |
| :-: | :--- | :---: | :--- | :---: | :---: | :-: |
| 001 | [Inversão de String](./src/01-fundamentos/001-inverter-string) | 🟢 01-Fundamentos | Loops, Indexação, Imutabilidade de Strings | $O(n)$ Tempo / $O(n)$ Espaço | ⏳ Em Andamento | [#1](https://github.com/luizGDpulz/problem-solving-ts/issues/1) |

---

## 🚀 Como Executar os Testes

```bash
# Instalar dependências
pnpm install

# Rodar os testes em modo watch (interativo)
pnpm test

# Rodar todos os testes uma única vez
pnpm test:run
```

---

## 📝 Licença

Distribuído sob a licença MIT. Desenvolvido por [Luiz Pulz](https://github.com/luizGDpulz).
