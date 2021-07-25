namespace Rental_SPA.Sitio{
    interface OurClientsParameters {
        Items: NuestrosClientesRow[]
    }

    export class NuestrosClientesCard extends React.Component<OurClientsParameters>{
        render(): React.ReactNode {
            return (<>
                <div className="owl-carousel" id="deals-discounts-carousel">
                {this.props.Items.map<React.ReactNode>((item, i) => {
                    return (<div key={i} className="col-md-6 align-items-center text-align-center">
                       
                            <img src={"/upload/" + item.Logo} className="img-fluid" title={item.Nombre} />
                       
                    </div>);
                    })
                }
                </div> </>);
               
        }

        componentDidMount() {
            //============= Deals and Discount Carousel =====

            $("#deals-discounts-carousel").owlCarousel({
                autoplay: true,
                autoplayTimeout: 2000,
                margin: 0,
                nav: false,
                smartSpeed: 1000,
                dots: false,
                autoplayHoverPause: true,
                loop: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 4,
                    }
                }
            });
        }
    }
        
        
}