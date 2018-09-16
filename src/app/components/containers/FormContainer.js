import React, {Component} from 'react';
import Input from "../presentational/Input";
import style from '../../assets/styles/main.sass';
import sea from '../../assets/img/sea.jpg';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form" className="main">

        <img src={sea} width='100px' height='100px'/>
        fdsfdsf
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;