import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Admin.css'
import AddProduct from '../../components/AddProduct/AddProduct'
import ListProduct from '../../components/ListProduct/ListProduct'

export default function Admin() {
    return (
        <div className='admin'>
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<AddProduct />}/>
                <Route path='/listproduct' element={<ListProduct />}/>
            </Routes>
        </div>
    )
}
