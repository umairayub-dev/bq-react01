import 'bootstrap/dist/css/bootstrap.min.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className='text-center m-2'>
     <h2>Cards</h2>
     <div className="row row-cols-3">
      <MyComponent myData="Javascript"/>
      <MyComponent myData="React"/>
      <MyComponent myData="Boostrap"/>
      <MyComponent myData="Html"/>
      <MyComponent myData="Css"/>
     </div>
    </div>
  )
}

export default App
