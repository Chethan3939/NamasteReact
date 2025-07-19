import {useRouteError} from 'react-router-dom'

const Error = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops</h1>
            <h2>Something went wrong...!!</h2>
            <p>Error Code : {err.status}</p>
            <p>Error Message : {err.statusText}</p>
        </div>
    )
}

export default Error;