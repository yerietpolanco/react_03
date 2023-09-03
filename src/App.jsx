import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { BaseColaboradores } from "./baseColaboradores";
import Alerta from "./components/Alerta";

function App() {
  // lista principal 
  const [userList, setUserList] = useState(BaseColaboradores);
  // lista con los usuarios filtrados
  const [userFiltrado, setUserFiltrado] = useState(userList);
  // alerta
  const [alertaMensaje, setAlertaMensaje] = useState("");
  const [alertaTipo, setAlertaTipo] = useState("");

  const eliminar = (k) => {
    // Se elimina el usuario de la lista y se tiene que asignar a las dos listas para que se vea
    const listaEliminado = userList.filter((item, key) => key !== k);
    setUserList(listaEliminado);
    setUserFiltrado(listaEliminado);
  }

  return (
    <>
      <div className="contenedor-app d-flex align-items-center justify-content-center flex-column">
        <div className="contanedor-buscador">
          <Buscador
            userList={userList}
            setUserFiltrado={setUserFiltrado}
          ></Buscador>
        </div>
        <div className="contenedor-principal gap-5 d-flex justify-content-between">
          <Listado userList={userFiltrado} eliminar={eliminar}></Listado>
          <div className="d-flex flex formulario-container flex-column gap-3">
            <Formulario
              userList={userList}
              setAlertaMensaje={setAlertaMensaje}
              setAlertaTipo={setAlertaTipo}
              setUserFiltrado={setUserFiltrado}
              setUserList={setUserList}
            />
            <Alerta mensaje={alertaMensaje} tipo={alertaTipo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
