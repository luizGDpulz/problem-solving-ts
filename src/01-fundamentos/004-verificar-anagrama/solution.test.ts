import { describe, it, expect } from 'vitest';
import { eAnagrama } from './solution';

describe('Desafio 004: eAnagrama', () => {
  it('deve retornar true para anagramas simples', () => {
    expect(eAnagrama('amor', 'roma')).toBe(true);
    expect(eAnagrama('listen', 'silent')).toBe(true);
    expect(eAnagrama('alegria', 'alergia')).toBe(true);
  });

  it('deve retornar false quando as strings tem tamanhos diferentes', () => {
    expect(eAnagrama('a', 'ab')).toBe(false);
    expect(eAnagrama('carro', 'car')).toBe(false);
  });

  it('deve retornar false quando tem o mesmo tamanho mas letras diferentes', () => {
    expect(eAnagrama('rat', 'car')).toBe(false);
    expect(eAnagrama('gato', 'pato')).toBe(false);
  });

  it('deve retornar false quando tem as mesmas letras mas quantidades/frequencias diferentes', () => {
    expect(eAnagrama('aa', 'a')).toBe(false);
    expect(eAnagrama('aab', 'abb')).toBe(false);
  });

  it('deve retornar true para strings vazias', () => {
    expect(eAnagrama('', '')).toBe(true);
  });

  it('deve retornar true para uma unica letra identica', () => {
    expect(eAnagrama('z', 'z')).toBe(true);
  });
});
