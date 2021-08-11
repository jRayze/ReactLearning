import '../styles/Banner.css'
import logo from '../assets/leaf.png'

function Banner() {
    const title = 'La maison jungle'
    return <div className="lmj-banner">
        <img src={logo} alt="La maison jungle" className="lmg-logo" />
        <h1>{title}</h1>
    </div>
}

export default Banner