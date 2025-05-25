// js/slideManager.js - Gestor central de slides simplificado

class SlideManager {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = 21;
    this.slides = new Map();
    this.isLoading = false;
    this.container = null;
    this.initialized = false;

    // Configuración de slides por sección para navegación rápida
    this.slideConfig = {
      1: { title: "Portada", section: "intro" },
      2: { title: "Agenda", section: "intro" },
      3: { title: "Contexto", section: "intro" },
      4: { title: "Análisis del Problema", section: "intro" },
      5: { title: "Arquitectura Actual", section: "intro" },
      6: { title: "Desafíos Identificados", section: "analysis" },
      7: { title: "Solución Propuesta", section: "analysis" },
      8: { title: "Diagrama Completo", section: "analysis" },
      9: { title: "Amazon S3", section: "services" },
      10: { title: "Amazon Redshift", section: "services" },
      11: { title: "DynamoDB", section: "services" },
      12: { title: "Kinesis Firehose", section: "services" },
      13: { title: "Escalabilidad", section: "factors" },
      14: { title: "Performance & Seguridad", section: "factors" },
      15: { title: "Disponibilidad & Costos", section: "factors" },
      16: { title: "Impacto en la Empresa", section: "implementation" },
      17: { title: "Timeline", section: "implementation" },
      18: { title: "Métricas & ROI", section: "implementation" },
      19: { title: "Conclusiones", section: "closing" },
      20: { title: "Referencias", section: "closing" },
      21: { title: "Preguntas", section: "closing" },
    };
  }


  async init() {
    try {
      console.log("🎯 Inicializando SlideManager...");

      this.container = document.getElementById("slide-container");
      if (!this.container) {
        throw new Error("Container element not found");
      }

      // Cargar primera slide
      await this.showSlide(1);

      // Precargar slides críticas en background
      this.preloadCriticalSlides();

      // Actualizar UI inicial
      this.updateUI();

      this.initialized = true;
      console.log("✅ SlideManager inicializado correctamente");
    } catch (error) {
      console.error("❌ Error inicializando SlideManager:", error);
      this.showError("Error al cargar la presentación");
      throw error;
    }
  }


  async preloadCriticalSlides() {
    const criticalSlides = [1, 2, 3, 6, 9, 19, 21];

    for (const slideNum of criticalSlides) {
      try {
        if (!this.slides.has(slideNum)) {
          await this.loadSlide(slideNum);
        }
      } catch (error) {
        console.warn(`Failed to preload slide ${slideNum}:`, error);
      }
    }
  }

  /**
   * Carga una slide específica
   * @param {number} slideNumber - Número de la slide a cargar
   */
  async loadSlide(slideNumber) {
    if (this.slides.has(slideNumber)) {
      return this.slides.get(slideNumber);
    }

    try {
      const slideData = this.slideConfig[slideNumber];
      if (!slideData) {
        throw new Error(`Slide ${slideNumber} not found in config`);
      }

      // Obtener contenido de la slide desde SlidesData
      const slideContent = await this.getSlideContent(slideNumber);

      const slide = {
        number: slideNumber,
        content: slideContent,
        title: slideData.title,
        section: slideData.section,
        loaded: true,
        timestamp: Date.now(),
      };

      this.slides.set(slideNumber, slide);
      return slide;
    } catch (error) {
      console.error(`Error loading slide ${slideNumber}:`, error);

      // Crear slide de error
      const errorSlide = {
        number: slideNumber,
        content: this.createErrorSlide(slideNumber),
        title: `Error - Slide ${slideNumber}`,
        section: "error",
        loaded: false,
      };

      this.slides.set(slideNumber, errorSlide);
      return errorSlide;
    }
  }

  /**
   * Obtiene el contenido HTML de una slide
   * @param {number} slideNumber - Número de slide
   */
  async getSlideContent(slideNumber) {
    // Verificar que SlidesData esté disponible
    if (typeof SlidesData === "undefined") {
      throw new Error("SlidesData class not found");
    }

    const slidesData = SlidesData.getAllSlides();
    return slidesData[slideNumber] || this.createPlaceholderSlide(slideNumber);
  }

  /**
   * Muestra una slide específica
   * @param {number} slideNumber - Número de slide a mostrar
   */
  async showSlide(slideNumber) {
    if (this.isLoading) return;

    this.isLoading = true;

    try {
      // Validar número de slide
      if (slideNumber < 1 || slideNumber > this.totalSlides) {
        throw new Error(`Invalid slide number: ${slideNumber}`);
      }

      // Cargar slide si no está cargada
      const slide = await this.loadSlide(slideNumber);

      // Actualizar container con animación
      await this.renderSlide(slide);

      // Actualizar estado
      this.currentSlide = slideNumber;

      // Actualizar UI
      this.updateUI();

      // Precargar slides adyacentes
      this.preloadAdjacentSlides(slideNumber);

      console.log(`📄 Showing slide ${slideNumber}: ${slide.title}`);
    } catch (error) {
      console.error(`Error showing slide ${slideNumber}:`, error);
      this.showError(`Error al mostrar slide ${slideNumber}`);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Renderiza una slide en el container con animaciones
   * @param {Object} slide - Datos de la slide
   */
  async renderSlide(slide) {
    return new Promise((resolve) => {
      // Aplicar fade out si hay contenido previo
      if (this.container.innerHTML.trim()) {
        this.container.style.opacity = "0";
        this.container.style.transform = "translateX(-20px)";
      }

      setTimeout(
        () => {
          // Actualizar contenido
          this.container.innerHTML = `
                  <div class="slide active" id="slide${slide.number}">
                      ${slide.content}
                  </div>
              `;

          // Aplicar fade in
          this.container.style.transition = "all 0.4s ease";
          this.container.style.opacity = "1";
          this.container.style.transform = "translateX(0)";

          // Animar elementos internos
          this.animateSlideElements();

          resolve();
        },
        this.container.innerHTML.trim() ? 200 : 0
      );
    });
  }

  /**
   * Anima los elementos internos de la slide
   */
  animateSlideElements() {
    const slideElement = this.container.querySelector(".slide.active");
    if (!slideElement) return;

    // Animar elementos con delay escalonado
    const animatableElements = slideElement.querySelectorAll(
      ".architecture-box, .service-box, .impact-card, .problem-card, .solution-card, .feature-card, .stat-box"
    );

    animatableElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";

      setTimeout(() => {
        el.style.transition = "all 0.4s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + index * 50);
    });
  }

  /**
   * Precargar slides adyacentes para navegación fluida
   * @param {number} currentSlide - Slide actual
   */
  async preloadAdjacentSlides(currentSlide) {
    const toPreload = [];

    if (currentSlide > 1) toPreload.push(currentSlide - 1);
    if (currentSlide < this.totalSlides) toPreload.push(currentSlide + 1);

    toPreload.forEach((slideNum) => {
      if (!this.slides.has(slideNum)) {
        this.loadSlide(slideNum).catch((err) =>
          console.warn(`Failed to preload slide ${slideNum}:`, err)
        );
      }
    });
  }

  /**
   * Actualiza la UI (contadores, progreso, navegación)
   */
  updateUI() {
    this.updateCounter();
    this.updateProgress();
    this.updateNavButtons();

    // Actualizar quick nav si está disponible
    if (window.navigationManager) {
      window.navigationManager.updateQuickNavActive();
    }
  }

  /**
   * Actualiza el contador de slides
   */
  updateCounter() {
    const currentSlideElement = document.getElementById("current-slide");
    const totalSlidesElement = document.getElementById("total-slides");

    if (currentSlideElement) {
      currentSlideElement.textContent = this.currentSlide;
    }
    if (totalSlidesElement) {
      totalSlidesElement.textContent = this.totalSlides;
    }
  }

  /**
   * Actualiza la barra de progreso
   */
  updateProgress() {
    const progressFill = document.getElementById("progress-fill");
    if (progressFill) {
      const progress = (this.currentSlide / this.totalSlides) * 100;
      progressFill.style.width = `${progress}%`;
    }
  }

  /**
   * Actualiza los botones de navegación
   */
  updateNavButtons() {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    if (prevButton) {
      prevButton.disabled = this.currentSlide <= 1;
    }
    if (nextButton) {
      nextButton.disabled = this.currentSlide >= this.totalSlides;
    }
  }

  /**
   * Navegar a la siguiente slide
   */
  async nextSlide() {
    if (this.currentSlide < this.totalSlides && !this.isLoading) {
      await this.showSlide(this.currentSlide + 1);
    }
  }

  /**
   * Navegar a la slide anterior
   */
  async previousSlide() {
    if (this.currentSlide > 1 && !this.isLoading) {
      await this.showSlide(this.currentSlide - 1);
    }
  }

  /**
   * Ir a una slide específica
   * @param {number} slideNumber - Número de slide
   */
  async goToSlide(slideNumber) {
    if (
      slideNumber >= 1 &&
      slideNumber <= this.totalSlides &&
      !this.isLoading
    ) {
      await this.showSlide(slideNumber);
    }
  }

  /**
   * Recargar una slide específica
   * @param {number} slideNumber - Número de slide
   */
  async reloadSlide(slideNumber) {
    this.slides.delete(slideNumber);
    if (slideNumber === this.currentSlide) {
      await this.showSlide(slideNumber);
    }
  }

  /**
   * Crear slide de placeholder para desarrollo
   * @param {number} slideNumber - Número de slide
   */
  createPlaceholderSlide(slideNumber) {
    const config = this.slideConfig[slideNumber];
    return `
          <div class="container-fluid">
              <div class="row justify-content-center">
                  <div class="col-12 col-lg-10 col-xl-8">
                      <h2><i class="bi bi-hourglass-split"></i> Slide ${slideNumber}</h2>
                      <div class="architecture-box text-center">
                          <h3>${config?.title || "Título de la Slide"}</h3>
                          <p class="lead">Esta slide está en desarrollo...</p>
                          <div class="loading">
                              <i class="bi bi-gear-fill"></i>
                          </div>
                          <p class="mt-3">
                              <small>Sección: <strong>${
                                config?.section || "unknown"
                              }</strong></small>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }

  /**
   * Crear slide de error
   * @param {number} slideNumber - Número de slide
   */
  createErrorSlide(slideNumber) {
    return `
          <div class="container-fluid">
              <div class="row justify-content-center">
                  <div class="col-12 col-lg-10 col-xl-8">
                      <h2><i class="bi bi-exclamation-triangle text-warning"></i> Error en Slide ${slideNumber}</h2>
                      <div class="problem-card text-center">
                          <h3>No se pudo cargar el contenido</h3>
                          <p>Ha ocurrido un error al cargar esta diapositiva.</p>
                          <button class="btn btn-warning" onclick="slideManager.reloadSlide(${slideNumber})">
                              <i class="bi bi-arrow-clockwise"></i> Reintentar
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }

  /**
   * Mostrar error crítico
   * @param {string} message - Mensaje de error
   */
  showError(message) {
    this.container.innerHTML = `
          <div class="slide active">
              <div class="container-fluid">
                  <div class="row justify-content-center">
                      <div class="col-12 col-lg-8">
                          <div class="problem-card text-center">
                              <h2><i class="bi bi-exclamation-triangle"></i> Error</h2>
                              <p class="lead">${message}</p>
                              <button class="btn btn-warning" onclick="location.reload()">
                                  <i class="bi bi-arrow-clockwise"></i> Recargar Página
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }


  /**
   * Obtener datos de la slide actual
   */
  getCurrentSlideData() {
    return this.slides.get(this.currentSlide);
  }

  /**
   * Obtener configuración de una slide
   * @param {number} slideNumber - Número de slide
   */
  getSlideConfig(slideNumber) {
    return this.slideConfig[slideNumber];
  }

  /**
   * Verificar si una slide está cargada
   * @param {number} slideNumber - Número de slide
   */
  isSlideLoaded(slideNumber) {
    return this.slides.has(slideNumber) && this.slides.get(slideNumber).loaded;
  }

  /**
   * Obtener número de slides cargadas
   */
  getLoadedSlidesCount() {
    return Array.from(this.slides.values()).filter((slide) => slide.loaded)
      .length;
  }

  /**
   * Obtener progreso de carga
   */
  getLoadingProgress() {
    return (this.getLoadedSlidesCount() / this.totalSlides) * 100;
  }

  /**
   * Obtener estado del SlideManager
   */
  getState() {
    return {
      currentSlide: this.currentSlide,
      totalSlides: this.totalSlides,
      loadedSlides: this.getLoadedSlidesCount(),
      loadingProgress: this.getLoadingProgress(),
      isLoading: this.isLoading,
      initialized: this.initialized,
    };
  }

  /**
   * Obtener información de todas las slides
   */
  getAllSlidesInfo() {
    return Object.entries(this.slideConfig).map(([num, config]) => ({
      number: parseInt(num),
      title: config.title,
      section: config.section,
      loaded: this.isSlideLoaded(parseInt(num)),
    }));
  }

  /**
   * Limpiar cache de slides (útil para desarrollo)
   */
  clearCache() {
    this.slides.clear();
    console.log("🗑️ Cache de slides limpiado");
  }

  /**
   * Precargar todas las slides (útil para presentaciones offline)
   */
  async preloadAll() {
    console.log("📦 Precargando todas las slides...");
    const promises = [];

    for (let i = 1; i <= this.totalSlides; i++) {
      if (!this.slides.has(i)) {
        promises.push(this.loadSlide(i));
      }
    }

    try {
      await Promise.all(promises);
      console.log("✅ Todas las slides precargadas exitosamente");
    } catch (error) {
      console.warn("⚠️ Algunas slides no pudieron precargarse:", error);
    }
  }
}

// Funciones globales para compatibilidad con navegación
window.SlideManager = SlideManager;
