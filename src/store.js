import { configureStore } from '@reduxjs/toolkit';
import autenticacionReductor from './slices/autenticacion';

const tienda = configureStore({
  reducer: {
    autenticacion: autenticacionReductor
  }
});

export default tienda;