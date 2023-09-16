export const ValidateForm = (params) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (params.name && params.email) {
        const isNameValid = params.name.length >= 3;
        const isEmailValid = regexEmail.test(params.email);

        if (isNameValid && isEmailValid) {
            console.log("Validación superada");
            return true;
        } else {
            console.log("No se ha superado la validación");
            return false;
        }
    } else {
        console.log('No se ha superado la validación');
        return false;
    }
}
