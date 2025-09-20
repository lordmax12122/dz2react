import './App.css';
import { Button } from './Button/Button';
import { Greeting } from './Greeting/Greeting';
import { Text } from './Text/Text';

const name = "Максим"
const text = "Сьогодні хороший день"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name={name} />
        <Text text={text} />
        <Button text={text} />
      </header>
    </div>
  );
}

export default App;
