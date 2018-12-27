import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Input() initialCriteria: string
  @Output('onChangeCriteria') changeEvent: EventEmitter<string>

  private criteria: string

  constructor() {
    this.changeEvent = new EventEmitter<string>()
  }

  ngOnInit() {
    this.criteria = this.initialCriteria
  }

  onChange() {
    this.changeEvent.emit(this.criteria)
  }
}
