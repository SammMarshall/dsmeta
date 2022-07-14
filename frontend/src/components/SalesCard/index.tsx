import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-conteiner">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-conteiner">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#345</td>
                            <td className="show576">01/05/2021</td>
                            <td>Michal Jackson</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#346</td>
                            <td className="show576">07/01/2021</td>
                            <td>Bob Marely</td>
                            <td className="show992">25</td>
                            <td className="show992">16</td>
                            <td>R$ 75300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#347</td>
                            <td className="show576">21/02/2021</td>
                            <td>Pablo Escobar</td>
                            <td className="show992">9</td>
                            <td className="show992">21</td>
                            <td>R$ 10300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default SalesCard