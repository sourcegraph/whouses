import { Route, useParams } from 'react-router-dom';
import {url1, url2} from './Helpers';

export default function Redirect() {
    const {packageName} = useParams<{packageName?: string}>();
    const sgURL = url1+packageName+url2;
    // Redirect to Sourcegraph using package name passed in param
    return <Route component={() => {window.location.href = sgURL; return null }} />;

}
