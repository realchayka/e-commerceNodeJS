import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes.js";
import {Context} from "../App.jsx";




const AppRouter = () => {
    const {user} = useContext(Context)
    const {device} = useContext(Context)
    console.log(device)
    console.log(user)
    return (
           <Routes>
               {user.isAuth && authRoutes.map(({path, Component}) =>
                   <Route key={path} path={path} element={<Component />} exact/>
               )}
               {publicRoutes.map(({path, Component}) =>
                   <Route key={path} path={path} element={<Component />} exact/>
               )}
              <Route path='*' element={<Navigate to='/'/>}/>
           </Routes>
    );
};

export default AppRouter;