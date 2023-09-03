

export default function Buscador({ userList, setUserFiltrado}) {

    const filtrar = (e) => {
        const texto = e.target.value.toLowerCase()
        const filtrado = userList.filter((item) => {
            return item.nombre.toLowerCase().includes(texto)
            || item.correo.toLowerCase().includes(texto)
            || item.telefono.toLowerCase().includes(texto)
            || item.cargo.toLowerCase().includes(texto)
        })

        setUserFiltrado(filtrado)
    }

    return (
        <>
            <input type="text" placeholder="Escribe para buscar" onChange={(e) => filtrar(e)} className="form-control" />
        </>
    )
}