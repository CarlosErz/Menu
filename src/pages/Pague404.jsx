import plato from '../assets/Plato404.svg'
import './style.css';

export function Pague404() {
  return (
    <>
      <div className="Notpague">
        <div className="Notpague_content">
        <h1 className="NotPague_title" data-text="404">404</h1>

          <img src={plato} alt="" className="NotPague_img" />
          <h2 className="NotPague_subtitle">Página no encontrada</h2>
        </div>

      </div>
    </>
  )
}