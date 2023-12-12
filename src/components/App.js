// @ts-nocheck
import './App.css'
import Header from './header/Header';
import CourseList from './courseList/CourseList';
import LoginForm from './loginForm/LoginForm';
import UserProfile from './userProfile/UserProfile';
import RegisterForm from './registerForm/RegisterForm';

function App(){
    
    return (
        <div>
            <UserProfile/>
            <Header pageTitle = "Frontentd authentcated wit HWT " />
            <LoginForm/>
            <RegisterForm/>
            <CourseList/>

        </div>
    )
}

export default App;