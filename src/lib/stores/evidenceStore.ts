import evidence from "$lib/game-data/evidence.json";
import { writable, get } from "svelte/store";

const evidenceStore = writable(
  evidence.map((e) => ({
    ...e,
    status: 0,
  }))
);

export const stepStatus = (index: number) => {
  evidenceStore.update((ea) => {
    const target = ea[index];
    target.status = target.status < 2 ? target.status + 1 : 0;
    console.log(ea[index]);
    return [...ea];
  });
};

export default evidenceStore;
