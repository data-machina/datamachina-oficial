'use client'
import './datamachina.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Carrossel } from "../../components/Carrousel/Carrossel";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Link from 'next/link'

export default function Datamachina() {
    return (
       <>
            <GoogleAnalytics gaId="GTM-KW48QX9" />
			
            <Header pageName="datamachina" />
            
            <main>
                <section className="dm-banner">

                    <img className="dm-banner__background" src="background.png" alt="" />

                    <div className="link__ancor" id="inicio"></div>
                    <div className='dm-banner__container'>
                        <div className="dm-banner__texts">
                            <h1 className='dm-banner__h1'><em>/</em> Gostamos <br /> de problemas <br /> difíceis!</h1>
                            <p>
                                Somos pesquisadores e empreendedores com cultura de inovação aplicada,
                                prototipação e ruptura de paradigmas, somos curiosos, dedicados e disruptivos.
                            </p>
                        </div>
            
                        {/* Vídeo */}
            
                        <iframe className="banner__iframe" src="https://www.youtube.com/embed/bQjCKkZRVbA" title="Uma nova Data Machina" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </section>
            
                {/*  */}
            
                <section className="inquietude">
                    <div className="link__ancor" id="solucoes"></div>
                    <p className='title' >Nossa inquietude nos leva a propor soluções para <br /> o dia-a-dia com tecnologias de fronteira</p>
                </section>
            
                {/*  */}
            
                <section className="produtos">
                    {/* 1 */}
            
                    <div className="produtos__negocio--1" id="Mapalytics">
            
                        <div className="descricao-1">
                            <div className="container-data-machina">
                                <p className="dm-titulo-1 title">dm mapalytics</p>
                                <p className="dm-titulo-2">
                                    Para empresas de varejo que querem conhecer melhor sua rede de atuação ou para
                                    empresas de seguros e assistências técnicas que querem mapear oportunidades e prestadores de
                                    serviço. <br /> O painel DM Mapalytics consegue agregar dados públicos e sociodemográficos com os dados da
                                    sua empresa para mostrar como sua rede se comporta hoje, onde estão as áreas mal atendidas e quais
                                    as áreas de novas oportunidades. Além de trazer os dados históricos através de business intelligence
                                    para dar total domínio estratégico e tático para seus planos de crescimento.
                                </p>
            
                                <Link className="mais mais__pink dm_mapalytics" href="https://mapalytics.com.br">Saiba mais<div className="mais__arrow produtos__ir">↓</div></Link>
                            </div>
                        </div>
                        <div className="produtos__contorno">
            
                            <video className="produtos__gif-animado" autoPlay playsInline loop muted>
                                <source src="./mapalytics.mp4" type="video/mp4" />
                            </video>
                            <div className="produtos__unidade">
                                <img className='logos__size' width="200" height="60" src="datamachina/img/mapalyticsbranco.svg" alt='Data Machina Mapalytics' />
                            </div>
                        </div>
                    </div>
                </section>
            
                {/* SOLUÇÕES */}
            
                <section className="solucoes">
                    <div className="link__ancor" id="clientes"></div>
                    <div className="nossas-solucoes" id="nossas-solucoes">
                        <p className='title'>
                            Nossas soluções já ajudaram várias <br />
                            empresas e queremos ajudar muitas mais
                        </p>
                    </div>
                </section>
            
                {/* MARCAS */}
            
                <section className="marcas">
                    <a href="https://www.grupozelo.com/grupo-zelo/pt-br" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/zelo.svg" alt="zelo" />
                    </a>
                    <a href="https://www.casabauducco.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/bauducco.svg" alt="bauducco" />
                    </a>
                    <a href="https://www.comgas.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/comgas.svg" alt="comgas" />
                    </a>
                    <a href="https://www.lojasedmil.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/edmil.png" alt="edmil" />
                    </a>
                    <a href="https://www.whirlpool.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/whirlpoll.png" alt="whirlpoll" />
                    </a>
                    <a href="https://www.mrs.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/mrs.png" alt="mrs" />
                    </a>
                    <a href="https://trutec.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/trutec1.png" alt="trutec1" />
                    </a>
                    <a href="https://www.votorantimcimentos.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/votorantim.svg" alt="votorantim" />
                    </a>
                    <a href="https://www.aesbrasil.com.br/pt-br" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/aes.svg" alt="aes" />
                    </a>
                    <a href="http://www.gruporeciclabr.com.br/pt/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/recicla.png" alt="recicla" />
                    </a>
                    <a href="http://www.labcidade.fau.usp.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/labcidade.png" alt="labcidade" />
                    </a>
                    <a href="https://cestanobre.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/nobrecesta.png" alt="nobrecesta" />
                    </a>
                    <a href="https://www.poloplanejamento.com/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/polo.png" alt="polo" />
                    </a>
                    <a href="https://mercadofavo.com/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/favo.svg" alt="favo" />
                    </a>
                    <a href="https://www.trust.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/trust.svg" alt="trust" />
                    </a>
                    <a href="https://www.bhrgastronomia.com.br/" target="_blank" aria-label="">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/bhr.png" alt="bhr" />
                    </a>
                </section>
            
                {/* COMENTÁRIOS */}
            
                <section className="comentarios">
                    <div className="comentarios__temos-orgulho">
                        <p className='title'>
                            E temos orgulho de ter <br /> nossos clientes como <br /> <span className="comentarios__arrow">parceiros</span>
                        </p>
                    </div>
                    <Carrossel data-carrossel="carousel-data">
                        <section className="carrossel__container">
                            <img className="comentarios__img" src="datamachina/logos/whirlpoll.png" alt='Logo Whirlpool'/>
                            <p className='comentarios__texts'>
                                "A Data Machina entendeu a nossa necessidade de uma forma muito rápida e tem nos ajudado
                                a converter os desafios em oportunidades"
                            </p>
                            <p className="comentarios__fulano">/Gelson Lira</p>
                        </section>
            
                        <section className="carrossel__container">
                            <img className="comentarios__img" src="datamachina/logos/polo.png" alt='Logo Polo' />
                            <p className='comentarios__texts'>
                                "A Data Machina nos ajudou a agilizar nosso processo de pesquisa. De forma muito
                                inovadora conseguimos ter resultados acima do esperado."
                            </p>
                            <p className="comentarios__fulano">/Thiago Zeidler</p>
                        </section>
                    </Carrossel>
                </section>
            
                <section className="premio">
                    <div className="link__ancor" id="premios"></div>
                    <div className='premio__container'>
                        <div className="video-premio">
                            <iframe className="premio__iframe" width="560" height="315" src="https://www.youtube.com/embed/RBH_y4JyDkU?si=XB6EYOqMQye7HwKE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                        <div className="premio__logo">
                            <p className="title">
                                Muito trabalho só <br /> poderia resultar em <br /> reconhecimento
                            </p>
                            <img className='premio__logo--img' src="datamachina/img/top100.jpg" alt="Ranking Top 100 Open Startups" />
            
                            <p className="p-premio">Fomos reconhecidos no Prêmio <strong><em>100 Open Startups</em></strong> pelo <strong>3º ano consecutivo</strong> como uma das melhores <strong><em>citytechs</em></strong> do <strong>Brasil</strong>.</p>
                        </div>
                    </div>
                </section>
            
                <section className="programas-de-aceleracao">
                    <div className="link__ancor" id="aceleracoes"></div>
                    <p className='title'>Vários programas de aceleração nos ajudaram a <br /> aprimorar nossos produtos</p>
                </section>
            
                <section className="marcas marcas--2" id="clientes">
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/fapesp.png" alt="fapesp" />
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/adesampa.png" alt="adesampa" />
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/inovabrasil.png" alt="inovabrasil" />
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/vedacitlabs.png" alt="vedacitlabs" />
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/softex.png" alt="softex" />
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/liga.png" alt="liga" />
                </section>
                
                {/* Agencias */}

                <section className='agencias'>
                  <p className='title agencias__p'>Contamos com o apoio de agências de fomento <br /> para impulsionar nossos projetos.</p>
                  <img className='arrow' src="" alt="" />
                </section>

                <section className='agencias__grid'>
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/fapesp.png" alt="fapesp" />
                    <a href="https://www.capital.sp.gov.br/" target="black">
                        <img className='logos__size' width="200" height="60" src="datamachina/logos/prefeituradesp.svg" alt="prefeituradesp" />
                    </a>
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/mcti.png" alt="mcti" />
                    <img className='logos__size' width="200" height="60" src="datamachina/logos/arsesp.svg" alt="arsesp" />
                </section>

                {/* FINEP */}
                <section className="finep">
                  <div className="link__ancor" id="finep"></div>

                  <a className="finep__a" href="http://www.finep.gov.br/chamadas-publicas/chamadapublica/676" target="_blank">
                    <img width="500" height="500" src="datamachina/img/finep.jpg" alt="finep" />
                  </a>

                </section>
            
                {/* CONHECER */}
            
                <section className="conhecer__nos">
                    <div className="link__ancor" id="contato"></div>
                    <div className="conhecer__quer-nos">
                        <p>
                            Alguma das nossas soluções te interessou? Ou quer saber como resolver
                            outro problema?
                        </p>
                        <div className="manda title">
                            Manda um e-mail <br /> pra gente
                            <div className="seta-1">→</div>
                        </div>
            
                        <a href="mailto:contato@datamachina.com.br">
                            <form className="conhecer__email">
                                contato@datamachina.com.br
                            </form>
                        </a>
                    </div>
                </section>
            </main>
            
            <Footer pageName="datamachina" />
        </>
    )
}
