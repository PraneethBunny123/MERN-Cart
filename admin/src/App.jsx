import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Admin from './pages/Admin/Admin'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Admin />
        </BrowserRouter>
    )
}

export default App