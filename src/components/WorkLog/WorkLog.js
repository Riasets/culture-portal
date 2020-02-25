import React, { Fragment } from 'react';
import './style.css';
import SimpleTable from './elements/Table';
import {elaray, aplefull, dexnkt, anastasiaKrbvsk, riasets} from './tableData';


function WorkLog() {
    return (
        <Fragment>
            <div className = 'table-wrapper top-wrapper'>
                <p className = 'person-name'>Egor</p>
                <SimpleTable rows={elaray}/>
            </div>
            <div className = 'table-wrapper'>
                <p className = 'person-name'>Artsiom</p>
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
        </Fragment>
    );
}

export default WorkLog