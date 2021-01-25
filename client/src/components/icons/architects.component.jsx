import "./architects.styles.css";
const architects = require("../../assets/architects.asset.json");

export default function Architects() {


    return (

        <div className="data-container">

            {/* {
                architects.map((data, id) => {
                    const { nickname, name, surname } = data
                    return (
                        <tr key={id} className="architect">
                            <th>{nickname}</th>
                            <th>{name}</th>
                            <th>{surname}</th>
                        </tr>
                    )
                })
            } */}

            <h4>Icons</h4>

                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                <h5>Coming soon</h5>

        </div>

    )
}