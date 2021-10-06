import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Signup from './components/Signup/Signup';
import Login from './components/Login/Login'
import Workspace from './components/Workspace/Workspace';
import Classroom from './components/Classroom/Classroom';
import CreateAssignment from './components/CreateAssignment/CreateAssignment';
import StudentAssignment from './components/StudentAssignment/StudentAssignment';
import AssignmentResponse from './components/AssignmentResponse/AssignmentResponse';

const App = () => (

    <Router>
        {/* <Route path="/" exact component = {Home} /> */}
        <Route path="/" exact component={Workspace} />
        <Route path="/signup"  component = {Signup} />
        <Route path="/login" component = {Login} />
        
        <Route path="/classroom" component={Classroom} />
        <Route path="/createassignment" component={CreateAssignment} />
        <Route path="/assignment" component={StudentAssignment} />
        <Route path="/assignmentresponse" component={AssignmentResponse} />
        {/* <Route path="/nav" component={}/> */}
    </Router>
)

export default App; 