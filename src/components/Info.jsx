import React from "react";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyEN } = info;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información del artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo artista" />
        <p className="card-text">Género: {strGenre}</p>
        <h2 className="card-text">Biografía:</h2>
        <p className="card-text">{strBiographyEN}</p>
        <p className="card-text">
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;
