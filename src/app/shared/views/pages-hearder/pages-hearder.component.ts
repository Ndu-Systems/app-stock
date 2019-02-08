import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages-hearder',
  templateUrl: './pages-hearder.component.html',
  styleUrls: ['./pages-hearder.component.scss']
})
export class PagesHearderComponent implements OnInit {
  @Input() heading;
  constructor() { }

  ngOnInit() {
  }

}
