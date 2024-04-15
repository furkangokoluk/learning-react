import './css/App.css'
import Course from './Course'
import { courses } from './Data'
import Header from './Header'

function App() {

  return (
    <>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </>
  )
}

export default App
