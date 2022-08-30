  class Book {
    constructor(title, cat, auth, isRead = false, finish) {
      this.title = title;
      this.catagory = cat;
      this.author = auth;
      this.isRead = isRead;
      this.finishDate = finish;
    }
    markBookAsRead() {
      this.isRead = true;
      return this.isRead;
    }
  }
  
  class BookList {
    constructor(bookArray, currentReadBookIndex = 0) {
      this.bookArray = bookArray;
      this.currentReadBookIndex = currentReadBookIndex;
    }
    add(...book) {
      this.bookArray.push(book);
      return this.bookArray;
    }
    getCurrentBook() {
      return this.bookArray[this.currentBookIndex];
    }
    getNextBook() {
      return this.bookArray[this.currentBookIndex + 1];
    }
    getPrevBook() {
      return this.bookArray[this.currentBookIndex - 1];
    }
    changeCurrentBook(newIndex) {
      this.currentBookIndex = newIndex;
      return this.currentBookIndex;
    }
  }
  
  let book1 = new Book(
    "Rich dad Poor Dad",
    "Motivational and finance",
    "Robert",
    false,
    "7/7/21"
  );
  let book2 = new Book(
    "The magic of believing",
    "motivational, mind-science",
    "Bristol",
    false,
    "17/7/21"
  );
  
  let bookList = new BookList([book1, book2]);