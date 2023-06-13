export default (data) => {
    const regex = /^[A-Za-z0-9\s]+$/;
    let errors = {}
    //name-valiations------------------------//
    if (!data.name) {
        errors.n1 = 'Debe agregar un nombre'
    }
    if(data.name.length > 30) {
        errors.n2 = 'El nombre no puede tener mas de 30 caracteres'
    }
    if(!regex.test(data.name)) {
        errors.n3 = 'El nombre no puede tener caracteres especiales'
    }
    //height-valiations------------------------//
    if (!data.height) {
        errors.h1 = 'Debe agregar una altura'
    }
    
}