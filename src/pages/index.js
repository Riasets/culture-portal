import React from "react"
import { Link, useStaticQuery, StaticQuery, graphql } from "gatsby"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import Navigation from "../components/Navigation/Navigation";

const langs = ['ru', 'by', 'en'];

const useStyles = makeStyles({
  scane: {
    marginTop: '20px',
  },
  h1: {
    color: 'white',
    textAlign: 'center',
  },
  h2: {
    color: 'white',
    textAlign: 'center',
  }
});


function parallax(e) {
  this.querySelector('body').style.transform = `translate(${e.clientX / 100}px, ${e.clientY / 200}px)`
  this.querySelector('head').style.transform = `translate(${e.clientX / 100}px ,${e.clientY / 200}px)`
}

const IndexPage = () => {
  const classes = useStyles()
  return (
    document.addEventListener('mousemove', parallax),
    <div className={classes.scane}>
      <h1 className={classes.h1}>Welcome to our Belarusian cultural portal:</h1>
      <h2 className={classes.h2}>here you can find out a lot of interesting facts about belarusian writers</h2>
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
