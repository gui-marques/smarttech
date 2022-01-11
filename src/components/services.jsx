export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Outros Serviços</h2>
          <p>
          A EVOLUTION tem sua trajetória marcada pelo espírito empreendedor de seus diretores e pela dedicação de seus colaboradores, fatores fundamentais que permitiram à empresa conquistar confiança e respeito no seu segmento.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
