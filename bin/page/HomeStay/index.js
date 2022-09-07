import { useLocation } from 'react-router-dom';

function HomeStay() {
    const params = useLocation();
    console.log(params);

    return <h2>Home Stay</h2>;
}

export default HomeStay;
