import { describe, it, expect } from 'vitest';
import { contarFrequencia } from './solution';

describe('Desafio 003: contarFrequencia', () => {
  it('deve contar corretamente a frequencia de uma palavra simples com repeticoes', () => {
    expect(contarFrequencia('arara')).toEqual({ a: 3, r: 2 });
    expect(contarFrequencia('banana')).toEqual({ b: 1, a: 3, n: 2 });
  });

  it('deve retornar contagem 1 para cada caractere em palavras sem letras repetidas', () => {
    expect(contarFrequencia('sol')).toEqual({ s: 1, o: 1, l: 1 });
  });

  it('deve retornar um objeto vazio para string vazia', () => {
    expect(contarFrequencia('')).toEqual({});
  });

  it('deve tratar maiusculas e minusculas como caracteres distintos', () => {
    expect(contarFrequencia('AaA')).toEqual({ A: 2, a: 1 });
  });

  it('deve contabilizar espacos e pontuacoes', () => {
    expect(contarFrequencia('oi mundo!')).toEqual({
      o: 2,
      i: 1,
      ' ': 1,
      m: 1,
      u: 1,
      n: 1,
      d: 1,
      '!': 1,
    });
  });

  it('deve funcionar com numeros e digitos na string', () => {
    expect(contarFrequencia('11223')).toEqual({ '1': 2, '2': 2, '3': 1 });
  });
});
