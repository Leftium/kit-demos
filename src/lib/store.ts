import { writable } from "svelte/store";

const INITIAL_STATE = {
  slug: "",
  count: 0,
};

console.log("Store INITIAL_STATE");

const { subscribe, set, update } = writable(INITIAL_STATE);

const initSlug = (slug: string) => {
  update((state) => ({
    ...state,
    slug,
  }));
};

const increment = () => {
  update((state) => ({
    ...state,
    count: state.count + 1,
  }));
};

export const slugStore = {
  subscribe,
  set,
  update,
  increment,
  initSlug,
};
