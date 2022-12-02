import '../estilos/Footer.css';
import { BrowserRouter, useNavigate } from "react-router-dom";


export const Home = () => {
  const link = useNavigate();

  const Ingreso = () =>{
    link("Historial");
    return  false;
  }

  return (
    <>
      <div className="Footer">
        <footer className="footer">
          <button onClick={Ingreso} className="historial-link">Historial de cotizaciones</button>
        </footer>
      </div>
    </>
  );
}
export default Home;

