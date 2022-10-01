import React from 'react';
import {
  Route,
  Redirect,
  RouteChildrenProps
} from 'react-router-dom';
import Userfront from '@userfront/react';

const Dashboard: React.FC = () => {
  const renderFn = ({ location }: RouteChildrenProps) => {
    if (!Userfront.accessToken) {
      return (
        <Redirect
         to={{
          pathname: '/',
          state: { from: location }
         }}
        />
      )
    }

    const userData = JSON.stringify(Userfront.user, null, 2);

    return (
      <>
        <h1>Dashboard</h1>
        <pre> { userData } </pre>
        <button onClick={Userfront.logout}>Logout</button>
      </>
    )
  }
  return <Route render={renderFn}/>
}

export default Dashboard;