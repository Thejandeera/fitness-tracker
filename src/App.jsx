import Data from './components/Data/data.jsx';
import NavigationBar from './components/Navigationbar/navibar.jsx';
const App = () => {
  return (
    <div>
      
      <section id="NavigationBar">
        <NavigationBar/>
      </section>
      <section id="Data">
        <Data/>
      </section>
      
      
    </div>
  );
};

export default App;
