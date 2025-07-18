import React, { useState } from "react";
import "./AdImage.css";

const Images: React.FC = () => {
  const [image, setImage] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files);
  };

  return (
    <section className="image-box">
      <h3>🖼️ Imagens</h3>
      <label htmlFor="upload" className="image-label">Adicione imagens ao seu anúncio<br/></label>
      <input
        type="file"
        id="upload"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      {image && (
        <div className="preview-box">
          {Array.from(image).map((file, index) => (
            <span key={index} className="file-name">{file.name}</span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Images;
