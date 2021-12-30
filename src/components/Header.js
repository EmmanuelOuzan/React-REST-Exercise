import SearchBox from './SearchBox'

export default function Header(props) {
    console.log(props);
    return <header className="NavBar">
        <h1>Countries</h1>
        <span className='countriesNumber'>({props.CN})</span>
        <SearchBox />
    </header>
}