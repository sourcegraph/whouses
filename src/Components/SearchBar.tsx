import {useState} from 'react'
import {url1, version} from './Helpers';

export default function SearchBar() {
    const [npmPackage, setNpmPackage] = useState("");
    const sgURL = url1+npmPackage+version;
    // Submit on Enter
    const enterPressed = (e:any) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            window.location.href = sgURL; 
            return null;
        }
    }
    const buttonClicked = () =>{
        if(npmPackage){
            window.location.href = sgURL;
            return null;
        }
    }

    return (
        <div className='search'>
            <p>Find out what awesome you've started with <a className='header-link' href='https://sourcegraph.com/search'>Sourcegraph</a>...</p>
            <input type='text' 
                autoFocus
                className='bar'
                placeholder='enter npm package name here'
                onChange={(e) => {
                setNpmPackage(e.target.value)}}
                onKeyDown={(e) => enterPressed(e)}
            /> 
            <button 
                className='btn' 
                type='submit' 
                onClick={buttonClicked}
            >Find Out!</button>
        </div>

    );
}
