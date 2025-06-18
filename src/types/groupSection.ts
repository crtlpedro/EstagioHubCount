import type { Module } from "../types/module";

export interface groupedModules {
  section: string,
  modules: Module[]
}


export function groupBySection(
  modules: Module[],
  hideMnt: boolean
): groupedModules[] {
  const filtered = hideMnt
    ? modules.filter((item) => item.status !== "manutencao")
    : modules;

 const groupedMap: Record<string, Module[]> = {};

  filtered.forEach((item) => {
    const section = item.section;
    if (!groupedMap[section]) {
      groupedMap[section] = [];
    }
    groupedMap[section].push(item);
  });



  return Object.entries(groupedMap).map(([section, modules]) => ({
    section,
    modules,
  }));
}