
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RecipeCard from '../components/RecipeCard/RecipeCard';

export default function Index(){
  return (
    <div>

      <Header title="SiteReceitas" />

      <main>

        <RecipeCard 
          name="Bolo de Chocolate"
          category="Bolos"
          picture="/img/bolo-chocolate.jpg"    
          link="/receitas/bolos/chocolate"    
        />
        
      </main>

     <Footer />
    </div>
  )
}