import React, { useState } from 'react';
import knifeImage from './images/knife.png';
import bulletImage from './images/bullet.png';

import enjambresCanopticos from './images/enjambres_canopticos.jpg';
import guerreroNecron from './images/guerrero_necron.jpg';
import destructorSkorpekh from './images/destructor_skorpekh.jpg';
import inmortal from './images/inmortal.jpg';
import aberrant from './images/aberrant.jpg';
import assaultIntercessor from './images/assault_intercessor.jpg';
import brokhyrThunderkyn from './images/brokhyr_thunderkyn.jpg';
import chaosCultists from './images/chaos_cultists.jpg';
import flayedOne from './images/flayed_one.jpg';
import guardianDefender from './images/guardian_defender.jpg';
import hormagaunt from './images/hormagaunt.jpg';
import intercessor from './images/intercessor.jpg';
import jakhals from './images/jakhals.jpg';
import karskin from './images/karskin.jpg';
import khorneBerzerker from './images/khorne_berzerker.jpg';
import khorneBloodletter from './images/khorne_bloodletter.jpg';
import legionary from './images/legionary.jpg';
import neophyteHybrids from './images/neophyte_hybrids.jpg';
import novitiate from './images/novitiate.jpg';
import poxwalker from './images/poxwalker.jpg';
import shockTroop from './images/shock_troop.jpg';
import skitariiRanger from './images/skitarii_ranger.jpg';
import termagant from './images/termagant.jpg';
import triarchPraetorian from './images/triarch_praetorian.jpg';
import tyranidWarrior from './images/tyranid_warrior.jpg';
import orkBoy from './images/ork_boy.jpg';

const imageOptions = [
  { name: 'enjambresCanopticos', src: enjambresCanopticos },
  { name: 'guerreroNecron', src: guerreroNecron },
  { name: 'destructorSkorpekh', src: destructorSkorpekh },
  { name: 'inmortal', src: inmortal },
  { name: 'aberrant', src: aberrant },
  { name: 'assaultIntercessor', src: assaultIntercessor },
  { name: 'brokhyrThunderkyn', src: brokhyrThunderkyn },
  { name: 'chaosCultists', src: chaosCultists },
  { name: 'flayedOne', src: flayedOne },
  { name: 'guardianDefender', src: guardianDefender },
  { name: 'hormagaunt', src: hormagaunt },
  { name: 'intercessor', src: intercessor },
  { name: 'jakhals', src: jakhals },
  { name: 'karskin', src: karskin },
  { name: 'khorneBerzerker', src: khorneBerzerker },
  { name: 'khorneBloodletter', src: khorneBloodletter },
  { name: 'legionary', src: legionary },
  { name: 'neophyteHybrids', src: neophyteHybrids },
  { name: 'novitiate', src: novitiate },
  { name: 'poxwalker', src: poxwalker },
  { name: 'shockTroop', src: shockTroop },
  { name: 'skitariiRanger', src: skitariiRanger },
  { name: 'termagant', src: termagant },
  { name: 'triarchPraetorian', src: triarchPraetorian },
  { name: 'tyranidWarrior', src: tyranidWarrior },
  { name: 'orkBoy', src: orkBoy },
];

const npoData = {
  cuerpoACuerpo: [
    { tipo: "Soldado Luchador", rango: "Débil", heridas: 7 },
    { tipo: "Luchador Duro", rango: "Medio", heridas: 10 },
    { tipo: "Luchador Pesado", rango: "Duro", heridas: 14 }
  ],
  disparos: [
    { tipo: "Soldado Tirador", rango: "Débil", heridas: 7 },
    { tipo: "Guerrero Tirador", rango: "Medio", heridas: 8 },
    { tipo: "Tirador Pesado", rango: "Duro", heridas: 14 }
  ]
};

