import {lazy} from 'react';

export const Home =lazy(()=> import('../pages/home'));
export const Detection =lazy(()=> import('../pages/detection'));
export const Register = lazy(()=> import('../pages/home/Register'));
export const NotFound = lazy(()=> import('../pages/notFound'))
