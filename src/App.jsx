import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MissionsScreen from './pages/Missions';
import ProfileScreen from './pages/Profile';
import RocketsScreen from './pages/Rockets';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/missions" element={<MissionsScreen />} />
          <Route exact path="/profile" element={<ProfileScreen />} />
          <Route exact path="/rockets" element={<RocketsScreen />} />
          <Route index element={<RocketsScreen />} />
          <Route
            path="*"
            element={
              <section className="flex-center"><div className="container text-center">404 Page not found</div></section>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
