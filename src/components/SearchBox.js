//import { useState } from 'react' 
//  onChange={}
export default function SearchBox(props) {
    return (<input type="text" placeholder="Type Country name" onChange={props.func}>
    </input>
    
    );
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
