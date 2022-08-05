import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wb-table-indicators',
  templateUrl: './wb-table-indicators.component.html',
  styleUrls: ['./wb-table-indicators.component.scss']
})
export class WbTableIndicatorsComponent implements OnInit {


  indicadores: number[][] = [];
  numeroPaginas = 900;
  paginaAtual = 2;
  groupRenderizar : any;


  ngOnInit(): void {
    this.loadPages()
    this.getGroupPage()
  }
  
  getGroupPage(){
    this.groupRenderizar = this.indicadores.filter(g => g.filter(e => e == this.paginaAtual).length)
  }

  loadPages() {
    for(let i = 1; i <= 900; i+=5) {
      const groupIndice = [];
      for(let j = i; j < i+5; j++) {
          groupIndice.push(j)
      }
     this.indicadores.push(groupIndice)
    }
  }


}
