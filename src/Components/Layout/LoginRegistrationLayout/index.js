import LoginRegistrantionHeader from './LoginRegistrantionHeader/LoginRegistrantionHeader';
import SubFooter from './SubFooter/SubFooter';

function LoginRegistrationLayout({ children }) {
    return (
        <>
            <LoginRegistrantionHeader />
            <div className="connent">{children}</div>
            <SubFooter />
        </>
    );
}

export default LoginRegistrationLayout;
