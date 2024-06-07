import { createSlice } from '@reduxjs/toolkit';

const autenticacionSlice = createSlice({
  name: 'autenticacion',
  initialState: {
    autenticado: false
  },
  reducers: {
    iniciarSesion: (estado) => {
      estado.autenticado = true;
    },
    cerrarSesion: (estado) => {
      estado.autenticado = false;
    }
  }
});

export const { iniciarSesion, cerrarSesion } = autenticacionSlice.actions;
export default autenticacionSlice.reducer;
