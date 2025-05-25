// js/main.js - Archivo principal simplificado de inicialización

/**
 * Configuración global de la aplicación
 */
const AppConfig = {
  version: "1.0.0",
  debug: false, // Cambiar a true para desarrollo
  title: "Presentación AWS - Almacenamiento Cloud",
  description:
    "Solución de almacenamiento para empresas de análisis de datos de viajes",
};

/**
 * Estado global de la aplicación
 */
const AppState = {
  initialized: false,
  loading: false,
  error: null,
  startTime: null,
  initTime: null,
};

/**
 * Clase principal de la aplicación
 */
class PresentationApp {
  constructor() {
    this.startTime = performance.now();
    AppState.startTime = this.startTime;
    this.init();
  }

  /**
   * Inicializar la aplicación
   */
  async init() {
    try {
      console.log(`🚀 Iniciando ${AppConfig.title} v${AppConfig.version}`);

      // Mostrar loading
      this.showLoading();

      // Verificar dependencias
      this.checkDependencies();

      // Inicializar componentes principales
      await this.initializeComponents();

      // Configurar listeners globales
      this.setupGlobalListeners();

      // Ocultar loading
      this.hideLoading();

      // Marcar como inicializado
      AppState.initialized = true;
      AppState.initTime = performance.now() - this.startTime;

      console.log(
        `✅ Aplicación inicializada en ${AppState.initTime.toFixed(2)}ms`
      );

      // Mostrar mensaje de bienvenida en modo debug
      if (AppConfig.debug) {
        this.showWelcomeMessage();
      }
    } catch (error) {
      console.error("❌ Error durante la inicialización:", error);
      AppState.error = error.message;
      this.showError(error);
    }
  }

  /**
   * Verificar que las dependencias estén disponibles
   */
  checkDependencies() {
    // Verificar elementos del DOM requeridos
    const requiredElements = [
      "slide-container",
      "current-slide",
      "total-slides",
      "progress-fill",
    ];

    const missingElements = requiredElements.filter(
      (id) => !document.getElementById(id)
    );

    if (missingElements.length > 0) {
      throw new Error(
        `Elementos requeridos no encontrados: ${missingElements.join(", ")}`
      );
    }

    // Verificar clases requeridas
    if (typeof SlidesData === "undefined") {
      throw new Error("SlidesData class not found");
    }

    if (typeof SlideManager === "undefined") {
      throw new Error("SlideManager class not found");
    }

    if (typeof NavigationManager === "undefined") {
      throw new Error("NavigationManager class not found");
    }

    // Verificar Bootstrap (opcional)
    if (typeof bootstrap === "undefined") {
      console.warn(
        "⚠️ Bootstrap no está cargado. Algunas funcionalidades pueden verse afectadas."
      );
    }

    console.log("✅ Dependencias verificadas correctamente");
  }

  /**
   * Inicializar componentes principales
   */
  async initializeComponents() {
    try {
      // 1. Inicializar SlideManager
      console.log("📊 Inicializando SlideManager...");
      window.slideManager = new SlideManager();
      await window.slideManager.init();

      // 2. Inicializar NavigationManager
      console.log("🧭 Inicializando NavigationManager...");
      window.navigationManager = new NavigationManager(window.slideManager);

      console.log("✅ Componentes inicializados correctamente");
    } catch (error) {
      console.error("❌ Error inicializando componentes:", error);
      throw new Error(
        `Error en inicialización de componentes: ${error.message}`
      );
    }
  }

