import { Route, useParams } from 'react-router-dom';

export default function Redirect() {
    const {packageName} = useParams<{packageName?: string}>();
    const sgURL = 'https://sourcegraph.com/search?q=context:global+%5C%22'+packageName+'%5C%22:%5Cs%5C%22%28%5B*%5D%7C%5B%5C%5E4%5D%5B.%5Cd%5D%2B%29%5C%22+file:%5Epackage%5C.json+select:repo+&patternType=regexp';
    // Redirect to Sourcegraph using package name passed in param
    return <Route component={() => {window.location.href = sgURL; return null }} />;

}
