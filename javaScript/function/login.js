const logInSuccess = () => {
    console.log("User logIn Successfully");
}
const logInFail = () => {
    console.log("User logIn Faild");
}

const athentication = (username, password, callbackSuccess, callbackFaild) => {
    console.log("athentication user");
    setTimeout(() => {
        if (username == "admin" && password == "1234") {
            callbackSuccess();
        } else {
            callbackFaild();
        }
    }, 3000);

}

athentication("admin", "1234", logInSuccess, logInFail);