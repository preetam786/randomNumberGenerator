import UserProfile from './components/UserProfile'

import './App.css';

const App = () => {
  return (
    <div className='random-number-app'>
      <div className='rdm-card'>
        <h1 className='title'>Random Number</h1>
        <p className='discription'>Generate a random number in the range of 0 to 100</p>
        <UserProfile />
      </div>
    </div>
  )
}

export default App;
