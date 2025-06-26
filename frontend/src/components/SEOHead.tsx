import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "IMAGECLEC - Soluciones de Imagenología para Centros de Salud",
  description = "Implementa servicios de ecografías en tu centro de salud. Evita la fuga de pacientes con ecógrafos portátiles, ecografistas cualificados y informes médicos.",
  keywords = "implementación servicios de ecografía, imagen médica, ecografia, servicios de ecografia, ecografo, ecografo portatil, diagnostico medico, centros de salud, ecografías portátiles",
  ogImage = "/assets/logo.png",
  canonical
}) => {
  React.useEffect(() => {
    // Actualizar el título de la página
    document.title = title;
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Actualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
    
    // Actualizar Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);
    
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (!ogImageMeta) {
      ogImageMeta = document.createElement('meta');
      ogImageMeta.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageMeta);
    }
    ogImageMeta.setAttribute('content', ogImage);
    
    // Actualizar canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};

export default SEOHead; 