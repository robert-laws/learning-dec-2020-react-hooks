import './App.scss';
import Heading from './components/Heading';
import List from './components/List';

function App() {
  return (
    <div className='App'>
      <Heading headingType='h2' headingText='Welcome to the App' />
      <List items={['hat', 'bat', 'mat', 'pencil']} />
    </div>
  );
}

export default App;
