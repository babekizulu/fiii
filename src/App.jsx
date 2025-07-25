//components
import Header from "./components/Header";
import Route from './components/Route';
import SidePanel from "./components/SidePanel";
//pages
import Dashboard from "./components/pages/Dashboard";

function App() {
    return (
        <div className="app">
            <Header/>
            <SidePanel/>
            <Route path='/'>
                <Dashboard/>
            </Route>
        </div>
    );
};

export default App;