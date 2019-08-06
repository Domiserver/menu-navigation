import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor() { }

    getConfig(){
        return environment.social;
    }

    getCartTotal() {
        let fakeresponse = "10";
        return Observable.create(
            observer => {
                setTimeout(() => {
                    observer.next(fakeresponse)
                }, 2000)
            }
        )
    }

    getUserStatus() {
        let fakeresponse = "true";
        return Observable.create(
            observer => {
                setTimeout(() => {
                    observer.next(fakeresponse)
                }, 2000)
            }
        )
    }

    getProducts(collType) {
        let fakeresponse = [
            {'name': "Wordpress Hosting",
            'plan': "Limon",
            'price': "Bs. 49.000 + IVA",
            },
            {'name': "Wordpress Hosting",
            'plan': "Mango",
            'price': "Bs. 123.000 + IVA",
            },
            {'name': "Dominios .com .net",
            'plan': "Registro Inicial",
            'price': "Bs. 99.000 + IVA",
            },
            {'name': "Dominios .com .net",
            'plan': "Renovacion",
            'price': "Bs. 99.000 + IVA",
            },
        ];
        return Observable.create(
            observer => {
                setTimeout(() => {
                    observer.next(fakeresponse)
                },2000)
            }
        )
    }
    ////////////  Angular NGRX START //////////////////////
        // sign-up page - create a new user
        // createUser(formData) {
        //     if (environment.database == 'firebase') {
        //         return this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password);
        //     }
        //     if (environment.database == 'SQL') {
        //         // need to call SQL API here if a SQL Database is used
        //     }
        // }
    
        // login page - login with FB/GOOGLE/EMAIL, if formData is passed, this means is user is using email/password login
        // login(loginType, formData?) {
        //     if (formData) {
        //         return this.afAuth.auth.signInWithEmailAndPassword(formData.email, formData.password);
        //     } else {
        //         let loginMethod;
        //         if (loginType == 'FB') { loginMethod = new firebase.auth.FacebookAuthProvider(); }
        //         if (loginType == 'GOOGLE') { loginMethod = new firebase.auth.GoogleAuthProvider() }
    
        //         return this.afAuth.auth.signInWithRedirect(loginMethod)
        //     }
        // }
    
        // logout() {
        //     window.localStorage.removeItem("displayName");
        //     window.localStorage.removeItem("email");
        //     window.localStorage.removeItem("picture");
        //     window.localStorage.removeItem("center");
        //     window.localStorage.removeItem("token");
        //     return this.afAuth.auth.signOut();
        // }
    
        // method to retreive firebase auth after login redirect
        // redirectLogin() {
        //     return this.afAuth.auth.getRedirectResult();
        // }
}
