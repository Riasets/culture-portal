import React, {Component} from 'react';
import WritersInfo from "./Writers";
import './style.css';
import PropTypes from "prop-types";
import CustomButton from '../StyleGuide/elements/CustomButton';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';


class WriterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorInfo: false,
      authorInfo: null,
      isVideoOn: false,
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


class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      map: null,
    }
  }

  componentWillMount () {
    const script = document.createElement("script");
    script.src = this.props.authorObj.map;
    script.async = true;
    this.setState({
      map: script
    });
  }

  createData = (year, name) => {
    return { year, name };
  }

  componentDidMount() {
    this.mapRef.current.appendChild(this.state.map);
  }

  render() {
    const { authorObj } = this.props;
    const timeLineItems = authorObj.TimeLineInfo.map((arr, i) => {
      const [date, info] = [arr[0], arr[1]];
      return (
        <TimelineItem
          key={i}
          dateText={date}
          style={{ color: '#e86971' }}
          dateInnerStyle={{ background: '#f50057', color: 'white' }}
          bodyContainerStyle={{
            background: '#fb8c00',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            color: 'white',
          }}
        >
          <p>{info}</p>
        </TimelineItem>
      )
    });
    const rows = authorObj.works.map((arr) => this.createData(arr[0], arr[1]));
    const images = authorObj.photos.map((src) => {
      return {
        original: src,
        thumbnail: src,
      }
    });
    return (
      <div>
          <div className='writer-image'>
              <img src={authorObj.Picture} alt={authorObj.name} width='250' height='300'/>
          </div>
          <div className='writer-info'>
              <h1 className='name'>{authorObj.name}</h1>
              <h3 className='years'>{authorObj.lifeTime}</h3>
          </div>
          <div className='biography'>
              {authorObj.ShortInfo}
          </div>
          <div className='timeLine'>
              <h2 className='section-name'>TimeLine</h2>
              <Timeline lineColor={'#f50057'}>
                {timeLineItems}
              </Timeline>
          </div>
          <div className='workList'>
              <h2 className='section-name'>Masterpiece</h2>
              <TableContainer component={Paper} className="table-container simple-table">
                <Table aria-label="simple table">
                  <TableHead className="table-head">
                    <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell align="right">Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="table-body">
                    {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.year}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
          </div>
          <div className='video-section'>
              <h2 className='section-name'>YouTube</h2>
              <div className='videoButton'>
                  <a href={authorObj.video}><CustomButton text="Watch the video" /></a>
              </div>
          </div>
          <div className='map-sextion'>
              <h2 className='section-name'>Map</h2>
              <div className='map-wrapper' ref={this.mapRef}></div>
          </div>
          <div className='gallery'>
              <h2 className='section-name'>Gallery</h2>
              <ImageGallery items={images} />
          </div>
      </div>
      );
  }
}

AuthorInfo.propTypes = {
  authorObj: PropTypes.object,
}

AuthorInfo.defaultProps = {
  authorObj: {},
}

export default WriterPage
