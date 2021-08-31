import React, { Component } from "react";
import { graphql } from "react-apollo";
import  {getBooksQuery} from '../queries/query'
import BookDetails from './BookDetails';

export class BookList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       selected: null
    }
  }
  
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <li>Loading data...</li>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id} onClick={e => this.setState({selected: book.id})}>{book.name}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Book's Collection</h1>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
