import { useState } from "react"

import Alerta from "./Alerta"

export default function Formulario({ userList, setUserList, setUserFiltrado, setAlertaMensaje, setAlertaTipo }) {
    const [user, setUser] = useState({})
    // const [userList, setUserList] = useState([])

    const setData = (key, value) => {
        // Se mantienen las propiedades del usuario y solo se modifica el valor nuevo
        setUser({
            ...user,
            [key]: value
        })

        console.log(user)
    }

    const agregarUsuario = (e) => {
        e.preventDefault();

        if (!user.nombre || !user.correo || !user.edad || !user.cargo || !user.telefono) {
            setAlertaMensaje("Revisa los campos e intenta nuevamente")
            setAlertaTipo("danger")
            return
        }

        // Se agrega el usuario a la lista
        setUserList([
            ...userList,
            user
        ])

        setUserFiltrado([
            ...userList,
            user
        ])

        // Se limpia el usuario
        setUser({})

        setAlertaMensaje("Usuario agregado")
        setAlertaTipo("success")

        e.target.reset()
    }

    return (
        <>
            <form onSubmit={(e) => agregarUsuario(e)} className="contanedor-formulario d-flex flex-column gap-3">
                <h3 className="title">Agregar colaborador</h3>
                <input onChange={(e) => setData("nombre", e.target.value)} name="nombre" type="text" placeholder="Nombre del colaborador" className="form-control" />
                <input onChange={(e) => setData("correo", e.target.value)} name="correo" type="email" placeholder="Email del colaborador" className="form-control" />
                <input onChange={(e) => setData("edad", e.target.value)} name="edad" type="number" placeholder="Edad del colaborador" className="form-control" />
                <input onChange={(e) => setData("cargo", e.target.value)} name="cargo" type="text" placeholder="Cargo del colaborador" className="form-control" />
                <input onChange={(e) => setData("telefono", e.target.value)} name="telefono" type="number" placeholder="Teléfono del colaborador" className="form-control" />
                <button type="submit" className="btn btn-primary">Agregar colaborador</button>
            </form>
        </>
    )
}