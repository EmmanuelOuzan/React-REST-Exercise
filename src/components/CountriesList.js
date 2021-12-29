import axios from "axios"
import { useEffect, useState } from "react";
import Country from "./Country";
import CountriesNumber from "./CountriesNumber";
import Loader from "react-loader-spinner";
export default function CountriesList(props) {

    const [countiresList, setCountriesList] = useState([]) // can I?

    useEffect(getCountires, [])

    function getCountires() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(result => {
                setCountriesList(result.data)
                console.log(Object.keys(result.data).length);
            })
    }

    return (

        <div>
            <Loader
                type="Bars"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={1500} 
            />
            <CountriesNumber countires_number={Object.keys(countiresList).length} />
            <ul className="cList">
                {countiresList.map(c => {
                    return <Country key={c.cca2} data={c} />
                })
                }
            </ul>
        </div>

    );
} 