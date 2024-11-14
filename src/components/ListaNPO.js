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
  const [sortOrder, setSortOrder] = useState('descendente'); // Orden por defecto
  const [sortBy, setSortBy] = useState('fechaEntrada'); // Ordenar por defecto
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
  const totalNPOs = sortedNpoList.reduce((total, npo) => ++total, 0);

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

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <div>
          <h3>Lista de NPOs</h3>
          <label style={{ display: 'block' }}>Total de Heridas: {totalHeridas}</label>
          <label style={{ display: 'block' }}>Total de NPOs: {totalNPOs}</label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '55px'}}>
          {/* Selector para elegir el criterio de orden */}
          <div>
            <label htmlFor="sortBy">Ordenar por:</label>
            <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
              <option value="fechaEntrada">Fecha</option>
              <option value="heridas">Heridas</option>
            </select>
          </div>
          
          {/* Selector para cambiar el orden */}
          <div>
            <label htmlFor="sortOrder">Ordenar por:</label>
            <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
              <option value="descendente">Des.</option>
              <option value="ascendente">Asc.</option>
            </select>
          </div>
        </div>
      </div>

      
      
      <ul className="npo-list">
        {sortedNpoList.map((npo) => (
          <li
          className="npo-item"
          key={npo.id} // Usar el ID único como key
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          {npo.image && <img src={npo.image} alt="NPO Image" style={{ width: '50px', borderRadius: '5px' }} />}
          {npo.tipo} - Heridas: {npo.heridas}
          <button onClick={() => handleStatsClick(npo.tipo)} style={{ marginLeft: 'auto' }}>Stats</button>
          <button onClick={() => handleDeleteNPO(npo.id)} className="delete-button">Eliminar</button>
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
