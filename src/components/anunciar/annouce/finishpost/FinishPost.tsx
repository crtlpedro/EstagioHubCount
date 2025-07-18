import React, { useState } from "react";
import "./finishpost.css";

const Finish: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Anúncio enviado!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="finish-box">
      <button className="btn-post" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      <button className="btn-cancel">Cancelar</button>
    </section>
  );
};

export default Finish;
