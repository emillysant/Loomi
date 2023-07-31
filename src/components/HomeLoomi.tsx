// import homeBackgraound

function HomeLoomi() {
  return (
    <div>
      <div style={{ display: "flex", background: "#5B2DC4" }}>
        <div className="home-container-img" style={{flex: 2}}>
          <img
            className="people-home"
            src="/homebackground.png"
            alt="homeBackground"
          />
        </div>

        <div className="home-section-info center-column" style={{flex: 3}}>
          <div className="home-section-info-logo">
            <div className="home-info-logo">
              <img src="LoomiHomeText.svg" alt="texto"></img>
            </div>
            <p className="home-info-text">
              Iniciativa da Loomi, focada em desenvolver e capacitar pessoas em
              tecnologia e design, transformando a realidade, desenhando
              futuros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLoomi;
