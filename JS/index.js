import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyD-iGVLddPNNx63dHd0IJTnQxVq6YHmd6E",
    authDomain: "mhyca-bday.firebaseapp.com",
    databaseURL: "https://mhyca-bday-default-rtdb.firebaseio.com",
    projectId: "mhyca-bday",
    storageBucket: "mhyca-bday.appspot.com",
    messagingSenderId: "972133673877",
    appId: "1:972133673877:web:265c58f372920db709a49c"
};
initializeApp(firebaseConfig)


const auth = getAuth()

// login function
document.querySelector('#input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var email = 'nathanaelmemis@gmail.com'
        var answer = document.getElementById('input').value

        signInWithEmailAndPassword(auth, email, answer)
        .then((auth) => {
            localStorage.setItem('userUID', JSON.stringify(auth['user']['uid']));
            window.location.href = 'letter.html';
        })
        .catch(function() {  
            alert('bruh, no')
        })
    }
})