import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBThiV5nTjB3gwlHobrgb3yYAjgrkRyGLM",
    authDomain: "clothingcommerce.firebaseapp.com",
    databaseURL: "https://clothingcommerce.firebaseio.com",
    projectId: "clothingcommerce",
    storageBucket: "clothingcommerce.appspot.com",
    messagingSenderId: "672677214843",
    appId: "1:672677214843:web:35a7ffe5e491ec158640de"
  }
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          
          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch(error){
            console.log('Error creating user.', error.message)
          }

      }
      return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;