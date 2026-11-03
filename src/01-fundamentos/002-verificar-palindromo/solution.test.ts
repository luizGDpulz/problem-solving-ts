import { describe, it, expect } from 'vitest';
import { ePalindromo } from './solution';

describe('Desafio 002: ePalindromo', () => {
  it('deve retornar true para palavras palindromas com tamanho impar', () => {
    expect(ePalindromo('radar')).toBe(true);
    expect(ePalindromo('arara')).toBe(true);
    expect(ePalindromo('asa')).toBe(true);
  });

  it('deve retornar true para palavras palindromas com tamanho par', () => {
    expect(ePalindromo('osso')).toBe(true);
    expect(ePalindromo('reviver')).toBe(true);
    expect(ePalindromo('abba')).toBe(true);
  });

  it('deve retornar false para palavras que nao sao palindromas', () => {
    expect(ePalindromo('carro')).toBe(false);
    expect(ePalindromo('typescript')).toBe(false);
    expect(ePalindromo('ab')).toBe(false);
  });

  it('deve retornar true para caso base de string vazia', () => {
    expect(ePalindromo('')).toBe(true);
  });

  it('deve retornar true para string de um unico caractere', () => {
    expect(ePalindromo('a')).toBe(true);
    expect(ePalindromo('z')).toBe(true);
  });
});
