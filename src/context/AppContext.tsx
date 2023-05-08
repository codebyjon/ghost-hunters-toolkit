import ghostData from "@/data/ghosts.json";
import evidenceData from "@/data/evidence.json";

import { createContext, useEffect, useState } from "react";

// CONTEXT
type AppContext = {
  allGhosts: Ghost[];
  allEvidence: Evidence[];
  evidenceStatus: AppState["evidenceStatus"];
  setEvidenceStatus: (n: string, s: string) => void;
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

export const AppContextProvider = (props: { children: JSX.Element }) => {
  const [appState, setAppState] = useState({
    allGhosts: [] as AppState["allGhosts"],
    allEvidence: [] as AppState["allEvidence"],
    evidenceStatus: {} as AppState["evidenceStatus"],
  });

  useEffect(() => {
    const allGhosts = ghostData.map((data) => ({
      ...data,
    }));

    const allEvidence = evidenceData.map((data) => ({
      ...data,
    }));

    const evidenceStatus = evidenceData.reduce((prev, curr) => {
      prev[curr.name] = "unknown";
      return prev;
    }, {});

    setAppState({
      allGhosts,
      allEvidence,
      evidenceStatus,
    });
  }, []);

  function setEvidenceStatus(name: string, status: string) {
    setAppState((prevState) => ({
      ...prevState,
      evidenceStatus: {
        ...prevState.evidenceStatus,
        [name]: status,
      },
    }));
  }

  return (
    <AppContext.Provider
      value={{
        allGhosts: appState.allGhosts,
        allEvidence: appState.allEvidence,
        evidenceStatus: appState.evidenceStatus,
        setEvidenceStatus,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
// =======

// OBJECTS
type Ghost = {
  name: string;
  huntThreshold: number;
  evidence: string[];
  tips: string[];
};

type Evidence = {
  name: string;
  image_path: string;
};
// ========
