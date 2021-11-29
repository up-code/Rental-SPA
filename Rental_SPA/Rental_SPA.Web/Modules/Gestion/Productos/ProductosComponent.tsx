namespace Rental_SPA.Gestion {
    interface productosParameters {
        Items: ProductosRow[]
    }

    export class ProductosCard extends React.Component<productosParameters>{
        render(): React.ReactNode {
            const formatter = new Intl.NumberFormat('en-ES', {
                style: 'currency',
                currency: 'CLP',
                minimumFractionDigits: 0
            })
            return (<>
                {this.props.Items.map<React.ReactNode>((item, i) => <div key={i} className="col-md-4">
                    <a href={"/ProductDetail/" + item.Id}>
                        <div className="profile-card-6">
                            <img src={"/upload/" + item.Foto} className="img img-responsive" height="400" />
                            <div className="profile-name">{item.Nombre}</div>

                            <div className="profile-overview">
                                <div className="profile-overview">
                                    <div className="row text-center justify-content-center">
                                        <div className="col-xs-4 m-2">
                                            <h4>{item.Cantidad}</h4>
                                            <p>Stock</p>
                                        </div>
                                        <div className="col-xs-4 m-2">
                                            <h4>{formatter.format(item.Precio).replace("CLP", "$").replace(",", ".")}</h4>
                                            <p>Arriendo Diario</p>
                                        </div>
                                        <div className="col-xs-4 m-2">
                                            <h4>{formatter.format(item.Garantia).replace("CLP", "$").replace(",", ".")}</h4>
                                            <p>Garantía</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>)}
            </>);
        }
    }
}