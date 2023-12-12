// @ts-nocheck
import useFetch from "../customsHooks/useFetch"
import './CourseList.css'

export default function CourseList(){
    const url ="http://localhost:8080/course"
    const {data , loading , error , handlerCancelRequest} = useFetch (url)

    function renderError (){
        if(error && error == 403){
            return (
                <div className="alert alert-danger" role="alert">
                    <p>Error de permisos, logueate  e intenta nuevamente...</p>
                </div>
            )
        } else if(error){
            return(
                <div className="alert alert-danger" role="alert">
                    <p>Ocurrion un error : {error}</p>
                </div>
            )
        }
    }
    function renderCourseList (){    
        if(data){
            return (
                data.map((course) => (  
                    <div class="card courseCard" key={course.id}>
                        <img src="..." class="card-img-top" alt="IMAGEN PENDIENTESSSS"/>
                        <div class="card-body">
                            <h5 class="card-title">{course.name}</h5>
                            <p class="card-text">{course.description}</p>
                            <p class="card-text">{course.duration}</p>
                            <p class="card-text">ID Profesor :{course.idTeacher}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )) 
            )
        } else if (!data && !error) {
            return (
                <div className="alert alert-secondary" >
                    <p>Aun no hay cursos cargados</p>
                </div>
            )
        }    
    }
    function renderLoading(){
        if(loading){
            return (
                <>
                    <li>CARGADO INFORMACION..</li>            
                    <button onClick={handlerCancelRequest}>Cancelar carga de informacion</button>
                </>
            )
        }
    }

    return (
        <div className="courseList">
            <h4>Lista de cursos</h4>
            <div className="container container-fluid courseListContainer">
                { renderError()}
                { renderLoading()}
                { renderCourseList()}                    
            </div>
        </div>
    )
}