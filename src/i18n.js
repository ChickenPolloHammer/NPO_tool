import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Integración con React
  .init({
    resources: {
      en: {
        translation: {
          title: "Create your NPO List",
          NPOList: "NPO List",
          totalWounds: "Total Wounds",
          totalNPOs: "Total NPOs",
          sortBy: "Sort by:",
          orderBy: "Order:",
          wounds: "Wounds",
          date: "Date",
          ascending: "Asc.",
          descending: "Desc.",
          addNPO: "Add NPO",
          remove: "Remove",
          stats: "Stats",
          chooseImage: "Select image from device",
          predefinedImage: "Select predefined image",
          close: "Close",
          hideImage: "Hide images",
          marksman: "Marksman",
          brawler: "Brawler",
          type: "Type",
          rank: "Rank",
          trooperBrawler: "Trooper Brawler",
          toughBrawler: "Tough Brawler",
          heavyBrawler: "Heavy Brawler",
          trooperMarksman: "Trooper Marksman",
          warriorMarksman: "Warrior Marksman",
          heavyMarksman: "Heavy Marksman",
          // Agrega más traducciones aquí
        },
      },
      es: {
        translation: {
          title: "Crea tu Lista de NPOs",
          NPOList: "Lista de NPOs",
          totalWounds: "Total de Heridas",
          totalNPOs: "Total de NPOs",
          sortBy: "Ordenar por:",
          orderBy: "Ordenar por:",
          wounds: "Heridas",
          date: "Fecha",
          ascending: "Asc.",
          descending: "Des.",
          addNPO: "Añadir NPO",
          remove: "Eliminar",
          stats: "Stats",
          chooseImage: "Seleccionar imagen del dispositivo",
          predefinedImage: "Seleccionar imagen predefinida",
          close: "Cerrar",
          hideImage: "Ocultar imágenes",
          marksman: "Tirador",
          brawler: "Peleador",
          type: "Tipo",
          rank: "Rango",
          trooperBrawler: "Peleador Soldado",
          toughBrawler: "Peleador Recio",
          heavyBrawler: "Peleador Pesado",
          trooperMarksman: "Tirador Soldado",
          warriorMarksman: "Tirador Combatiente",
          heavyMarksman: "Tirador Pesado",
          // Agrega más traducciones aquí
        },
      },
    },
    fallbackLng: 'es', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya maneja el escape de XSS
    },
  });

export default i18n;
