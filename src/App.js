import './App.css'
import Mensaje from './components/Mensaje'
import Descripcion from './components/Descripcion'

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <p>Dale caminemos</p>
            <Mensaje color='red' message='Estamos trabajando' />
            <Mensaje color='green' message='En un curso' />
            <Mensaje color='yellow' message='De React' />
            <Descripcion />
         </header>
      </div>
   )
}

export default App
