export function ModalCerrarSesion () {

    const $modalContenedor = document.createElement('div')
    $modalContenedor.classList.add('modal__contenedor')

    const $modalCerrar = document.createElement('div')
    $modalCerrar.classList.add('modal', 'modal-cerrar')

    const $modaltexto = document.createElement('div')
    $modaltexto.classList.add('modal-textos')

    const $Titulo = document.createElement('h2')
    $Titulo.classList.add('modal-titulo')
    $Titulo.textContent='¿Salir de Yami?'

    const $contenedorMensaje = document.createElement('div')
    $contenedorMensaje.classList.add('modal__p-cerrarS')
    const $mensaje = document.createElement('p')
    $mensaje.textContent = 'Salir'

    const $cerrar = document.createElement('p')
    $cerrar.classList.add('modal__p-cancelar')
    $cerrar.textContent = 'Cancelar'
   
    $modalContenedor.append($modalCerrar)
    $modalCerrar.append($modaltexto)
    $modaltexto.append($Titulo)
    $contenedorMensaje.append($mensaje)
    $modaltexto.append($contenedorMensaje)
    $modaltexto.append($cerrar)

    $modalContenedor.style.opacity = "0"
    $modalContenedor.style.visibility = "hidden"

    const abrirModal  = ()  => {
        $modalContenedor.style.opacity = "1"
        $modalContenedor.style.visibility = "visible"
        $modalCerrar.classList.toggle('modal-cerrar')
    }

    const cerrarModal = ()  => {
         $modalCerrar.classList.toggle('modal-cerrar') 
         setTimeout(function () {
            $modalContenedor.style.opacity = "0"
            $modalContenedor.style.visibility = "hidden"
        }, 900)
    }

    $cerrar.addEventListener('click', cerrarModal)

   return {
       $modalContenedor,
       abrirModal,
       cerrarModal
   }
}