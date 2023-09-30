import './App.css';
import Hover from './components/Hover';
import useInput from './hooks/useInput';

function App() {

  const username = useInput('')
  const password = useInput('')

  return (
    <div className="App">
      useInput
      <input {...username} type='text' placeholder='Username' />
      <input {...password} type='text' placeholder='Password' />
      <button onClick={() => console.log(username.value, password.value)}>Click</button>

      <div>
        <Hover />
      </div>
    </div>
  );
}

export default App;
