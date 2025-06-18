import React from "react";
import type { Module } from "../../../types/module";
import "./GridItem.css";
import HelpPopup from "../../helpopup/HelpPopup";
import GridImage from "../gridimagem/GridImage";
import ReportTitle from "../../reporttitle/ReportTitle";
import FavoriteButton from "../favoritebutton/FavoriteButton";

interface IGridItemProps {
  modules: Module[];
}

const GridItem: React.FC<IGridItemProps> = ({ modules }) => {
  return (
    <div className="item-grid">
      {modules.map((module) => (
        <div
          key={module.id}
          className={`
        ${module.classe && module.classe}
        ${module.status === "manutencao" ? "em-manutencao" : ""} 
        ${module.title === "Report Contábil" ? "report-contabil" : "item-aut"}
        `}
        >
          <div className="icons">
            <FavoriteButton id={module.id} />
            <HelpPopup id={module.id} description={module.description} />
          </div>
          <GridImage id={module.id} image={module.image} title={module.title} />
          <HelpPopup id={module.id} description={module.description} />
          <ReportTitle id={module.id} title={module.title} />
          <p
            className={`${
              module.title === "Report Contábil" ? "report-title" : ""
            }`}
          >
            {module.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridItem;
