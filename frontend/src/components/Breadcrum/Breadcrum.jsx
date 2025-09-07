import './Breadcrum.css'
import arrow_icon from "../../Assets/Frontend_Assets/breadcrum_arrow.png"

export default function Breadcrum({name, category}) {
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {category} <img src={arrow_icon} alt=''/> {name} 
        </div>
    )
}
