/*Importamos la librería de SweetAlert2 para poder usar las alertas emergentes personalizadas*/
import Swal from 'sweetalert2'

export class Alerts {

    //Método que muestra una alerta con un mensaje de estado OK
    public alertaMensajeOK(mensaje: string) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    }

    //Método que muestra una alerta con un mensaje de estado ERROR
    public alertMensajeError(mensaje: string) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    }
}