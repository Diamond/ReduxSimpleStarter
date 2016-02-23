import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item"
          key={book.title}
          onClick={() => { this.props.selectBook(book)} }>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  // Whatever is returned will show up as props in book list
  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectBook }, dispatch);
};

// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
