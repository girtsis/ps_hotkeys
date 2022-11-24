import Header from './Header'
import Head from 'next/head'
export default function Layout({children}){

    return(
        <div>
            <Head>
                <title>VdApp</title>
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            </Head>

            <Header/>
            
            <div>
                {children}
            </div>
        </div>
    )
}