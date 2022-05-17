import { useMemo } from 'react';
import { DefaultRootState, useSelector } from 'react-redux';

export function useMemoizedSelector<TState = DefaultRootState, TSelected = unknown>(
  selector: (state: TState) => TSelected
): TSelected {
  const selected = useSelector(selector);
  return useMemo(() => selected, [selected]);
}
