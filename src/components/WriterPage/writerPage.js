import React, {Component} from 'react';
import WritersInfo from "./Writers";
import './style.css';
import PropTypes from "prop-types";

import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

class WriterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorInfo: false,
      authorInfo: null,
    }
  }

  handleClick = (authorObj) => {
    this.setState({
      isAuthorInfo: true,
      authorInfo: authorObj,
    });
  }

  returnToAuthorList = () => {
    this.setState({
      isAuthorInfo: false,
    });
  }

  render() {
    const writersList = WritersInfo.map((el) =>
      <li key={el.id} id={el.id} onClick={this.handleClick.bind(this, el)}>{el.name}</li>
    );
    const content = !this.state.isAuthorInfo ?
    <ul>
      {writersList}
    </ul>
    :
    <div>
      <div className="nav__elem" onClick={this.returnToAuthorList}>
      <KeyboardReturnIcon className="icon-color"/>
      </div>
      <AuthorInfo authorObj={this.state.authorInfo}/>
    </div>

    return (
        <div className="author-page">
          {content}
        </div>
    );
  }
}

function AuthorInfo({ authorObj }) {
  return (
    <div>
            <div className='writer-image'>
                <img src={authorObj.Picture} alt={authorObj.name}/>
            </div>
            <div className='writer-info'>
                <h1 className='name'>{authorObj.name}</h1>
                <h3 className='years'>{authorObj.lifeTime}</h3>
            </div>
            <div className='biography'>
                {authorObj.ShortInfo}
            </div>
        </div>
  );
}

AuthorInfo.propTypes = {
  authorObj: PropTypes.object,
}

AuthorInfo.defaultProps = {
  authorObj: {},
}

export default WriterPage