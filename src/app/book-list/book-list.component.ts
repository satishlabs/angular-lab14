import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {

  booksData:Book[];

  constructor(private mybs:BookService) { 
    this.booksData = this.mybs.getBookList();
    console.log(this.booksData);
  }

 

}
