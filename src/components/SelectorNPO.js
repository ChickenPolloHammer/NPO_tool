import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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



const SelectorNPO = ({ onAdd }) => {
  const { t } = useTranslation();

  const npoData = {
    cuerpoACuerpo: [
      { tipo: t('trooperBrawler'), rango: "Débil", heridas: 7 },
      { tipo: t('toughBrawler'), rango: "Medio", heridas: 10 },
      { tipo: t('heavyBrawler'), rango: "Duro", heridas: 14 }
    ],
    disparos: [
      { tipo: t('trooperMarksman'), rango: "Débil", heridas: 7 },
      { tipo: t('warriorMarksman'), rango: "Medio", heridas: 8 },
      { tipo: t('heavyMarksman'), rango: "Duro", heridas: 14 }
    ]
  };

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    // Disparar el clic en el input oculto
    document.getElementById('fileInput').click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{t('selectImage')}:</span>
      <div className="button-container">
        {/* Botón para sacar/seleccionar imágen del dispositivo */}
        <button
          onClick={triggerFileInput}>
          {t('chooseImage')}
        </button>
        {/* Input oculto */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        {/* Botón para mostrar/ocultar imágenes */}
        <button onClick={toggleImageOptions}>
          {showImages ? t('hideImage') : t('predefinedImage')}
        </button>
      </div>

      {/* Selección de Imagen */}
        {showImages && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
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

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Contenedor para Tipo y Rango */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '5px', marginTop: '10px'}}>
          {/* Tipo */}
          <div>
            <span>{t('type')}:</span>
            <label
              className={`radio-label ${tipo === 'cuerpoACuerpo' ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name="tipo"
                value="cuerpoACuerpo"
                checked={tipo === 'cuerpoACuerpo'}
                onChange={handleTipoChange}
              />
              <img
                src={knifeImage}
                alt="Cuerpo a Cuerpo"
                className="radio-image"
              />
              {t('brawler')}
            </label>

            <label
              className={`radio-label ${tipo === 'disparos' ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name="tipo"
                value="disparos"
                checked={tipo === 'disparos'}
                onChange={handleTipoChange}
              />
              <img
                src={bulletImage}
                alt="Disparos"
                className="radio-image"
              />
              {t('marksman')}
            </label>
          </div>
        </div>

        {/* Mostrar imagen seleccionada solo cuando no se están mostrando las opciones de imágenes */}
        {!showImages && selectedImage && (
          <div style={{ marginTop: '15px' }}>
            {/*<span>Imagen seleccionada:</span>*/}
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
      {/* Rango */}
      <div style={{ marginBottom: '10px'}}>
        <span>{t('rank')}: </span>
        <select value={unidad.tipo} onChange={handleUnidadChange}>
          {npoData[tipo].map((u, index) => (
            <option key={index} value={u.tipo}>
              {u.tipo} - {u.heridas} {t('wounds')}
            </option>
          ))}
        </select>
      </div>
      {/* Botón de añadir */}
      <button onClick={handleAdd}>{t('addNPO')}</button>
    </div>
  );
};

export default SelectorNPO;
