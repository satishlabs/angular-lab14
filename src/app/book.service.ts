import { Injectable } from '@angular/core';
import { Book } from './model/book.model';

@Injectable()
export class BookService {
  private bookList:Book[];
  private book:Book=null;

  constructor() {
    this.bookList=[];
    this.book = new Book();
   }

   public getBookList():Book[]{
     console.log(this.book);
     this.book.bookName="Master in Angular";
     this.book.author="Satish Prasad";
     this.book.price=500;
     this.book.pub="STS";
     console.log(this.book);

     console.log(this.bookList);
      this.bookList.push(this.book);
      this.bookList.push(this.book);
      this.bookList.push(this.book);
      this.bookList.push(this.book);
      console.log(this.bookList);
      
     return this.bookList;
   }

   public addBookToList(mybook:Book){
     this.bookList.push(mybook);
   }
}
