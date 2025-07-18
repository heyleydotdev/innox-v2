"use client";

import { createContext, use } from "react";

export interface SectionsContextValue {
  sections: string[];
  total_sections: number;
  reg_section(name: string): void;
}

export const SectionsContext = createContext({} as SectionsContextValue);

export const useSections = () => use(SectionsContext);

export interface SectionContextValue {
  isInView: boolean;
}

export const SectionContext = createContext({} as SectionContextValue);

export const useSection = () => use(SectionContext);
