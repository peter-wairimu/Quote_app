import { Quote } from './../quote';
import { Component, OnInit,Output,EventEmitter,} from '@angular/core';
import {Validators,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote = new Quote("", "","" ,new Date());
  @Output() addQuote =  new EventEmitter<Quote>()




  QuoteForm=new FormGroup({
    name:new FormControl(" ",[Validators.required]),
    quote:new FormControl("",[Validators.required]),

  })

  get name(){
    return this.QuoteForm.get('name')
  }
  get quote(){
    return this.QuoteForm.get('quote')
  }
  

  getQuote(){
    this.addQuote.emit(this.newQuote)
  }
    

  

  

  constructor() { }

  ngOnInit(): void {
  }

}
