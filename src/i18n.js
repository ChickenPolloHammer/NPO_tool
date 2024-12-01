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
          selectImage: "Select image",
          chooseImage: "From device",
          predefinedImage: "Predefined",
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
          title: "Crea tu Lista de ANJ",
          NPOList: "Lista de ANJs",
          totalWounds: "Total de Heridas",
          totalNPOs: "Total de ANJs",
          sortBy: "Ordenar por:",
          orderBy: "Ordenar por:",
          wounds: "Heridas",
          date: "Fecha",
          ascending: "Asc.",
          descending: "Des.",
          addNPO: "Añadir ANJ",
          remove: "Eliminar",
          stats: "Stats",
          selectImage: "Selecciona imagen",
          chooseImage: "Del dispositivo",
          predefinedImage: "Predefinida",
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
