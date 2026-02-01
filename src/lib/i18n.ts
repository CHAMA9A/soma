import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        activities: "Activities",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        quote: "Request a Quote"
      },
      footer: {
        description: "Excellence in automotive lubrication. Premium solutions for professionals, driven by constant innovation for over 25 years.",
        navigation: "Navigation",
        contact: "Contact",
        rights: "All rights reserved.",
        legal: "Legal Mentions",
        privacy: "Privacy"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        activities: "Activités",
        services: "Services",
        projects: "Réalisations",
        contact: "Contact",
        quote: "Demande de Devis"
      },
      hero: {
        badge: "Innovation & Performance",
        title: "SOMA LUBRIFIANTS",
        subtitle: "L'excellence technologique au service de la performance automobile. Découvrez nos solutions de lubrification premium pour une protection absolue.",
        cta: "Demande de Devis",
        secondary: "Explorer les Services",
        discover: "Découvrir"
      },
      footer: {
        description: "L'excellence en lubrification automobile. Solutions premium pour professionnels, portées par une innovation constante depuis plus de 25 ans.",
        navigation: "Navigation",
        contact: "Contact",
        rights: "Tous droits réservés.",
        legal: "Mentions Légales",
        privacy: "Confidentialité"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "حولنا",
        activities: "الأنشطة",
        services: "خدماتنا",
        projects: "إنجازاتنا",
        contact: "اتصل بنا",
        quote: "طلب عرض سعر"
      },
      hero: {
        badge: "ابتكار وأداء",
        title: "سوما للزيوت",
        subtitle: "التميز التكنولوجي في خدمة أداء السيارات. اكتشف حلول التزييت المتميزة لدينا للحصول على حماية مطلقة.",
        cta: "طلب عرض سعر",
        secondary: "استكشاف الخدمات",
        discover: "اكتشف"
      },
      footer: {
        description: "التميز في تزييت السيارات. حلول متميزة للمحترفين، مدفوعة بالابتكار المستمر لأكثر من 25 عامًا.",
        navigation: "التنقل",
        contact: "اتصل بنا",
        rights: "جميع الحقوق محفوظة.",
        legal: "إشعارات قانونية",
        privacy: "الخصوصية"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

// Handle RTL
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
