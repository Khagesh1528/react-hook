import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import Home from './Home';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:postId" component={PostDetail} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
