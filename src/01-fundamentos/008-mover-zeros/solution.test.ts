import { describe, it, expect } from 'vitest';
import { moverZeros } from './solution';

describe('Desafio 008: moverZeros', () => {
  it('deve mover zeros para o final mantendo a ordem relativa', () => {
    const arr = [0, 1, 0, 3, 12];
    moverZeros(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });

  it('deve lidar com zeros no inicio do array', () => {
    const arr = [0, 0, 1];
    moverZeros(arr);
    expect(arr).toEqual([1, 0, 0]);
  });

  it('deve lidar com zeros consecutivos no meio', () => {
    const arr = [4, 0, 0, 5, 0, 6];
    moverZeros(arr);
    expect(arr).toEqual([4, 5, 6, 0, 0, 0]);
  });

  it('deve manter inalterado array sem zeros', () => {
    const arr = [1, 2, 3];
    moverZeros(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('deve manter inalterado array formado apenas por zeros', () => {
    const arr = [0, 0, 0];
    moverZeros(arr);
    expect(arr).toEqual([0, 0, 0]);
  });

  it('deve lidar com array vazio ou de tamanho 1', () => {
    const arrVazio: number[] = [];
    moverZeros(arrVazio);
    expect(arrVazio).toEqual([]);

    const arrUmZero = [0];
    moverZeros(arrUmZero);
    expect(arrUmZero).toEqual([0]);

    const arrUmNaoZero = [7];
    moverZeros(arrUmNaoZero);
    expect(arrUmNaoZero).toEqual([7]);
  });
});
