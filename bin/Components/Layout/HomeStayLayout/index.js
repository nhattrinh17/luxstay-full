import Header from '../Component/Header/Header';
import SubFooter from './SubFooter/SubFooter';

function SubLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
            <SubFooter />
        </>
    );
}

export default SubLayout;
