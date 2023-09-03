export default function Listado({ userList, eliminar }) {
  return (
    <>
      <div className="contenedor-tabla">
        <table className="table table-strip">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.map((item, k) => (
                <tr key={k}>
                  <td>{item.nombre}</td>
                  <td>{item.correo}</td>
                  <td>{item.edad}</td>
                  <td>{item.cargo}</td>
                  <td>{item.telefono}</td>
                  <td>
                    <a href="#" onClick={(e) => eliminar(k)}>🗑️</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
