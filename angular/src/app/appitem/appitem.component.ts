import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/item';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-appitem',
  templateUrl: './appitem.component.html',
  styleUrls: ['./appitem.component.css'],
})
export class AppitemComponent implements OnInit {
  item = new Item();
  constructor(private _route: Router, private _service: NgserviceService) {}

  ngOnInit(): void {}

  addItemformsubmit() {
    this._service.addItemToRemote(this.item).subscribe((data) => {
      console.log('Item adcionado');
      this._route.navigate(['itemlist']);
      (error) => console.log('error');
    });
  }

  gotolist() {
    console.log('voltar');
    this._route.navigate(['itemlist']);
  }
}