const SelectorNPO = ({ onAdd }) => {
  const [tipo, setTipo] = useState("cuerpoACuerpo");
  const [unidad, setUnidad] = useState(npoData[tipo][0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImages, setShowImages] = useState(false);  // Estado para controlar la visibilidad

  const handleTipoChange = (e) => {
    const selectedTipo = e.target.value;
    setTipo(selectedTipo);
    setUnidad(npoData[selectedTipo][0]);
  };

  const handleUnidadChange = (e) => {
    const selectedUnidad = npoData[tipo].find(u => u.tipo === e.target.value);
    setUnidad(selectedUnidad);
  };

  const handleAdd = () => {
    const newNPO = { ...unidad, image: selectedImage };
    onAdd(newNPO);
  };

  const handleImageSelect = (src) => {
    setSelectedImage(src);
    setShowImages(false);
  };

  const toggleImageOptions = () => {
    setShowImages(prevState => !prevState);  // Alternar visibilidad
  };

  const handleSelectedImageClick = () => {
    if (showImages) {
      setShowImages(false);  // Ocultar imágenes si ya están visibles
    } else {
      setShowImages(true);  // Mostrar imágenes si no están visibles
    }
  
    // Descartar la selección previa al hacer clic en la imagen seleccionada
    if (selectedImage) {
      setSelectedImage(null);  // Descartar la imagen seleccionada
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Seleccionar Unidad NPO</h3>

      {/* Botón para mostrar/ocultar imágenes */}
      <button onClick={toggleImageOptions}>
        {showImages ? 'Ocultar Imágenes' : 'Seleccionar Imágenes'}
      </button>

      {/* Selección de Imagen */}
        {showImages && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginLeft: '0px' }}>
            {imageOptions.map((image) => (
              <label key={image.name} style={{ cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="selectedImage"
                  value={image.src}
                  checked={selectedImage === image.src}
                  onChange={() => handleImageSelect(image.src)}
                  style={{ display: 'none' }}
                />
                <img
                  src={image.src}
                  alt={image.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    border: selectedImage === image.src ? '3px solid var(--naranja-brillante)' : '3px solid transparent',
                    borderRadius: '5px',
                  }}
                />
              </label>
            ))}
          </div>
        )}

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
        {/* Contenedor para Tipo y Rango */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Tipo */}
          <div>
            <span>Tipo:</span>
            <label style={{ display: 'block' }}>
              <input
                type="radio"
                name="tipo"
                value="cuerpoACuerpo"
                checked={tipo === 'cuerpoACuerpo'}
                onChange={handleTipoChange}
              />
              <img src={knifeImage} alt="Cuerpo a Cuerpo" style={{ width: '24px', marginLeft: '8px', marginRight: '8px' }} />
              Luchador
            </label>

            <label style={{ display: 'block' }}>
              <input
                type="radio"
                name="tipo"
                value="disparos"
                checked={tipo === 'disparos'}
                onChange={handleTipoChange}
              />
              <img src={bulletImage} alt="Disparos" style={{ width: '24px', marginLeft: '8px', marginRight: '8px' }} />
              Tirador
            </label>
          </div>

          {/* Rango */}
          <div style={{ marginBottom: '10px' }}>
            <span>Rango:</span>
            <select value={unidad.tipo} onChange={handleUnidadChange}>
              {npoData[tipo].map((u, index) => (
                <option key={index} value={u.tipo}>
                  {u.tipo} - {u.heridas} heridas
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mostrar imagen seleccionada solo cuando no se están mostrando las opciones de imágenes */}
        {!showImages && selectedImage && (
          <div style={{ marginTop: '5px' }}>
            <span>Imagen seleccionada:</span>
            <img
              src={selectedImage}
              alt="Imagen seleccionada"
              style={{
                width: '100px',
                height: '100px',
                border: '3px solid var(--naranja-brillante)',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'block',
                margin: '5px',
              }}
              onClick={handleSelectedImageClick}  // Maneja el clic en la imagen
            />
          </div>
        )}
      </div>

      {/* Botón de añadir */}
      <button onClick={handleAdd}>Añadir Unidad</button>
    </div>
  );
};

export default SelectorNPO;
