
import { registerWithGoogle, registerWithEmailAndPass } from '../../firebase.js';

export const login = () => {
    const divLogin = document.createElement('div');
    const viewLogin = `
    <form>
        <label for="iptEmail">Email:</label><br>
        <input type="text" id="iptEmail" /><br>
        <label for="iptPass">Password:</label><br>
        <input type="text" id="iptPass" /><br><br>
        <input type="submit" id="btnSubmitForm" value="Submit" />
    </form> 
    <button id='btnSignUpGoogle'>Sign up with Google</button>
    `
    divLogin.innerHTML = viewLogin;

    const btnGoogleLogin = divLogin.querySelector('#btnSignUpGoogle');
    btnGoogleLogin.addEventListener('click', () => {
        registerWithGoogle();
    });
    
    
    const btnEmailPass = divLogin.querySelector('#btnSubmitForm');
    btnEmailPass.addEventListener('click', () => {
        const email = document.getElementById('iptEmail').value;
        const password = document.getElementById('iptPass').value;
        registerWithEmailAndPass(email, password);
    });

    return divLogin;

}