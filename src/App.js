import React, { useEffect, Fragment } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { DefaultLayout } from './Components/Layout';
import { publicRoutes } from './routes';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/') {
            console.log(window.location.pathname);
            navigate('/vi');
        }
    }, [navigate]);

    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
