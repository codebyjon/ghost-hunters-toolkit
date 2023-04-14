import type AppProps from "next/app";
import type Dispatch from "next/app";
import type SetStateAction from "next/app";

import ghostData from "@/data/ghosts.json";
import evidenceData from "@/data/evidence.json";
import Ghost from "@/models/Ghost";

import { createContext, useState } from "react";

type AppState = {
  ghosts: Ghost[];
  evidence: {
    [name: string]: number;
  };
  filteredGhosts: Ghost[];
};

type AppContext = {
  appData: AppState;
  setAppData: Dispatch<SetStateAction<AppState>>;
};

const ghosts = ghostData.map((ghost) => {
  return new Ghost(ghost.name, ghost.huntThreshold, ghost.evidence, ghost.tips);
});

const evidence = evidenceData.reduce((prev, curr) => {
  prev[curr.name] = 0;
  return prev;
}, {} as AppState["evidence"]);

const AppContext = createContext<AppContext>({} as AppContext);

export default AppContext;

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const [appData, setAppData] = useState({
    ghosts,
    evidence,
    filteredGhosts: ghosts,
  });

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
}
