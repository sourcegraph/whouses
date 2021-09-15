import {useState} from 'react'
import {url1, url2} from './Helpers';

export default function SearchBar() {
    const [npmPackage, setNpmPackage] = useState("");
    const sgURL = url1+npmPackage+url2;
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
            <p>Find out what awesome you've started with Sourcegraph...</p>
            <input type='text' 
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
