import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { collapsed: boolean; toggle: () => void };

const SidebarStateContext = createContext<Ctx>({ collapsed: false, toggle: () => {} });

export function SidebarStateProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <SidebarStateContext.Provider
      value={{ collapsed, toggle: () => setCollapsed((c) => !c) }}
    >
      {children}
    </SidebarStateContext.Provider>
  );
}

export function useSidebarState() {
  return useContext(SidebarStateContext);
}
