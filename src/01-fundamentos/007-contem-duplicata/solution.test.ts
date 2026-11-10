import { describe, it, expect } from 'vitest';
import { contemDuplicata } from './solution';

describe('Desafio 007: contemDuplicata', () => {
  it('deve retornar true quando ha elementos duplicados', () => {
    expect(contemDuplicata([1, 2, 3, 1])).toBe(true);
    expect(contemDuplicata([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    expect(contemDuplicata([99, 99])).toBe(true);
  });

  it('deve retornar false quando todos os elementos sao unicos', () => {
    expect(contemDuplicata([1, 2, 3, 4])).toBe(false);
    expect(contemDuplicata([10, 20, 30, 40, 50])).toBe(false);
  });

  it('deve lidar com numeros negativos e zero', () => {
    expect(contemDuplicata([-1, -2, -3, -1])).toBe(true);
    expect(contemDuplicata([-1, 0, 1])).toBe(false);
    expect(contemDuplicata([0, 0])).toBe(true);
  });

  it('deve retornar false para arrays vazios ou de tamanho 1', () => {
    expect(contemDuplicata([])).toBe(false);
    expect(contemDuplicata([42])).toBe(false);
  });
});
