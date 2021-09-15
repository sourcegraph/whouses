import { Route, useParams } from 'react-router-dom';

export default function Redirect() {
    const {packageName} = useParams<{packageName?: string}>();
    const sgURL = 'https://sourcegraph.com/search?q=context:global+%5C%22'+packageName+'%5C":%5Cs%5C"%5B0-9a-zA-Z-~%5E*.%2B><%3D%7C%5Cs%5D%2B%5C"+file:%5Epackage%5C.json&patternType=regexp';
    // Redirect to Sourcegraph using package name passed in param
    return <Route component={() => {window.location.href = sgURL; return null }} />;

}
