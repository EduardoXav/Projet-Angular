import { Component,Input,OnInit } from '@angular/core';
import { rapport } from '../models/rapport';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit{

  @Input() rapport!: rapport;

  ngOnInit(): void {
    console.log(this.rapport);
  }


}
