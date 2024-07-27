import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student from './Student Component/Student';
import CreateStudent from './Student Component/CreateStudent';
import UpdateStudent from './Student Component/UpdateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />}></Route>
          <Route path='/create' element={<CreateStudent />}></Route>
          <Route path='/update/:id' element={<UpdateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
