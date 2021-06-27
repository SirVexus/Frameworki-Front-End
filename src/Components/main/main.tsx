import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdministrationPanel from '../administrationPanel/administrationPanel';
import Entities from '../entities/entities';
import Latest from '../latest/latest';
import ResumeWork from '../ResumeWork/resumeWork';
import Sidebar from '../sidebar/sidebar';
import SingleWorkSpace from '../singleWorkspace/singleWorkSpace';
import TopBar from '../topbar/topbar';
import Workspaces from '../workspaces/workspaces';

function Main(): JSX.Element {
    return (<div style={{backgroundColor: "#f0f0f0"}}>
        <TopBar></TopBar>
        <div style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "hidden"
        }}>
            <Sidebar></Sidebar>
            <div style={{width: "100%"}}>
                <Switch>
                    <Route path="/start">
                        <Latest></Latest>
                        <Workspaces></Workspaces>
                        <ResumeWork></ResumeWork>
                    </Route>
                    <Route path="/entities">
                        <Entities></Entities>
                    </Route>
                    <Route path="/workspace">
                        <SingleWorkSpace></SingleWorkSpace>
                    </Route>
                    <Route path="/administration">
                        <AdministrationPanel></AdministrationPanel>
                    </Route>
                    /* page with workspace details */
                    <Route path="/">
                        <Latest></Latest>
                        <Workspaces></Workspaces>
                        <ResumeWork></ResumeWork>
                    </Route>
                </Switch>
            </div>
        </div>
    </div>)
}

export default Main;