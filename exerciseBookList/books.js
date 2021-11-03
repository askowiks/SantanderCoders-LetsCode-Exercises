class Book {
    constructor({title, genre, author, read, readDate}){
      this.title = title,
      this.genre = genre,
      this.author = author,
      this.read = read,
      this.readDate = readDate
    }
  
    // #changeReadStatus(){
    //   this.read = true
    // }
  
  }
  
  class BookList {
    
    constructor(){
      this.numOfReadBooks = 0
      this.numOfNotReadBooks = 0
      this.nextBook = {}
      this.currentBook = {}
      this.lastBookRead = {}
      this.bookList = []
    }
  
    readBook () {
      this.currentBook.read = true;
    }
  
    add(book){
      this.bookList = [...this.bookList, book]
      this.numOfNotReadBooks = this.bookList.length;
       
    }
  
    // finishCurrentBook(book){
    //   // let [currentBook, nextBook] = this.bookList
    //   // currentBook = nextBook
    //   // this.bookList.shift
      
    // }
   
  
  }
  console.log(this.bookList)
  
  
  
  
  let aCabana = new Book({title: 'A cabana', genre: 'Auto Ajuda', author: 'Desconhecido', read: false})
  
  let oPequenoPrincipe = new Book({title: 'O Pequeno Príncipe', genre: 'Infanto Juvenil', author: 'Antoine de Saint-Exupéry', read: false})
  
  let it = new Book({title: 'It', genre: 'Horror', author: 'Stephen King', read: false})
  
  let oCodigoDaVinci = new Book({title: 'O Código da Vinci', genre: 'Suspense', author: 'Dan Brown', read: false})
  
  let bookListConfuso = new BookList ()
  bookListConfuso.add(it)
  bookListConfuso.add(aCabana)
  bookListConfuso.add(oPequenoPrincipe)
  bookListConfuso.add(oCodigoDaVinci)
  
  console.log(bookListConfuso.bookList)
  console.log(bookListConfuso.numOfNotReadBooks)