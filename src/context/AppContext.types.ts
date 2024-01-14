import { ReactNode } from 'react';
import { ProjectTypes } from '../Types/project.types';
import { TilesTypes } from '../Types/tiles.types';
import { TestimonialsTypes } from '../Types/testimonials.types';

export type ContextProviderProps = {
  children: ReactNode;
};

export type ContextProps = {
  projects: ProjectTypes[];
  tiles: TilesTypes[];
  testimonials: TestimonialsTypes[];
};
