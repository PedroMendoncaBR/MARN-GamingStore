import React from 'react';
import { useState } from 'react';
import './index.css';
import './responsive.css';

export default function Index(){

  const [ a, setA ] = useState('Clique aqui para saber mais.');

  // Buttons (PT-BR)

  const [ buttonheader, setButtonheader ] = useState('Início');
  const [ buttonheader1, setButtonheader1 ] = useState('Sobre');
  const [ buttonheader2, setButtonheader2 ] = useState('Loja');
  const [ buttonheader3, setButtonheader3 ] = useState('Contato');
  const [ buttonheader4, setButtonheader4 ] = useState('Parcerias');

  const [ button6, setButton6 ] = useState('ENVIAR');

  // Span (PT-BR)

  const [ span, setSpan ] = useState('Quem Somos');
  const [ span2, setSpan2 ] = useState('Loja');
  const [ span8, setSpan8 ] = useState('Software e Hardware');
  const [ span9, setSpan9 ] = useState('Software');
  const [ span10, setSpan10 ] = useState('Hardware');
  const [ span11, setSpan11 ] = useState('Parcerias');
  const [ span12, setSpan12 ] = useState('Nosso Time');
  const [ span13, setSpan13 ] = useState('Nome');
  const [ span14, setSpan14 ] = useState('Function');
  const [ span29, setSpan29 ] = useState('Trabalhe Conosco');
  const [ span30, setSpan30 ] = useState('Esperamos seu contato!');
  const [ span31, setSpan31 ] = useState('Desenvolvimento');

  // <p> (PT-BR)
  const [ par, setpar ] = useState('A MARN foi fundada em 20** por estudantes da FATEC (Faculdade de Tecnologia de São Paulo), movidos pela ascensão na área e com alto nível de conhecimento tecnológico com intuito de alcançar o sucesso no mundo dos Games.');
  const [ par1, setpar1 ] = useState('Em 20** a MARN ampliou seu ramo de atuação buscando novos mercados, como software sob demanda e desenvolvimento de projetos eletrônicos de alta complexidade.');
  const [ par2, setpar2 ] = useState('Os jogos são uma atividade que possibilita o equilíbrio entre o mundo externo e o mundo interno, canalizando as energias das pessoas e transformando sentimentos de angústia em prazer. Ele ensina as pessoas a competir. O ser humano é exposto a diversas competições, de forma objetiva ou subjetiva, seja no âmbito profissional ou em relacionamentos sociais.');
  const [ par10, setpar10 ] = useState('Desenvolvimento de software embarcado para diversos microcontroladores como: PIC, Atmel, ARM, Arduino, Raspberry PI, entre outros. Desenvolvimento de software de alto nível com banco de dados, interfaces gráficas e diversas plataformas, como Windows, Linux e Mac OSX.');
  const [ par11, setpar11 ] = useState('Atuamos com engenharia computacional voltada a eficiência e cumprimento de metas Desenvolvemos equipamentos de automação comercial, placas de integração de circuitos, efetuadores robotizados, etc. Desenvolvemos também soluções completas que envolvam software, hardware, firmware e telecomunicações.');

  // BR Version
  function version_br(){

    setA ('Clique aqui para saber mais.');

    setButtonheader ('Início');
    setButtonheader1 ('Sobre');
    setButtonheader2 ('Loja');
    setButtonheader3 ('Contato');
    setButtonheader4 ('Parcerias');

    setButton6 ('ENVIAR');

    setSpan ('Quem Somos');
    setSpan2 ('Loja');
    setSpan8 ('Software e Hardware');
    setSpan9 ('Software');
    setSpan10 ('Hardware');
    setSpan11 ('Parcerias');
    setSpan12 ('Nosso Time');
    setSpan13 ('Nome');
    setSpan14 ('Função');
    setSpan29 ('Trabalhe Conosco');
    setSpan30 ('Esperamos seu contato!');
    setSpan31 ('Desenvolvimento');

    setpar ('A MARN foi fundada em 20** por estudantes da FATEC (Faculdade de Tecnologia de São Paulo), movidos pela ascensão na área e com alto nível de conhecimento tecnológico com intuito de alcançar o sucesso no mundo dos Games.');
    setpar1 ('Em 20** a MARN ampliou seu ramo de atuação buscando novos mercados, como software sob demanda e desenvolvimento de projetos eletrônicos de alta complexidade.');
    setpar2 ('Os jogos são uma atividade que possibilita o equilíbrio entre o mundo externo e o mundo interno, canalizando as energias das pessoas e transformando sentimentos de angústia em prazer. Ele ensina as pessoas a competir. O ser humano é exposto a diversas competições, de forma objetiva ou subjetiva, seja no âmbito profissional ou em relacionamentos sociais.');
    setpar10 ('Desenvolvimento de software embarcado para diversos microcontroladores como: PIC, Atmel, ARM, Arduino, Raspberry PI, entre outros. Desenvolvimento de software de alto nível com banco de dados, interfaces gráficas e diversas plataformas, como Windows, Linux e Mac OSX.');
    setpar11 ('Atuamos com engenharia computacional voltada a eficiência e cumprimento de metas Desenvolvemos equipamentos de automação comercial, placas de integração de circuitos, efetuadores robotizados, etc. Desenvolvemos também soluções completas que envolvam software, hardware, firmware e telecomunicações.');

  }

  // USA Version
  function version_en() {

    setA ('Click here to learn more.');

    setButtonheader ('Home');
    setButtonheader1 ('About');
    setButtonheader2 ('Store');
    setButtonheader3 ('Contact');
    setButtonheader4 ('Partnerships');

    setButton6 ('SEND');

    setSpan ('About Us');
    setSpan2 ('Store');
    setSpan8 ('Software and Hardware');
    setSpan9 ('Software');
    setSpan10 ('Hardware');
    setSpan11 ('Partnerships');
    setSpan12 ('Our Team');
    setSpan13 ('Name');
    setSpan14 ('Function');
    setSpan29 ('Work with us');
    setSpan30 ('We look forward to work with you!');
    setSpan31 ('Development');

    setpar ('MARN was founded in 20** by students from FATEC (Faculty of Technology of São Paulo), driven by the rise in the area and with a high level of technological knowledge in order to achieve success in the world of Games.');
    setpar1 ('In 20** MARN expanded its field of activity seeking new markets, such as software on demand and development of highly complex electronic projects.');
    setpar2 ('Games are an activity that allows the balance between the external world and the internal world, channeling peoples energies and transforming feelings of anguish into pleasure. It teaches people to compete. Every day, the human being is exposed to various competitions, in an objective or subjective way, either in the professional sphere or in social relationships.');
    setpar10 ('Embedded software development for several microcontrollers such as: PIC, Atmel, ARM, Arduino, Raspberry PI, among others. High level software development with database, graphical interfaces and several platforms, such as Windows, Linux and Mac OSX.');
    setpar11 ('We work with computational engineering aimed at efficiency and meeting goals. We develop commercial automation equipment, circuit integration boards, robotic effectors, etc. We also develop complete solutions involving software, hardware, firmware and telecommunications.');
  }

  return(
    <div className="body">

      <header>
        <div className="opacity"></div>
        
        <button className="headerbtn"><a href="#inicio">{buttonheader}</a></button>
        <button className="headerbtn"><a href="#aboutus">{buttonheader1}</a></button>
        <button className="headerbtn"><a href="#loja">{buttonheader2}</a></button>       
        <div className="logo"></div>
        <button className="headerbtn"><a href="#parcerias">{buttonheader4}</a></button>
        <button className="headerbtn"><a href="#contato">{buttonheader3}</a></button>
        
        <button onClick={version_br} className="brregionbtn"></button>
        <button onClick={version_en} className="usaregionbtn"></button>
      </header>

            <section id="inicio" className="bgmain0">
              <div className="socialmedia">
                <button className="face"><a className="socialbtnlink" href="https://www.facebook.com/">F</a></button>
                <button className="youtube"><a className="socialbtnlink" href="https://www.youtube.com/">Y</a></button>
                <button className="linkedin"><a className="socialbtnlink" href="https://www.linkedin.com/">L</a></button>
              </div>

              <div className="gamesdisplay">
                <div className="display"><button className="indisplay"></button></div>
                <div className="display"><button className="indisplay"></button></div>
                <div className="display"><button className="indisplay"></button></div>
                <div className="display"><button className="indisplay"></button></div>
                <div className="display"><button className="indisplay"></button></div>
                <div className="display"><button className="indisplay"></button></div>
                <div className="display"><button className="indisplay"></button></div>
              </div>

            </section>

            <section id="aboutus" className="bgaboutus">
              <div className="divspanaboutus">
                <span class="aboutus">{span}</span>
              </div>

              <div className="aboutusinfo">
                <div className="aboutusinfo1">
                  <div className="aboutuslogo"></div>
                  <p className="earthinfo">{par}</p>
                </div>

                <div className="aboutusinfo2">
                  <div className="divaboutsinfo2">
                    <div className="imageinfo1"></div>
                    <p className="earthinfo">{par1}</p>
                  </div>

                  <div className="divaboutsinfo2">
                  <div className="imageinfo2"></div>
                    <p className="earthinfo">{par2}</p>
                  </div>
                </div>
              </div>
              
            </section>



            <section id="loja" className="divloja">
              <div className="bgloja"><span className="spanloja">{span2}</span></div>

              <div className="gamedisplay">
                <div className="gamedisplayimg"></div>
              </div>

              <div className="gamedisplay">
                <div className="gamedisplayimg"></div>
              </div>


              <div className="gamedisplay">
                <div className="gamedisplayimg"></div>
              </div>


              <div className="gamedisplay">
                <div className="gamedisplayimg"></div>
              </div>


              <div className="gamedisplay">
                <div className="gamedisplayimg"></div>
              </div>
              
            </section>



            <div className="gamescard">
              <div className="card0">
                <div className="cardcontent"></div>
                <span className="spancard">GameCard Name</span>
              </div>

              <div className="card1">
                <div className="cardcontent"></div>
                <span className="spancard">GameCard Name</span>
              </div>

              <div className="card2">
                <div className="cardcontent"></div>
                <span className="spancard">GameCard Name</span>
              </div>
            </div>

            <div className="otherscards">
              <div className="othersinfo">
                <button className="otherscontent"></button>
                <span className="spanothers">Game 1</span>
              </div>

              <div className="othersinfo">
                <button className="otherscontent"></button>
                <span className="spanothers">Game 2</span>
              </div>

              <div className="othersinfo">
                <button className="otherscontent"></button>
                <span className="spanothers">Game 3</span>
              </div>

              <div className="othersinfo">
                <button className="otherscontent"></button>
                <span className="spanothers">Game 4</span>
              </div>

              <div className="othersinfo">
                <button className="otherscontent"></button>
                <span className="spanothers">Game 5</span>
              </div>

              <div className="othersinfo">
                <button className="otherscontent"></button>
                <span className="spanothers">Game 6</span>
              </div>

            </div>

            <div className="divothersproducts">

              <div className="softhard">
                <div className="softhardbg">
                  <span className="spansofthard">{span8}</span>
                </div>
                <span className="softhardspan">{span9}</span>
                <div className="softhardajuste">
                  <p className="softhardinfo">{par10}</p>
                </div>

                <span className="softhardspan">{span10}</span>
                <div className="softhardbottom">
                  <p className="softhardinfobottom">{par11}</p>
                </div>
              </div>
              
            </div>

            <section id="parcerias" className="divclients">
              <div className="bgclients">
                <span className="clientsspan">{span11}</span>
              </div>

              <div className="clientsdisplay">
                <div className="partner">
                  <div className="partnerinfo"></div>
                </div>

                <div className="partner1">
                  <div className="partnerinfo"></div>
                </div>

                <div className="partner2">
                  <div className="partnerinfo"></div>
                </div>
              </div>

            </section>



            <div className="divteam">
              <div className="teambg">
                <span className="teamspan">{span12}</span>
              </div>

              <div className="divpeople">

                <div className="divpeoplerow0">
                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span>
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span>
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span>
                  </button>
                </div>

                <div className="divpeoplerow1">
                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}a</span>
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span>
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span> 
                  </button>
                </div>

                <div className="divpeoplerow2">
                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span> 
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span> 
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span> 
                  </button>
                </div>

                <div className="divpeoplerow3">
                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span> 
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture"></div>
                    <span className="username">{span13}</span>
                    <span className="userfunction">{span14}</span> 
                  </button>

                  <button className="display0"><a href=""></a>
                    <div className="picture11"></div>
                    <span className="username">{span29}</span>
                    <span className="userfunction">{span30}</span> 
                  </button>
                </div>

              </div>
                
            </div>

            <section id="contato" className="divcontact">
              <div className="contactbg">
                <span className="contactspan">{span31}</span>
              </div>

              <div className="contactcontent">
                <div className="github">

                <div className="divsocialcontact">
                  <button href="www.google.com" className="gitcontact"></button>
                  <span className="spandevcontact"><a className="link" href="https://github.com/PedroMendoncaBR">GitHub</a></span>
                </div>

                <div className="divsocialcontact">
                  <button className="linkedincontact"></button>
                  <span className="spandevcontact"><a className="link" href="https://www.linkedin.com/in/pedro-mendon%C3%A7a-3a13541a4/">Linkedin</a></span>
                </div>

                <div className="divsocialcontact">
                  <button className="facecontact"></button>
                  <span className="spandevcontact"><a className="link" href="https://www.facebook.com/Peedro.97">Facebook</a></span>
                </div>

                </div>
              </div>

              </section>

      </div>
            
  );
}