import './home.css'
import Gallery from './gallery'

export default function Home (){
    
    return(
        <>
            <h2 className="title-section-main">
                Главная страница
            </h2>
            <div className="container-main">
            <Gallery />

                <div className="main-info-authour">

                </div>
            </div>


        </>
    )
}