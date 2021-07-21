namespace Rental_SPA.Sitio{
    interface OurClientsParameters {
        Items: NuestrosClientesRow[]
    }

    export class NuestrosClientesCard extends React.Component<OurClientsParameters>{
        render(): React.ReactNode {
            return (<>
                {this.props.Items.map<React.ReactNode>((item, i) => {
                    return (<div key={i} className="col-md-3 align-items-center justify-content-center">
                       
                            <img src={"/upload/" + item.Logo} className="img-fluid" title={item.Nombre} />
                       
                    </div>);
                    })
                }
                </>);
        }
    }
        
        
}