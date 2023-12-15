import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/api/courses';

  public Headers() {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type',
      'Access-Control-Allow-Credentials': 'true',
    });
  }

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Course[]>(this.API, {headers: this.Headers()}).pipe(
      first(),
      // delay(5000),
      tap(courses => console.log(courses)),

    )
  }

  save(record: Course) {
    return this.http.post<Course>(this.API, record, {headers: this.Headers()})
  }
}
