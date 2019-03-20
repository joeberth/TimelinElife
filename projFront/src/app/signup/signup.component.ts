import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    usuarios = [{fullNome: '',
                email: '',
                pass: '',
                id: ''}];
    constructor() {}

    ngOnInit() {}

    registraUser()  {
        this.usuarios.push({
            fullNome: (document.getElementById("fullName") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            pass: (document.getElementById("pass") as HTMLInputElement).value,
            id: ''
        });

    }
}
