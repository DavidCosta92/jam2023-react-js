// @ts-nocheck
import './App.css'
import { Header } from './header/Header';
import { CourseList } from './courseList/CourseList';
import LoginForm from './loginForm/LoginForm';

function App(){
    
    return (
        <div>
            <Header pageTitle = "Frontentd authentcated wit HWT " />
            <CourseList/>
            <LoginForm/>
        </div>
    )
}

export default App;