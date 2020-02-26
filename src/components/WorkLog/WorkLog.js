import React, { Fragment } from 'react';
import './style.css';
import SimpleTable from './elements/Table';
import {elaray, aplefull, dexnkt, anastasiaKrbvsk, riasets} from './tableData';
import PrimaryCheckbox from './elements/PrimaryCheckbox';
import SecondaryCheckbox from './elements/SecondaryCheckbox';
import PropTypes from "prop-types";

function WorkLog() {
    return (
        <Fragment>
            <h1 className='worklog-title'>WorkLog page.</h1>
            <div className = 'table-wrapper'>
                <p className = 'person-name'>Egor</p>
                <SimpleTable rows={elaray}/>
            </div>
            <div className = 'table-wrapper'>
                <p className = 'person-name'>Artyom</p>
                <SimpleTable rows={aplefull}/>
            </div>
            <div className = 'table-wrapper'>
                <p className = 'person-name'>Nikita</p>
                <SimpleTable rows={dexnkt}/>
            </div>
            <div className = 'table-wrapper'>
                <p className = 'person-name'>Anastasia</p>
                <SimpleTable rows={anastasiaKrbvsk}/>
            </div>
            <div className = 'table-wrapper bottom-wrapper'>
                <p className = 'person-name'>Alexander</p>
                <SimpleTable rows={riasets}/>
            </div>
            <div className='worklog-checkboxes'>
                <SecondaryCheckbox text={'Main page'}/>
                <PrimaryCheckbox text={'portal\'s description'}/>
                <PrimaryCheckbox text={'\'author of the day\' block'}/>
                <SecondaryCheckbox text={'Navigation'}/>
                <SecondaryCheckbox text={'Page with a list of authors'}/>
                <PrimaryCheckbox text={'Autors search'}/>
                <PrimaryCheckbox text={'7-12 authors'}/>
                <SecondaryCheckbox text={'Page of an author'}/>
                <PrimaryCheckbox text={'Author\'s name'}/>
                <PrimaryCheckbox text={'Years of life'}/>
                <PrimaryCheckbox text={'Her/his picture'}/>
                <PrimaryCheckbox text={'Timeline biography'}/>
                <PrimaryCheckbox text={'List of artist\'s works'}/>
                <PrimaryCheckbox text={'Photo gallery'}/>
                <PrimaryCheckbox text={'Youtube video'}/>
                <PrimaryCheckbox text={'Place of author\'s activity on a map'}/>
                <SecondaryCheckbox text={'Page with team members'}/>
                <PrimaryCheckbox text={'Avatars for each member'}/>
                <PrimaryCheckbox text={'Link to github'}/>
                <PrimaryCheckbox text={'Role in the team'}/>
                <SecondaryCheckbox text={'Page with worklog'}/>
                <PrimaryCheckbox text={'Table with hours and time'}/>
                <PrimaryCheckbox text={'Main 1-3 difficulties'}/>
                <PrimaryCheckbox text={'Self-evaluation with checkboxes'}/>
                <SecondaryCheckbox text={'Page with styleguide'}/>
                <PrimaryCheckbox text={'links/buttons/inputs'}/>
                <PrimaryCheckbox text={'typography elements'}/>
                <PrimaryCheckbox text={'colors and its purpose'}/>
                <PrimaryCheckbox text={'icons'}/>
                <SecondaryCheckbox text={'Deployment'}/>
                <SecondaryCheckbox text={'Different languages'}/>
            </div>
            <div className='difficulties'>
                <p>Main difficulties:</p>
                <ul className='difficulties-list'>
                    <li>Splitting the task</li>
                    <li>Understanding what each person should do</li>
                </ul>
            </div>
        </Fragment>
    );
}

WorkLog.propTypes = {
    rows: PropTypes.array,
  }
  
WorkLog.defaultProps = {
  rows: [],
}

export default WorkLog