import { Quote } from '../quote';
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
       "I travelled abroad on a bike and arrived safely", new Date(2020,6,8)
       ),
  
      new Quote("Love is that condition in which the happiness of another person is essential to your own.",
       "Robert A. Heinlein",
       "I travelled abroad on a bike and arrived safely", new Date(2020,6,8)
      ),
  
      new Quote("Folks are usually about as happy as they make their minds up to be",
       " Abraham Lincoln",
       "I travelled abroad on a bike and arrived safely", new Date(2020,6,8)),
  
      new Quote("Time you enjoy wasting is not wasted time.",
       "Marthe Troly-Curtin",
       "I travelled abroad on a bike and arrived safely", new Date(2020,6,8)),
  
      new Quote("It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
       "Chuck Palahniuk",
       "I travelled abroad on a bike and arrived safely", new Date(2020,6,8)),
  
      new Quote("Happiness in intelligent people is the rarest thing I know.",
       "Ernest Hemingway",
       "I travelled abroad on a bike and arrived safely", new Date(2020,6,8)),

  
  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  completeQuote(isComplete: boolean, index: number){
    if (isComplete) {
      this.quotes.splice(index,1)
    }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
