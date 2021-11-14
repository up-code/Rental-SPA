namespace Rental_SPA.Sitio {

    interface nosotrosParameters {
        Items: NosotrosRow[]
    }

    const HistoriaCard: React.SFC = ({ }) => {

        const [Tabs, setTabs] = React.useState<HistoriaRow[]>([]);

        React.useEffect(() => {
            Rental_SPA.Sitio.HistoriaService.List({}, resp => { setTabs(resp.Entities); })
        }, []);

        return (<div className="tabs-custom tabs-horizontal tabs-line tabs-line-big tabs-line-style-2 text-center text-md-left" id="tabs-7">
            <ul className="nav nav-tabs mt-3">
                {Tabs.map((item, i) => <li key={item.Id} className="nav-item" role="presentation"><a className={"nav-link " + (i == 0 ? "active" : "")} href={"#tabs-7-" + i} data-toggle="tab">{item.Titulo}</a></li>)}
            </ul>
            <div className="tab-content">
                {Tabs.map((item, i) =>
                    <div key={i} className={"tab-pane fade " + (i == 0 ? "show active" : "")} id={"tabs-7-" + i}>
                        <p className="company-descriptionc text-justify" dangerouslySetInnerHTML={{ __html: item.Body }}>{ }</p>
                    </div>
                )}
            </div>
        </div>);
    }

    export class NosotrosCard extends React.Component<nosotrosParameters>{

        render(): React.ReactNode {
            return (
                <div className="container">
                    {this.props.Items.map<React.ReactNode>((item, i) =>
                        <div className="row no-gutters" key={item.Id}>

                            <div className="col-lg-12 ">
                                <div className="section-title m-2">
                                    <h2>{item.Titulo}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: item.Body }}>{ }</p>
                                </div>

                            </div>
                            <div className="col-md-6 video-box">
                                <img src={"/upload/" + item.Foto} width="600" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 pl-4">
                                <HistoriaCard />
                            </div>

                            <div className="icon-box m-2" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className={"bx " + item.Icono}></i></div>

                                <p className="description" dangerouslySetInnerHTML={{ __html: item.Comtario }}>{ }</p>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    }
}