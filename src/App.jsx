import './App.css';
import useInput from './hooks/useInput';

function App() {

  const username = useInput('')
  const password = useInput('')

  return (
    <div className="App">
      <input {...username} type='text' placeholder='Username' />
      <input {...password} type='text' placeholder='Password' />
      <button onClick={() => console.log(username.value, password.value)}>Click</button>
    </div>
  );
}

export default App;
