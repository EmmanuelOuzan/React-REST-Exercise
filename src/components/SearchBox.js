import { searchContext } from "../App";
import { useContext } from 'react'

export default function SearchBox() {
    const v = useContext(searchContext)
    return (<input type="text" placeholder="Type Country name" onChange={e => v(e.target.value)}>
    </input>);
}


// function Change() {
//     const [text, setText] = useState('Empty')

//     function update(e) {
//         setText(e.target.value)
//     }
//     return <div>
//         <h3>{text}</h3>
//         <input onChange={update}></input>
//     </div>
// }
