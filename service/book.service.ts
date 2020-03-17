import { Book } from './../model/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http: HttpClient) {}
    url = 'http://localhost:8080/book/';

    getAll(): Observable<Book[]>{
      return this.http.get<Book[]>(this.url);
    }
    addBook(book:  Book): Observable<Book>{
      return this.http.post<Book>(this.url, book);
    }
    deleteBook(id: String): Observable<Book>{
      return this.http.delete<Book>(this.url + id);
    }
    updateBook(book: Book): Observable<Book>{
      return this.http.put<Book>(this.url + book.id, book);
    }
    findById(id: String){
      return this.http.get<Book>(this.url + id);
    }

}
