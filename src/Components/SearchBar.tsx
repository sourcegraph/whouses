import {useState} from 'react'

export default function SearchBar() {
    const [npmPackage, setNpmPackage] = useState("");
    const sgURL = 'https://sourcegraph.com/search?q=context:global+%5C%22'+npmPackage+'%5C%22:%5Cs%5C%22%28%5B*%5D%7C%5B%5C%5E4%5D%5B.%5Cd%5D%2B%29%5C%22+file:%5Epackage%5C.json+select:repo+&patternType=regexp';

    return (
        <div className='search'>
            <p>Find out which projects use your npm package</p>
            <input type='text' 
                className='bar'
                onChange={(e) => {
                setNpmPackage(e.target.value)}}
            /> 
            <a href={sgURL}><button className='btn' type='submit'>Find Out!</button></a>
        </div>

    );
}
