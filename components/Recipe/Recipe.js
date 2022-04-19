
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Recipe(props){
    return(
        <div>

        <Header title={`SiteReceitas - ${props.name}`} />

        <main>
            <article className='recipe-body'>

                <h1 className='recipe-body-name'>{props.name}</h1>
                <img className='recipe-body-picture' alt={props.name} src={props.picture} />
            
                <div>
                    <i className='fas fa-stopwatch fa-fw'></i> Preparo: {props.time} <br/>
                    <i className='fas fa-utensils fa-fw'></i> Rendimento: {props.servings}
                </div>

                {props.children}
            </article>
        </main>

        <Footer />

        </div>
    )
}