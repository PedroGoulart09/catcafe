import 'bootstrap/dist/css/bootstrap.min.css';
import catImage from '../../assets/Image.png';
import logoImage from '../../assets/Logo.png';
import '../../App.css';
import FormReservation from './FormReservation';

function Reservation() {
  return (
    <div style={{ backgroundColor: '#ffeada' }} className="container-fluid bg-custom d-flex flex-column justify-content-between align-items-center position-relative p-4">
      <div className="d-md-none d-flex justify-content-center align-items-center mb-3">
        <img src={logoImage} alt="Logotipo" className="img-fluid" />
      </div>
      <div className="row w-100 d-flex justify-content-between align-items-center">
        <div className="col-md-6 text-md-start text-center">
          <p><a className="link-offset-2 link-underline link-underline-opacity-0 text-color2" href="/">⬅Voltar</a></p>
          <h1 className="text-color">
            Preencha os dados abertos <br /> para fazer sua <span style={{ color: '#ff8a00' }}>reserva</span>
          </h1>
          <FormReservation />

        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <img src={catImage} alt="Gato sendo segurado" className="img-fluid rounded" />
        </div>
      </div>

      <div className="d-none d-md-flex justify-content-center align-items-center position-absolute" style={{ top: 0, right: 0, width: '300px', height: '200px', backgroundColor: '#4E342E', borderBottomLeftRadius: '150px' }}>
        <img src={logoImage} alt="Logotipo" className="img-fluid" style={{ width: '150px' }} />
      </div>


    </div>
  );
}

export default Reservation;
