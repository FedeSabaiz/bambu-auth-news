import firebase from './firebase';
import 'firebase/auth';

export default function () {
    const user = firebase.auth().onAuthStateChanged( async userAuth => {
        console.log(userAuth)
        return await userAuth;
    });
    if (user) {
    // User is signed in.
        console.log(user)
        return {
            isAuthenticate: true,
            user
        }
    } else {
    // No user is signed in.
        console.log(user)
        return {
            isAuthenticate: false,
            user
        }
    }

}
