import React from "react";
import GridItem from "./griditem/GridItem";
import type { groupedModules } from "../../types/groupSection";
import "./Grid.css"
import { useCheckbox } from "../wrapper/Wrapper";

interface GridProps {
  groupedModules: groupedModules[];
}



const Grid: React.FC<GridProps> = ({ groupedModules }) => {
  const { hideMnt } = useCheckbox();


  return (
    <div className="grid-sections">
   {groupedModules.map(({ section, modules }) => {
        const filteredModules = hideMnt
          ? modules.filter((mod) => mod.status !== "manutencao")
          : modules;

        if (filteredModules.length === 0) return null;

        return (
          <div className="column" key={section}>
            <h2 className="section-name">{section}</h2>
            <GridItem modules={filteredModules} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
