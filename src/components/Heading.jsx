import Logo from "../img/triangleLogo.png"
import "../css/main.css"

export default function Heading() {
    return (
    <>
    <div className="box">
    <div className="wrapper">
    <img src={Logo} width={21.65} height={18.75} />
    </div>
    <div className="heading">windbnb</div>
    </div>
    </>
    )
    }