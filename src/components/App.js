// @ts-nocheck
import './App.css'
import { Header } from './header/Header';
import { CourseList } from './courseList/CourseList';
import LoginForm from './loginForm/LoginForm';
import UserAccount from './userAccount/UserAccount';
import RegisterForm from './registerForm/RegisterForm';

function App(){
    
    return (
        <div>
            <Header pageTitle = "Frontentd authentcated wit HWT " />
            <LoginForm/>
            <UserAccount/>
            <RegisterForm/>
            <CourseList/>

        </div>
    )
}

export default App;