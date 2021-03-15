import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class Item {}

@Injectable({
  providedIn: 'root',
})
export class NgserviceService {
  item: Item[];
  constructor(private _http: HttpClient) {}

  fetchItemListFromRemote(): Observable<any> {
    return this._http.get<any>('http://localhost:8085/getitemlist');
  }
  addItemToRemote(item: Item): Observable<any> {
    return this._http.post<any>('http://localhost:8085/additem', item);
  }
  deleteItemtByIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8085/item/' + id);
  }
  updateItemToRemote(item: Item): Observable<any> {
    return this._http.post<any>('http://localhost:8085/edititem', item);
  }
}
