import { Route, useParams } from 'react-router-dom';
import {url1, repo, version} from './Helpers';

export default function Redirect() {
    const {packageName} = useParams<{packageName?: string}>();
    const {mode} = useParams<{mode?: string}>();
    const sgURL = mode==='repo' ? url1+packageName+repo : url1+packageName+version;
    // Redirect to Sourcegraph using package name passed in param
    return <Route component={() => {window.location.href = sgURL; return null }} />;

}
