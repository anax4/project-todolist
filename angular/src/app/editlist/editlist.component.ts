import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/item';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css'],
})
export class EditlistComponent implements OnInit {
  itemToUpdate = new Item();

  constructor(
    private _route: Router,
    private _service: NgserviceService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchItemListFromRemote().subscribe(
      (data) => {
        console.log('Data fetched successfully');
        this.itemToUpdate = data; // This line allows us to update the view in a smooth way
      },
      (error) => console.log('Exception on fetching product by id to edit')
    );
  }
  updateItemformsubmit() {
    this._service.updateItemToRemote(this.itemToUpdate).subscribe(
      (data) => {
        console.log('Data updated successfully');
        this._route.navigate(['productlist']);
      },
      (error) => console.log('Error')
    );
  }

  gotolist() {
    this._route.navigate(['productlist']);
  }
}
