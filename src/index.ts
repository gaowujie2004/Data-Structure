import './xiao-hui/list-table';

export interface Element<T> {
  data: T;
  next: Element<T>;
}

export function createElement<T>(data: T) {
  return {
    data,
    next: null,
  } as Element<T>;
}
