import React from "react";

interface IReport {
  id: number;
  title: string;
}

const ReportTitle: React.FC<IReport> = ({ title }) => {
  return (
    <div>
      {title === "Report Contábil" && (
        <span
          style={{
            width: "100%",
            color: "red",
            fontWeight: 500,
            fontSize: "12px"
            
          }}
        >
          Módulo liberado apenas para atendimento
        </span>
      )}
    </div>
  );
};

export default ReportTitle;
