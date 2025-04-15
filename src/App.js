import logo from './logo.svg';
import './App.css';

function call_rest() {

}

function TextArea({value}) {
  return (
    <div className='text-area'>
      value
    </div>
  );
}

function Button() {
  function handleClick() {
    console.log('clicked');
  }

  return (
    <button 
      className='button'
      onClick={handleClick}
    >
      Click Me
    </button>
  );
}

function App() {
  return (
    <>
      <div className="Main">
        <TextArea />
        <Button />
      </div>
    </>
  );
}

export default App;
