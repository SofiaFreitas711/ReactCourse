import componentsImg from './assets/components.png'

import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx'


function App() {
  
  return (
    <>  
      <Header /> {/* component header appears here */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
