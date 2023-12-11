// @ts-nocheck
import useFetch from "../customsHooks/useFetch"
import './CourseList.css'

export function CourseList(){
    const url ="http://localhost:8080/course"
    // const url ="https://jsonplaceholder.typicode.com/users"
    const {data , loading , error , handlerCancelRequest} = useFetch (url)

    return (
        <div className="courseList">
            <h4>Lista de cursos</h4>
            <div className="container container-fluid courseListContainer">
                {error && <li>Ocurrion un error : {error}</li>}
                {loading && (
                <>
                    <li>CARGADO INFORMACION..</li>            
                    <button onClick={handlerCancelRequest}>Cancelar carga de informacion</button>
                </>
                )}
                {data?.map((course) => (  
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
                )) }                    

            </div>

        </div>
    )
}