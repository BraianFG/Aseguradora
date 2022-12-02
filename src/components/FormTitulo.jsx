import '../estilos/Form.css';
import Peticion from './Peticion';

function FormTitulo() {
  return (
    <main className='card'>
      <h3 className='subtitulo'>Completa los datos solicitados</h3>
      <div className='container'>
       <Peticion />
      </div>
    </main>
  );
}
export default FormTitulo;