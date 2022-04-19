import Recipe from '../../../components/Recipe/Recipe';
import Header from '../../../components/Recipe/Recipe';

export default function Chocolate(){
    return(
        <div>
            <Recipe 
                name="Bolo de Chocolate"
                picture="/img/bolo-chocolate.jpg"
                time="40 minutos"
                servings="10 porções"
            >

                <h2>Ingredientes</h2>
                
                <h3>Massa</h3>

                <ul>
                    <li>1/2 xícara (chá) de óleo</li>
                    <li>200 gramas de chocolate em pó</li>
                    <li>4 ovos</li>
                    <li>2 xícaras (chá) de açucar</li>
                    <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
                    <li>1 colher (sopa) de fermento em pó</li>
                </ul>

                <h3>Cobertura</h3>

                <ul>
                    <li>1/2 xícara de creme de leite</li>
                    <li>250 gramas de chocolate em pó</li>
                    <li>150 gramas de leite condensado</li>
                    <li>1 colher (sopa) manteiga de leite</li>
                </ul>

                <h2>Modo de Preparo</h2>

                <h3>Massa</h3>

                <ol>
                    <li>Adicione tudo em um liquidificador</li>
                    <li>Bata até ter uma massa consistente</li>
                    <li>Asse em um forno preaquecido a 180°C por 30 minutos</li>
                </ol>
                
            </Recipe>
            
        </div>
    )
}