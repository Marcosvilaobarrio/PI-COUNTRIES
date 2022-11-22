
import React from "react";
import App from './App';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import CreateActivity from "./components/CreateActivity/CreateActivity";

// describe('Componente formulario Activity', () => {
//   it('Tiene un campo para ingresar el nombre', async () =>{
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <CreateActivity/>
//         </BrowserRouter>
//       </Provider>
//     )
//     expect(screen.getByText(/nombre/ig)).toBeInTheDocument()
//   });
// })
