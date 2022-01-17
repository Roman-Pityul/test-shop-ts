import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import Item from "./components/item";
import ListProperty from "./components/list-property";
import ListItem from "./components/list-item";
import AddItem from "./components/add-item";
import AddProperty from './components/add-property'
import { fetchProperty } from "./redux/property/propertyActions";
import { useDispatch } from "react-redux";
import { fetchCars } from "./redux/cars/carsActions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProperty());
    dispatch(fetchCars());
  }, [dispatch])

  return (
    <Switch>
      <Route path={["/", "/login"]} exact component={Login} />
      <Route path="/reg" component={Registration} />
      <Route path="/item/:itemId?" component={Item} />
      <Route path="/list-property" component={ListProperty} />
      <Route path="/list-item/:itemId?" component={ListItem} />
      <Route path="/add-item" component={AddItem} />
      <Route path="/add-prop" component={AddProperty} />
    </Switch>
  );
} 

export default App;
