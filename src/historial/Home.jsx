import '../estilos/Footer.css';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useRef } from 'react';

export const Home = () => {
  const mostrar = useRef();
  const link = useNavigate();
  return (
    <>
      <div className="Footer">
        <footer className="footer">
          <button onClick={() => { link("Historial")}} className="historial-link">Historial de cotizaciones</button>
        </footer>
      </div>
    </>
  );
}
export default Home;

