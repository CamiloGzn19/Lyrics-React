import React, { useState } from "react";

const Formulario = () => {
  // Estados de la app
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  // Función a cada input para leer su contenido
  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Consultar las API
  const buscarInformacion = (e) => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    // Pasar al componente principal
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          {error ? (
            <p className="alert alert-danger text-center p-2">
              Todos los campos son obligatorios
            </p>
          ) : null}
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset className="">
              <legend className="text-center">
                Buscador Letras de Canciones
              </legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Canción"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
