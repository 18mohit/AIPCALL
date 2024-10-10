import React from "react";

function save({ saved }) {
  return (
    <>
      <div className="conteiner-fluid " id="top">
        <div className="flex">
          {saved.map((image) => (
            <div key={image.id} className="item">
              <img src={image.src.medium} alt="some images" />
            </div>
          ))}
        </div>
      </div>
      {saved.length > 8 && (
        <a href="#top" className="btn btn-primary my-5 btntop">
          Back to top
        </a>
      )}
    </>
  );
}

export default save;
