import './App.css';
import { ShowStudents } from './ShowStudComponent/ShowStudents';
import { StudentOperation } from './StudentData/StudentOperation';
//let studImpl=new StudentOperation();
import Navbar from './NavbarComponent/Navbar';
import {Route,Routes} from 'react-router-dom';
import DeleteStudent from './ShowStudComponent/DeleteStudent';
import AddStudent from './ShowStudComponent/AddStudent';
import Footer from './FooterComponent/Footer';
import UpdateStudent from './ShowStudComponent/UpdateStudent';
import { SearchStudent } from './ShowStudComponent/SearchStudent';
import Search from './ShowStudComponent/Search';
function App() {
  /* let deleteStud=()=>{
    studImpl.deleteStudent(100);
  }
  let showStud=()=>{
    studImpl.getAllStudents();
  } */
  return (
    <div className="App">
      {/* <button onClick={showStud}>Show Students</button>
      <button onClick={deleteStud}>Delete</button> */}
      {/* <ShowStudents></ShowStudents> */}

      <header>
        <Navbar></Navbar>
      </header>

      <Routes>
        <Route path="/students/showall" element={<ShowStudents/>}></Route>
        <Route path="/students/delete/:id" element={<DeleteStudent/>}></Route>
        <Route path="/students/add" element={<AddStudent/>}></Route>
        <Route path="/students/update/:id" element={<UpdateStudent/>}></Route>
        <Route path="/students/search/:searchText" element={<SearchStudent/>}></Route>
      </Routes>
      <footer className='footerSec'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
