import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userTipClose: Boolean = false;
  isTodoCollapsed: Boolean = false;
  isNoticeCollapsed: Boolean = false;
  isNeedReadCollapsed: Boolean = false;
  isCommonFuncCollapsed: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
