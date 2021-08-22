import { Quote } from './../quote';
// import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    
       new Quote("For every minute you are angry you lose sixty seconds of happiness",
       "Ralph Waldo Emerson",
       "Thanks for choosing us", new Date(1950,7,8)
       ),
  
      new Quote("Love is that condition in which the happiness of another person is essential to your own.",
       "Robert A. Heinlein",
       "Thanks for choosing us", new Date(1919,6,10)
      ),
  
      new Quote("Folks are usually about as happy as they make their minds up to be",
       " Abraham Lincoln",
       "Thanks for choosing us", new Date(1945,8,8)),
  
      new Quote("Time you enjoy wasting is not wasted time.",
       "Marthe Troly-Curtin",
       "Thanks for choosing us", new Date(1998,9,3)),
  
      new Quote("It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
       "Chuck Palahniuk",
       "Thanks for choosing us", new Date(2000,6,8)),
  
      new Quote("Happiness in intelligent people is the rarest thing I know.",
       "Ernest Hemingway",
       "Thanks for choosing us", new Date(2012,9,10)),

  
  ];

  addNewQuote(quote:Quote){
    let quoteLength = this.quotes.length;
    quote.id= quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  deleteQuote(isComplete: boolean, index: number){
    if (isComplete) {
      this.quotes.splice(index,1)
    }
    }
    

  constructor() { }

  ngOnInit(): void {
  }

}
