import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './components/About';
import { useState } from "react";
function App() {
  const ondelete = (title) => {
    console.log("test");
    setTodos(x.filter((e) => title !== e.title));
  };
  const addtodo = (obj) => {
    console.log(obj);
    setTodos([...x, obj]);
  };
  const [x, setTodos] = useState([
    {
      sno: 1,
      title: "first",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, optio.",
    },
    {
      sno: 2,
      title: "second",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, optio.",
    },
  ]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AddTodo addtodo={addtodo} />
            <Todos todos={x} ondelete={ondelete} />
            {/* <Footer/> */}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
