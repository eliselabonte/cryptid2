function validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password:string) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8, 15}$/;
    return re.test(String(password));
}


export {validateEmail, validatePassword};