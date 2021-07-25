namespace Rental_SPA.Sitio {

    interface sliderParameter {
        Items: SliderRow[]
    }

    export class SliderCard extends React.Component<sliderParameter>{
        render(): React.ReactNode {
            return (<>
                <div className="hero-container">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                        <div className="carousel-inner" role="listbox">
                            {this.props.Items.map<React.ReactNode>((item, i) => {
                                return <div key={i} className={i == 0 ? 'carousel-item active' : 'carousel-item'} style={{ backgroundImage: 'url("/upload/' + item.Foto + '")' }}>
                                    <div className="carousel-container">
                                        <div className="carousel-content container">
                                          
                                                <h2 className="animate__animated animate__fadeInDown">{item.Titulo}</h2>
                                                <p dangerouslySetInnerHTML={{ __html: item.SubTitulo }} className="animate__animated animate__fadeInUp"></p>
                                           
                                        </div>
                                    </div>
                                </div>
                            })}                            

                        </div>

                        <a className="carousel-control-prev"
                            href="#heroCarousel"
                            role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon icofont-rounded-left"
                                aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next"
                            href="#heroCarousel"
                            role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon icofont-rounded-right"
                                aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </>);
        }
       
        componentDidMount() {
            $("#heroCarousel").carousel({
                interval: 3000,
                autoplay: true
            });

        }
    }

}