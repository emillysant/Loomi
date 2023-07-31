// import Button from "./common/button";

function BancoDeTalentos() {

    const clickbutton = () => {
         
    }
  return (
    <div className="bancoDeTalentos-container" style={{ display: "flex" }}>
      <div style={{ flex: 3 }}>
        <div style={{ margin: "7rem 5rem", height: '50%' }}>
          <div style={{ margin: '2rem 0px'}}>
            <img src="/logo-loomi.png"/>
          </div>
          <div style={{marginBottom: '1rem'}}>
            A Loomi é uma aceleradora digital de ponta a ponta com sede no
            Brasil. Da estratégia de tecnologia ao design e inovação, a Loomi
            tem uma abordagem 3D (Design, Develop & Deliver), gerando parcerias
            de longo prazo, criamos soluções desafiadoras e inovadoras que
            capacitam nossos parceiros e clientes a enfrentar a era exponencial
            e digital.
          </div>
          <div style={{width: '100px', marginBottom: '1rem'}}>BANCO DE TALENTOS AFIRMATIVO</div>
          <div style={{marginBottom: '1rem'}}>
            Visando impulsionar oportunidades para pessoas de grupos
            minorizados, A Loomi está lançando seu Banco de Talentos Afirmativo.
            Quando abrirem vagas olharemos primeiro para as pessoas candidatas
            desse banco!
          </div>
          {/* <div>
            <Button label="Inscreva-se" handleClick={clickbutton}> </Button>
          </div> */}
        </div>
      </div>
      <div style={{ flex: 2, textAlign: "end" }}>
        <img
          style={{ height: "100vh", width: '100%' }}
          src="bancoTalento-people.png"
          alt="bancoTalento-people"
        />
      </div>
    </div>
  );
}

export default BancoDeTalentos;
