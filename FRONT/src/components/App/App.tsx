import './App.css';
import QuizzDisplay from '../QuizzDisplay/QuizzDisplay';

const App : React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <img src="./logo.svg" alt="" />
        <p className='hello'>Hello from Ukraine 👋🏻</p>
        <p className='intro'>Quizzy is a website with small games for learning Ukrainian. Make learning awesome!</p>
        <form action="submit">
          <button className='start-button btn-one'>Start here</button>
        </form>
      </div>
      <QuizzDisplay/>
    </div>
  );
}

export default App;
