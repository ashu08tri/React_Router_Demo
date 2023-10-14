import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from './PageContent';

const ErrorPage = () => {
    const error = useRouteError()
    let title = 'Error Occured!';
    let message = 'Something Went Wrong';

    if(error.status === 500){
        message = error.data.message;
    }

    if(error.status === 404){
        title = 'Page Not Found';
        message = 'Could not find resource or page';
    }

    return (
        <>
        <MainNavigation />
        <PageContent title={title}>{message}</PageContent>
        </>
    )
}

export default ErrorPage; 