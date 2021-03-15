import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';

import { Router } from '@angular/router';
import { Item } from 'src/item';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
})
export class ItemlistComponent implements OnInit {
  itens: Array<Item> = [];

  constructor(private _service: NgserviceService, private _route: Router) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this._service.fetchItemListFromRemote().subscribe(
      (data) => (this.itens = data),
      (error) => console.log('Exception occurred 1')
    );
  }
  isEmpty() {
    if (this.itens == null) {
      return true;
    } else {
      return false;
    }
  }

  goToAddItem() {
    this._route.navigate(['/appitem']);
  }

  goToEditItem(id: number) {
    console.log('id' + id);
    this._route.navigate(['/editlist']);
  }
  goToViewItemt(id: number) {
    console.log('id' + id);
    this._route.navigate(['/viewitem']);
  }
  goToUpdateItem(id: number) {
    console.log('id: ' + id);
    this._route.navigate(['/edititem', id]);
  }

  deleteItem(id: number) {
    if (confirm('Deseja deletar o item ?'))
      return this._service.deleteItemtByIdFromRemote(id).subscribe(
        (success) => {
          ('Product deleted succesfully');
        },
        (error) => {
          console.log('Exception occured 2');
          this.getItem();
        }
      );
  }
}
