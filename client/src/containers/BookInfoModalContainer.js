import { connect } from 'react-redux';
import BookInfoModal from '../components/BookInfoModal';
import { toggleModal } from '../actions';

const mapStateToProps = (state) => {
  const { showModal, book, isFetching } = state.bookInfo;

  return {
    isOpen: showModal,
    book,
    isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => {
      dispatch(toggleModal());
    },
    createMarkup: (html) => {
      return {
        __html: html
      };
    }
  };
};

const BookInfoModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookInfoModal);

export default BookInfoModalContainer;
