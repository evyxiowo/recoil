import { atom, selector } from 'recoil';

// Atom to hold the counter state
export const counterAtom = atom({
  key: 'counterAtom',
  default: 0,
});

// Selector to derive and provide the current counter value
export const counterSelector = selector({
  key: 'counterSelector',
  get: ({ get }) => {
    const count = get(counterAtom);
    return `Current count is ${count}`;  // Derived value as a string
  },
});
