import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class ItemForm extends Component {
  constructor(props) {
    super(props);
    if (this.props.itemId) {
      const item = this.props.items.find(e => e.id === Number(this.props.itemId));
      this.props.inputItem(item.title, item.description, item.price);
    } else {
      this.props.inputItem("", "", 0);
    }
  }

  handleClick = () => {
    if (!this.props.itemId) {
      return this.props.createItem(this.props.formItem);
    }
    return this.props.updateItem(this.props.itemId, this.props.formItem);
  };

  render() {
    return (
      <form>
        <label htmlFor="title">商品タイトル</label>
        <input id="title" type="text" value={this.props.formItem.title}
               onChange={e => this.props.inputTitle(e.target.value)}/><br/>
        <label htmlFor="description">商品説明</label>
        <input id="description" type="text" value={this.props.formItem.description}
               onChange={e => this.props.inputDescription(e.target.value)}/><br/>
        <label htmlFor="price">価格</label>
        <input id="price" type="text" value={this.props.formItem.price}
               onChange={e => this.props.inputPrice(e.target.value)}/><br/>
        <Link to="/">
          <input type="button" value={!this.props.itemId ? "新規登録" : "更新"} onClick={this.handleClick}/>
        </Link>
      </form>
    );
  }
}
