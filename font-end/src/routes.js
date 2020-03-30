import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Logon from './pages/Logon/index';
import Register from './pages/Register/index';
import Profile from './pages/Profile/index';
import NewIncident from './pages/NewIncident/index';
//Borser route tem que ficar encapsulando as rotas para tudo funcionar
//O Switch garante que apenas uma rota seja executada por momento
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>

            </Switch>
        </BrowserRouter>
    );
}