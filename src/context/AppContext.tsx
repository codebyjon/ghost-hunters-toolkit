import ghostData from "@/data/ghosts.json";
import evidenceData from "@/data/evidence.json";
import Ghost from "@/models/Ghost";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export type AppState = {
  ghosts: Ghost[];
  evidence: {
    [name: string]: number;
  };
  filteredGhosts: Ghost[];
};

type AppContext = {
  appData: AppState;
  setAppData: Dispatch<SetStateAction<AppState>>;
  resetEvidence: () => void;
};

const ghosts = ghostData.map((ghost) => {
  return new Ghost(ghost.name, ghost.huntThreshold, ghost.evidence, ghost.tips);
});

const evidence = evidenceData.reduce((prev, curr) => {
  prev[curr.name] = 0;
  return prev;
}, {} as AppState["evidence"]);

const AppContext = createContext({} as AppContext);

export default AppContext;

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const [appData, setAppData] = useState({
    ghosts,
    evidence,
    filteredGhosts: ghosts,
  });

  const resetEvidence = () => {
    setAppData((prevState) => ({
      ...prevState,
      evidence,
    }));

    document
      .querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
      .forEach((ele) => (ele.indeterminate = false));
  };

  return (
    <AppContext.Provider value={{ appData, setAppData, resetEvidence }}>
      {children}
    </AppContext.Provider>
  );
}
