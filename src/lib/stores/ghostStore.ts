import type { Ghost } from "$lib/types/ghost";
import type { Writable } from "svelte/store";

import ghostData from "$lib/game-data/ghosts.json";
import { writable, get } from "svelte/store";

class GhostStore {
  store: Writable<Ghost[]>;
  initialState: Ghost[];

  constructor() {
    this.initialState = ghostData;
    this.store = writable<Ghost[]>(this.initialState);
  }
}

export default new GhostStore();
