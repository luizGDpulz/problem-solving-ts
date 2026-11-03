# 🧠 Algoritmos & Lógica de Programação com TypeScript

> **Jornada de Fortalecimento de Lógica e Estruturas de Dados**  
> *"Não terceirizar o pensamento básico para a IA: treinar o músculo da lógica na prática com TDD, complexidade algorítmica e TypeScript puro."*

---

## 🎯 Sobre o Projeto

Este repositório documenta minha evolução contínua em algoritmos, resolução de problemas (*problem-solving*) e estruturas de dados. 

Aqui, cada desafio segue um fluxo rigoroso:
1. **Teoria & TypeScript Primeiro:** Compreensão profunda dos conceitos de tipos e comportamento da linguagem antes do código.
2. **Desenho & Raciocínio (Zero IA na solução):** O algoritmo é concebido no papel/lógica antes da implementação.
3. **TDD (Test-Driven Development):** Toda solução nasce acompanhada de uma suíte de testes unitários com casos triviais e cenários de borda (*edge cases*).
4. **Análise de Complexidade:** Avaliação formal de complexidade de Tempo e Espaço (Notação Big-O).
5. **Commits Atômicos & Issues:** Cada desafio é rastreado por uma Issue dedicada e commits semânticos no GitHub.

---

## 🗺️ Trilha de Progressão

| Nível | Fase | Foco Principal |
| :---: | :--- | :--- |
| **01** | **Fundamentos & Manipulação Crua** | Strings, Arrays, Loops, Contadores, Condições de Borda |
| **02** | **Dois Ponteiros & Janela Deslizante** | *Two Pointers*, *Sliding Window*, Redução de $O(n^2)$ para $O(n)$ |
| **03** | **Estruturas de Dados Lineares** | Hash Maps, Pilhas (*Stacks*), Filas (*Queues*) |
| **04** | **Recursão & Busca** | Busca Binária, Divisão e Conquista, Recursão pura |
| **05** | **Árvores & Grafos** | BFS, DFS, Árvores Binárias de Busca (BST) |

---

## 📊 Tabela de Desafios & Soluções

| # | Desafio | Nível / Fase | Conceitos TS / Algoritmo | Complexidade | Status | Issue |
| :-: | :--- | :---: | :--- | :---: | :---: | :-: |
| 001 | [Inversão de String](./src/01-fundamentos/001-inverter-string) | 🟢 Fundamentos | Loops, Indexação, Imutabilidade de Strings | $O(n)$ Tempo / $O(n)$ Espaço | ⏳ Em Progresso | [#1](https://github.com/luizGDpulz/algoritmos-e-logica/issues/1) |

---

## 🚀 Como Executar os Testes

Clone o repositório e instale as dependências:

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

Distribuído sob a licença MIT. Feito por [Luiz Pulz](https://github.com/luizGDpulz).
