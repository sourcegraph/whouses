import {useState} from 'react'

export default function SearchBar() {
    const [npmPackage, setNpmPackage] = useState("");
    const sgURL = 'https://sourcegraph.com/search?q=context:global+%5C%22'+npmPackage+'%5C":%5Cs%5C"%5B0-9a-zA-Z-~%5E*.%2B><%3D%7C%5Cs%5D%2B%5C"+file:%5Epackage%5C.json&patternType=regexp';


    return (
        <div className='search'>
            <p>Find out what awesome you've started with Sourcegraph...</p>
            <input type='text' 
                className='bar'
                placeholder='enter npm package name here'
                onChange={(e) => {
                setNpmPackage(e.target.value)}}
            /> 
            <a href={sgURL}><button className='btn' type='submit'>Find Out!</button></a>
        </div>

    );
}
