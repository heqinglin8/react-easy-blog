import React from 'react';
import { Route } from 'react-router-dom';
import { view as Loading } from './components/loading';
import { view as Login } from './login';
import { view as Admin } from './pages';

const App = () => {
  return (
    <>
      <Loading />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
    </>
  );
};

const Home = () => {
  return (
    <div >
     <p> 首页 </p>
    </div>
  );
};

export default App;