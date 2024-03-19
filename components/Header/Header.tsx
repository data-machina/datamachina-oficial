import Link from 'next/link'
import './Header.css'
import { useRouter } from 'next/navigation'

function Header(props: any) {
    const router = useRouter()
    const page = props.pageName // Identifica em qual rota o elemento atualmente

    const showScroll = (whichPage: string, param: string) => {
        let elAltura = document.getElementById(param)?.getBoundingClientRect().y 
        let scrollTop: any
        
        if(elAltura != undefined) scrollTop = document.documentElement.scrollTop + elAltura
        
        if(page == whichPage) {
            if(elAltura != 0) {
                window.scrollTo({
                    top: scrollTop
                })
            }
        } else {
            if(whichPage == 'datamachina') router.push('/')
            if(whichPage == 'mapalytics') router.push('/mapalytics')

            setTimeout(() => {
                const altura: any = document.getElementById(param)?.getBoundingClientRect().y
                if(elAltura != 0) {
                    window.scrollTo({
                        top: document.documentElement.scrollTop + altura
                    })
                }
            }, 1000); // Espera um tempo para montagem do DOM
        }
    }

    return (
        <header>
            <img className="header__logo" src="/dm-logo-name.svg" alt="Data Machina" />
            <nav>
                <div className="header__dropdown">
                    <Link className="header__dropdown--link" href="/">data machina</Link>
                    <div className="header__dropdown--items">
                        <button className="header__option" onClick={()=> showScroll("datamachina", "inicio")}>início</button>
                        <button className="header__option" onClick={()=> showScroll("datamachina", "solucoes")}>soluções</button>
                        <button className="header__option" onClick={()=> showScroll("datamachina", "clientes")}>clientes</button>
                        <button className="header__option" onClick={()=> showScroll("datamachina", "premios")}>prêmios</button>
                        <button className="header__option" onClick={()=> showScroll("datamachina", "aceleracoes")}>acelerações</button>
                        <button className="header__option" onClick={()=> showScroll("datamachina", "contato")}>contato</button>
                    </div>
                </div>

                <div className="header__dropdown">
                    <Link className="header__dropdown--link dropdown--novo" href="https://mapalytics.com.br">mapalytics</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header