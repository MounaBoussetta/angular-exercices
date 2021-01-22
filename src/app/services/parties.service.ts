import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Party } from '../models/party.model';

const baseUrl = 'http://localhost:8080/api/parties';
const _jsonURL = 'assets/_files/parties.json';

@Injectable({
  providedIn: 'root'
})
export class PartiesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Party[]> {
    return this.http.get<Party[]>(_jsonURL);
  }
}
