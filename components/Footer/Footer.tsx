import Link from 'next/link'
import './Footer.css';
import { useRouter } from 'next/navigation'

export const Footer = (props: any) => {
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
        <footer>
            <div className="footer__container">
                <img className="footer__logo" src="/dm-logo-name.svg" alt="" />

                  <div className="footer__empresa">
                      <Link className="footer__first" href="/">data machina</Link>
                      <button className="footer__links" onClick={()=> showScroll("datamachina", "inicio")}>início</button>
                      <button className="footer__links" onClick={()=> showScroll("datamachina", "solucoes")}>soluções</button>
                      <button className="footer__links" onClick={()=> showScroll("datamachina", "clientes")}>clientes</button>
                      <button className="footer__links" onClick={()=> showScroll("datamachina", "premios")}>prêmios</button>
                      <button className="footer__links" onClick={()=> showScroll("datamachina", "aceleracoes")}>aceleração</button>
                      <button className="footer__links" onClick={()=> showScroll("datamachina", "contato")}>contato</button>
                  </div>

                  <div className="footer__sociais">
                      <div className="footer__link">
                          <a href="https://www.instagram.com/data.machina/" target="blank" aria-label="Estamos no Instagram!">
                              <img src="/icones/instagram.svg" alt="Instagram Data Machina" />
                          </a>
                          <a href="https://www.linkedin.com/company/datamachina" target="blank" aria-label="Estamos no LinkedIn!">
                              <img src="/icones/linkedin.svg" alt="LinkedIn Data Machina" />
                          </a>
                          <a href="https://www.youtube.com/channel/UC53uChh4XmLF6-CwT6G_UJw" target="blank" aria-label="Estamos no Youtube!">
                              <img src="/icones/youtube.svg" alt="Youtube Data Machina" />
                          </a>
                    </div>
                    <a className="footer__button--border" href='https://drive.google.com/drive/folders/1JROi6IP1GcIUxz8vNDe-Pk0SZtx0Kcdd?usp=sharing' target='_black'>material de imprensa</a>
                </div>
            </div>
            
            <div className="footer__bottom">
                <div className="footer__bottom--items">
                    <div className="dm-footer__mapalytics dm-footer--after">
                        <img className="footer__logo--dm" src="/dm-white.svg" alt="" />
                    </div>
                    <Link className="dm-footer__mapalytics" href="https://mapalytics.com.br">
                        <img className='footer__mapalytics--logo' src="/mapalyticscinza.svg" alt="" />
                    </Link>
                </div>
                <div className="footer__bottom--items">
                    <p>Data Machina - 2024</p>
                    <a href="http://tre.art.br/" target="black">
                        <img className="footer__tre" src="/tre.svg" alt="Tre" />
                    </a>
                </div>
            </div>
        </footer>
    )
}