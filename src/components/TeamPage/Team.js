import React from 'react';
import './dis.css';
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    content: {
        width: '80%',
        textAlign: 'center',
        marginLeft: '10%',
    },
    all_team: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        fontFamily: "Roboto",
    },
    teammateBlock: {
        width: '190px',
        height: '340px',
        textAlign: 'center',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px #fb8c00',
        backgroundColor: 'rgb(40, 63, 83)',
        margin: '20px 20px 0px 20px',
    },
    name: {
        paddingTop: '-20px',
        color: '#fb8c00',
    },
    git: {
        display: 'block',
        marginTop: '10px',
        color: '#f50057',
    },
    iconColor: {
        color: '#fb8c00',
        '&:hover': {
            color: '#f50057',
            cursor: 'pointer',
        }
    },
    link: {
        display: 'block',
        marginTop: '20px',
    }
});

function Teammate(props) {
    const classes = useStyles();
    return (
        <div className={classes.teammateBlock}>
            <img src={props.photo} alt='photo'></img>
            <span className={classes.name}>{props.name}</span>
            <span className={classes.git}>{props.git}</span>
            <a className={classes.link} href={props.link}>
                <GitHubIcon className={classes.iconColor} />
            </a>
        </div>
    )
}


function TeamPage() {
    const classes = useStyles();
    return (
            <div className={classes.all_team}>
                <Teammate photo={'https://sun9-40.userapi.com/c854124/v854124491/1fc568/Hybr74JKEC4.jpg'}
                    name='Emelyanov Egor'
                    git='elaray1'
                    link='https://github.com/elaray1'
                />
                <Teammate photo='https://sun9-67.userapi.com/c854124/v854124491/1fc588/7BKJOA6A5Vc.jpg'
                    name='Karbovskaya Anastasia'
                    git='anastasiakrbvsk'
                    link='https://github.com/anastasiakrbvsk'
                />
                <Teammate
                    photo='https://sun9-8.userapi.com/c858232/v858232726/191e11/H02x7xJaKH4.jpg'
                    name='Dekhand Nikita'
                    git='Dexnkt001'
                    link='https://github.com/Dexnkt001'
                />
                <Teammate
                    photo='https://sun9-5.userapi.com/c854124/v854124100/200808/whe-vczaGzI.jpg'
                    name='Kudenyuk Alexander'
                    git='Riasets'
                    link='https://github.com/Riasets'
                />
                <Teammate
                    photo='https://sun9-68.userapi.com/c854124/v854124100/200801/qhhRmwLrfX0.jpg'
                    name='Efremov Artyom'
                    git='aplefull'
                    link='https://github.com/aplefull'
                />
            </div>
    )
}

export default TeamPage