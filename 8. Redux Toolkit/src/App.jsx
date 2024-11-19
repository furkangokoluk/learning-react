import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/counterSlice';
import UserList from './userList';

function App() {

  const { value } = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        {value}
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
      <div>
        <UserList />
      </div>

    </>
  )
}

export default App
