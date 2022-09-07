import Header from '../Component/Header/Header';
import Footer from './Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
