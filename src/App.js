import {useSelector,useDispatch} from 'react-redux'
import {GetUsersFetch} from './action'
function App() {
  const users=useSelector(state=>state.myfirtstreducer.users)
  const dispatch=useDispatch()
  return (
    <div >
<button onClick={()=>dispatch(GetUsersFetch())}>click me</button>
<div>Users:{users.map((user =>(<div>{user.name}</div>)))}</div>


     {/* <div>count:{count}</div> */}
     <br/>
     {/* <button onClick={()=>dispatch(increamentCount())}>click me</button> */}
    </div>
  );
}

export default App;
