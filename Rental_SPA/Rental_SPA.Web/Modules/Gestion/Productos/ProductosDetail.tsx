﻿namespace Rental_SPA.Gestion {
    interface productoParameters {
        Producto: ProductosRow
    }

    interface tipoArriendoParameters {
        IdTipoArriendo: number

    }

    const TipoArriendo: React.FC<tipoArriendoParameters> = ({ IdTipoArriendo }) => {
        const [Tipos, setTipos] = React.useState<TipoArriendoRow[]>([]);      

        React.useEffect(() => {
            Rental_SPA.Gestion.TipoArriendoService.List({ EqualityFilter: { "Id": IdTipoArriendo } }, resp => {
                setTipos(resp.Entities);
            })
        }, []);


        //const [Adicionales, setAdicionales] = React.useState<TiposAdicionalesRow[]>([]);
        //React.useEffect(() => {
        //    Rental_SPA.Gestion.TiposAdicionalesService.List({ EqualityFilter: { "Id": IdDetalle} }, resp => {
        //        setAdicionales(resp.Entities)
        //    })
        //},[]);

        return <> {Tipos.map((item, i) => {
            return <p key={i}>{ item.Nombre}</p>
        })}</>
    }


    interface IdDetalle {
        idDetalle: number
    }
    export class ProductoDetalle extends React.Component<productoParameters>{

        //private detalles: IdDetalle[];
        render(): React.ReactNode {

            const formatter = new Intl.NumberFormat('en-ES', {
                style: 'currency',
                currency: 'CLP',
                minimumFractionDigits: 0
            })
            return (<>
                <section className="breadcrumbs-custom-inset">
                    <div className="breadcrumbs-custom context-dark bg-overlay-60">
                        <div className="container">
                            <h2 className="breadcrumbs-custom-title">{this.props.Producto.Nombre}</h2>
                            <ul className="breadcrumbs-custom-path">
                                <li><a href="/">Home</a></li>
                                <li className="active">{this.props.Producto.Nombre}</li>
                            </ul>
                        </div>
                        <div className="box-position" style={{ backgroundImage: 'url("/upload/' + this.props.Producto.Foto + '")'}}></div>
                    </div>
                </section>

                <section className="section section-sm section-first bg-default text-md-left">
                    <div className="container">
                        <div className="row row-50 justify-content-center align-items-xl-center">

                            <div className="col-md-10 col-lg-12 col-xl-6">
                                <h1 className="text-spacing-25 font-weight-normal title-opacity-9"></h1>

                                <div className="tabs-custom tabs-horizontal tabs-line" id="tabs-4">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tabs-4-1">
                                            <h5 dangerouslySetInnerHTML={{ __html: this.props.Producto.Descripcion }}>{ }</h5>

                                        </div>
                                       

                                    </div>
                                   
                                </div>
                            </div>

                            
                        </div>
                        <div className="row">
                            
                              <TipoArriendo IdTipoArriendo={this.props.Producto.IdTipoArriendo}/>

                      
                        </div>
                        <div className="row mt-5 text-center">

                            <div className="col-sm">
                                <h3>{this.props.Producto.Cantidad}</h3>
                                <p>Cantidad</p>
                            </div>
                            <div className="col-sm">
                                <h3>{formatter.format(this.props.Producto.Precio).replace("CLP", "$").replace(",",".")}</h3>
                                <p>Valor Arriendo</p>
                            </div>
                            <div className="col-sm">
                                <h3>{formatter.format(this.props.Producto.Garantia).replace("CLP", "$").replace(",",".")}</h3>
                                <p>Garantía</p>
                            </div>
                        </div>
                    </div>
                </section>


            </>);
        }
    }
}