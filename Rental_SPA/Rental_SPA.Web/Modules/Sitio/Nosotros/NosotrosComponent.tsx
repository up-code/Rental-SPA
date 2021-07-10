namespace Rental_SPA.Sitio {

    interface nosotrosParameters {
        Items: NosotrosRow[]
    }


    export class NosotrosCard extends React.Component<nosotrosParameters>{
        render(): React.ReactNode {
            return <>
                <div className="container">
                    {this.props.Items.map<React.ReactNode>((item, i) => {
                       return <div className="row no-gutters" key={i}>
                            <div className="col-lg-6 video-box">
                                <img src={"/upload/" + item.Foto} width="600" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
                                <div className="section-title m-2">
                                    <h2>{item.Titulo}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: item.Body }}>{ }</p>
                                </div>

                               <div className="icon-box m-2" data-aos="fade-up" data-aos-delay="100">
                                   <div className="icon"><i className={"bx " + item.Icono}></i></div>

                                   <p className="description" dangerouslySetInnerHTML={{ __html: item.Comtario }}>{}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </>
        }
    }
}