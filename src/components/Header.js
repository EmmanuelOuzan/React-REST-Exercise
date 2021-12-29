import Title from './Title'
import SearchBox from './SearchBox'
import CountriesNumber from './CountriesNumber'

export default function Header(props) {
    console.log(props);
    return <header className="NavBar">
        <Title />
        { <CountriesNumber countriesNumber={props.countriesNumber}   /> /*// CountriesNumber={getCountriesTotal} */}
        <SearchBox />
    </header>
}