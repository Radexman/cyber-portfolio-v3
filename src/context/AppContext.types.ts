import { ReactNode } from 'react';
import { ProjectTypes } from '../types/project.types';
import { TilesTypes } from '../types/tiles.types';
import { TestimonialsTypes } from '../types/testimonials.types';

export type ContextProviderProps = {
  children: ReactNode;
};

export type ContextProps = {
  projects: ProjectTypes[];
  tiles: TilesTypes[];
  testimonials: TestimonialsTypes[];
};
