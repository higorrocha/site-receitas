import Head from 'next/head';
import Link from 'next/link';

export default function Index(){
  return (
    <div>
      <Head>

        <title>SiteReceitas</title>
        <link rel="stylesheet" href='/styles/page.css' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

      </Head>
      
      <header className='header'>
        <Link href="/">
          <a>
            <h1 className='Logo Site Receitas'>SITE<b>RECEITAS</b></h1>
          </a>
        </Link>
      </header>

      <main>

        <figure className='recipe-card'>
          <Link href="receitas/bolos/chocolate">
            <a>
              <img className='recipe-picture' src='/img/bolo-chocolate.jpg' />
            </a>
          </Link>
          <div className='recipe-category'>Bolos</div>
          <figcaption className='recipe-name'>Bolo de chocolate</figcaption>
        </figure>

      </main>

      <footer className='footer'>
        &copy; Site Recitas
      </footer>
    </div>
  )
}