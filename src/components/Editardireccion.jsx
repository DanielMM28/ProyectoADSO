import React, { useEffect, useState } from "react";
import "./EditarDireccion.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const EditarDireccion =  ({ cerrarModal }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [Correcto, setCorrecto] = useState(false);

  const [tipoId, setTipoId] = useState('');
  const [numeroId, setNumeroId] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [codigo, setCodigo] = useState('');
  const [direccion, setDireccion] = useState('');

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const Encontrado = usuarios.find((user) =>
      user.name.firstname.toLowerCase() === nombre.toLowerCase() &&
      user.name.lastname.toLowerCase() === apellido.toLowerCase() &&
      user.email.toLowerCase() === correo.toLowerCase() &&
      user.phone === telefono
      
    );

    if (Encontrado) {
      setMensaje("Datos válidos, usuario encontrado.");
      setCorrecto(true);
      cerrarModal();
    } else {
      setMensaje("Los datos no coinciden con ningún usuario.");
      setCorrecto(false);
    }
  };

  return (
    <>
       <div className="modal-header">
        <h5 className="modal-title">Editar Dirección</h5>
        <button type="button" className="btn-close" onClick={cerrarModal}></button>
      </div>
      <div className="modal-body">
       <div className="container-fluid px-4 py-3">

          <div className="Entrega">
            <p>Está editando sus direcciones de entrega y facturación al mismo tiempo.</p>
          </div>
          <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Apellido</label>
                      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Correo electrónico</label>
                      <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Teléfono</label>
                      <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Tipo de identificación</label>
                      <select value={tipoId} onChange={(e) => setTipoId(e.target.value)}>
                        <option value="">Seleccione...</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="TI">Tarjeta de Identidad</option>
                        <option value="CE">Cédula de Extranjería</option>
                        <option value="NIT">NIT</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Número de identificación</label>
                      <input type="text" value={numeroId} onChange={(e) => setNumeroId(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Ciudad</label>
                      <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Departamento</label>
                      <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Código postal</label>
                      <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Dirección</label>
                      <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success mt-3" >Guardar y ver factura</button>
                </form>

                {mensaje && (
                  <p className={Correcto ? "mensaje-exito" : "mensaje-error"}>
                    {mensaje}
                  </p>
                )}
               
          </div>
        </div>
    
    </>
  );
};

export default EditarDireccion;
