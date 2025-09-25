import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider,signInWithPopup,getRedirectResult}from 'firebase/auth';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gmailauth',
  imports: [],
  templateUrl: './gmailauth.component.html',
  styleUrl: './gmailauth.component.css'
})
export class GmailauthComponent {

   private app;
   private auth;

  constructor(){


  this.app = initializeApp(environment.firebaseConfig);
  this.auth= getAuth(this.app);



}
  entrar(){
  const provider = new GoogleAuthProvider();


const auth = getAuth();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.info(user);

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  verUsuario(){
    getRedirectResult(this.auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential!.accessToken;

    // The signed-in user info.
    console.info (result!.user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
}



