import { Routes, Route } from 'react-router-dom';

import { Movies } from '../pages/Movies';
import { NewMovies } from '../pages/NewMovies';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/register' element={<NewMovies />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    );
}