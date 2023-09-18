import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pokemon from './pages/Pokemon'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PokemonsList from './pages/PokemonsList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/pokemons" element={<PokemonsList />} />
        <Route path="/pokemons/:name" element={<Pokemon />}/>
        <Route path="*" element={<Navigate to="/pokemons" />}/>
      </Routes>
    </BrowserRouter>
);
