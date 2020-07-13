import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent {
  mybook : Book;
  constructor(private mybs:BookService) {
    this.mybook = new Book();
   }

 public addNewBook(myform){
  console.log(this.mybook);
  let tempBook:Book={
    bookName:this.mybook.bookName,
    author:this.mybook.author,
    price:this.mybook.price,
    pub:this.mybook.pub,
  }

  console.log(tempBook)
  this.mybs.addBookToList(tempBook);
  myform.reset();
}

}
