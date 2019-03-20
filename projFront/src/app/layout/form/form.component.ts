import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements AfterViewInit {

    usuario = {fullNome: 'Joeberth Souza',
                email: 'joeberth.cousa@ccc.ufcg.edu.br',
                pass: 'galoCampeao',
                id: '1'};

    constructor() {}

    ngAfterViewInit() {
    }

    alteraUser() {
        if ((document.getElementById("novaSenha") as HTMLInputElement).value === 
        (document.getElementById("reNovaSenha") as HTMLInputElement).value) {
            this.usuario = {
                fullNome: (document.getElementById("fullName") as HTMLInputElement).value,
                email: (document.getElementById("email") as HTMLInputElement).value,
                pass: (document.getElementById("novaSenha") as HTMLInputElement).value,
                id: ''};
            (document.getElementById("fullName") as HTMLInputElement).value = this.usuario.fullNome;
            (document.getElementById("email") as HTMLInputElement).value = this.usuario.email;
            (document.getElementById("senhaAtual") as HTMLInputElement).value = '';
            (document.getElementById("novaSenha") as HTMLInputElement).value = '';
            (document.getElementById("reNovaSenha") as HTMLInputElement).value = '';
        }
    }
}
