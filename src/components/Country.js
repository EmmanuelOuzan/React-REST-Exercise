
export default function Country(props) {
    return (
        <div className="CountryItem">
            <img src={props.data.flags.png}></img>
            <li className="CountryName">{props.data.name.common} - {props.data.capital}</li>
            <li className="region">{props.data.region}</li>
        </div>
    )
}