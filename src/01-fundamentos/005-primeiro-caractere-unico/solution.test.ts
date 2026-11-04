import { describe, it, expect } from 'vitest';
import { primeiroCaractereNaoRepetido } from './solution';

describe('Desafio 005: primeiroCaractereNaoRepetido', () => {
  it('deve encontrar o primeiro caractere unico em strings com repeticoes', () => {
    expect(primeiroCaractereNaoRepetido('abacabad')).toBe('c');
    expect(primeiroCaractereNaoRepetido('loveleetcode')).toBe('v');
  });

  it('deve retornar a primeira letra se todos forem unicos', () => {
    expect(primeiroCaractereNaoRepetido('abcdef')).toBe('a');
  });

  it('deve retornar null se todos os caracteres se repetirem', () => {
    expect(primeiroCaractereNaoRepetido('aabbcc')).toBeNull();
    expect(primeiroCaractereNaoRepetido('arara')).toBeNull();
  });

  it('deve retornar null para string vazia', () => {
    expect(primeiroCaractereNaoRepetido('')).toBeNull();
  });

  it('deve retornar o proprio caractere para string de tamanho 1', () => {
    expect(primeiroCaractereNaoRepetido('z')).toBe('z');
  });

  it('deve tratar maiusculas e minusculas separadamente', () => {
    expect(primeiroCaractereNaoRepetido('aA')).toBe('a');
  });
});
