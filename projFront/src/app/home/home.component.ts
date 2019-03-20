import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sliders: Array<any> = [];

  constructor() {
      this.sliders.push(
           {
              imagePath: 'assets/images/foto3.jpg',
              label: 'Joeberth Souza',
              job: 'Desenvolvedor de Software',
              text: '"Com essa ferramenta eu vejo exatamente quando desenvolvi tal software"'
           },
          {
              imagePath: 'assets/images/foto4.jpg',
              label: 'Joeberth Augusto',
              job: 'Esp Engenharia Civil',
              text:
                  '"Cada obra é um acontecimento, cada acontecimento muda a vida de alguém"'
          },
          {
              imagePath: 'assets/images/foto1.jpg',
              label: 'Joeberth Chaves',
              job: 'Torcedor do Treze',
              text:
                '"Agora eu sei quando meu time jogou e exatamente onde eu tava no momento."'
          }
      );
  }

  ngOnInit() {
  }

}
