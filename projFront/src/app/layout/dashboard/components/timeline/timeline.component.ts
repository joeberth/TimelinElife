import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  alternate = true;
  toggle = true;
  color = false;
  size = 40;
  expandEnabled = true;

  closeResult: string;

  userAcc = [{nome: 'Treze Invicto', desc: 'treze foi campeao invicto',
      data: '01/08/1000', cor: '#e66465', tag: [{nome: 'nascimento', cor: 'orange'}]},
      {nome: 'Treze Serie C', desc: 'Treze subiu pra serie C',
      data: '01/08/2000', cor: '#ffffff', tag: [{nome: 'nascimento', cor: 'orange'}]},
      {nome: 'Treze Campeao', desc: 'Treze campeao Paraibano',
      data: '01/08/1500', cor: 'blue', tag: [{nome: 'nascimento', cor: 'orange'}]}];

  side: string;
  public isCollapsed = false;

  model: any = 1;
  expandedIndex = -1;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.sortArray();
  }
  removeEntry(index: number) {
    this.userAcc.splice(index, 1);
    this.sortArray();
  }

  open(content, index: number, tipo) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'Yes') {

        this.removeEntry(index);
      }
    });
    if (tipo === 'edit') {
      (document.getElementById("editNome") as HTMLInputElement).value = this.userAcc[index].nome;
      (document.getElementById("editDesc") as HTMLInputElement).value = this.userAcc[index].desc;
      (document.getElementById('editDate') as HTMLInputElement).value = this.userAcc[index].data;
      (document.getElementById("editCor") as HTMLInputElement).value = this.userAcc[index].cor;
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  adicionaCard(cor: string) {
    console.log('auauau');
  }

  expandRow(index: number): void {
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
  }

  passaDados()  {
    this.userAcc.push({
      nome: (document.getElementById("nomeAdd") as HTMLInputElement).value,
      desc: (document.getElementById("descOfAcon3") as HTMLInputElement).value,
      data: (document.getElementById("dateOfAcon") as HTMLInputElement).value,
      cor: (document.getElementById("corEsc") as HTMLInputElement).value,
      tag: [{nome: 'nascimento', cor: '#e66465'}]
    });
    this.sortArray();
  }

  sortArray() {
    this.userAcc.sort(function(a,b){
      let start = +new Date(a.data);
      let elapsed = +new Date(b.data);
      return elapsed - start;
    });
  }

  editaDados(index)  {
    console.log(index);
    this.userAcc[index] = {
    nome: (document.getElementById("editNome") as HTMLInputElement).value,
    desc: (document.getElementById("editDesc") as HTMLInputElement).value,
    data: (document.getElementById('editDate') as HTMLInputElement).value,
    cor: (document.getElementById("editCor") as HTMLInputElement).value,
    tag: [{nome: 'nascimento', cor: '#e66465'}]
    };
    this.sortArray();
  }

}
