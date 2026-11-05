import { describe, it, expect } from 'vitest';
import { twoSum } from './solution';

describe('Desafio 006: twoSum', () => {
  it('deve encontrar o par de indices em um array basico', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('deve encontrar o par mesmo quando os elementos nao estao no inicio', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('deve lidar com elementos repetidos de mesmo valor', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('deve funcionar com numeros negativos e zero', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
    expect(twoSum([-5, -2, -3, 1], -8)).toEqual([0, 2]);
  });

  it('deve retornar null se nao houver nenhum par valido', () => {
    expect(twoSum([1, 2, 3], 10)).toBeNull();
    expect(twoSum([], 5)).toBeNull();
    expect(twoSum([5], 5)).toBeNull();
  });
});
