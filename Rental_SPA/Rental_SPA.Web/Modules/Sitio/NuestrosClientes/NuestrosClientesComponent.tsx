namespace Rental_SPA.Sitio{
    interface OurClientsParameters {
        Items: NuestrosClientesRow[]
    }

    export class NuestrosClientesCard extends React.Component<OurClientsParameters>{
        render(): React.ReactNode {
            return (<>
                {this.props.Items.map<React.ReactNode>((item, i) => {
                    return (<div key={i} className="col-lg-12 col-md-4 col-6 d-flex">
                        <a href={item.Url}><img src={"/upload/"+ item.Logo} className="img-fluid" title={ item.Nombre} /></a>
                    </div>);
                    })
                }
                </>);
        }
    }
        
        
}