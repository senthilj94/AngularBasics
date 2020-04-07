import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-templaterefparent',
  templateUrl: './templaterefparent.component.html',
  styleUrls: ['./templaterefparent.component.scss']
})
export class TemplaterefparentComponent implements OnInit {

  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(user, userDiv) {
    console.log(user, userDiv);
  }

  onSubmitForm(userForm) {
    console.log(userForm);
  }
}
