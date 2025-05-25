// js/navigation.js - Sistema de navegación simplificado

/**
 * NavigationManager - Gestiona todas las formas de navegación
 * Funcionalidades:
 * - Navegación por teclado
 * - Navegación táctil (swipe)
 * - Navegación por mouse
 * - Quick navigation menu
 * - Pantalla completa
 */
class NavigationManager {
  constructor(slideManager) {
    this.slideManager = slideManager;
    this.quickNavVisible = false;
    this.touchStartX = 0;
    this.touchEndX = 0;

    // Configuración
    this.swipeThreshold = 50;
    this.keyboardEnabled = true;
    this.swipeEnabled = true;

    this.init();
  }

  /**
   * Inicializar el sistema de navegación
   */
  init() {
    this.setupKeyboardNavigation();
    this.setupTouchNavigation();
    this.setupMouseNavigation();
    this.setupQuickNavigation();
    this.setupFullscreen();

    console.log("🧭 NavigationManager inicializado");
  }

  // =================================
  // NAVEGACIÓN POR TECLADO
  // =================================

  setupKeyboardNavigation() {
    document.addEventListener("keydown", (event) => {
      if (!this.keyboardEnabled) return;

      // Evitar navegación si hay inputs activos
      if (this.isInputActive(event.target)) return;

      switch (event.key) {
        case "ArrowRight":
        case " ":
          event.preventDefault();
          this.slideManager.nextSlide();
          break;

        case "ArrowLeft":
          event.preventDefault();
          this.slideManager.previousSlide();
          break;

        case "Home":
          event.preventDefault();
          this.slideManager.goToSlide(1);
          break;

        case "End":
          event.preventDefault();
          this.slideManager.goToSlide(this.slideManager.totalSlides);
          break;

        case "Escape":
          event.preventDefault();
          this.hideQuickNav();
          this.exitFullscreen();
          break;

        case "m":
        case "M":
          event.preventDefault();
          this.toggleQuickNav();
          break;

        case "f":
        case "F":
          event.preventDefault();
          this.toggleFullscreen();
          break;

        case "r":
        case "R":
          if (event.ctrlKey) {
            event.preventDefault();
            this.slideManager.reloadSlide(this.slideManager.currentSlide);
          }
          break;
      }
    });
  }

  // =================================
  // NAVEGACIÓN TÁCTIL
  // =================================

