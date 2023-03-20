import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

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

getAuth()

const userUID = JSON.parse(localStorage.getItem('userUID'))
if(!userUID) {
    window.location.href = 'index.html'
    return
}
localStorage.removeItem('userUID');
const dbRef = ref(getDatabase());
get(child(dbRef, userUID)).then((snapshot) => {
  if (snapshot.exists()) {
    document.getElementById('parallax')
            .innerHTML += snapshot.val()['code']
            
    execute()
  }
}).catch((error) => {
  console.error(error);
});