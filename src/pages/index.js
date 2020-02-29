import React from "react"
import { Link, useStaticQuery, StaticQuery, graphql } from "gatsby"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import Navigation from "../components/Navigation/Navigation";
import AuthorInfo from "../components/WriterPage/Writers";

const langs = ['ru', 'by', 'en'];

const useStyles = makeStyles({
  scane: {
    marginTop: '20px',
  },
  h1: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  h2: {
    color: 'white',
    textAlign: 'center',
  },
  writerOfDay: {
    background: '#f50057',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    padding: '20px',
    color: '#fb8c00',
    margin: 'auto',
    border: '3px solid #fb8c00',
    borderRadius: '10%',
    '& img': {
      width: '300px',
    }
  }
});

const randomWrtiter = (arr) => {
  const rand = Math.abs(0 - 0.5 + Math.random() * arr.length);
  return Math.round(rand);
}


function parallax(e) {
  this.querySelector('body').style.transform = `translate(${e.clientX / 100}px, ${e.clientY / 200}px)`
  this.querySelector('head').style.transform = `translate(${e.clientX / 100}px ,${e.clientY / 200}px)`
}

const IndexPage = () => {
  const classes = useStyles();
  const randomWrtiterInfo = AuthorInfo[randomWrtiter(AuthorInfo)];
  return (
    document.addEventListener('mousemove', parallax),
    <div className={classes.scane}>
      <Navigation />
      <h1 className={classes.h1}>Welcome to our Belarusian cultural portal!!!</h1>
      <h2 className={classes.h2}>here you can find out a lot of interesting facts about belarusian writers</h2>
      <div className={classes.writerOfDay}>
        <h3>Writer of the day!</h3>
        <h4>{randomWrtiterInfo.name}</h4>
        <p>{randomWrtiterInfo.ShortInfo}</p>
        <img src={randomWrtiterInfo.Picture} />
      </div>
    </div>
  )
}


export const data = graphql`query TextQuery{
         contentfulLongText {
          ru {
            content {
              content {
                value
              }
            }
          }
          en {
            content {
              content {
                value
              }
            }
          }
          by {
            content {
              content {
                value
              }
            }
          }
        }
      }`;

export default IndexPage
