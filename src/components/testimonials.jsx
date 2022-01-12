export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>O que os clientes dizem sobre nós?</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                <div className='testimonial'>
                  <div className='testimonial-image'>
                    {' '}
                    <img src={d.img} alt='' />{' '}
                  </div>
                  <div className='testimonial-content'>
                    <p>"{d.text}"</p>
                    <div className='testimonial-meta'> - {d.name} </div>
                    <div className="iconsClientes">

                      Visite o cliente: {' '}


                      <a href={d.instacliente} target='_blank' rel="noreferrer">
                        <i className={d.iconInsta} color=" blue"></i>
                      </a>

                      <a href={d.facecliente} target='_blank' rel="noreferrer">
                        <i className={d.iconFace} ></i>
                      </a>




                    </div>


                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div >
  )
}
