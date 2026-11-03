import { describe, it, expect } from 'vitest';
import { inverterString } from './solution';

describe('Desafio 001: inverterString', () => {
  it('deve inverter uma palavra simples com número ímpar de letras', () => {
    expect(inverterString('arroz')).toBe('zorra');
  });

  it('deve inverter uma palavra simples com número par de letras', () => {
    expect(inverterString('dev')).toBe('ved');
    expect(inverterString('code')).toBe('edoc');
  });

  it('deve manter uma string vazia intacta', () => {
    expect(inverterString('')).toBe('');
  });

  it('deve manter uma string de caractere único intacta', () => {
    expect(inverterString('x')).toBe('x');
  });

  it('deve inverter frases com espaços e pontuação', () => {
    expect(inverterString('ola mundo!')).toBe('!odnum alo');
  });

  it('deve inverter strings com números e caracteres mistos', () => {
    expect(inverterString('123abc')).toBe('cba321');
  });
});