  /**
   * Configurar listeners globales
   */
  setupGlobalListeners() {
    // Listener para cambios de orientación
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        if (window.slideManager) {
          window.slideManager.showSlide(window.slideManager.currentSlide);
        }
      }, 500);
    });

    // Listener para cambios de tamaño de ventana
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });

    // Listener para visibilidad de la página
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        console.log("📱 Página oculta - pausando actividades");
      } else {
        console.log("📱 Página visible - reanudando actividades");
      }
    });

    // Listener para errores globales
    window.addEventListener("error", (event) => {
      console.error("💥 Error global capturado:", event.error);
      this.logError("JavaScript Error", event.error);
    });

    // Listener para promesas rechazadas
    window.addEventListener("unhandledrejection", (event) => {
      console.error("💥 Promise rejection no manejada:", event.reason);
      this.logError("Unhandled Promise Rejection", event.reason);
    });

    console.log("✅ Listeners globales configurados");
  }

  /**
   * Manejar cambios de tamaño de ventana
   */
  handleResize() {
    // Actualizar slide actual para ajustar al nuevo tamaño
    if (window.slideManager && window.slideManager.initialized) {
      // No recargar la slide, solo ajustar estilos
      console.log("📐 Ajustando al nuevo tamaño de ventana");
    }

    // Ajustar quick navigation en móviles
    if (window.navigationManager && window.navigationManager.quickNavVisible) {
      const quickNavContent = document.getElementById("quick-nav-content");
      if (quickNavContent && window.innerWidth < 768) {
        quickNavContent.style.maxWidth = "90vw";
      }
    }
  }

  /**
   * Mostrar loading inicial
   */
  showLoading() {
    const loadingHTML = `
          <div id="app-loading" style="
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: var(--aws-gradient);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 10000;
              color: white;
          ">
              <div style="text-align: center; max-width: 400px; padding: 2rem;">
                  <div style="
                      width: 60px;
                      height: 60px;
                      border: 4px solid rgba(255, 153, 0, 0.3);
                      border-top: 4px solid var(--aws-orange);
                      border-radius: 50%;
                      animation: spin 1s linear infinite;
                      margin: 0 auto 1rem;
                  "></div>
                  <h3 style="color: var(--aws-orange); margin-bottom: 0.5rem;">
                      <i class="bi bi-cloud-download"></i> Cargando Presentación AWS
                  </h3>
                  <p>Inicializando componentes...</p>
              </div>
          </div>
      `;

    document.body.insertAdjacentHTML("beforeend", loadingHTML);

    // Agregar animación de spin si no existe
    if (!document.querySelector("#spin-animation")) {
      const spinStyle = document.createElement("style");
      spinStyle.id = "spin-animation";
      spinStyle.textContent = `
              @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
              }
          `;
      document.head.appendChild(spinStyle);
    }
  }

  /**
   * Ocultar loading
   */
  hideLoading() {
    const loadingElement = document.getElementById("app-loading");
    if (loadingElement) {
      loadingElement.style.opacity = "0";
      loadingElement.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        if (loadingElement.parentNode) {
          loadingElement.parentNode.removeChild(loadingElement);
        }
      }, 500);
    }
  }

  /**
   * Mostrar mensaje de bienvenida en modo debug
   */
  showWelcomeMessage() {
    console.log(`
🎯 MODO DEBUG ACTIVADO
======================
Aplicación: ${AppConfig.title}
Versión: ${AppConfig.version}
Tiempo de inicialización: ${AppState.initTime.toFixed(2)}ms

📖 Comandos disponibles en consola:
- getAppState() : Ver estado de la aplicación
- slideManager.getState() : Ver estado del gestor de slides
- navigationManager.getNavigationState() : Ver estado de navegación
- slideManager.preloadAll() : Precargar todas las slides
- navigationManager.showNavigationHelp() : Mostrar ayuda de navegación

⌨️ Atajos de teclado:
- Flechas / Espacio : Navegar slides
- M : Menú de navegación rápida
- F : Pantalla completa
- Escape : Cerrar menús
      `);

    if (window.navigationManager) {
      window.navigationManager.showNotification(
        "🐛 Modo Debug activado. Ver consola (F12) para comandos.",
        "info"
      );
    }
  }

  /**
   * Mostrar error crítico
   */
  showError(error) {
    const container =
      document.getElementById("slide-container") || document.body;

    container.innerHTML = `
          <div style="
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background: var(--aws-gradient);
              color: white;
              padding: 2rem;
              text-align: center;
          ">
              <div style="max-width: 600px;">
                  <h1 style="color: var(--danger-red); margin-bottom: 1rem;">
                      <i class="bi bi-exclamation-triangle"></i> Error de Inicialización
                  </h1>
                  <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                      La aplicación no pudo inicializarse correctamente.
                  </p>
                  <div style="
                      background: rgba(255, 255, 255, 0.1);
                      border-radius: 10px;
                      padding: 1rem;
                      margin: 1.5rem 0;
                      text-align: left;
                  ">
                      <h4>Detalles del Error:</h4>
                      <pre style="
                          background: rgba(0, 0, 0, 0.3);
                          padding: 1rem;
                          border-radius: 5px;
                          overflow-x: auto;
                          font-size: 0.9rem;
                      ">${error.message}</pre>
                  </div>
                  <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                      <button 
                          onclick="location.reload()" 
                          style="
                              background: var(--warning-yellow);
                              color: var(--aws-dark-blue);
                              border: none;
                              padding: 0.75rem 1.5rem;
                              border-radius: 5px;
                              cursor: pointer;
                              font-weight: bold;
                          "
                      >
                          <i class="bi bi-arrow-clockwise"></i> Recargar Página
                      </button>
                      <button 
                          onclick="presentationApp.showDebugInfo()" 
                          style="
                              background: var(--info-cyan);
                              color: white;
                              border: none;
                              padding: 0.75rem 1.5rem;
                              border-radius: 5px;
                              cursor: pointer;
                              font-weight: bold;
                          "
                      >
                          <i class="bi bi-bug"></i> Ver Debug Info
                      </button>
                  </div>
              </div>
          </div>
      `;
  }

  /**
   * Registrar error para debugging
   */
  logError(type, error) {
    const errorInfo = {
      type,
      message: error.message || error.toString(),
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      slideNumber: window.slideManager
        ? window.slideManager.currentSlide
        : "unknown",
      appState: AppState,
    };

    console.error("📋 Error registrado:", errorInfo);

    // Guardar en localStorage para análisis
    try {
      const errors = JSON.parse(
        localStorage.getItem("presentation-errors") || "[]"
      );
      errors.push(errorInfo);

      // Mantener solo los últimos 20 errores
      if (errors.length > 20) {
        errors.splice(0, errors.length - 20);
      }

      localStorage.setItem("presentation-errors", JSON.stringify(errors));
    } catch (e) {
      console.warn("No se pudo guardar el error en localStorage:", e);
    }
  }

  /**
   * Mostrar información de debug
   */
  showDebugInfo() {
    const debugInfo = {
      app: {
        config: AppConfig,
        state: AppState,
        version: AppConfig.version,
        initTime: AppState.initTime,
      },
      slideManager: window.slideManager ? window.slideManager.getState() : null,
      navigationManager: window.navigationManager
        ? window.navigationManager.getNavigationState()
        : null,
      browser: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          devicePixelRatio: window.devicePixelRatio,
        },
      },
      performance: {
        memory: performance.memory
          ? {
              used:
                Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) +
                "MB",
              total:
                Math.round(performance.memory.totalJSHeapSize / 1024 / 1024) +
                "MB",
              limit:
                Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024) +
                "MB",
            }
          : "No disponible",
      },
      localStorage: {
        available: this.isLocalStorageAvailable(),
        errors: this.getStoredErrors(),
      },
    };

    console.log("🐛 Información de Debug:", debugInfo);

    // Copiar al clipboard si es posible
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(JSON.stringify(debugInfo, null, 2))
        .then(() => {
          if (window.navigationManager) {
            window.navigationManager.showNotification(
              "Debug info copiado al clipboard",
              "success"
            );
          }
        })
        .catch(() => {
          console.log(
            "Para copiar el debug info, usa: copy(JSON.stringify(" +
              JSON.stringify(debugInfo) +
              ", null, 2))"
          );
        });
    }
  }

  /**
   * Verificar disponibilidad de localStorage
   */
  isLocalStorageAvailable() {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Obtener errores almacenados
   */
  getStoredErrors() {
    try {
      return JSON.parse(localStorage.getItem("presentation-errors") || "[]");
    } catch (e) {
      return [];
    }
  }

  /**
   * Limpiar errores almacenados
   */
  clearStoredErrors() {
    try {
      localStorage.removeItem("presentation-errors");
      console.log("🗑️ Errores almacenados limpiados");
    } catch (e) {
      console.warn("No se pudieron limpiar los errores almacenados");
    }
  }

  // =================================
  // MÉTODOS PÚBLICOS
  // =================================

  /**
   * Obtener estado de la aplicación
   */
  getAppState() {
    return {
      ...AppState,
      slideManager: window.slideManager ? window.slideManager.getState() : null,
      navigationManager: window.navigationManager
        ? window.navigationManager.getNavigationState()
        : null,
    };
  }

  /**
   * Reiniciar la aplicación
   */
  restart() {
    console.log("🔄 Reiniciando aplicación...");

    // Limpiar referencias globales
    window.slideManager = null;
    window.navigationManager = null;

    // Reinicializar
    this.init();
  }

  /**
   * Habilitar modo debug
   */
  enableDebugMode() {
    AppConfig.debug = true;
    console.log("🐛 Modo debug habilitado");
    this.showWelcomeMessage();
  }

  /**
   * Deshabilitar modo debug
   */
  disableDebugMode() {
    AppConfig.debug = false;
    console.log("🔇 Modo debug deshabilitado");
  }
}