  setupTouchNavigation() {
    document.addEventListener(
      "touchstart",
      (e) => {
        if (!this.swipeEnabled) return;
        this.touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    document.addEventListener(
      "touchend",
      (e) => {
        if (!this.swipeEnabled) return;

        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      },
      { passive: true }
    );
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > this.swipeThreshold) {
      if (deltaX < 0) {
        // Swipe izquierda -> siguiente slide
        this.slideManager.nextSlide();
      } else {
        // Swipe derecha -> slide anterior
        this.slideManager.previousSlide();
      }
    }
  }

  // =================================
  // NAVEGACIÓN POR MOUSE
  // =================================

  setupMouseNavigation() {
    document.addEventListener("click", (event) => {
      // Evitar navegación en elementos interactivos
      if (this.isInteractiveElement(event.target)) return;

      // Solo en pantallas grandes
      if (window.innerWidth > 768) {
        const rect = document.body.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const width = rect.width;

        if (clickX > width * 0.75) {
          this.slideManager.nextSlide();
        } else if (clickX < width * 0.25) {
          this.slideManager.previousSlide();
        }
      }
    });

    // Navegación con rueda del mouse
    /*
    let wheelTimeout;
    document.addEventListener(
      "wheel",
      (event) => {
        if (this.isInteractiveElement(event.target)) return;

        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (event.deltaY > 0) {
            this.slideManager.nextSlide();
          } else if (event.deltaY < 0) {
            this.slideManager.previousSlide();
          }
        }, 150);
      },
      { passive: true }
    );*/
  }

  // =================================
  // NAVEGACIÓN RÁPIDA
  // =================================

  setupQuickNavigation() {
    // Cerrar con click fuera
    document.addEventListener("click", (event) => {
      const quickNav = document.getElementById("quick-nav");
      if (
        quickNav &&
        !quickNav.contains(event.target) &&
        this.quickNavVisible
      ) {
        this.hideQuickNav();
      }
    });

    // Generar contenido del menú
    this.generateQuickNavContent();
  }

  generateQuickNavContent() {
    const sections = [
      { name: "Introducción", slides: [1, 2, 3, 4, 5] },
      { name: "Análisis", slides: [6, 7, 8] },
      { name: "Servicios AWS", slides: [9, 10, 11, 12] },
      { name: "Factores Clave", slides: [13, 14, 15] },
      { name: "Implementación", slides: [16, 17, 18] },
      { name: "Cierre", slides: [19, 20, 21] },
    ];

    const quickNavContent = document.getElementById("quick-nav-content");
    if (!quickNavContent) return;

    quickNavContent.innerHTML = sections
      .map(
        (section) => `
          <div class="nav-section">
              <h6>${section.name}</h6>
              ${section.slides
                .map((slide) => {
                  const config = this.slideManager.getSlideConfig(slide);
                  return `<button onclick="goToSlide(${slide})">${slide}. ${
                    config?.title || "Slide " + slide
                  }</button>`;
                })
                .join("")}
          </div>
      `
      )
      .join("");
  }

  toggleQuickNav() {
    if (this.quickNavVisible) {
      this.hideQuickNav();
    } else {
      this.showQuickNav();
    }
  }

  showQuickNav() {
    const quickNavContent = document.getElementById("quick-nav-content");
    if (quickNavContent) {
      quickNavContent.classList.add("show");
      this.quickNavVisible = true;
      this.updateQuickNavActive();
    }
  }

  hideQuickNav() {
    const quickNavContent = document.getElementById("quick-nav-content");
    if (quickNavContent) {
      quickNavContent.classList.remove("show");
      this.quickNavVisible = false;
    }
  }

  updateQuickNavActive() {
    const buttons = document.querySelectorAll(".nav-section button");
    buttons.forEach((button) => {
      button.classList.remove("active");
      const onclickText = button.getAttribute("onclick");
      if (onclickText) {
        const slideNum = parseInt(onclickText.match(/\d+/)?.[0]);
        if (slideNum === this.slideManager.currentSlide) {
          button.classList.add("active");
        }
      }
    });
  }

  // =================================
  // PANTALLA COMPLETA
  // =================================

  setupFullscreen() {
    document.addEventListener("fullscreenchange", () => {
      this.updateFullscreenButton();
    });
  }

  toggleFullscreen() {
    if (document.fullscreenElement) {
      this.exitFullscreen();
    } else {
      this.enterFullscreen();
    }
  }

  enterFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    console.log("🔍 Entrando en pantalla completa");
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    console.log("🔍 Saliendo de pantalla completa");
  }

  updateFullscreenButton() {
    const fullscreenBtn = document.querySelector(".fullscreen-control button");
    if (fullscreenBtn) {
      const icon = fullscreenBtn.querySelector("i");
      if (document.fullscreenElement) {
        icon.className = "bi bi-fullscreen-exit";
        fullscreenBtn.title = "Salir de pantalla completa (F)";
      } else {
        icon.className = "bi bi-arrows-fullscreen";
        fullscreenBtn.title = "Pantalla completa (F)";
      }
    }
  }

  // =================================
  // MÉTODOS DE UTILIDAD
  // =================================

  isInputActive(element) {
    return (
      element.tagName === "INPUT" ||
      element.tagName === "TEXTAREA" ||
      element.contentEditable === "true"
    );
  }

  isInteractiveElement(element) {
    const interactiveSelectors = [
      ".nav-button",
      ".slide-counter",
      ".quick-nav",
      ".fullscreen-control",
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "[onclick]",
      '[role="button"]',
    ];

    return interactiveSelectors.some(
      (selector) => element.closest && element.closest(selector)
    );
  }

  // =================================
  // MÉTODOS PÚBLICOS
  // =================================

  /**
   * Habilitar/deshabilitar navegación por teclado
   */
  setKeyboardEnabled(enabled) {
    this.keyboardEnabled = enabled;
    console.log(
      `⌨️ Navegación por teclado: ${enabled ? "habilitada" : "deshabilitada"}`
    );
  }

  /**
   * Habilitar/deshabilitar navegación táctil
   */
  setSwipeEnabled(enabled) {
    this.swipeEnabled = enabled;
    console.log(
      `👆 Navegación táctil: ${enabled ? "habilitada" : "deshabilitada"}`
    );
  }

