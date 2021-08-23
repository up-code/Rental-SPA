namespace Rental_SPA.Gestion {

    interface arriendoParameters {
        Items: TipoArriendoRow[]
    }

    export class TipoArriendoCard extends React.Component<arriendoParameters>{
        render(): React.ReactNode {
            return <>

            {
                    this.props.Items.map<React.ReactNode>((item, i) => {
                        return <div key={i} className="col-lg-3 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon">
                                <a href={"/ProductList/" + item.Id}>
                                    <img src={"/upload/" + item.Foto} className="rounded-circle" width="200px" height="200px" data-holder-rendered="true" alt={item.Tipo} />
                                    </a>
                            </div>
                            <h4 className="title">
                                <a href={"/ProductList/" + item.Id}>{item.Tipo}</a>
                        </h4>
                        <p className="description">

                        </p>
                    </div>
                }) }

           </>
        }
    }


}