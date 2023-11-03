import type { Ghost } from "$lib/types/ghost";
import type { Writable } from "svelte/store";

import ghostData from "$lib/game-data/ghosts.json";
import evidenceStore from "./evidenceStore";
import { writable, get } from "svelte/store";

class GhostStore {
  store: Writable<Ghost[]>;
  initialState: Ghost[];

  constructor() {
    this.initialState = ghostData;
    this.store = writable<Ghost[]>(this.initialState);

    evidenceStore.store.subscribe(() => {
      this.store.set(
        this.initialState.filter((ghost) => this.isViableGhost(ghost))
      );
    });
  }

  isViableGhost(ghost: Ghost): boolean {
    const foundEvidence = evidenceStore.getFoundEvidenceNames();
    const exludedEvidence = evidenceStore.getExcludedEvidenceNames();

    if (
      foundEvidence.every((fe) => ghost.evidence.includes(fe)) &&
      exludedEvidence.every((ee) => !ghost.evidence.includes(ee))
    ) {
      return true;
    }

    return false;
  }
}

export default new GhostStore();
