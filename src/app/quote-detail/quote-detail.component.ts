// import { Quote } from '@angular/compiler';

import { Quote } from '../quote';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete =new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  vote= 0;
  count(type:string){
    
    type==='add'?this.vote++:this.vote--
  }

  constructor() { }

  ngOnInit(): void {
  }

}
