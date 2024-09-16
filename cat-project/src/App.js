import 'bootstrap/dist/css/bootstrap.min.css';
import catImage from './assets/Image 1.png'; 
import logoImage from './assets/Logo.png'; 
import './App.css';
import { useNavigate } from "react-router-dom";

function App() {
  const history = useNavigate();
  return (
    <div style={{ backgroundColor: '#ffeada' }} className="container-fluid bg-custom d-flex flex-column justify-content-between align-items-center position-relative p-4">
      
      <div className="d-md-none d-flex justify-content-center align-items-center mb-3">
        <img src={logoImage} alt="Logotipo" className="img-fluid"  />
      </div>

      <div className="row w-100 d-flex justify-content-between align-items-center">
        <div className="col-md-6 text-md-start text-center">
          <span className="text-color">1º CAT CAFÉ DE UBERLÂNDIA</span>
          <h1 className="text-color">
            Café que faz <br /> o coração <br /><span className="text-color2">ronronar!</span>
          </h1>

          <p className="text-color">
            Aqui, você pode saborear um café delicioso, explorar uma<br />
            seleção de livros e, ao mesmo tempo, ajudar a cuidar dos<br />
            nossos felinos, promovendo adoções e dando uma nova<br />
            chance a esses gatinhos.
          </p>

          <h5 className="text-color">
            Quem sabe, você não encontra um amigo especial para<br />
            chamar de seu?
          </h5>

          <button 
          type="button" 
          className="btn btn-lg mt-4 rounded-5" 
          style={{ backgroundColor: '#ff8a00', color: 'black' }}
          onClick={() => {
            history('/reservation')
          }}
          >
            Faça uma reserva
          </button>

          <div className="d-flex mt-5 gap-5">
            <div>
              <h6 className="text-color">Liga para gente</h6>
              <h6 className="text-color">📞 34 9 9999 9999</h6>
            </div>
            <div>
              <h6 className="text-color">Visita a gente</h6>
              <h6 className="text-color">📍 Av.Landscape 3512</h6>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <img src={catImage} alt="Gato sendo segurado" className="img-fluid rounded" />
        </div>
      </div>

      <div className="d-none d-md-flex justify-content-center align-items-center position-absolute" style={{ top: 0, right: 0, width: '300px', height: '200px', backgroundColor: '#4E342E', borderBottomLeftRadius: '150px' }}>
        <img src={logoImage} alt="Logotipo" className="img-fluid" style={{ width: '150px' }} />
      </div>

      <div className="d-none d-md-flex justify-content-center align-items-center position-absolute" style={{ bottom: 0, left: 0, width: '300px', height: '200px', backgroundColor: '#4E342E', clipPath: 'ellipse(90% 50% at 0% 100%)' }}>
      </div>
    </div>
  );
}

export default App;