  /**
   * Obtener estado de navegación
   */
  getNavigationState() {
    return {
      currentSlide: this.slideManager.currentSlide,
      totalSlides: this.slideManager.totalSlides,
      quickNavVisible: this.quickNavVisible,
      keyboardEnabled: this.keyboardEnabled,
      swipeEnabled: this.swipeEnabled,
      fullscreen: !!document.fullscreenElement,
    };
  }

  /**
   * Mostrar ayuda de navegación
   */
  showNavigationHelp() {
    const helpContent = `
          <div class="architecture-box">
              <h4><i class="bi bi-keyboard"></i> Ayuda de Navegación</h4>
              <div class="row">
                  <div class="col-md-4">
                      <h5>Teclado</h5>
                      <ul>
                          <li><strong>→ / Espacio:</strong> Siguiente</li>
                          <li><strong>←:</strong> Anterior</li>
                          <li><strong>Home:</strong> Primera slide</li>
                          <li><strong>End:</strong> Última slide</li>
                          <li><strong>M:</strong> Menú navegación</li>
                          <li><strong>F:</strong> Pantalla completa</li>
                          <li><strong>Escape:</strong> Cerrar menús</li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <h5>Touch/Mouse</h5>
                      <ul>
                          <li><strong>Swipe Left:</strong> Siguiente</li>
                          <li><strong>Swipe Right:</strong> Anterior</li>
                          <li><strong>Click derecha:</strong> Siguiente</li>
                          <li><strong>Click izquierda:</strong> Anterior</li>
                          <li><strong>Scroll:</strong> Navegar</li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <h5>Características</h5>
                      <ul>
                          <li>Navegación rápida por secciones</li>
                          <li>Precarga inteligente</li>
                          <li>Responsive design</li>
                          <li>Modo offline ready</li>
                      </ul>
                  </div>
              </div>
          </div>
      `;

    // Mostrar en modal o slide temporal
    this.showNotification(
      "Ayuda mostrada en consola. Ver F12 para más detalles.",
      "info"
    );
    console.log("📖 Ayuda de Navegación:", this.getNavigationHelp());
  }

  getNavigationHelp() {
    return {
      keyboard: {
        "Flecha Derecha / Espacio": "Siguiente slide",
        "Flecha Izquierda": "Slide anterior",
        Home: "Primera slide",
        End: "Última slide",
        M: "Toggle menú navegación",
        F: "Toggle pantalla completa",
        Escape: "Cerrar menús/fullscreen",
        "Ctrl+R": "Recargar slide actual",
      },
      touch: {
        "Swipe Left": "Siguiente slide",
        "Swipe Right": "Slide anterior",
      },
      mouse: {
        "Click derecha (>75%)": "Siguiente slide",
        "Click izquierda (<25%)": "Slide anterior",
        //"Scroll Down": "Siguiente slide",
        //"Scroll Up": "Slide anterior",
      },
    };
  }

  /**
   * Mostrar notificación temporal
   */
  showNotification(message, type = "info") {
    // Crear notificación simple
    const notification = document.createElement("div");
    notification.style.cssText = `
          position: fixed;
          top: 80px;
          right: 20px;
          background: var(--aws-dark-blue);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          border: 2px solid var(--aws-orange);
          z-index: 10000;
          max-width: 300px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          animation: slideInRight 0.3s ease;
      `;

    notification.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.5rem;">
              <i class="bi bi-info-circle"></i>
              <span>${message}</span>
          </div>
      `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}

// =================================
// FUNCIONES GLOBALES PARA COMPATIBILIDAD
// =================================

function nextSlide() {
  if (window.navigationManager) {
    window.navigationManager.slideManager.nextSlide();
  }
}

function previousSlide() {
  if (window.navigationManager) {
    window.navigationManager.slideManager.previousSlide();
  }
}

function goToSlide(slideNumber) {
  if (window.navigationManager) {
    window.navigationManager.slideManager.goToSlide(slideNumber);
  }
}

function toggleQuickNav() {
  if (window.navigationManager) {
    window.navigationManager.toggleQuickNav();
  }
}

function toggleFullscreen() {
  if (window.navigationManager) {
    window.navigationManager.toggleFullscreen();
  }
}

// Hacer la clase disponible globalmente
window.NavigationManager = NavigationManager;

// Agregar estilos para animaciones
const animationStyles = document.createElement("style");
animationStyles.textContent = `
  @keyframes slideInRight {
      from { opacity: 0; transform: translateX(100px); }
      to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideOutRight {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(100px); }
  }
`;
document.head.appendChild(animationStyles);
