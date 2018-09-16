import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import Input from "../components/Input";
import { setName } from "../../actions/userAction";

import style from '../../assets/styles/main.sass';
import sea from '../../assets/img/sea.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seo_title: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    this.props.setName( event.target.value)
  }

  render() {
    const { seo_title } = this.state;

      return (
          <div className="container">
              <Main changeUsername={() => this.props.setName("Anna")}/>
              <User username={this.props.user.name}/>
              <form id="article-form" className="main">

              <img src={sea} width='100px' height='100px'/>
              <Input
                text="SEO title"
                label="seo_title"
                type="text"
                id="seo_title"
                value={seo_title}
                handleChange={this.handleChange}
              />
            </form>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);