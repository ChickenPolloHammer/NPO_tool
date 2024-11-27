import React, { useState } from 'react';
import SelectorNPO from './SelectorNPO';
import { useTranslation } from 'react-i18next';
import soldadoLuchadorStatsKt from './images/soldado_luchador_stats_KT.jpg';
import luchadorDuroStatsKt from './images/luchador_duro_stats_KT.jpg';
import luchadorPesadoStatsKt from './images/luchador_pesado_stats_KT.jpg';
import soldadoTiradorStatsKt from './images/soldado_tirador_stats_KT.jpg';
import guerreroTiradorStatsKt from './images/guerrero_tirador_stats_KT.jpg';
import tiradorPesadoStatsKt from './images/tirador_pesado_stats_KT.jpg';
import trooperBrawlerStatsKt from './images/trooper_brawler_stats_KT.jpg';
import toughBrawlerStatsKt from './images/tough_brawler_stats_KT.jpg';
import heavyBrawlerStatsKt from './images/heavy_brawler_stats_KT.jpg';
import trooperMarksmanStatsKt from './images/trooper_marksman_stats_KT.jpg';
import warriorMarksmanStatsKt from './images/warrior_marksman_stats_KT.jpg';
import heavyMarksmanStatsKt from './images/heavy_marksman_stats_KT.jpg';

const ListaNPO = () => {
  const { t } = useTranslation();
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
      case 'Peleador Soldado':
        setSelectedImage(soldadoLuchadorStatsKt);
        break;
      case 'Peleador Recio':
        setSelectedImage(luchadorDuroStatsKt);
        break;
      case 'Peleador Pesado':
        setSelectedImage(luchadorPesadoStatsKt);
        break;
      case 'Tirador Soldado':
        setSelectedImage(soldadoTiradorStatsKt);
        break;
      case 'Tirador Combatiente':
        setSelectedImage(guerreroTiradorStatsKt);
        break;
      case 'Tirador Pesado':
        setSelectedImage(tiradorPesadoStatsKt);
        break;
      case 'Trooper Brawler':
        setSelectedImage(trooperBrawlerStatsKt);
        break;
      case 'Tough Brawler':
        setSelectedImage(toughBrawlerStatsKt);
        break;
      case 'Heavy Brawler':
        setSelectedImage(heavyBrawlerStatsKt);
        break;
      case 'Trooper Marksman':
        setSelectedImage(trooperMarksmanStatsKt);
        break;
      case 'Warrior Marksman':
        setSelectedImage(warriorMarksmanStatsKt);
        break;
      case 'Heavy Marksman':
        setSelectedImage(heavyMarksmanStatsKt);
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
        <h3 style={{ textDecoration: 'underline' }}>{t('NPOList')}</h3>
          <label style={{ display: 'block' }}>{t('totalWounds')}: {totalHeridas}</label>
          <label style={{ display: 'block' }}>{t('totalNPOs')}: {totalNPOs}</label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '59px'}}>
          {/* Selector para elegir el criterio de orden */}
          <div>
            <label htmlFor="sortBy">{t('sortBy')}</label>
            <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
              <option value="fechaEntrada">{t('date')}</option>
              <option value="heridas">{t('wounds')}</option>
            </select>
          </div>
          
          {/* Selector para cambiar el orden */}
          <div>
            <label htmlFor="sortOrder">{t('sortBy')}</label>
            <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
              <option value="descendente">{t('descending')}</option>
              <option value="ascendente">{t('ascending')}</option>
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
          <div>
            <strong>{npo.tipo}</strong>
            <br />
            {t('wounds')}: {npo.heridas}
          </div>
          <button onClick={() => handleStatsClick(npo.tipo)} style={{ marginLeft: 'auto' }}>{t('stats')}</button>
          <button onClick={() => handleDeleteNPO(npo.id)} className="delete-button">{t('remove')}</button>
        </li>
        
        ))}
      </ul>

      {/* Si se ha seleccionado una imagen, mostrarla a pantalla completa */}
      {selectedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <img src={selectedImage} alt="Stat Image" className="image" />
          <button className="close-button" onClick={handleCloseImage}>{t('close')}</button>
        </div>
      )}
    </div>
  );
};



export default ListaNPO;
