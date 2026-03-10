import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize scripts after React renders
    const initScripts = () => {
      if (typeof window.jQuery !== 'undefined' && typeof window.jQuery.fn.fullpage === 'undefined') {
        // Scripts are loaded, initialize
        if (typeof window.fixMenu === 'function') window.fixMenu();
        if (typeof window.fixMenuScroll === 'function') window.fixMenuScroll();
        if (typeof window.scrollNav === 'function') window.scrollNav();
      }
    };
    
    // Small delay to let external scripts initialize
    setTimeout(initScripts, 500);
  }, []);


  const vendor_count = 0;

  return (
    <>

  <div id="cmplz-cookiebanner-container">
   <div aria-describedby="cmplz-message-1-optin" aria-labelledby="cmplz-header-1-optin" aria-live="polite" aria-modal="true" className="cmplz-cookiebanner banner-1 banner-a optin cmplz-bottom-left cmplz-categories-type-view-preferences cmplz-show" data-nosnippet="true" role="dialog">
    <div className="cmplz-header">
     <div className="cmplz-logo">
      <img alt="The Pastry" className="attachment-cmplz_banner_image size-cmplz_banner_image lazyautosizes ls-is-cached lazyloaded" data-eio-rheight="924" data-eio-rwidth="2756" data-sizes="auto" data-src="images/the_pastry_1-to-cut-version-2.png" data-srcset="https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2.png 2756w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-768x257.png 768w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-1536x515.png 1536w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-2048x687.png 2048w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-600x201.png 600w" decoding="async" height="924" sizes="100px" src="images/the_pastry_1-to-cut-version-2.png" srcset="https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2.png 2756w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-768x257.png 768w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-1536x515.png 1536w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-2048x687.png 2048w, https://thepastry.nl/wp-content/uploads/2022/11/the_pastry_1-to-cut-version-2-600x201.png 600w" width="2756"/>
      
     </div>
     <div className="cmplz-title" id="cmplz-header-1-optin">
      Beheer toestemming
     </div>
     <div aria-label="Close dialog" className="cmplz-close" role="button" tabIndex="0">
      <svg aria-hidden="true" className="svg-inline--fa fa-times fa-w-11" data-icon="times" data-prefix="fas" focusable="false" role="img" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
       <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" fill="currentColor">
       </path>
      </svg>
     </div>
    </div>
    <div className="cmplz-divider cmplz-divider-header">
    </div>
    <div className="cmplz-body">
     <div className="cmplz-message" id="cmplz-message-1-optin">
      <p>
       <span style={{"color": "white", "fontSize": "14px", "lineHeight": "1.4"}}>
        Om jouw bezoek aan onze website nóg makkelijker en persoonlijker te maken zetten we cookies in. Met deze cookies kunnen wij en derde partijen informatie over jou verzamelen en jouw internetgedrag binnen (en mogelijk ook buiten) onze website volgen. Houd er rekening mee dat persoonlijke gegevens worden gebruikt voor het personaliseren van advertenties en dat cookies kunnen worden gebruikt voor gepersonaliseerde en niet-gepersonaliseerde advertenties.
       </span>
      </p>
     </div>
     
     <div className="cmplz-categories">
      <details className="cmplz-category cmplz-functional">
       <summary>
        <span className="cmplz-category-header">
         <span className="cmplz-category-title">
          Functioneel
         </span>
         <span className="cmplz-always-active">
          <span className="cmplz-banner-checkbox">
           <input className="cmplz-consent-checkbox cmplz-functional" data-category="cmplz_functional" id="cmplz-functional-optin" size="40" type="checkbox" value="1"/>
           <label className="cmplz-label" htmlFor="cmplz-functional-optin" tabIndex="0">
            <span className="screen-reader-text">
             Functioneel
            </span>
           </label>
          </span>
          Always active
         </span>
         <span className="cmplz-icon cmplz-open">
          <svg height="18" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
           <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
           </path>
          </svg>
         </span>
        </span>
       </summary>
       <div className="cmplz-description">
        <span className="cmplz-description-functional">
         De technische opslag of toegang is strikt noodzakelijk voor het legitieme doel het gebruik mogelijk te maken van een specifieke dienst waarom de abonnee of gebruiker uitdrukkelijk heeft gevraagd, of met als enig doel de uitvoering van de transmissie van een communicatie over een elektronisch communicatienetwerk.
        </span>
       </div>
      </details>
      <details className="cmplz-category cmplz-preferences">
       <summary>
        <span className="cmplz-category-header">
         <span className="cmplz-category-title">
          Voorkeuren
         </span>
         <span className="cmplz-banner-checkbox">
          <input className="cmplz-consent-checkbox cmplz-preferences" data-category="cmplz_preferences" id="cmplz-preferences-optin" size="40" type="checkbox" value="1"/>
          <label className="cmplz-label" htmlFor="cmplz-preferences-optin" tabIndex="0">
           <span className="screen-reader-text">
            Voorkeuren
           </span>
          </label>
         </span>
         <span className="cmplz-icon cmplz-open">
          <svg height="18" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
           <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
           </path>
          </svg>
         </span>
        </span>
       </summary>
       <div className="cmplz-description">
        <span className="cmplz-description-preferences">
         De technische opslag of toegang is noodzakelijk voor het legitieme doel voorkeuren op te slaan die niet door de abonnee of gebruiker zijn aangevraagd.
        </span>
       </div>
      </details>
      <details className="cmplz-category cmplz-statistics">
       <summary>
        <span className="cmplz-category-header">
         <span className="cmplz-category-title">
          Statistieken
         </span>
         <span className="cmplz-banner-checkbox">
          <input className="cmplz-consent-checkbox cmplz-statistics" data-category="cmplz_statistics" id="cmplz-statistics-optin" size="40" type="checkbox" value="1"/>
          <label className="cmplz-label" htmlFor="cmplz-statistics-optin" tabIndex="0">
           <span className="screen-reader-text">
            Statistieken
           </span>
          </label>
         </span>
         <span className="cmplz-icon cmplz-open">
          <svg height="18" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
           <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
           </path>
          </svg>
         </span>
        </span>
       </summary>
       <div className="cmplz-description">
        <span className="cmplz-description-statistics">
         De technische opslag of toegang die uitsluitend voor statistische doeleinden wordt gebruikt.
        </span>
        <span className="cmplz-description-statistics-anonymous">
         De technische opslag of toegang die uitsluitend wordt gebruikt voor anonieme statistische doeleinden. Zonder dagvaarding, vrijwillige naleving door je Internet Service Provider, of aanvullende gegevens van een derde partij, kan informatie die alleen voor dit doel wordt opgeslagen of opgehaald gewoonlijk niet worden gebruikt om je te identificeren.
        </span>
       </div>
      </details>
      <details className="cmplz-category cmplz-marketing">
       <summary>
        <span className="cmplz-category-header">
         <span className="cmplz-category-title">
          Marketing
         </span>
         <span className="cmplz-banner-checkbox">
          <input className="cmplz-consent-checkbox cmplz-marketing" data-category="cmplz_marketing" id="cmplz-marketing-optin" size="40" type="checkbox" value="1"/>
          <label className="cmplz-label" htmlFor="cmplz-marketing-optin" tabIndex="0">
           <span className="screen-reader-text">
            Marketing
           </span>
          </label>
         </span>
         <span className="cmplz-icon cmplz-open">
          <svg height="18" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
           <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
           </path>
          </svg>
         </span>
        </span>
       </summary>
       <div className="cmplz-description">
        <span className="cmplz-description-marketing">
         De technische opslag of toegang is nodig om gebruikersprofielen op te stellen voor het verzenden van reclame, of om de gebruiker op een site of over verschillende sites te volgen voor soortgelijke marketingdoeleinden.
        </span>
       </div>
      </details>
     </div>
     
    </div>
    <div className="cmplz-links cmplz-information">
     <a className="cmplz-link cmplz-manage-options cookie-statement" data-relative_url="#cmplz-manage-consent-container" href="html/#cmplz-manage-consent-container.html">
      Manage options
     </a>
     <a className="cmplz-link cmplz-manage-third-parties cookie-statement" data-relative_url="#cmplz-cookies-overview" href="html/#cmplz-cookies-overview.html">
      Manage services
     </a>
     <a className="cmplz-link cmplz-manage-vendors tcf cookie-statement" data-relative_url="#cmplz-tcf-wrapper" href="html/#cmplz-tcf-wrapper.html">
      Manage {vendor_count} vendors
     </a>
     <a className="cmplz-link cmplz-external cmplz-read-more-purposes tcf" href="https://cookiedatabase.org/tcf/purposes/" rel="noopener noreferrer nofollow" target="_blank">
      Read more about these purposes
     </a>
    </div>
    <div className="cmplz-divider cmplz-footer">
    </div>
    <div className="cmplz-buttons">
     <button className="cmplz-btn cmplz-accept">
      Accepteren
     </button>
     <button className="cmplz-btn cmplz-deny">
      Weigeren
     </button>
     <button className="cmplz-btn cmplz-view-preferences">
      Bekijk voorkeuren
     </button>
     <button className="cmplz-btn cmplz-save-preferences">
      Voorkeuren opslaan
     </button>
     <a className="cmplz-btn cmplz-manage-options tcf cookie-statement" data-relative_url="#cmplz-manage-consent-container" href="html/#cmplz-manage-consent-container.html">
      Bekijk voorkeuren
     </a>
    </div>
    <div className="cmplz-links cmplz-documents">
     <a className="cmplz-link cookie-statement" data-relative_url="" href="html/.html">
      Cookie Policy
     </a>
     <a className="cmplz-link privacy-statement" data-relative_url="" href="html/.html">
      Privacybeleid
     </a>
     <a className="cmplz-link impressum" data-relative_url="" href="html/.html">
      Imprint
     </a>
    </div>
   </div>
  </div>
  
  <div className="preload" style={{"display": "none"}}>
   <div className="preload-content">
    <img alt="" className="lazyloaded" data-src="images/logo_big.svg" decoding="async" src="images/logo_big.svg"/>
    
   </div>
  </div>
  <header className="header">
   <div className="container desktop">
    <div className="header-content">
     <a className="logo" href="https://thepastry.nl/en/">
      <div className="logo__decor1">
       <svg className="svg lazyloadedSVG" viewBox="0 0 106 97.7" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.2" cy="16.6" fill="#fff" r="5.2">
        </circle>
        <circle cx="100.8" cy="25.7" fill="#fff" r="5.2">
        </circle>
        <circle cx="60.1" cy="25.7" fill="#fff" r="5.2">
        </circle>
        <circle cx="34.9" cy="5.5" fill="#fff" r="5.2">
        </circle>
        <circle cx="85.8" cy="5.2" fill="#fff" r="5.2">
        </circle>
        <circle cx="20.6" cy="8.1" fill="#fff" r="2.6">
        </circle>
        <circle cx="29.2" cy="28.3" fill="#fff" r="2.6">
        </circle>
        <circle cx="2.6" cy="28.3" fill="#fff" r="2.6">
        </circle>
        <circle cx="43.2" cy="20.5" fill="#fff" r="2.6">
        </circle>
        <circle cx="88.5" cy="28.3" fill="#fff" r="2.6">
        </circle>
        <circle cx="74.7" cy="20.5" fill="#fff" r="2.6">
        </circle>
        <circle cx="67.1" cy="2.6" fill="#fff" r="2.6">
        </circle>
        <circle cx="103.4" cy="5.5" fill="#fff" r="2.6">
        </circle>
        <circle cx="2.6" cy="3.9" fill="#fff" r="2.6">
        </circle>
        <circle cx="8.3" cy="81.7" fill="#fff" r="5.2">
        </circle>
        <circle cx="83.2" cy="83" fill="#fff" r="5.2">
        </circle>
        <circle cx="98.3" cy="92.4" fill="#fff" r="5.2">
        </circle>
        <circle cx="61.9" cy="89.6" fill="#fff" r="5.2">
        </circle>
        <circle cx="43.2" cy="72" fill="#fff" r="5.2">
        </circle>
        <circle cx="20.6" cy="74.6" fill="#fff" r="2.6">
        </circle>
        <circle cx="62.7" cy="69.3" fill="#fff" r="2.6">
        </circle>
        <circle cx="43.2" cy="87" fill="#fff" r="2.6">
        </circle>
        <circle cx="101" cy="72" fill="#fff" r="2.6">
        </circle>
        <circle cx="85.8" cy="69.3" fill="#fff" r="2.6">
        </circle>
        <circle cx="78" cy="95.1" fill="#fff" r="2.6">
        </circle>
        <circle cx="29.2" cy="94.8" fill="#fff" r="2.6">
        </circle>
        <circle cx="2.6" cy="94.8" fill="#fff" r="2.6">
        </circle>
        <circle cx="2.6" cy="69.3" fill="#fff" r="2.6">
        </circle>
        <path d="M101 51.8H5.2c-1.7 0-3-1.3-3-3s1.3-3 3-3H101c1.7 0 3 1.3 3 3s-1.4 3-3 3z" fill="#fff">
        </path>
       </svg>
       
      </div>
      <div className="logo__decor2">
       <img alt="" className="svg lazyloaded" data-src="images/logo_2.svg" decoding="async" src="images/logo_2.svg"/>
       
      </div>
     </a>
     <nav className="navigation">
      <ul>
       <li>
        <a href="#section-1">
         Home
        </a>
       </li>
       <li className="">
        <a href="#section-35458">
         Cakes
        </a>
       </li>
       <li>
        <a href="#section-10">
         About us
        </a>
       </li>
       <li>
        <a href="#section-11">
         Contact
        </a>
       </li>
       <li>
        <a href="html/.html">
         FAQ
        </a>
       </li>
       <div className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-horizontal">
        <ul>
         <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-nl wpml-ls-first-item wpml-ls-item-legacy-list-horizontal">
          <a className="wpml-ls-link" href="html/.html">
           <img alt="Dutch" className="wpml-ls-flag lazyloaded" data-eio-rheight="12" data-eio-rwidth="18" data-src="images/nl.svg" decoding="async" height="12" src="images/nl.svg" width="18"/>
           
          </a>
         </li>
         <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-last-item wpml-ls-item-legacy-list-horizontal">
          <a className="wpml-ls-link" href="https://thepastry.nl/en/">
           <img alt="English" className="wpml-ls-flag lazyloaded" data-eio-rheight="12" data-eio-rwidth="18" data-src="images/en.svg" decoding="async" height="12" src="images/en.svg" width="18"/>
           
          </a>
         </li>
        </ul>
       </div>
      </ul>
     </nav>
     <div className="header-right">
      <a className="arrow_top" href="#">
       <img alt="" className="lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" data-src="images/arrow-up.png" decoding="async" src="images/arrow-up.png"/>
       
      </a>
      <a className="cart_link empty" href="html/.html">
       <img alt="" className="svg lazyloaded" data-src="images/cart.svg" decoding="async" src="images/cart.svg"/>
       
       <span className="cart-quantity-js">
        0
       </span>
      </a>
      <div className="tog-nav">
       <span>
       </span>
       <span>
       </span>
      </div>
     </div>
    </div>
   </div>
   <div className="container mobile">
    <div className="header-content">
     <a className="logo" href="https://thepastry.nl/en/">
      <img alt="" className="svg lazyload" data-src="images/logo_1.svg" decoding="async" src="images/logo_1.svg"/>
      
     </a>
     <nav className="navigation">
      <ul>
       <div className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-horizontal">
        <ul>
         <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-nl wpml-ls-first-item wpml-ls-item-legacy-list-horizontal">
          <a className="wpml-ls-link" href="html/.html">
           <img alt="Dutch" className="wpml-ls-flag lazyload" data-eio-rheight="12" data-eio-rwidth="18" data-src="images/nl.svg" decoding="async" height="12" src="images/nl.svg" width="18"/>
           
          </a>
         </li>
         <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-last-item wpml-ls-item-legacy-list-horizontal">
          <a className="wpml-ls-link" href="https://thepastry.nl/en/">
           <img alt="English" className="wpml-ls-flag lazyload" data-eio-rheight="12" data-eio-rwidth="18" data-src="images/en.svg" decoding="async" height="12" src="images/en.svg" width="18"/>
           
          </a>
         </li>
        </ul>
       </div>
       <li>
        <a href="#section-1">
         Home
        </a>
       </li>
       <li className="">
        <a href="#section-35458">
         Cakes
        </a>
       </li>
       <li>
        <a href="#section-10">
         About us
        </a>
       </li>
       <li>
        <a href="#section-11">
         Contact
        </a>
       </li>
       <li>
        <a href="html/.html">
         FAQ
        </a>
       </li>
      </ul>
     </nav>
     <div className="header-right">
      <a className="cart_link empty" href="html/.html">
       <img alt="" className="svg lazyload" data-src="images/cart.svg" decoding="async" src="images/cart.svg"/>
       
       <span className="cart-quantity-js">
        0
       </span>
      </a>
      <div className="tog-nav">
       <span>
       </span>
       <span>
       </span>
      </div>
     </div>
    </div>
   </div>
  </header>
  <ul className="fixed_nav">
   <li className="">
    <a href="#section-1">
     <span>
      Home
     </span>
    </a>
   </li>
   <li className="">
    <a href="#section-35458">
     <span>
      HONEYCOMB
     </span>
    </a>
   </li>
   <li className="">
    <a href="#section-35459">
     <span>
      ROSEBOX
     </span>
    </a>
   </li>
   <li className="">
    <a href="#section-35457">
     <span>
      MONDRIAN
     </span>
    </a>
   </li>
   <li className="">
    <a href="#section-35456">
     <span>
      TRIANGLES
     </span>
    </a>
   </li>
   <li className="">
    <a href="#section-35455">
     <span>
      HEART
     </span>
    </a>
   </li>
   <li className="">
    <a href="#section-35454">
     <span>
      ORIGAMI
     </span>
    </a>
   </li>
   <li className="active">
    <a href="#section-35453">
     <span>
      CHERRIES
     </span>
    </a>
   </li>
   <li>
    <a href="#section-35452">
     <span>
      CLUSTER
     </span>
    </a>
   </li>
   <li>
    <a href="#section-10">
     <span>
      ABOUT US
     </span>
    </a>
   </li>
   <li>
    <a href="#section-11">
     <span>
      Contact
     </span>
    </a>
   </li>
  </ul>
  
  <div className="cart-modal">
   <span className="close_cart">
   </span>
   <div className="cart-modal__top">
    <div className="cart-modal__title">
     W
     <span>
      i
     </span>
     nkelwagen
    </div>
    <div className="cart-modal__items">
     <p style={{"textAlign": "center"}}>
      Cart is empty
     </p>
    </div>
   </div>
   <div className="cart-modal__bot">
    <div className="cart-info__price">
     
     <div className="cart-info__price-item">
      <span>
       Total:
      </span>
      <span className="ci_price">
       0
      </span>
     </div>
    </div>
    <div className="cart-info__btn">
     <a className="btn_st" href="html/.html">
      <span>
       Go to cart
      </span>
     </a>
     <a className="btn_st" href="html/.html">
      <span>
       Set delivery
      </span>
     </a>
    </div>
   </div>
  </div>
  
  <div className="content fullpage-wrapper" id="fullpage" style={{"height": "100%", "position": "relative"}}>
   
   <section className="section-head section pad_section fp-no-height fp-section fp-table fp-is-overflow" data-name="Home" id="section-1" style="">
    <div className="fp-overflow" tabIndex="-1">
     <div className="container">
      <div className="head-content">
       <div className="head-in-logo mobile">
        <img alt="" className="skip-lazy" height="246" src="images/the_pastry_logo.webp" width="736"/>
       </div>
       <div className="head-content__logo desktop">
        <img alt="" className="skip-lazy" height="158" src="images/logo_big-e1584268311944.png" width="370"/>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <div className="bot-section__text">
       <span>
        Elevate your celebrations!
       </span>
      </div>
      <a className="arrow-bot" href="#">
       <img alt="" className="lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
     <div className="head-text">
      <span>
       Elevate your celebrations!
      </span>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow" data-id="#section-2" data-name="HONEYCOMB" id="section-35458" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        HONEYC
        <span style={{"color": "#ff0000"}}>
         O
        </span>
        MB ORANGE &amp; MANGO
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/honingraat-worteltaart-thepastrynl-d.jpg" width="600"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="800" loading="lazy" src="images/honeycomb-carrotcake-thepastrynl-m.jpg" width="600"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/honingraat-worteltaart-bovenaanzicht-thepastrynl-d.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/honeycomb-carrotcake-topview-thepastrynl-m.jpg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/honingraat-worteltaart-doorsnede-thepastrynl-d.jpg" width="1206"/>
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/honeycomb-carrotcake-cut-thepastrynl-m.jpg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/honingraat-worteltaart-zijkant-thepastrynl-d.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/honeycomb-carrotcake-sideview-thepastrynl-m.jpg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35458">
        <div className="title-section">
         <p>
          HONEYC
          <span style={{"color": "#ff0000"}}>
           O
          </span>
          MB ORANGE &amp; MANGO
         </p>
        </div>
        <div className="text-group">
         <p>
          As bees gather honey, we collected what is sweetest of all things and created our own honey comb of wonder made from a unique orange mango and carrot confit, a yoghurt mousse and an exciting blend of nuts with caramel, all seated on a light sponge base.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/honeycomb-orange-mango-2/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35458">
        <div className="title-section">
         <p>
          HONEYC
          <span style={{"color": "#ff0000"}}>
           O
          </span>
          MB ORANGE &amp; MANGO
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               88.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             8-9 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             19 × 19 × 5 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             2 days in the fridge
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Gluten, milk, nuts, eggs
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cream, sugar, milk, carrots, eggs, white chocolate, cocoa butter, orange, walnuts, mango, flour, olive oil, water, yoghurt powder, oil, pork gelatin (halal gelatin on request), dextrose, glucose syrup, pectin, baking powder, salt, cinnamon powder, clove powder, nutmeg powder.
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/honeycomb-orange-mango-2/" className="cart" encType="multipart/form-data" method="post">
          <div className="fpf-fields before-add-to-cart">
           <input name="_fpf_nonce" type="hidden" value="047a828732"/>
           <input name="_fpf_product_id" type="hidden" value="35458"/>
           <div className="fpf-field fpf-checkbox">
            <p className="form-row form-group" data-priority="" id="fpf_4752226_field">
             <span className="woocommerce-input-wrapper">
              <label className="checkbox">
               <input className="input-checkbox fpf-input-field" id="fpf_4752226" name="fpf_4752226" type="checkbox" value="1"/>
               Halal Gelatin
               <span id="fpf_4752226_price">
                (€3.88)
               </span>
               <span className="optional">
                (optional)
               </span>
              </label>
             </span>
            </p>
           </div>
           <div className="fpf-field fpf-checkbox">
            <p className="form-row form-group" data-priority="" id="fpf_2120849_field">
             <span className="woocommerce-input-wrapper">
              <label className="checkbox">
               <input className="input-checkbox fpf-input-field" id="fpf_2120849" name="fpf_2120849" type="checkbox" value="1"/>
               Custom message
               <span id="fpf_2120849_price">
                (€1.98)
               </span>
               <span className="optional">
                (optional)
               </span>
              </label>
             </span>
            </p>
           </div>
           <div className="fpf-totals">
            <dl id="fpf_totals">
            </dl>
           </div>
          </div>
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa83633bbc">
            Honeycomb orange &amp; mango quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa83633bbc" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa83633d64">
             Honeycomb orange &amp; mango quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa83633d64" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
            <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35458"/>
           <input name="product_id" type="hidden" value="35458"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35458" data-product_sku="" data-quantity="1" href="/product/honeycomb-orange-mango-2/?add-to-cart=35458" rel="nofollow">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           88.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           As bees gather honey, we collected what is sweetest of all things and created our own honey comb of wonder made from a unique orange mango and carrot confit, a yoghurt mousse and an exciting blend of nuts with caramel, all seated on a light sponge base.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35458">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/honeycomb-orange-mango-2/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35458">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35458" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, next day delivery!
        </div>
        <div className="modal modal-product" id="product-35458">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             HONEYC
             <span style={{"color": "#ff0000"}}>
              O
             </span>
             MB ORANGE &amp; MANGO
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               8-9 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               19x19x5 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               2 days in the fridge
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Gluten, milk, nuts, eggs
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cream, sugar, milk, carrots, eggs, white chocolate, cocoa butter, orange, walnuts, mango, flour, olive oil, water, yoghurt powder, oil, pork gelatin (halal gelatin on request), dextrose, glucose syrup, pectin, baking powder, salt, cinnamon powder, clove powder, nutmeg powder.
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35458">
           <a className="btn_st add-to-cart" data-product_id="35458" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35458.html" rel="nofollow">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, next day delivery!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow" data-id="#section-3" data-name="ROSEBOX" id="section-35459" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        ROS
        <span style={{"color": "#ff0000"}}>
         E
        </span>
        BOX CAKE
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/rozentaart-cake-frambozentaart-lycheetaart-verjaardagstaart-taart-bestellen-1.jpg" width="600"/>
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="800" loading="lazy" src="images/rozentaart-cake-frambozentaart-lycheetaart-1.jpeg" width="600"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/rozentaart-cake-frambozentaart-lycheetaart-verjaardagstaart-taart-bestellen-2.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/rozentaart-cake-frambozentaart-lycheetaart-3.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/rozentaart-cake-frambozentaart-lycheetaart-verjaardagstaart-taart-bestellen-3.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/rozentaart-cake-frambozentaart-2.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/rosebox-side-corrected2.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/Mobile-Rosebox-side.jpg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35459">
        <div className="title-section">
         <p>
          ROS
          <span style={{"color": "#ff0000"}}>
           E
          </span>
          BOX CAKE
         </p>
        </div>
        <div className="text-group">
         <p>
          Roses speak of love in a silent language known only to the heart. Compliment your beloved ones with beautiful and delicious roses made of luxurious crème-brulee, enhanced with raspberry jelly and raspberry mousse, and an indulgent lychee mousse, all seated on a delicious sponge cake base.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/rosebox-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35459">
        <div className="title-section">
         <p>
          ROS
          <span style={{"color": "#ff0000"}}>
           E
          </span>
          BOX CAKE
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               129.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1.6kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             12-16 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             20 × 20 × 6 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             2 days in the fridge
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Gluten, milk, eggs
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cream, raspberries, sugar, lychee, rose water, eggs, white chocolate, cocoa butter, milk, flour, cherries, pork gelatin (halal gelatin on request), rose water, butter, inulin, food coloring
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/rosebox-cake/" className="cart" encType="multipart/form-data" method="post">
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa8363b119">
            Rosebox cake quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8363b119" inputMode="numeric" max="6" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa8363b2c7">
             Rosebox cake quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8363b2c7" inputMode="numeric" max="6" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
            <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35459"/>
           <input name="product_id" type="hidden" value="35459"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35459" data-product_sku="" data-quantity="1" href="/product/rosebox-cake/?add-to-cart=35459" rel="nofollow">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           129.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           Roses speak of love in a silent language known only to the heart. Compliment your beloved ones with beautiful and delicious roses made of luxurious crème-brulee, enhanced with raspberry jelly and raspberry mousse, and an indulgent lychee mousse, all seated on a delicious sponge cake base.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35459">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/rosebox-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35459">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35459" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, next day delivery!
        </div>
        <div className="modal modal-product" id="product-35459">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             ROS
             <span style={{"color": "#ff0000"}}>
              E
             </span>
             BOX CAKE
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1.6kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               12-16 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               20x20x6 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               2 days in the fridge
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Gluten, milk, eggs
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cream, raspberries, sugar, lychee, rose water, eggs, white chocolate, cocoa butter, milk, flour, cherries, pork gelatin (halal gelatin on request), rose water, butter, inulin, food coloring
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35459">
           <a className="btn_st add-to-cart" data-product_id="35459" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35459.html" rel="nofollow">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, next day delivery!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow" data-id="#section-4" data-name="MONDRIAN" id="section-35457" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        MONDRIA
        <span style={{"color": "#ff0000"}}>
         A
        </span>
        N CHOCOLATE CAKE
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/mondriaan-cake-chocoladetaart-verjaardagstaart-taart-bestellen-1.jpg" width="600"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="800" loading="lazy" src="images/mondriaan-cake-chocoladetaart-1.jpeg" width="600"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/mondriaan-cake-chocoladetaart-verjaardagstaart-taart-bestellen-2.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/mondriaan-cake-chocoladetaart-3.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/mondriaan-cake-chocoladetaart-verjaardagstaart-taart-bestellen-3.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/mondriaan-cake-chocoladetaart-mobile-2.jpeg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35457">
        <div className="title-section">
         <p>
          MONDRIA
          <span style={{"color": "#ff0000"}}>
           A
          </span>
          N CHOCOLATE CAKE
         </p>
        </div>
        <div className="text-group">
         <p>
          “The surface of things gives pleasure, their inside gives life.” Piet Mondriaan.
         </p>
         <p>
          His unique artistic creation is echoed by our tantalising mixture of milk and dark chocolate, cremeux, and the hint of his modernism adventure with chocolate mousse all sat on a delicious sponge base.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/mondriaan-chocolate-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35457">
        <div className="title-section">
         <p>
          MONDRIA
          <span style={{"color": "#ff0000"}}>
           A
          </span>
          N CHOCOLATE CAKE
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               118.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1.4kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             12-16 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             19 × 19 × 5 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             3 days in the fridge
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Milk, nuts, eggs
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cream, chocolate 33%, eggs, chocolate 70%, milk, sugar, white chocolate, cocoa butter, oil, almond flour, cocoa powder, pork gelatin (halal gelatin on request), glucose syrup, baking powder
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/mondriaan-chocolate-cake/" className="cart" encType="multipart/form-data" method="post">
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa836414ab">
            Mondriaan chocolate cake quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa836414ab" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa83641634">
             Mondriaan chocolate cake quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa83641634" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
            <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35457"/>
           <input name="product_id" type="hidden" value="35457"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35457" data-product_sku="" data-quantity="1" href="/product/mondriaan-chocolate-cake/?add-to-cart=35457" rel="nofollow">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           118.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           “The surface of things gives pleasure, their inside gives life.” Piet Mondriaan.
          </p>
          <p>
           His unique artistic creation is echoed by our tantalising mixture of milk and dark chocolate, cremeux, and the hint of his modernism adventure with chocolate mousse all sat on a delicious sponge base.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35457">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/mondriaan-chocolate-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35457">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35457" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, next day delivery!
        </div>
        <div className="modal modal-product" id="product-35457">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             MONDRIA
             <span style={{"color": "#ff0000"}}>
              A
             </span>
             N CHOCOLATE CAKE
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1.4kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               12-16 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               19x19x5 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               3 days in the fridge
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Milk, nuts, eggs
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cream, chocolate 33%, eggs, chocolate 70%, milk, sugar, white chocolate, cocoa butter, oil, almond flour, cocoa powder, pork gelatin (halal gelatin on request), glucose syrup, baking powder
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35457">
           <a className="btn_st add-to-cart" data-product_id="35457" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35457.html" rel="nofollow">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, next day delivery!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow" data-id="#section-5" data-name="TRIANGLES" id="section-35456" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        TRI
        <span style={{"color": "#ff0000"}}>
         A
        </span>
        NGLES LIME CAKE
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-1.jpg" width="600"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="800" loading="lazy" src="images/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-1.jpeg" width="600"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-2.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-3.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-3.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/driehoeken-cake-limoentaart-verjaardagstaart-taart-bestellen-2.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/Triangle-side.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/Mobile-Triangles-side.jpg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35456">
        <div className="title-section">
         <p>
          TRI
          <span style={{"color": "#ff0000"}}>
           A
          </span>
          NGLES LIME CAKE
         </p>
        </div>
        <div className="text-group">
         <p>
          Creativity arises from the ability to see and taste things from many different angles. The uniqueness of marshmallow mousse combined with zest of lemon and green basil mousse and a mouth-watering jelly lime-basil, blended with a surprising, crunchy layer of almond praline and white chocolate, all sitting on a sumptuous cake base.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/triangles-lime-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35456">
        <div className="title-section">
         <p>
          TRI
          <span style={{"color": "#ff0000"}}>
           A
          </span>
          NGLES LIME CAKE
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               76.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             9 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             19 × 19 × 5 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             2 days in the frigde
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Gluten, milk, nuts, eggs
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cream, sugar, eggs, water, basil, lime, white chocolate, cocoa butter, cream cheese, almond flour, lemon juice, glucose syrup, butter, praline, pork gelatin, flour, almond petals, pectin, lemon, food coloring
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/triangles-lime-cake/" className="cart" encType="multipart/form-data" method="post">
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa836477db">
            Triangles Lime Cake quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa836477db" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa8364795a">
             Triangles Lime Cake quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8364795a" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
            <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35456"/>
           <input name="product_id" type="hidden" value="35456"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35456" data-product_sku="" data-quantity="1" href="/product/triangles-lime-cake/?add-to-cart=35456" rel="nofollow">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           76.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           Creativity arises from the ability to see and taste things from many different angles. The uniqueness of marshmallow mousse combined with zest of lemon and green basil mousse and a mouth-watering jelly lime-basil, blended with a surprising, crunchy layer of almond praline and white chocolate, all sitting on a sumptuous cake base.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35456">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/triangles-lime-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35456">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35456" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, delivered the next day!
        </div>
        <div className="modal modal-product" id="product-35456">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             TRI
             <span style={{"color": "#ff0000"}}>
              A
             </span>
             NGLES LIME CAKE
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               9 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               19x19x5 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               2 days in the frigde
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Gluten, milk, nuts, eggs
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cream, sugar, eggs, water, basil, lime, white chocolate, cocoa butter, cream cheese, almond flour, lemon juice, glucose syrup, butter, praline, pork gelatin, flour, almond petals, pectin, lemon, food coloring
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35456">
           <a className="btn_st add-to-cart" data-product_id="35456" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35456.html" rel="nofollow">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, delivered the next day!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow" data-id="#section-6" data-name="HEART" id="section-35455" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        HEAR
        <span style={{"color": "#ff0000"}}>
         T
        </span>
        CHOCOLATE CAKE
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/hart-chocoladetaart-bovenaanzicht-thepastrynl-d.jpg" width="600"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="800" loading="lazy" src="images/Heart-chocolate-cake-topview-thepastrynl-m.jpg" width="600"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/hart-chocoladetaart-thepastrynl-d.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/Heart-chocolate-cake-thepastrynl-m.jpg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/hart-chocoladetaart-doorsnede-thepastrynl-d.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/Heart-chocolate-cake-cut-thepastrynl-m.jpg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35455">
        <div className="title-section">
         <p>
          HEAR
          <span style={{"color": "#ff0000"}}>
           T
          </span>
          CHOCOLATE CAKE
         </p>
        </div>
        <div className="text-group">
         <p>
          The most beautiful things in the world cannot be seen or even touched, they must be felt with the heart. Tantalising blend of milk, dark chocolate and cremeux on a bed of delicious biscuit.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/heart-chocolate-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35455">
        <div className="title-section">
         <p>
          HEAR
          <span style={{"color": "#ff0000"}}>
           T
          </span>
          CHOCOLATE CAKE
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               64.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             7-9 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             19 × 18 × 5 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             3 days in the fridge
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Milk, nuts, eggs
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cream, chocolate 33%, eggs, chocolate 70%, milk, sugar, white chocolate, cocoa butter, butter, almond flour, cocoa powder, pork gelatine (halal gelatine on request), glucose syrup
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/heart-chocolate-cake/" className="cart" encType="multipart/form-data" method="post">
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa8364d2fb">
            Heart chocolate cake quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8364d2fb" inputMode="numeric" max="16" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa8364d48b">
             Heart chocolate cake quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8364d48b" inputMode="numeric" max="16" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
            <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35455"/>
           <input name="product_id" type="hidden" value="35455"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35455" data-product_sku="" data-quantity="1" href="/product/heart-chocolate-cake/?add-to-cart=35455" rel="nofollow">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           64.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           The most beautiful things in the world cannot be seen or even touched, they must be felt with the heart. Tantalising blend of milk, dark chocolate and cremeux on a bed of delicious biscuit.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35455">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/heart-chocolate-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35455">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35455" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, delivered the next day!
        </div>
        <div className="modal modal-product" id="product-35455">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             HEAR
             <span style={{"color": "#ff0000"}}>
              T
             </span>
             CHOCOLATE CAKE
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               7-9 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               19x18x5 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               3 days in the fridge
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Milk, nuts, eggs
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cream, chocolate 33%, eggs, chocolate 70%, milk, sugar, white chocolate, cocoa butter, butter, almond flour, cocoa powder, pork gelatine (halal gelatine on request), glucose syrup
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35455">
           <a className="btn_st add-to-cart" data-product_id="35455" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35455.html" rel="nofollow">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, delivered the next day!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow fp-completely" data-id="#section-7" data-name="ORIGAMI" id="section-35454" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        ORIG
        <span style={{"color": "#ff0000"}}>
         A
        </span>
        MI APPLE CAKE
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/origami-cake-appeltaart-verjaardagstaart-taart-bestellen-1.jpg" width="600"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="800" loading="lazy" src="images/origami-cake-appeltaart-verjaardagstaart-taart-bestellen-1.jpeg" width="600"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/origami-cake-appeltaart-verjaardagstaart-taart-bestellen-2.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/origami-cake-appeltaart-verjaardagstaart-taart-bestellen-3.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/origami-cake-appeltaart-verjaardagstaart-taart-bestellen-3.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/origami-cake-appeltaart-verjaardagstaart-taart-bestellen-2.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/origami-side-corrected.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/Mobile-Origami-side.jpg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35454">
        <div className="title-section">
         <p>
          ORIG
          <span style={{"color": "#ff0000"}}>
           A
          </span>
          MI APPLE CAKE
         </p>
        </div>
        <div className="text-group">
         <p>
          Beyond the intricate patterns are layers of indulgent pleasures: freshly picked juicy apple cubes delicately mixed with apple puree and liquor, embellished with lime juice, all counterpointed with a delicious caramel and pecan with cream cheese.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/origami-apple-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35454">
        <div className="title-section">
         <p>
          ORIG
          <span style={{"color": "#ff0000"}}>
           A
          </span>
          MI APPLE CAKE
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               79.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1.3kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             10 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             19 × 19 × 5 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             2 days in the fridge after delivery
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Gluten, milk, nuts, eggs, alcohol
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cream cheese, cream, apples, eggs, sugar, white chocolate, cocoa butter, butter, Manzana apple liqueur, flour, water, glucose syrup, pecan nuts, chocolate 54%, coconut sugar, almond flour, lime juice, cocoa powder, milk, inulin, pork gelatin (halal gelatin on request), grape seed oil, pectin, cinnamon powder, salt, vanilla
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/origami-apple-cake/" className="cart" encType="multipart/form-data" method="post">
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa83653400">
            Origami apple cake quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa83653400" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa8365359d">
             Origami apple cake quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8365359d" inputMode="numeric" max="4" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
            <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35454"/>
           <input name="product_id" type="hidden" value="35454"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35454" data-product_sku="" data-quantity="1" href="/product/origami-apple-cake/?add-to-cart=35454" rel="nofollow">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           79.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           Beyond the intricate patterns are layers of indulgent pleasures: freshly picked juicy apple cubes delicately mixed with apple puree and liquor, embellished with lime juice, all counterpointed with a delicious caramel and pecan with cream cheese.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35454">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/origami-apple-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35454">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35454" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, delivered the next day!
        </div>
        <div className="modal modal-product" id="product-35454">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             ORIG
             <span style={{"color": "#ff0000"}}>
              A
             </span>
             MI APPLE CAKE
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1.3kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               10 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               19x19x5 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               2 days in the fridge after delivery
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Gluten, milk, nuts, eggs, alcohol
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cream cheese, cream, apples, eggs, sugar, white chocolate, cocoa butter, butter, Manzana apple liqueur, flour, water, glucose syrup, pecan nuts, chocolate 54%, coconut sugar, almond flour, lime juice, cocoa powder, milk, inulin, pork gelatin (halal gelatin on request), grape seed oil, pectin, cinnamon powder, salt, vanilla
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35454">
           <a className="btn_st add-to-cart" data-product_id="35454" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35454.html" rel="nofollow">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, delivered the next day!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow active" data-id="#section-8" data-name="CHERRIES" id="section-35453" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        CHERRI
        <span style={{"color": "#ff0000"}}>
         E
        </span>
        S CAKE
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/kersentaart-cake-verjaardagstaart-taart-bestellen-1.jpg" width="600"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="800" loading="lazy" src="images/kersentaart-cake-verjaardagstaart-taart-bestellen-1.jpeg" width="600"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/kersentaart-cake-verjaardagstaart-taart-bestellen-2.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/kersentaart-cake-verjaardagstaart-taart-bestellen-4.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/kersentaart-cake-verjaardagstaart-taart-bestellen-3.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/kersentaart-cake-verjaardagstaart-taart-bestellen-3.jpeg" width="1206"/>
      </picture>
      <picture>
       <source height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/kersentaart-cake-verjaardagstaart-taart-bestellen-4.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" decoding="async" height="678" loading="lazy" src="images/kersentaart-cake-verjaardagstaart-taart-bestellen-2.jpeg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35453">
        <div className="title-section">
         <p>
          CHERRI
          <span style={{"color": "#ff0000"}}>
           E
          </span>
          S CAKE
         </p>
        </div>
        <div className="text-group">
         <p>
          At the point where perception is limited only by imagination, illusion becomes reality. Maraschino cherries, velvety layers of French chocolate mousse and cremeux, cherry confit, sponge cake, and a delightful crunchy-bottom crust.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/cherries-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35453">
        <div className="title-section">
         <p>
          CHERRI
          <span style={{"color": "#ff0000"}}>
           E
          </span>
          S CAKE
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               84.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1.3kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             12 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             19 × 19 × 5 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             Keep refrigerated for 3 days after delivery
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Milk, nuts, eggs, alcohol
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cherries, chocolate 70%, sugar, cream, water, milk, eggs, glucose syrup, dextrose, LUXARDO Maraschino Originale, butter, rice flour, pectin, cocoa powder, pork gelatine, almond flour, grape seed oil, lemon juice.
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/cherries-cake/" className="cart" encType="multipart/form-data" method="post">
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa8365938e">
            Cherries cake quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8365938e" inputMode="numeric" max="11" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa83659537">
             Cherries cake quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa83659537" inputMode="numeric" max="11" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
            <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35453"/>
           <input name="product_id" type="hidden" value="35453"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35453" data-product_sku="" data-quantity="1" href="/product/cherries-cake/?add-to-cart=35453" rel="nofollow">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           84.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           At the point where perception is limited only by imagination, illusion becomes reality. Maraschino cherries, velvety layers of French chocolate mousse and cremeux, cherry confit, sponge cake, and a delightful crunchy-bottom crust.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35453">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/cherries-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35453">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35453" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open">
          <span>
           ADD TO CART
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, delivered the next day!
        </div>
        <div className="modal modal-product" id="product-35453">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             CHERRI
             <span style={{"color": "#ff0000"}}>
              E
             </span>
             S CAKE
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1.3kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               12 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               19x19x5 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               Keep refrigerated for 3 days after delivery
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Milk, nuts, eggs, alcohol
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cherries, chocolate 70%, sugar, cream, water, milk, eggs, glucose syrup, dextrose, LUXARDO Maraschino Originale, butter, rice flour, pectin, cocoa powder, pork gelatine, almond flour, grape seed oil, lemon juice.
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35453">
           <a className="btn_st add-to-cart" data-product_id="35453" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35453.html" rel="nofollow">
            <span>
             ADD TO CART
             <img alt="" className="svg lazyload" decoding="async" src="images/cart.svg"/>
             
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, delivered the next day!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-product section pad_section fp-section fp-table fp-is-overflow" data-id="#section-9" data-name="CLUSTER" id="section-35452" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <p>
        CLUST
        <span style={{"color": "#ff0000"}}>
         E
        </span>
        R CAKE
       </p>
      </div>
     </div>
     <div className="product-img rotator product-slider">
      <picture className="active">
       <source data-srcset="https://thepastry.nl/wp-content/uploads/2020/02/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-1.jpg" height="800" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-1.jpg" width="600"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" data-src="images/mobile_cluster-cake-bessentaart-verjaardagstaart.jpeg" decoding="async" height="800" loading="lazy" src="images/mobile_cluster-cake-bessentaart-verjaardagstaart.jpeg" width="600"/>
      </picture>
      <picture>
       <source data-srcset="https://thepastry.nl/wp-content/uploads/2020/02/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-2.jpg" height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-2.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" data-src="images/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-3.jpeg" decoding="async" height="678" loading="lazy" src="images/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-3.jpeg" width="1206"/>
      </picture>
      <picture>
       <source data-srcset="https://thepastry.nl/wp-content/uploads/2020/02/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-3.jpg" height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-3.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" data-src="images/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-2.jpeg" decoding="async" height="678" loading="lazy" src="images/cluster-cake-bessentaart-verjaardagstaart-taart-bestellen-2.jpeg" width="1206"/>
      </picture>
      <picture>
       <source data-srcset="https://thepastry.nl/wp-content/uploads/2020/02/Cluster-side-1.jpg" height="678" loading="lazy" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/02/Cluster-side-1.jpg" width="1206"/>
       <img alt="" className="lazyloaded" data-eio-rheight="800" data-eio-rwidth="600" data-src="images/Mobile-Cluster-side.jpg" decoding="async" height="678" loading="lazy" src="images/Mobile-Cluster-side.jpg" width="1206"/>
      </picture>
     </div>
     <div className="container">
      <div className="product-content">
       <div className="product-slider-nav">
        <span className="rotator_nav rotator-prev">
        </span>
        <span className="rotator_nav rotator-next">
        </span>
       </div>
       <div className="product-info desktop" id="visible_35452">
        <div className="title-section">
         <p>
          CLUST
          <span style={{"color": "#ff0000"}}>
           E
          </span>
          R CAKE
         </p>
        </div>
        <div className="text-group">
         <p>
          Green shoots in the desert indicate a mouth-watering surprise under the surface. A surprise containing mousse blended with zingy raspberry confit and blackcurrant confit wrapped up in a shortcrust dough and all settled on a light sponge cake.
         </p>
        </div>
        <div className="product-btn">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/cluster-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
       </div>
       <div className="product-info hidden-block" id="hidden_35452">
        <div className="title-section">
         <p>
          CLUST
          <span style={{"color": "#ff0000"}}>
           E
          </span>
          R CAKE
         </p>
        </div>
        <div className="product-description">
         <div className="description-item">
          <div className="description-item__title">
           PRICE:
           <span>
            <span className="woocommerce-Price-amount amount">
             <span className="woocommerce-Price-amount amount">
              <bdi>
               <span className="woocommerce-Price-currencySymbol">
                €
               </span>
               82.00
              </bdi>
             </span>
            </span>
           </span>
          </div>
         </div>
         <div className="description-item">
          <ul>
           <li>
            <div className="description-item__title">
             Weight
            </div>
            <p>
             1.7kg
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Portions:
            </div>
            
            <p>
            </p>
            <p className="stock in-stock">
             11 people
            </p>
            <p>
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Size:
            </div>
            <p>
             19 × 19 × 5 cm
            </p>
           </li>
           <li>
            <div className="description-item__title">
             Shelf life:
            </div>
            <p>
             Keep refrigerated for 2 days after delivery
            </p>
           </li>
          </ul>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Allergy information:
          </div>
          <div className="text-group allergents-list">
           <p>
           </p>
           <p>
            Gluten, milk, nuts, eggs
           </p>
           <p>
           </p>
          </div>
         </div>
         <div className="description-item">
          <div className="description-item__title">
           Ingredients
          </div>
          <div className="text-group">
           <p>
            Cream, white chocolate, eggs, milk, sugar, berry puree, flour, glucose syrup, cocoa butter, butter, water, almond flour, icing sugar, dark chocolate, baking powder, cocoa powder, pork gelatin, pectin, salt.
           </p>
          </div>
         </div>
        </div>
        <div className="custom-mess">
         <form action="https://thepastry.nl/en/product/cluster-cake/" className="cart" encType="multipart/form-data" method="post">
          <div className="quantity">
           <label className="screen-reader-text" htmlFor="quantity_69afa8365f90c">
            Cluster cake quantity
           </label>
           <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8365f90c" inputMode="numeric" max="" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
          </div>
          <div className="woocommerce-variation-add-to-cart variations_button">
           <div className="quantity">
            <label className="screen-reader-text" htmlFor="quantity_69afa8365fa75">
             Cluster cake quantity
            </label>
            <input aria-label="Product quantity" autoComplete="off" className="input-text qty text" id="quantity_69afa8365fa75" inputMode="numeric" max="" min="1" name="quantity" placeholder="" step="1" type="number" value="1"/>
           </div>
           
           <button className="single_add_to_cart_button button ajax_add_to_cart btn_st js-add-btn alt" type="submit">
            <span>
             Sold out
            </span>
            <img alt="" className="svg lazyload" data-src="images/cart.svg" decoding="async" src="images/cart.svg"/>
            
           </button>
           <input name="add-to-cart" type="hidden" value="35452"/>
           <input name="product_id" type="hidden" value="35452"/>
           <input className="variation_id" name="variation_id" type="hidden" value="0"/>
          </div>
          <div className="fpf-fields after-add-to-cart fpf-clear">
          </div>
         </form>
        </div>
        <div className="product-btn">
         <button className="btn_st js-add-btn add-to-cart cart-main" data-product_id="35452" data-product_sku="" data-quantity="1" disabled="" href="/product/cluster-cake/?add-to-cart=35452" rel="nofollow">
          <span>
           Sold out
          </span>
         </button>
        </div>
        <div className="product-btn-hide js-group-btn">
         
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 4pm, delivered the next day!
        </div>
       </div>
       <div className="product-info mobile">
        <div className="product-price">
         <span className="woocommerce-Price-amount amount">
          <bdi>
           <span className="woocommerce-Price-currencySymbol">
            €
           </span>
           82.00
          </bdi>
         </span>
        </div>
        <div className="product-description">
         <div className="text-group">
          <p>
           Green shoots in the desert indicate a mouth-watering surprise under the surface. A surprise containing mousse blended with zingy raspberry confit and blackcurrant confit wrapped up in a shortcrust dough and all settled on a light sponge cake.
          </p>
         </div>
        </div>
        <div className="product-btn" id="visible_35452">
         <button className="btn_st xxx" onClick={() => window.open("https://thepastry.nl/en/product/cluster-cake/", "_blank")}>
          MORE INFO
         </button>
        </div>
        <div className="product-btn" id="main_35452">
         <button className="btn_st add-to-cart" data-flag="1" data-product_id="35452" data-product_sku="" data-quantity="1" href="#ex1" rel="modal:open" style={{"pointerEvents": "none", "opacity": "0.7"}}>
          <span>
           Sold out
          </span>
         </button>
        </div>
        <div className="product-btn js-group-btn">
         <a className="btn_st" href="html/.html">
          <span>
           SET DELIVERY
           <img alt="" className="svg lazyload" data-src="images/cart.svg" decoding="async" src="images/cart.svg"/>
           
          </span>
         </a>
        </div>
        <div className="product-text-bot">
         Order cake before 2:00 PM, delivered the next day!
        </div>
        <div className="modal modal-product" id="product-35452">
         <div className="modal-content">
          <div className="modal-product__title">
           <div className="mobile-title-section">
            <p>
             CLUST
             <span style={{"color": "#ff0000"}}>
              E
             </span>
             R CAKE
            </p>
           </div>
          </div>
          <div className="description">
           <div className="description-item">
            <ul>
             <li>
              <div className="description-item__title">
               Weight
              </div>
              <p>
               1.7kg
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Portions:
              </div>
              <p>
               11 people
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Size:
              </div>
              <p>
               19x19x5 cm
              </p>
             </li>
             <li>
              <div className="description-item__title">
               Shelf life:
              </div>
              <p>
               Keep refrigerated for 2 days after delivery
              </p>
             </li>
            </ul>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Allergy information:
            </div>
            <div className="text-group">
             <p>
              Gluten, milk, nuts, eggs
             </p>
            </div>
           </div>
           <div className="description-item">
            <div className="description-item__title">
             Ingredients:
            </div>
            <div className="text-group">
             <p>
              Cream, white chocolate, eggs, milk, sugar, berry puree, flour, glucose syrup, cocoa butter, butter, water, almond flour, icing sugar, dark chocolate, baking powder, cocoa powder, pork gelatin, pectin, salt.
             </p>
            </div>
           </div>
          </div>
          <div className="product-btn" id="button_35452">
           <a className="btn_st add-to-cart" data-product_id="35452" data-product_sku="" data-quantity="1" href="html/?add-to-cart=35452.html" rel="nofollow" style={{"pointerEvents": "none", "opacity": "0.7"}}>
            <span>
             Sold out
            </span>
           </a>
          </div>
          <div className="product-text-bot">
           Order cake before 2:00 PM, delivered the next day!
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="ls-is-cached lazyloaded" data-eio-rheight="23" data-eio-rwidth="25" data-src="images/arrow-bot.png" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-about section pad_section fp-section fp-table fp-is-overflow" data-name="ABOUT US" id="section-10" style="">
    <div className="fp-overflow" tabIndex="-1">
     
     <div className="container">
      <div className="mobile-title-section">
       <h4>
        AB
        <span style={{"color": "#f40611"}}>
         O
        </span>
        UT US
       </h4>
      </div>
      <div className="about-content">
       <div className="about-img">
        <picture>
         <source data-srcset="https://thepastry.nl/wp-content/uploads/2020/05/about-origami_o3.png" media="(min-width: 821px)" srcset="https://thepastry.nl/wp-content/uploads/2020/05/about-origami_o3.png"/>
         <img alt="" className="lazyloaded" data-eio-rheight="297" data-eio-rwidth="300" data-src="images/about-origami-mobile-2.png" decoding="async" loading="lazy" src="images/about-origami-mobile-2.png"/>
        </picture>
        
       </div>
       <div className="about-content__text">
        <div className="title-section">
         <h4>
          AB
          <span style={{"color": "#f40611"}}>
           O
          </span>
          UT US
         </h4>
        </div>
        <div className="about-text scroll mCustomScrollbar _mCS_1">
         <div className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" id="mCSB_1" style={{"maxHeight": "430px"}} tabIndex="0">
          <div className="mCSB_container" dir="ltr" id="mCSB_1_container" style={{"position": "relative", "top": "0", "left": "0"}}>
           <div className="text-group">
            <p>
             At The Pastry, we take great pride in providing our customers with exceptional service and quality products. We are here to help you elevate your celebrations, events to a next level, surprise and impress your guests, friends and all the people love.
            </p>
            <p>
             Ordinary cakes have lost the intended “Wow!” effect a long time ago, we want to help you bring that same excitement back in your special events.
            </p>
            <p>
             You are at a place where you can buy feelings in the same simple cake box, raised eyebrows, tantalized taste buds, excitement and energetic atmosphere after you slide the cake out of the box.
            </p>
            <p>
             Each of the cake is made from pure, natural ingredients and we think that their tastes are as unique as their appearance.
            </p>
            <p>
             We operate as an online bakery and offer delivery throughout the Netherlands, Ordered before 2:00 PM today, delivered the next day. (excluding Sundays).
            </p>
            <p>
             We appreciate your time and thank you for visiting our website.
            </p>
           </div>
          </div>
          <div className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" id="mCSB_1_scrollbar_vertical" style={{"display": "block"}}>
           <div className="mCSB_draggerContainer">
            <div className="mCSB_dragger" id="mCSB_1_dragger_vertical" style={{"position": "absolute", "minHeight": "30px", "display": "block", "height": "406px", "maxHeight": "420px", "top": "0px"}}>
             <div className="mCSB_dragger_bar" style={{"lineHeight": "30px"}}>
             </div>
             <div className="mCSB_draggerRail">
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div className="text-group mobile">
         <p>
          At The Pastry, we take great pride in providing our customers with exceptional service and quality products. We are here to help you elevate your celebrations, events to a next level, surprise and impress your guests, friends and all the people love.
         </p>
         <p>
          Ordinary cakes have lost the intended “Wow!” effect a long time ago, we want to help you bring that same excitement back in your special events.
         </p>
         <p>
          You are at a place where you can buy feelings in the same simple cake box, raised eyebrows, tantalized taste buds, excitement and energetic atmosphere after you slide the cake out of the box.
         </p>
         <p>
          Each of the cake is made from pure, natural ingredients and we think that their tastes are as unique as their appearance.
         </p>
         <p>
          We operate as an online bakery and offer delivery throughout the Netherlands, Ordered before 2:00 PM today, delivered the next day. (excluding Sundays).
         </p>
         <p>
          We appreciate your time and thank you for visiting our website.
         </p>
        </div>
       </div>
      </div>
     </div>
     <div className="bot-section">
      <a className="arrow-bot" href="#">
       <img alt="" className="lazyload" data-eio-rheight="23" data-eio-rwidth="25" data-src="images/arrow-bot.png" decoding="async" src="images/arrow-bot.png"/>
       
      </a>
     </div>
    </div>
   </section>
   <section className="section-contact section footer pad_section lazyload fp-section fp-table fp-is-overflow" data-back="https://thepastry.nl/wp-content/uploads/2020/02/bg_section_right.jpg" data-fp-styles="background: no-repeat top center/cover;" data-name="Contact" id="section-11" style={{"background": "center top / cover no-repeat"}}>
    <div className="fp-overflow" tabIndex="-1">
     <div className="container">
      <div className="contact-group">
       <div className="contact-group__text">
        <div className="title-section">
         <p>
          CONTAC
          <span style={{"color": "#f40611"}}>
           T
          </span>
         </p>
        </div>
        <div className="text-group">
         <p>
          address: Minervaweg 5, 8239 DL Lelystad.
          <br/>
          formerly: Pietersbergweg 291, 1105BM, Amsterdam.
         </p>
         <p>
          VAT: NL861627581B01
         </p>
         <p>
          Chamber of Commerce: 80314058
         </p>
         <p>
          Phone number: +31616238103
         </p>
         <p>
          Mon-Sat 09:00 – 19:00
         </p>
         <div style={{"textAlign": "left", "marginTop": "20px"}}>
          <p style={{"margin": "0"}}>
           Chat with us on WhatsApp, 24/7 available.
          </p>
          <p>
           <img alt="WhatsApp" className="lazyload" data-src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style={{"width": "40px", "height": "40px", "marginTop": "5px"}}/>
           
          </p>
         </div>
         <p>
          <span style={{"color": "#808080"}}>
           <a href="html/.html" style={{"color": "#808080", "textDecoration": "underline"}}>
            General terms and conditions
           </a>
          </span>
         </p>
        </div>
        <div className="contact-list">
         <div className="contact-list__item">
          <div className="contact-list__item-title">
           E-mail:
          </div>
          <a href="mailto:info@thepastry.nl">
           info@thepastry.nl
          </a>
         </div>
         <div className="contact-list__item">
          <div className="contact-list__item-title">
           Social networks:
          </div>
          <ul className="social">
           <li>
            <a href="https://www.facebook.com/ThePastry/" rel="nofollow" target="_blank">
             <img alt="" className="svg lazyload" data-src="images/face.svg" decoding="async" src="images/face.svg"/>
             
            </a>
           </li>
           <li>
            <a href="https://www.instagram.com/thepastrynl/" rel="nofollow" target="_blank">
             <img alt="" className="svg lazyload" data-src="images/inst.svg" decoding="async" src="images/inst.svg"/>
             
            </a>
           </li>
          </ul>
         </div>
        </div>
       </div>
       <div className="contact-group__form">
        <p>
         Entry limit reached
        </p>
       </div>
      </div>
     </div>
    </div>
    <div className="fp-watermark" style={{"right": "0"}}>
     <a href="https://alvarotrigo.com/fullPage/" rel="nofollow noopener" style={{"textDecoration": "none", "color": "#000"}} target="_blank">
      Made with fullPage.js
     </a>
    </div>
   </section>
  </div>
  
  
  
  
  
  <div data-nosnippet="true" id="cmplz-manage-consent">
   <button className="cmplz-btn cmplz-manage-consent manage-consent-1 cmplz-dismissed">
    Beheer toestemming
   </button>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <div className="widget_shopping_cart_live_region screen-reader-text" role="status">
  </div>
 
    </>
  );
}

export default App;
