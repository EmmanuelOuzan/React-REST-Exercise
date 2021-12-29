
export default function Country(props) {
    return (
        <div className="CountryItem">
            <img src={props.data.flags.png}></img>
            <li>{props.data.name.common}</li>
        </div>
    )
}