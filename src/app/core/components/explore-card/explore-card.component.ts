import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.css']
})
export class ExploreCardComponent implements OnInit {

  @Input() name! : string ;
  @Input() description! : string ;

  constructor() { }

  ngOnInit(): void {
  }

}
