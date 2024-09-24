import "./App.css";
import Header from "./components/Header";
import CommentList from "./components/CommentList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <CommentList />
    </div>
  );
};

export default App;
