import React, { useState } from 'react';
import SelectorNPO from './SelectorNPO';
import soldadoLuchadorStatsKt from './images/soldado_luchador_stats_KT.jpg';
import luchadorDuroStatsKt from './images/luchador_duro_stats_KT.jpg';
import luchadorPesadoStatsKt from './images/luchador_pesado_stats_KT.jpg';
import soldadoTiradorStatsKt from './images/soldado_tirador_stats_KT.jpg';
import guerreroTiradorStatsKt from './images/guerrero_tirador_stats_KT.jpg';
import tiradorPesadoStatsKt from './images/tirador_pesado_stats_KT.jpg';

const ListaNPO = () => {
  const [npoList, setNpoList] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascendente'); // Orden por defecto
  const [sortBy, setSortBy] = useState('heridas'); // Ordenar por heridas por defecto
  const [selectedImage, setSelectedImage] = useState(null); // Para almacenar la imagen seleccionada

  const handleAddNPO = (npo) => {
    // Añadir un campo ID único al NPO
    const newNpo = { ...npo, id: Date.now(), fechaEntrada: Date.now() };
    setNpoList([...npoList, newNpo]);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  // Función para ordenar la lista de NPOs
  const sortedNpoList = [...npoList].sort((a, b) => {
    if (sortBy === 'heridas') {
      // Ordenar por heridas
      if (sortOrder === 'ascendente') {
        return a.heridas - b.heridas;
      } else {
        return b.heridas - a.heridas;
      }
    } else if (sortBy === 'fechaEntrada') {
      // Ordenar por fecha de entrada
      if (sortOrder === 'ascendente') {
        return a.fechaEntrada - b.fechaEntrada;
      } else {
        return b.fechaEntrada - a.fechaEntrada;
      }
    }
    return 0; // En caso de que no se reconozca el criterio
  });

  const totalHeridas = sortedNpoList.reduce((total, npo) => total + npo.heridas, 0);

  // Función para manejar el clic en el botón "Stats"
  const handleStatsClick = (tipo) => {
    // Asignar la imagen correspondiente según el tipo
    switch (tipo) {
      case 'Soldado Luchador':
        setSelectedImage(soldadoLuchadorStatsKt);
        break;
      case 'Luchador Duro':
        setSelectedImage(luchadorDuroStatsKt);
        break;
      case 'Luchador Pesado':
        setSelectedImage(luchadorPesadoStatsKt);
        break;
      case 'Soldado Tirador':
        setSelectedImage(soldadoTiradorStatsKt);
        break;
      case 'Guerrero Tirador':
        setSelectedImage(guerreroTiradorStatsKt);
        break;
      case 'Tirador Pesado':
        setSelectedImage(tiradorPesadoStatsKt);
        break;
      default:
        setSelectedImage(null);
        break;
    }
  };

  // Función para cerrar la imagen
  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  // Función para eliminar una unidad de la lista usando el ID
  const handleDeleteNPO = (id) => {
    // Filtrar la lista original para eliminar la unidad con el ID proporcionado
    const newList = npoList.filter((npo) => npo.id !== id);
    setNpoList(newList);
  };

  return (
    <div>
      <SelectorNPO onAdd={handleAddNPO} />
  
      <h4>Total de Heridas: {totalHeridas}</h4>
  
      {/* Selector para elegir el criterio de orden */}
      <div>
        <label htmlFor="sortBy">Ordenar por:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
          <option value="heridas">Heridas</option>
          <option value="fechaEntrada">Fecha de Entrada</option>
        </select>
      </div>
      
      {/* Selector para cambiar el orden */}
      <div>
        <label htmlFor="sortOrder">Ordenar por:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>
     
      <h3>Lista de Unidades Seleccionadas</h3>
      <ul className="npo-list">
        {sortedNpoList.map((npo) => (
          <li
            className="npo-item"
            key={npo.id}
          >
            {npo.image && <img src={npo.image} alt="NPO Image" className="image" />}
            {npo.tipo} - {npo.heridas} heridas
            <button className="stats-button" onClick={() => handleStatsClick(npo.tipo)}>Stats</button>
            <button className="delete-button" onClick={() => handleDeleteNPO(npo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
  
      {/* Si se ha seleccionado una imagen, mostrarla a pantalla completa */}
      {selectedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <img src={selectedImage} alt="Stat Image" className="image" />
          <button className="close-button" onClick={handleCloseImage}>Cerrar</button>
        </div>
      )}
    </div>
  );  
};



export default ListaNPO;
