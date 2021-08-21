import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    {
      quote: "For every minute you are angry you lose sixty seconds of happiness",
      author: "Ralph Waldo Emerson",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "Love is that condition in which the happiness of another person is essential to your own.",
      author: "Robert A. Heinlein",
      description: "I travelled abroad on a bike and arrived safely"

  },
  {
      quote: "Folks are usually about as happy as they make their minds up to be",
      author: " Abraham Lincoln",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "Time you enjoy wasting is not wasted time.",
      author: "Marthe Troly-Curtin",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
      author: "Chuck Palahniuk",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "Happiness in intelligent people is the rarest thing I know.",
      author: "Ernest Hemingway",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
      author: "Albert Camus",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "Happiness is when what you think, what you say, and what you do are in harmony",
      author: "Mahatma Gandhi",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.",
      author: " Stephen Chbosky",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
      author: " Henry Wadsworth Longfellow",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama XIV",
      description: "I travelled abroad on a bike and arrived safely"
  },
  {
      quote: "Count your age by friends, not years. Count your life by smiles, not tears.",
      author: "John Lennon",
      description: "I travelled abroad on a bike and arrived safely"
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
