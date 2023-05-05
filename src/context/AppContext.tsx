import ghostData from "@/data/ghosts.json";
import evidenceData from "@/data/evidence.json";

import { createContext, useState } from "react";

// DATA
const ghosts = ghostData;
const evidence = evidenceData;
// =======

// CONTEXT
type AppContext = {};

const AppContext = createContext<AppContext>({});
export default AppContext;
// =======

// PROVIDER
type AppState = {
  ghosts: [];
  evidence: [];
  foundEvidence: [];
  excludedEvidence: [];
  excludedGhosts: [];
};

export const AppContextProvider = (props: { children: JSX.Element }) => {
  const [appState, setAppState] = useState({} as AppState);

  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};
// =======
