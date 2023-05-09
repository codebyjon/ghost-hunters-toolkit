import ghostData from "@/data/ghosts.json";
import evidenceData from "@/data/evidence.json";

import { createContext, useState } from "react";

// CONTEXT
type AppContext = {
  allGhosts: Ghost[];
  allEvidence: Evidence[];
  evidenceStatus: AppState["evidenceStatus"];
  setEvidenceStatus: (n: string, s: string) => void;
  resetEvidenceStatus: () => void;
};

const AppContext = createContext<AppContext>({} as AppContext);
export default AppContext;
// =======

// PROVIDER
type AppState = {
  allGhosts: Ghost[];
  allEvidence: Evidence[];
  evidenceStatus: {
    [evidenceName: string]: string;
  };
};

const allGhosts = ghostData.map((data) => ({
  ...data,
  checkEvidence: (included: string[], excluded: string[]): boolean => {
    if (
      included.every((ie) => data.evidence.includes(ie)) &&
      excluded.every((ee) => !data.evidence.includes(ee))
    )
      return true;

    return false;
  },
}));

const allEvidence = evidenceData.map((data) => ({
  ...data,
}));

const evidenceStatus = evidenceData.reduce((prev, curr) => {
  prev[curr.name] = "unknown";
  return prev;
}, {});

export const AppContextProvider = (props: { children: JSX.Element }) => {
  const [appState, setAppState] = useState<AppState>({
    allGhosts,
    allEvidence,
    evidenceStatus,
  });

  function setEvidenceStatus(name: string, status: string) {
    setAppState((prevState) => ({
      ...prevState,
      evidenceStatus: {
        ...prevState.evidenceStatus,
        [name]: status,
      },
    }));
  }

  function resetEvidenceStatus() {
    setAppState((prevState) => ({
      ...prevState,
      evidenceStatus,
    }));
  }

  return (
    <AppContext.Provider
      value={{
        allGhosts: appState.allGhosts,
        allEvidence: appState.allEvidence,
        evidenceStatus: appState.evidenceStatus,
        setEvidenceStatus,
        resetEvidenceStatus,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
// =======

// OBJECTS
export type Ghost = {
  name: string;
  huntThreshold: number;
  evidence: string[];
  tips: string[];
  checkEvidence: (ie: string[], ee: string[]) => boolean;
};

export type Evidence = {
  name: string;
  image_path: string;
};
// ========
