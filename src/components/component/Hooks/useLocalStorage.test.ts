/* eslint-disable @typescript-eslint/no-unsafe-call */
import {renderHook, act} from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  test('initial value', () => {
    const {result} = renderHook(() => useLocalStorage('key', 'value'));
    expect(result.current[0]).toBe('value');
  });
  test('return value', () => {
    window.localStorage.setItem('key', JSON.stringify('value'));
    const {result} = renderHook(() => useLocalStorage('key', 'newValue'));
    expect(result.current[0]).toBe('value');
  });
  test('update store', () => {
    const {result} = renderHook(() => useLocalStorage('key', 'value'));
    act(() => {
      result.current[1]('newValue');
    });
    expect(result.current[0]).toBe('newValue');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(JSON.parse(window.localStorage.getItem('key')!)).toBe('newValue');
  });
});
