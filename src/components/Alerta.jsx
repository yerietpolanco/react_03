import { Alert } from "react-bootstrap";


export default function Alerta({ mensaje, tipo }) {
    return (
        <>
            <Alert variant={tipo}>{ mensaje }</Alert>
        </>
    )
}