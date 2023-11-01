import type { Evidence } from "$lib/types/evidence";
import type { Writable } from "svelte/store";

import evidenceData from "$lib/game-data/evidence.json";
import { writable } from "svelte/store";

class EvidenceStore {
  store: Writable<Evidence[]>;

  constructor() {
    const initalState = evidenceData.map((e) => ({ ...e, status: 0 }));
    this.store = writable<Evidence[]>(initalState);
  }

  stepEvidenceStatus(i: number) {
    this.store.update((es) => {
      const updatedEvidence = [...es];
      const nextValue =
        updatedEvidence[i].status < 2 ? updatedEvidence[i].status + 1 : 0;

      updatedEvidence[i] = {
        ...updatedEvidence[i],
        status: nextValue,
      };
      return updatedEvidence;
    });
  }
}

export default new EvidenceStore();
