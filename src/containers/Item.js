import {connect} from 'react-redux';
import {Item} from '../components/Item';
import {addItem, inputDescription, inputPrice, inputTitle} from '../actions/item';

export default connect(
  state => ({
    formItem: state.formItem,
    items: state.items
  }),
  {inputTitle, inputDescription, inputPrice, addItem}
)(Item);
