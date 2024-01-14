import { createContext, useMemo } from 'react';
import { projectsData, tilesData, testimonialsData } from '../appResources';
import { ContextProps, ContextProviderProps } from './AppContext.types';

const AppContext = createContext({} as ContextProps);

export function AppContextProvider({ children }: ContextProviderProps) {
  const projects = useMemo(() => projectsData, []);
  const tiles = useMemo(() => tilesData, []);
  const testimonials = useMemo(() => testimonialsData, []);

  const contextValue = useMemo(() => ({ projects, tiles, testimonials }), [projects, tiles, testimonials]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default AppContext;