// =================================
// INICIALIZACIÓN AUTOMÁTICA
// =================================

/**
 * Inicializar cuando el DOM esté listo
 */
document.addEventListener("DOMContentLoaded", () => {
  // Verificar que estemos en un entorno de navegador
  if (typeof window === "undefined") {
    console.error("❌ Esta aplicación requiere un navegador web");
    return;
  }

  // Detectar modo desarrollo
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === ""
  ) {
    AppConfig.debug = true;
    console.log(
      "🏠 Modo desarrollo detectado - Debug habilitado automáticamente"
    );
  }

  // Inicializar aplicación
  window.presentationApp = new PresentationApp();
});

// =================================
// API PÚBLICA GLOBAL
// =================================

/**
 * Funciones globales para acceso desde consola o scripts externos
 */
window.getAppState = () => window.presentationApp?.getAppState();
window.enableDebug = () => window.presentationApp?.enableDebugMode();
window.disableDebug = () => window.presentationApp?.disableDebugMode();
window.restartApp = () => window.presentationApp?.restart();
window.clearErrors = () => window.presentationApp?.clearStoredErrors();

// Exponer configuración para personalización
window.AppConfig = AppConfig;
window.AppState = AppState;

console.log(
  "📚 API Global disponible: getAppState(), enableDebug(), disableDebug(), restartApp(), clearErrors()"
);
