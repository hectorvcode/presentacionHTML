// js/slides/slides.js - Definiciones completas de todas las slides

/**
 * Clase SlidesData
 * Contiene todas las definiciones de contenido HTML para cada slide
 * Organizada de forma modular para fácil mantenimiento
 */
class SlidesData {
  /**
   * Retorna un objeto con todas las slides numeradas
   * @returns {Object} Objeto con las slides 1-21
   */
  static getAllSlides() {
    return {
      1: SlidesData.getSlide1(),
      2: SlidesData.getSlide2(),
      3: SlidesData.getSlide3(),
      4: SlidesData.getSlide4(),
      5: SlidesData.getSlide5(),
      6: SlidesData.getSlide6(),
      7: SlidesData.getSlide7(),
      8: SlidesData.getSlide8(),
      9: SlidesData.getSlide9(),
      10: SlidesData.getSlide10(),
      11: SlidesData.getSlide11(),
      12: SlidesData.getSlide12(),
      13: SlidesData.getSlide13(),
      14: SlidesData.getSlide14(),
      15: SlidesData.getSlide15(),
      16: SlidesData.getSlide16(),
      17: SlidesData.getSlide17(),
      18: SlidesData.getSlide18(),
      19: SlidesData.getSlide19(),
      20: SlidesData.getSlide20(),
      21: SlidesData.getSlide21(),
    };
  }

  static getSlide1() {
    return `
          <div class="container-fluid">
              <div class="row justify-content-center">
                  <div class="col-12 col-lg-10 col-xl-8">
                      <h1 class="text-center mb-4">Desafío de Almacenamiento en la Nube</h1>
                      
                      <div class="text-center mb-5">
                          <h3 class="mb-3">Soluciones Innovadoras para Empresas de Análisis de Datos</h3>
                          <h3 style="color: var(--aws-light-blue);">Sector de Viajes</h3>
                      </div>
                      
                      <div class="architecture-box">
                          <h3 style="color: var(--aws-orange); margin-bottom: 1.5rem;">
                              <i class="bi bi-people-fill"></i> Información del Grupo
                          </h3>
                          <div class="row">
                              <div class="col-md-6 mb-3">
                                  <p><strong>Curso:</strong> Desarrollo de Soluciones Cloud</p>
                                  <p><strong>Código:</strong> 2310-7A MOM 2 VIRTUAL</p>
                                  <p><strong>Actividad:</strong> Etapa Profundización </p>
                                  <p><strong>Fecha:</strong> Mayo 2025</p>
                              </div>
                              <div class="col-md-6">
                                  <p><strong>Integrantes del Grupo:</strong></p>
                                  <ul class="mt-3">
                                      <li>Hector Fabio Vasquez Lopez</li>
                                      <li>cc. 80058158 2</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="text-center mt-4">
                          <p style="font-size: clamp(1.2rem, 2.5vw, 1.6rem); color: var(--aws-light-blue);">
                              <strong><i class="bi bi-building"></i> Fundación Universitaria Compensar</strong>
                          </p>
                          <p style="font-size: clamp(1rem, 2vw, 1.2rem); margin-top: 0.5rem; opacity: 0.8;">
                              Presentación Académica - Arquitectura de Soluciones Cloud
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }

  static getSlide2() {
    return `
          <div class="container-fluid">
              <div class="row justify-content-center">
                  <div class="col-12 col-lg-10 col-xl-8">
                      <h2><i class="bi bi-list-check"></i> Agenda de Presentación</h2>
                      
                      <div class="architecture-box mb-4">
                          <h3 style="color: var(--aws-orange); margin-bottom: 1.5rem;">
                              <i class="bi bi-target"></i> Objetivos de la Presentación
                          </h3>
                          <ul>
                              <li>Analizar el caso práctico de empresa de análisis de datos de viajes</li>
                              <li>Proponer solución de almacenamiento en la nube escalable y eficiente</li>
                              <li>Evaluar factores clave: rendimiento, seguridad, escalabilidad y costos</li>
                              <li>Demostrar impacto positivo en procesos empresariales</li>
                          </ul>
                      </div>

                      <div class="row">
                          <div class="col-md-6 mb-3">
                              <div class="service-box h-100">
                                  <h4><i class="bi bi-diagram-3"></i> Secciones Principales</h4>
                                  <ul>
                                      <li><strong>Slides 1-5:</strong> Análisis del Caso Práctico</li>
                                      <li><strong>Slides 6-8:</strong> Arquitectura Actual vs Propuesta</li>
                                      <li><strong>Slides 9-12:</strong> Servicios AWS Detallados</li>
                                      <li><strong>Slides 13-15:</strong> Factores Clave Considerados</li>
                                      <li><strong>Slides 16-21:</strong> Implementación y Conclusiones</li>
                                  </ul>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="impact-card h-100">
                                  <h4><i class="bi bi-bullseye"></i> Resultados Esperados</h4>
                                  <ul>
                                      <li><strong>Justificación técnica:</strong> Solución arquitectural sólida</li>
                                      <li><strong>Análisis financiero:</strong> ROI y optimización de costos</li>
                                      <li><strong>Plan de implementación:</strong> Timeline realista de 8 semanas</li>
                                      <li><strong>Métricas de éxito:</strong> KPIs medibles y alcanzables</li>
                                      <li><strong>Impacto empresarial:</strong> Ventaja competitiva demostrable</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="stat-box mt-4">
                          <div class="row">
                              <div class="col-md-4">
                                  <span class="stat-number">21</span>
                                  <p>Slides de contenido técnico y estratégico</p>
                              </div>
                              <div class="col-md-4">
                                  <span class="stat-number">4</span>
                                  <p>Servicios AWS principales analizados</p>
                              </div>
                              <div class="col-md-4">
                                  <span class="stat-number">8 sem</span>
                                  <p>Timeline de implementación propuesto</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }

  static getSlide3() {
    return `
          <div class="container-fluid">
              <div class="row justify-content-center">
                  <div class="col-12 col-lg-10 col-xl-8">
                      <h2><i class="bi bi-building"></i> Contexto del Caso Práctico</h2>
                      
                      <div class="row">
                          <div class="col-lg-6 mb-4">
                              <div class="architecture-box mb-3">
                                  <h3><i class="bi bi-geo-alt"></i> Empresa Objetivo</h3>
                                  <ul>
                                      <li><span class="highlight">Sector:</span> Análisis de datos para sitios de viajes</li>
                                      <li><span class="highlight">Alcance:</span> Global con múltiples regiones</li>
                                      <li><span class="highlight">Modelo:</span> B2B y B2C en turismo digital</li>
                                      <li><span class="highlight">Clientes:</span> Agencias, hoteles, aerolíneas, usuarios finales</li>
                                      <li><span class="highlight">Geografía:</span> América, Europa, Asia-Pacífico</li>
                                  </ul>
                              </div>

                              <div class="service-box">
                                  <h3><i class="bi bi-gear-wide-connected"></i> Servicios Ofrecidos</h3>
                                  <ul>
                                      <li><strong>Analytics:</strong> Análisis de tendencias de viajes</li>
                                      <li><strong>Personalización:</strong> Recomendaciones personalizadas</li>
                                      <li><strong>Pricing:</strong> Optimización de precios dinámicos</li>
                                      <li><strong>Seguridad:</strong> Detección de fraude en reservas</li>
                                      <li><strong>BI:</strong> Business Intelligence para turismo</li>
                                      <li><strong>API:</strong> Servicios de datos en tiempo real</li>
                                  </ul>
                              </div>
                          </div>

                          <div class="col-lg-6">
                              <div class="stat-box mb-3">
                                  <span class="stat-number">Billones</span>
                                  <p><i class="bi bi-database"></i> de eventos de clientes procesados diariamente</p>
                              </div>

                              <div class="stat-box mb-3">
                                  <span class="stat-number">24/7</span>
                                  <p><i class="bi bi-clock"></i> disponibilidad requerida para operaciones globales</p>
                              </div>

                              <div class="stat-box mb-3">
                                  <span class="stat-number">Multi-región</span>
                                  <p><i class="bi bi-globe"></i> presencia en América, Europa y Asia-Pacífico</p>
                              </div>

                              <div class="problem-card">
                                  <h3 style="color: #ff6b6b;"><i class="bi bi-exclamation-triangle"></i> Desafío Principal</h3>
                                  <p class="lead">
                                      Almacenar y procesar eficientemente <strong>miles de millones de eventos</strong> 
                                      de clientes por día, manteniendo alta disponibilidad, seguridad y costos optimizados.
                                  </p>
                                  <div class="mt-3">
                                      <small><strong>Volumen actual:</strong> 50TB diarios | <strong>Crecimiento:</strong> 300% anual</small>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }

  static getSlide4() {
    return `
          <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2>Análisis Detallado del Problema</h2>
                        
                        <div class="row">
                            <div class="col-md-6 col-xl-3 mb-3">
                                <div class="problem-card h-100">
                                    <h4>🔥 Volumen de Datos</h4>
                                    <ul>
                                        <li><strong>Escala:</strong> Petabytes de datos por mes</li>
                                        <li><strong>Velocidad:</strong> Millones de eventos por segundo en picos</li>
                                        <li><strong>Variedad:</strong> Datos estructurados, semi-estructurados y no estructurados</li>
                                        <li><strong>Estacionalidad:</strong> Picos durante temporadas altas de viajes</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3 mb-3">
                                <div class="problem-card h-100">
                                    <h4>⚡ Rendimiento Crítico</h4>
                                    <ul>
                                        <li><strong>Latencia:</strong> Respuestas en tiempo real (&lt;100ms)</li>
                                        <li><strong>Throughput:</strong> Procesamiento masivo concurrente</li>
                                        <li><strong>Consultas:</strong> Análisis complejos y agregaciones</li>
                                        <li><strong>Disponibilidad:</strong> SLA de 99.9% mínimo</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3 mb-3">
                                <div class="problem-card h-100">
                                    <h4>🔒 Seguridad y Compliance</h4>
                                    <ul>
                                        <li><strong>GDPR:</strong> Protección de datos personales</li>
                                        <li><strong>PCI-DSS:</strong> Seguridad en datos de pagos</li>
                                        <li><strong>Encriptación:</strong> En reposo y en tránsito</li>
                                        <li><strong>Auditoría:</strong> Trazabilidad completa de accesos</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3 mb-3">
                                <div class="problem-card h-100">
                                    <h4>💰 Optimización de Costos</h4>
                                    <ul>
                                        <li><strong>Escalabilidad:</strong> Pay-as-you-use sin sobre-provisioning</li>
                                        <li><strong>Lifecycle:</strong> Gestión automática de datos históricos</li>
                                        <li><strong>TCO:</strong> Reducción vs infraestructura tradicional</li>
                                        <li><strong>ROI:</strong> Retorno medible de la inversión</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="architecture-box mt-4">
                            <h3 style="color: var(--aws-orange);">Pregunta Clave de Negocio</h3>
                            <p style="font-size: clamp(1rem, 2.5vw, 1.6rem); text-align: center; color: var(--aws-light-blue); font-style: italic;">
                                "¿Cómo implementar una solución de almacenamiento que maneje eficientemente billones de eventos diarios, 
                                garantizando alta disponibilidad, seguridad y optimización de costos para el crecimiento sostenible?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      `;
  }

  static getSlide5() {
    return `
          <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2>Arquitectura Actual del Sistema</h2>
                        
                        <div class="architecture-box mb-4">
                            <h3 style="color: var(--aws-orange); margin-bottom: 1.5rem;">Flujo de Datos Existente</h3>
                            
                            <!-- Primera fila del flujo -->
                            <div class="row text-center mb-3">
                                <div class="col-md-4 mb-3">
                                    <div class="flow-item">
                                        <div class="service-icon mx-auto">API</div>
                                        <h4>Amazon API Gateway</h4>
                                        <p>Punto de entrada para eventos de clientes</p>
                                    </div>
                                </div>
                                
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="flow-arrow">→</div>
                                </div>
                                <div class="col-12 d-md-none">
                                    <div class="flow-arrow">↓</div>
                                </div>
                                
                                <div class="col-md-4 mb-3">
                                    <div class="flow-item">
                                        <div class="service-icon mx-auto">K</div>
                                        <h4>Amazon Kinesis</h4>
                                        <p>Stream de datos en tiempo real</p>
                                    </div>
                                </div>
                                
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="flow-arrow">→</div>
                                </div>
                                <div class="col-12 d-md-none">
                                    <div class="flow-arrow">↓</div>
                                </div>
                                
                                <div class="col-md-2 mb-3">
                                    <div class="flow-item">
                                        <div class="service-icon mx-auto">λ</div>
                                        <h4>AWS Lambda</h4>
                                        <p>Procesamiento serverless</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Segunda fila del flujo -->
                            <div class="row text-center">
                                <div class="col-md-4 mb-3">
                                    <div class="flow-item">
                                        <div class="service-icon mx-auto">ECS</div>
                                        <h4>Amazon ECS</h4>
                                        <p>Contenedores para procesamiento complejo</p>
                                    </div>
                                </div>
                                
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="flow-arrow">→</div>
                                </div>
                                <div class="col-12 d-md-none">
                                    <div class="flow-arrow">↓</div>
                                </div>
                                
                                <div class="col-md-4 mb-3">
                                    <div class="flow-item">
                                        <div class="service-icon mx-auto">KF</div>
                                        <h4>Kinesis Data Firehose</h4>
                                        <p>Entrega de datos a destinos</p>
                                    </div>
                                </div>
                                
                                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                    <div class="flow-arrow">→</div>
                                </div>
                                <div class="col-12 d-md-none">
                                    <div class="flow-arrow">↓</div>
                                </div>
                                
                                <div class="col-md-2 mb-3">
                                    <div class="flow-item">
                                        <div class="service-icon mx-auto" style="background: #ff6b6b;">?</div>
                                        <h4 style="color: #ff6b6b;">¿Almacenamiento?</h4>
                                        <p>Destino final no definido</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 mb-3">
                                <div class="architecture-box h-100">
                                    <h3>Fortalezas Actuales</h3>
                                    <ul>
                                        <li>Ingesta escalable con Kinesis</li>
                                        <li>Procesamiento serverless con Lambda</li>
                                        <li>Contenedores para lógica compleja</li>
                                        <li>API Gateway para gestión de tráfico</li>
                                        <li>Streaming confiable con Firehose</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-lg-6">
                                <div class="problem-card h-100">
                                    <h3>Gaps Identificados</h3>
                                    <ul>
                                        <li><strong>Sin capa de almacenamiento definida</strong></li>
                                        <li>Falta estrategia de datos históricos</li>
                                        <li>Sin optimización de costos por lifecycle</li>
                                        <li>Ausencia de analytics en tiempo real</li>
                                        <li>No hay backup y disaster recovery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="stat-box mt-4">
                            <p style="font-size: clamp(1rem, 2.5vw, 1.4rem); color: var(--aws-orange);">
                                <strong>Oportunidad:</strong> Completar la arquitectura con una solución de almacenamiento 
                                robusta que maximice el valor de los datos y optimice costos operacionales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      `;
  }

  static getSlide6() {
    return `
          <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2>Desafíos Identificados en la Arquitectura</h2>
                        
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="problem-card h-100">
                                    <h4><i class="bi bi-exclamation-triangle"></i> Gaps Críticos Actuales</h4>
                                    <ul>
                                        <li><strong>Almacenamiento sin definir:</strong> Falta destino final para Kinesis Firehose</li>
                                        <li><strong>Sin estrategia de lifecycle:</strong> Datos acumulándose sin gestión</li>
                                        <li><strong>Falta de analytics:</strong> No hay capacidad de consulta histórica</li>
                                        <li><strong>Sin backup/DR:</strong> Riesgo de pérdida de datos críticos</li>
                                        <li><strong>Costos no optimizados:</strong> Sin tiering automático</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6 mb-4">
                                <div class="problem-card h-100">
                                    <h4><i class="bi bi-graph-down-arrow"></i> Impactos en el Negocio</h4>
                                    <ul>
                                        <li><strong>Pérdida de insights:</strong> Datos sin análisis pierden valor</li>
                                        <li><strong>Escalabilidad limitada:</strong> Crecimiento restringido</li>
                                        <li><strong>Compliance en riesgo:</strong> Sin auditoría ni retención</li>
                                        <li><strong>Costos crecientes:</strong> Sin optimización automática</li>
                                        <li><strong>Ventaja competitiva perdida:</strong> Analytics limitados</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="solution-card">
                            <h3><i class="bi bi-lightbulb"></i> Oportunidad de Solución</h3>
                            <p class="lead">Implementar una <strong>arquitectura de Data Lake híbrida</strong> que complete el pipeline existente con:</p>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <ul>
                                        <li>Almacenamiento escalable y económico</li>
                                        <li>Analytics en tiempo real y histórico</li>
                                        <li>Gestión automática del ciclo de vida</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li>Seguridad y compliance integrados</li>
                                        <li>Optimización continua de costos</li>
                                        <li>Escalabilidad sin límites</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="stat-box mt-4">
                            <div class="row">
                                <div class="col-md-4">
                                    <span class="stat-number">90%</span>
                                    <p>Reducción en tiempo de implementación vs solución custom</p>
                                </div>
                                <div class="col-md-4">
                                    <span class="stat-number">60%</span>
                                    <p>Ahorro en costos operacionales estimado</p>
                                </div>
                                <div class="col-md-4">
                                    <span class="stat-number">99.99%</span>
                                    <p>Disponibilidad y durabilidad de datos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      `;
  }

  static getSlide7() {
    return `
      <div class="container-fluid slide-content">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <h2>Solución Propuesta: Arquitectura Data Lake Híbrida</h2>
            
            <div class="architecture-box mb-4">
              <h3 style="color: var(--aws-orange); text-align: center; margin-bottom: 2rem;">
                <i class="bi bi-diagram-3"></i> Arquitectura de Almacenamiento Multi-Capa
              </h3>
              
              <!-- Componentes principales en fila horizontal -->
              <div class="row text-center mb-4">
                <div class="col-md-4 mb-3">
                  <div class="service-icon mx-auto mb-3" style="background: var(--success-green); width: 100px; height: 100px; font-size: 2.5rem;">S3</div>
                  <h5 style="color: var(--success-green);">Amazon S3</h5>
                  <p><strong>Data Lake Principal</strong></p>
                  <small>Almacenamiento escalable con Intelligent Tiering</small>
                </div>
                
                <div class="col-md-4 mb-3">
                  <div class="service-icon mx-auto mb-3" style="background: var(--aws-light-blue); color: var(--aws-dark-blue); width: 100px; height: 100px; font-size: 2.5rem;">RS</div>
                  <h5 style="color: var(--aws-light-blue);">Amazon Redshift</h5>
                  <p><strong>Data Warehouse</strong></p>
                  <small>Analytics complejos y consultas SQL</small>
                </div>
                
                <div class="col-md-4 mb-3">
                  <div class="service-icon mx-auto mb-3" style="background: var(--warning-yellow); color: var(--aws-dark-blue); width: 100px; height: 100px; font-size: 2.5rem;">DB</div>
                  <h5 style="color: var(--warning-yellow);">DynamoDB</h5>
                  <p><strong>NoSQL Rápido</strong></p>
                  <small>Acceso de baja latencia y metadatos</small>
                </div>
              </div>
              
              <!-- Conectores visuales -->
              <div class="text-center mb-4">
                <span style="color: var(--aws-orange); font-size: 1.5rem; font-weight: bold;">
                  ↔️ Integración Completa ↔️
                </span>
              </div>
            </div>
  
            <!-- Estrategia por capas -->
            <div class="row">
              <div class="col-lg-4 mb-3">
                <div class="feature-card h-100" style="border-left: 5px solid #87ceeb;">
                  <div class="feature-icon" style="font-size: 2rem;">🗄️</div>
                  <h4 style="color: #87ceeb;">Capa Fría</h4>
                  <p><strong>S3 Glacier & Deep Archive</strong></p>
                  <ul class="text-start">
                    <li>Datos históricos >90 días</li>
                    <li>Compliance y auditorías</li>
                    <li>Costo ultra-bajo ($0.0036/GB/mes)</li>
                    <li>Durabilidad 99.999999999%</li>
                    <li>Retención a largo plazo</li>
                  </ul>
                </div>
              </div>
  
              <div class="col-lg-4 mb-3">
                <div class="feature-card h-100" style="border-left: 5px solid #ffc107;">
                  <div class="feature-icon" style="font-size: 2rem;">⚡</div>
                  <h4 style="color: #ffc107;">Capa Tibia</h4>
                  <p><strong>S3 Standard-IA + Redshift</strong></p>
                  <ul class="text-start">
                    <li>Datos 7-90 días</li>
                    <li>Analytics regulares y reportes</li>
                    <li>Balance costo-rendimiento</li>
                    <li>Consultas complejas SQL</li>
                    <li>Dashboards empresariales</li>
                  </ul>
                </div>
              </div>
  
              <div class="col-lg-4 mb-3">
                <div class="feature-card h-100" style="border-left: 5px solid #28a745;">
                  <div class="feature-icon" style="font-size: 2rem;">🔥</div>
                  <h4 style="color: #28a745;">Capa Caliente</h4>
                  <p><strong>DynamoDB + S3 Standard</strong></p>
                  <ul class="text-start">
                    <li>Datos últimos 7 días</li>
                    <li>Acceso sub-segundo (&lt;1ms)</li>
                    <li>Consultas frecuentes API</li>
                    <li>Auto-scaling dinámico</li>
                    <li>Cache de sesiones activas</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="solution-card mt-4">
              <h4><i class="bi bi-gear"></i> Beneficios Clave de la Solución Híbrida</h4>
              <div class="row">
                <div class="col-md-6">
                  <ul>
                    <li><strong>Optimización automática:</strong> Intelligent Tiering de S3</li>
                    <li><strong>Escalabilidad ilimitada:</strong> Petabytes sin límites</li>
                    <li><strong>Performance optimizada:</strong> Cada carga en su capa ideal</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul>
                    <li><strong>Costos predictibles:</strong> Pay-as-you-use real</li>
                    <li><strong>Integración nativa:</strong> Con pipeline existente</li>
                    <li><strong>Gestión simplificada:</strong> Policies automáticas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static getSlide8() {
    return `
      <div class="container-fluid slide-content">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-11 col-xl-10">
            <h2>Arquitectura Propuesta: Diagrama Completo</h2>
            
            <div class="architecture-box">
              <h4 style="color: var(--aws-orange); text-align: center; margin-bottom: 2rem;">
                Pipeline de Datos End-to-End con Almacenamiento Híbrido
              </h4>
              
              <!-- Capa de Ingesta -->
              <div class="mb-4">
                <h5 style="color: var(--aws-light-blue); border-bottom: 2px solid var(--aws-light-blue); padding-bottom: 0.5rem; margin-bottom: 1rem;">
                  <i class="bi bi-arrow-down-circle"></i> 1. Capa de Ingesta
                </h5>
                <div class="row text-center">
                  <div class="col-md-3">
                    <div class="service-icon mx-auto mb-2" style="width: 80px; height: 80px; font-size: 1.8rem;">API</div>
                    <h6>API Gateway</h6>
                    <small>Eventos de clientes</small>
                  </div>
                  <div class="col-md-1 d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-right" style="color: var(--aws-orange); font-size: 2rem;"></i>
                  </div>
                  <div class="col-md-3">
                    <div class="service-icon mx-auto mb-2" style="width: 80px; height: 80px; font-size: 1.8rem;">K</div>
                    <h6>Kinesis Streams</h6>
                    <small>Streaming tiempo real</small>
                  </div>
                  <div class="col-md-1 d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-right" style="color: var(--aws-orange); font-size: 2rem;"></i>
                  </div>
                  <div class="col-md-3">
                    <div class="service-icon mx-auto mb-2" style="width: 80px; height: 80px; font-size: 1.8rem;">λ</div>
                    <h6>Lambda</h6>
                    <small>Procesamiento</small>
                  </div>
                </div>
              </div>
  
              <!-- Capa de Procesamiento -->
              <div class="mb-4">
                <h5 style="color: var(--aws-light-blue); border-bottom: 2px solid var(--aws-light-blue); padding-bottom: 0.5rem; margin-bottom: 1rem;">
                  <i class="bi bi-cpu"></i> 2. Capa de Procesamiento
                </h5>
                <div class="row text-center">
                  <div class="col-md-5">
                    <div class="service-icon mx-auto mb-2" style="width: 80px; height: 80px; font-size: 1.8rem;">ECS</div>
                    <h6>Amazon ECS</h6>
                    <small>Lógica compleja</small>
                  </div>
                  <div class="col-md-2 d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-right" style="color: var(--aws-orange); font-size: 2rem;"></i>
                  </div>
                  <div class="col-md-5">
                    <div class="service-icon mx-auto mb-2" style="width: 80px; height: 80px; font-size: 1.8rem;">KF</div>
                    <h6>Kinesis Firehose</h6>
                    <small>Entrega automática</small>
                  </div>
                </div>
              </div>
  
              <!-- Capa de Almacenamiento - NUEVA SOLUCIÓN -->
              <div class="mb-4" style="background: rgba(40, 167, 69, 0.15); padding: 1.5rem; border-radius: 15px; border: 3px solid var(--success-green);">
                <h5 style="color: var(--success-green); border-bottom: 2px solid var(--success-green); padding-bottom: 0.5rem; margin-bottom: 1rem;">
                  <i class="bi bi-database"></i> 3. Capa de Almacenamiento - NUEVA SOLUCIÓN
                </h5>
                <div class="row text-center">
                  <div class="col-md-4">
                    <div class="service-icon mx-auto mb-2" style="background: var(--success-green); width: 90px; height: 90px; font-size: 2rem;">S3</div>
                    <h6 style="color: var(--success-green);">Amazon S3</h6>
                    <small><strong>Data Lake principal<br>Intelligent Tiering</strong></small>
                  </div>
                  <div class="col-md-4">
                    <div class="service-icon mx-auto mb-2" style="background: var(--aws-light-blue); color: var(--aws-dark-blue); width: 90px; height: 90px; font-size: 2rem;">RS</div>
                    <h6 style="color: var(--aws-light-blue);">Redshift</h6>
                    <small><strong>Data Warehouse<br>Analytics complejos</strong></small>
                  </div>
                  <div class="col-md-4">
                    <div class="service-icon mx-auto mb-2" style="background: var(--warning-yellow); color: var(--aws-dark-blue); width: 90px; height: 90px; font-size: 2rem;">DB</div>
                    <h6 style="color: var(--warning-yellow);">DynamoDB</h6>
                    <small><strong>NoSQL rápido<br>Metadatos/Sesiones</strong></small>
                  </div>
                </div>
                
                <!-- Conectores bidireccionales -->
                <div class="text-center mt-3">
                  <span style="color: var(--success-green); font-size: 1.3rem; font-weight: bold;">
                    ⇄ Integración Bidireccional ⇄
                  </span>
                </div>
              </div>
  
              <!-- Capa de Analytics -->
              <div>
                <h5 style="color: var(--aws-light-blue); border-bottom: 2px solid var(--aws-light-blue); padding-bottom: 0.5rem; margin-bottom: 1rem;">
                  <i class="bi bi-graph-up"></i> 4. Capa de Analytics
                </h5>
                <div class="row text-center">
                  <div class="col-md-4">
                    <div class="service-icon mx-auto mb-2" style="background: #9d4edd; width: 80px; height: 80px; font-size: 1.8rem;">QS</div>
                    <h6>QuickSight</h6>
                    <small>Dashboards BI</small>
                  </div>
                  <div class="col-md-4">
                    <div class="service-icon mx-auto mb-2" style="background: #f72585; width: 80px; height: 80px; font-size: 1.8rem;">SM</div>
                    <h6>SageMaker</h6>
                    <small>Machine Learning</small>
                  </div>
                  <div class="col-md-4">
                    <div class="service-icon mx-auto mb-2" style="background: #4cc9f0; width: 80px; height: 80px; font-size: 1.8rem;">API</div>
                    <h6>APIs Analytics</h6>
                    <small>Integración apps</small>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Beneficios clave -->
            <div class="solution-card mt-4">
              <h4><i class="bi bi-check-circle"></i> Arquitectura Completa que Resuelve Todos los Gaps</h4>
              <div class="row">
                <div class="col-md-6">
                  <ul>
                    <li><strong>✅ Almacenamiento escalable:</strong> S3 como columna vertebral</li>
                    <li><strong>✅ Analytics poderosos:</strong> Redshift para consultas complejas</li>
                    <li><strong>✅ Acceso ultra-rápido:</strong> DynamoDB para datos frecuentes</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul>
                    <li><strong>✅ Integración seamless:</strong> Con pipeline existente</li>
                    <li><strong>✅ Optimización automática:</strong> Costos y performance</li>
                    <li><strong>✅ Escalabilidad ilimitada:</strong> Crecimiento sin límites</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static getSlide9() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-cloud"></i> Amazon S3: Almacenamiento Principal</h2>
                        
                        <div class="service-box mb-4">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <div class="service-icon mx-auto" style="width: 120px; height: 120px; font-size: 3rem;">S3</div>
                                </div>
                                <div class="col-md-9">
                                    <h3>Simple Storage Service - Columna Vertebral del Data Lake</h3>
                                    <p class="lead">Almacenamiento objeto escalable, duradero y económico diseñado para manejar cualquier volumen de datos desde cualquier lugar.</p>
                                    <div class="row mt-3">
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Escalabilidad:</strong><br>
                                            <small>Virtualmente ilimitada</small>
                                        </div>
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Durabilidad:</strong><br>
                                            <small>99.999999999% (11 9's)</small>
                                        </div>
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Disponibilidad:</strong><br>
                                            <small>99.99% SLA</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="tier-card h-100">
                                    <h4><i class="bi bi-lightning"></i> S3 Intelligent-Tiering</h4>
                                    <p><strong>Optimización automática de costos sin impacto en rendimiento</strong></p>
                                    <ul>
                                        <li><strong>Frequent Access:</strong> Datos accedidos regularmente</li>
                                        <li><strong>Infrequent Access:</strong> No accedidos por 30 días</li>
                                        <li><strong>Archive Instant:</strong> No accedidos por 90 días</li>
                                        <li><strong>Archive Access:</strong> No accedidos por 90-180 días</li>
                                        <li><strong>Deep Archive:</strong> No accedidos por 180+ días</li>
                                    </ul>
                                    <div class="stat-box mt-3">
                                        <span class="stat-number">68%</span>
                                        <p>Ahorro promedio en costos de almacenamiento</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 mb-4">
                                <div class="architecture-box h-100">
                                    <h4><i class="bi bi-folder-plus"></i> Estructura de Particionado</h4>
                                    <p><strong>Organización optimizada para consultas eficientes</strong></p>
                                    <div style="background: #000; padding: 1rem; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 0.9rem; margin: 1rem 0;">
                                        <div style="color: var(--aws-orange);">/travel-data/</div>
                                        <div style="color: var(--aws-light-blue); margin-left: 1rem;">├── year=2025/</div>
                                        <div style="color: var(--aws-light-blue); margin-left: 2rem;">│   ├── month=05/</div>
                                        <div style="color: var(--aws-light-blue); margin-left: 3rem;">│   │   ├── day=24/</div>
                                        <div style="color: var(--aws-light-blue); margin-left: 4rem;">│   │   │   ├── hour=10/</div>
                                        <div style="color: white; margin-left: 5rem;">│   │   │   │   ├── region=americas/</div>
                                        <div style="color: white; margin-left: 5rem;">│   │   │   │   ├── region=europe/</div>
                                        <div style="color: white; margin-left: 5rem;">│   │   │   │   └── region=asia/</div>
                                    </div>
                                    <ul>
                                        <li><strong>Partición por tiempo:</strong> Consultas eficientes por fecha</li>
                                        <li><strong>Partición geográfica:</strong> Análisis regional optimizado</li>
                                        <li><strong>Formato Parquet:</strong> Almacenamiento columnar</li>
                                        <li><strong>Compresión GZIP:</strong> Reducción 70-80% en tamaño</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">🔒</div>
                                <h5>Seguridad Integrada</h5>
                                <ul class="text-start">
                                    <li>Cifrado AES-256 en reposo</li>
                                    <li>SSL/TLS en tránsito</li>
                                    <li>IAM fine-grained access</li>
                                    <li>Bucket policies granulares</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">📊</div>
                                <h5>Analytics Integrados</h5>
                                <ul class="text-start">
                                    <li>S3 Select para consultas in-place</li>
                                    <li>Athena para SQL queries</li>
                                    <li>Redshift Spectrum integration</li>
                                    <li>QuickSight direct connect</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">⚡</div>
                                <h5>Performance</h5>
                                <ul class="text-start">
                                    <li>3,500 PUT/POST/DELETE por segundo</li>
                                    <li>5,500 GET/HEAD por segundo</li>
                                    <li>Transfer Acceleration disponible</li>
                                    <li>Multi-part upload para archivos grandes</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">🔄</div>
                                <h5>Gestión del Ciclo de Vida</h5>
                                <ul class="text-start">
                                    <li>Transiciones automáticas</li>
                                    <li>Eliminación programada</li>
                                    <li>Versioning para protección</li>
                                    <li>Cross-Region Replication</li>
                                </ul>
                            </div>
                        </div>

                        <div class="solution-card mt-4">
                            <h4><i class="bi bi-target"></i> Beneficio Específico para Análisis de Viajes</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul>
                                        <li><strong>Estacionalidad:</strong> Auto-scaling para picos de temporada alta</li>
                                        <li><strong>Multi-región:</strong> Datos cerca de usuarios globales</li>
                                        <li><strong>Compliance:</strong> GDPR ready con data residency</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li><strong>Analytics históricos:</strong> Años de datos para ML</li>
                                        <li><strong>Real-time + Batch:</strong> Soporta ambos patrones</li>
                                        <li><strong>Integración APIs:</strong> Conecta con sistemas de reservas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide10() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-graph-up"></i> Amazon Redshift: Data Warehouse</h2>
                        
                        <div class="service-box mb-4">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <div class="service-icon mx-auto" style="width: 120px; height: 120px; font-size: 2.5rem; background: var(--aws-light-blue); color: var(--aws-dark-blue);">RS</div>
                                </div>
                                <div class="col-md-9">
                                    <h3>Análisis de Datos a Escala de Petabytes</h3>
                                    <p class="lead">Data warehouse completamente administrado que facilita el análisis de datos usando SQL estándar y herramientas de BI existentes.</p>
                                    <div class="row mt-3">
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Performance:</strong><br>
                                            <small>Hasta 10x más rápido que tradicionales</small>
                                        </div>
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Escala:</strong><br>
                                            <small>De gigabytes a petabytes</small>
                                        </div>
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Costo:</strong><br>
                                            <small>Hasta 75% menos costoso</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="architecture-box h-100">
                                    <h4><i class="bi bi-speedometer2"></i> Características Técnicas</h4>
                                    <ul>
                                        <li><strong>Almacenamiento Columnar:</strong> Compresión y consultas optimizadas</li>
                                        <li><strong>Procesamiento Paralelo Masivo (MPP):</strong> Distribución automática de consultas</li>
                                        <li><strong>Redshift Spectrum:</strong> Consultas directas sobre S3 sin ETL</li>
                                        <li><strong>Auto-scaling:</strong> Ajuste automático de capacidad</li>
                                        <li><strong>Machine Learning:</strong> Funciones ML integradas con SQL</li>
                                        <li><strong>Concurrency Scaling:</strong> Soporte para miles de usuarios concurrentes</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6 mb-4">
                                <div class="tier-card h-100">
                                    <h4><i class="bi bi-diagram-2"></i> Arquitectura de Consultas</h4>
                                    <div class="flow-container">
                                        <div class="flow-item">
                                            <div style="background: var(--aws-light-blue); color: var(--aws-dark-blue); padding: 0.5rem 1rem; border-radius: 8px; margin: 0.5rem;">
                                                <strong>SQL Query</strong>
                                            </div>
                                        </div>
                                        <div class="flow-arrow">↓</div>
                                        <div class="flow-item">
                                            <div style="background: var(--aws-orange); color: var(--aws-dark-blue); padding: 0.5rem 1rem; border-radius: 8px; margin: 0.5rem;">
                                                <strong>Query Planner</strong>
                                            </div>
                                        </div>
                                        <div class="flow-arrow">↓</div>
                                        <div class="row">
                                            <div class="col-4">
                                                <div style="background: var(--success-green); padding: 0.5rem; border-radius: 8px; margin: 0.5rem; font-size: 0.8rem;">
                                                    <strong>Redshift</strong><br>Datos estructurados
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div style="background: var(--warning-yellow); color: var(--aws-dark-blue); padding: 0.5rem; border-radius: 8px; margin: 0.5rem; font-size: 0.8rem;">
                                                    <strong>Spectrum</strong><br>Datos en S3
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div style="background: #9d4edd; padding: 0.5rem; border-radius: 8px; margin: 0.5rem; font-size: 0.8rem;">
                                                    <strong>Federated</strong><br>Datos externos
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="mt-3"><small>Una sola consulta SQL puede acceder a datos en múltiples fuentes</small></p>
                                </div>
                            </div>
                        </div>

                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">📈</div>
                                <h5>Analytics Avanzados</h5>
                                <ul class="text-start">
                                    <li>Window functions para análisis temporal</li>
                                    <li>Funciones ML: PREDICT, EXPLAIN_MODEL</li>
                                    <li>Spatial analytics para geo-datos</li>
                                    <li>Time series forecasting</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">🔗</div>
                                <h5>Integraciones BI</h5>
                                <ul class="text-start">
                                    <li>Tableau, PowerBI, Looker</li>
                                    <li>Amazon QuickSight nativo</li>
                                    <li>JDBC/ODBC estándar</li>
                                    <li>APIs REST para aplicaciones</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">💾</div>
                                <h5>Gestión de Datos</h5>
                                <ul class="text-start">
                                    <li>Automated backups y snapshots</li>
                                    <li>Cross-region backup replication</li>
                                    <li>Point-in-time recovery</li>
                                    <li>Automated table maintenance</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">⚙️</div>
                                <h5>Optimización</h5>
                                <ul class="text-start">
                                    <li>Automatic table optimization</li>
                                    <li>Workload management (WLM)</li>
                                    <li>Query optimizer avanzado</li>
                                    <li>Performance insights</li>
                                </ul>
                            </div>
                        </div>

                        <div class="solution-card mt-4">
                            <h4><i class="bi bi-airplane"></i> Casos de Uso Específicos para Turismo</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>📊 Análisis de Tendencias</h5>
                                    <ul>
                                        <li>Patrones de reserva estacionales</li>
                                        <li>Análisis de demanda por destino</li>
                                        <li>Segmentación de clientes avanzada</li>
                                        <li>Revenue management optimización</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>🤖 Machine Learning</h5>
                                    <ul>
                                        <li>Predicción de precios dinámicos</li>
                                        <li>Recomendaciones personalizadas</li>
                                        <li>Detección de fraude en tiempo real</li>
                                        <li>Forecasting de demanda</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="stat-box mt-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="stat-number">10x</span>
                                    <p>Más rápido que warehouses tradicionales</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">500TB</span>
                                    <p>Consultas en segundos, no horas</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">1000+</span>
                                    <p>Usuarios concurrentes soportados</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">$1000/TB</span>
                                    <p>Costo anual típico por terabyte</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide11() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-lightning-charge"></i> Amazon DynamoDB: Base de Datos NoSQL</h2>
                        
                        <div class="service-box mb-4">
                            <div class="row align-items-center">
                                <div class="col-md-3 text-center">
                                    <div class="service-icon mx-auto" style="width: 120px; height: 120px; font-size: 2.5rem; background: var(--warning-yellow); color: var(--aws-dark-blue);">DB</div>
                                </div>
                                <div class="col-md-9">
                                    <h3>Base de Datos NoSQL Totalmente Administrada</h3>
                                    <p class="lead">Rendimiento rápido y predecible con escalabilidad perfecta para aplicaciones que necesitan latencia de un solo dígito de milisegundo a cualquier escala.</p>
                                    <div class="row mt-3">
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Latencia:</strong><br>
                                            <small>Menos de 1 milisegundo</small>
                                        </div>
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Escalabilidad:</strong><br>
                                            <small>Auto-scaling automático</small>
                                        </div>
                                        <div class="col-sm-4">
                                            <strong style="color: var(--aws-orange);">Disponibilidad:</strong><br>
                                            <small>99.999% SLA (Multi-AZ)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="performance-card h-100">
                                    <h4><i class="bi bi-speedometer2"></i> Características de Rendimiento</h4>
                                    <ul>
                                        <li><strong>DynamoDB Accelerator (DAX):</strong> Cache en memoria con latencia de microsegundos</li>
                                        <li><strong>Global Tables:</strong> Replicación multi-región automática</li>
                                        <li><strong>Auto-scaling:</strong> Ajuste automático de capacidad read/write</li>
                                        <li><strong>Burst Capacity:</strong> Manejo automático de picos de tráfico</li>
                                        <li><strong>Consistent Reads:</strong> Lecturas fuertemente consistentes</li>
                                        <li><strong>Parallel Scan:</strong> Procesamiento paralelo para operaciones masivas</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6 mb-4">
                                <div class="architecture-box h-100">
                                    <h4><i class="bi bi-diagram-3"></i> Casos de Uso en Análisis de Viajes</h4>
                                    <div class="row">
                                        <div class="col-12 mb-3">
                                            <h5>🔄 Datos de Sesión de Usuario</h5>
                                            <ul>
                                                <li>Carrito de compras activo</li>
                                                <li>Preferencias de búsqueda</li>
                                                <li>Historial de navegación reciente</li>
                                            </ul>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <h5>⚡ Cache de Consultas Frecuentes</h5>
                                            <ul>
                                                <li>Resultados de búsqueda populares</li>
                                                <li>Precios de vuelos/hoteles actuales</li>
                                                <li>Recomendaciones personalizadas</li>
                                            </ul>
                                        </div>
                                        <div class="col-12">
                                            <h5>📊 Metadatos y Configuración</h5>
                                            <ul>
                                                <li>Configuración de usuarios</li>
                                                <li>Índices de búsqueda optimizados</li>
                                                <li>Contadores en tiempo real</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="feature-grid">
                            <div class="feature-card">
                                <div class="feature-icon">🔒</div>
                                <h5>Seguridad Avanzada</h5>
                                <ul class="text-start">
                                    <li>Zero management - completamente serverless</li>
                                    <li>Auto-scaling basado en throughput</li>
                                    <li>Pay-per-use sin provisioning</li>
                                    <li>Alta disponibilidad multi-AZ</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">🔄</div>
                                <h5>Transformaciones Built-in</h5>
                                <ul class="text-start">
                                    <li>JSON to Parquet conversion</li>
                                    <li>Data deduplication automática</li>
                                    <li>Timestamp enrichment</li>
                                    <li>Format standardization</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">📊</div>
                                <h5>Monitoreo y Alertas</h5>
                                <ul class="text-start">
                                    <li>CloudWatch metrics integradas</li>
                                    <li>Delivery success/failure rates</li>
                                    <li>Latency monitoring en tiempo real</li>
                                    <li>Custom alarms configurables</li>
                                </ul>
                            </div>

                            <div class="feature-card">
                                <div class="feature-icon">💰</div>
                                <h5>Optimización de Costos</h5>
                                <ul class="text-start">
                                    <li>Batching inteligente reduce costos S3</li>
                                    <li>Compresión automática (70-80% menos)</li>
                                    <li>Particionado eficiente</li>
                                    <li>No hay costos de infraestructura</li>
                                </ul>
                            </div>
                        </div>

                        <div class="stat-box mt-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="stat-number">5TB/hr</span>
                                    <p>Throughput máximo por delivery stream</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">500K</span>
                                    <p>Records por segundo soportados</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">1MB</span>
                                    <p>Tamaño máximo por record</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">99.9%</span>
                                    <p>SLA de disponibilidad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide12() {
    return `
        <div class="container-fluid slide-content">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8">
                    <h2><i class="bi bi-arrow-right-circle"></i> Kinesis Data Firehose: Streaming de Datos</h2>
                    
                    <div class="service-box mb-4">
                        <div class="row align-items-center">
                            <div class="col-md-3 text-center">
                                <div class="service-icon mx-auto" style="width: 120px; height: 120px; font-size: 2rem; background: #f72585;">KF</div>
                            </div>
                            <div class="col-md-9">
                                <h3>Servicio de Entrega de Datos de Streaming</h3>
                                <p class="lead">La forma más fácil de cargar datos de streaming de manera confiable en data lakes, almacenes de datos y servicios de análisis.</p>
                                <div class="row mt-3">
                                    <div class="col-sm-4">
                                        <strong style="color: var(--aws-orange);">Capacidad:</strong><br>
                                        <small>Escalabilidad automática</small>
                                    </div>
                                    <div class="col-sm-4">
                                        <strong style="color: var(--aws-orange);">Transformación:</strong><br>
                                        <small>Procesamiento en tiempo real</small>
                                    </div>
                                    <div class="col-sm-4">
                                        <strong style="color: var(--aws-orange);">Destinos:</strong><br>
                                        <small>Múltiples targets AWS</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="architecture-box mb-4">
                        <h4 style="color: var(--aws-orange); text-align: center; margin-bottom: 2rem;">
                            <i class="bi bi-diagram-2"></i> Flujo de Procesamiento de Firehose
                        </h4>
                        
                        <div class="row text-center">
                            <div class="col-md-2 mb-3">
                                <div style="background: var(--aws-light-blue); color: var(--aws-dark-blue); padding: 1rem; border-radius: 10px; margin: 0.5rem;">
                                    <strong>Kinesis Streams</strong>
                                </div>
                                <small>Datos en tiempo real</small>
                            </div>
                            
                            <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                <i class="bi bi-arrow-right" style="color: var(--aws-orange); font-size: 2rem;"></i>
                            </div>
                            
                            <div class="col-md-2 mb-3">
                                <div style="background: #f72585; padding: 1rem; border-radius: 10px; margin: 0.5rem;">
                                    <strong>Data Transformation</strong>
                                </div>
                                <small>Lambda processing</small>
                            </div>
                            
                            <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                <i class="bi bi-arrow-right" style="color: var(--aws-orange); font-size: 2rem;"></i>
                            </div>
                            
                            <div class="col-md-2 mb-3">
                                <div style="background: var(--warning-yellow); color: var(--aws-dark-blue); padding: 1rem; border-radius: 10px; margin: 0.5rem;">
                                    <strong>Buffering</strong>
                                </div>
                                <small>Batching inteligente</small>
                            </div>
                            
                            <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                                <i class="bi bi-arrow-right" style="color: var(--aws-orange); font-size: 2rem;"></i>
                            </div>
                            
                            <div class="col-md-3 mb-3">
                                <div style="background: var(--success-green); padding: 1rem; border-radius: 10px; margin: 0.5rem;">
                                    <strong>Destinos Múltiples</strong>
                                </div>
                                <small>S3, Redshift, OpenSearch</small>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="solution-card h-100">
                                <h4><i class="bi bi-gear-wide-connected"></i> Capacidades de Transformación</h4>
                                <ul>
                                    <li><strong>Data Format Conversion:</strong> JSON a Parquet/ORC automático</li>
                                    <li><strong>Lambda Processing:</strong> Transformaciones custom en tiempo real</li>
                                    <li><strong>Compression:</strong> GZIP, Snappy, ZIP automático</li>
                                    <li><strong>Partitioning:</strong> Organización automática por fecha/región</li>
                                    <li><strong>Error Handling:</strong> Datos erróneos a bucket de errores</li>
                                    <li><strong>Schema Evolution:</strong> Manejo de cambios de esquema</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-4">
                            <div class="performance-card h-100">
                                <h4><i class="bi bi-speedometer"></i> Configuración Optimizada</h4>
                                <h5>Buffer Settings para Viajes:</h5>
                                <div class="row">
                                    <div class="col-6">
                                        <strong>Size Buffer:</strong> 128 MB<br>
                                        <small>Batch size óptimo para S3</small>
                                    </div>
                                    <div class="col-6">
                                        <strong>Time Buffer:</strong> 60 segundos<br>
                                        <small>Latencia vs eficiencia</small>
                                    </div>
                                </div>
                                
                                <h5 class="mt-3">Destinos Configurados:</h5>
                                <ul>
                                    <li><strong>Primary:</strong> S3 Data Lake (Parquet)</li>
                                    <li><strong>Secondary:</strong> Redshift (para analytics)</li>
                                    <li><strong>Backup:</strong> S3 Error bucket</li>
                                    <li><strong>Monitoring:</strong> CloudWatch Logs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🚀</div>
                            <h5>Ventajas Operacionales</h5>
                            <ul class="text-start">
                                <li>Zero management - completamente serverless</li>
                                <li>Auto-scaling basado en throughput</li>
                                <li>Pay-per-use sin provisioning</li>
                                <li>Alta disponibilidad multi-AZ</li>
                            </ul>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">🔄</div>
                            <h5>Transformaciones Built-in</h5>
                            <ul class="text-start">
                                <li>JSON to Parquet conversion</li>
                                <li>Data deduplication automática</li>
                                <li>Timestamp enrichment</li>
                                <li>Format standardization</li>
                            </ul>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">📊</div>
                            <h5>Monitoreo y Alertas</h5>
                            <ul class="text-start">
                                <li>CloudWatch metrics integradas</li>
                                <li>Delivery success/failure rates</li>
                                <li>Latency monitoring en tiempo real</li>
                                <li>Custom alarms configurables</li>
                            </ul>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">💰</div>
                            <h5>Optimización de Costos</h5>
                            <ul class="text-start">
                                <li>Batching inteligente reduce costos S3</li>
                                <li>Compresión automática (70-80% menos)</li>
                                <li>Particionado eficiente</li>
                                <li>No hay costos de infraestructura</li>
                            </ul>
                        </div>
                    </div>

                    <div class="stat-box mt-4">
                        <div class="row">
                            <div class="col-md-3">
                                <span class="stat-number">5TB/hr</span>
                                <p>Throughput máximo por delivery stream</p>
                            </div>
                            <div class="col-md-3">
                                <span class="stat-number">500K</span>
                                <p>Records por segundo soportados</p>
                            </div>
                            <div class="col-md-3">
                                <span class="stat-number">1MB</span>
                                <p>Tamaño máximo por record</p>
                            </div>
                            <div class="col-md-3">
                                <span class="stat-number">99.9%</span>
                                <p>SLA de disponibilidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }

  static getSlide13() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-arrow-up-right"></i> Factores Clave: Escalabilidad</h2>
                        
                        <div class="scalability-section factor-section">
                            <h3 style="color: var(--success-green); margin-bottom: 2rem;">
                                <i class="bi bi-graph-up-arrow"></i> Escalabilidad Horizontal y Vertical
                            </h3>
                            
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="metric-card">
                                        <h4>📈 Capacidad de Crecimiento</h4>
                                        <div class="row mt-3">
                                            <div class="col-6">
                                                <div class="stat-number">Ilimitada</div>
                                                <p>Capacidad de almacenamiento S3</p>
                                            </div>
                                            <div class="col-6">
                                                <div class="stat-number">Petabytes</div>
                                                <p>Escala de Redshift Spectrum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <div class="metric-card">
                                        <h4>⚡ Auto-Scaling en Tiempo Real</h4>
                                        <div class="row mt-3">
                                            <div class="col-6">
                                                <div class="stat-number">&lt;1min</div>
                                                <p>Tiempo de scaling DynamoDB</p>
                                            </div>
                                            <div class="col-6">
                                                <div class="stat-number">20M+</div>
                                                <p>Requests/seg pico soportado</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="architecture-box">
                                <h4>🔄 Estrategias de Escalabilidad por Componente</h4>
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <h5 style="color: var(--success-green);">Amazon S3</h5>
                                        <ul>
                                            <li><strong>Request Rate:</strong> 3,500+ PUT/s por prefix</li>
                                            <li><strong>Storage:</strong> Virtualmente ilimitado</li>
                                            <li><strong>Partitioning:</strong> Distribución automática</li>
                                            <li><strong>Transfer Acceleration:</strong> Para uploads globales</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <h5 style="color: var(--aws-light-blue);">Amazon Redshift</h5>
                                        <ul>
                                            <li><strong>Nodes:</strong> 1 a 128+ nodos</li>
                                            <li><strong>Concurrency:</strong> Miles de usuarios simultáneos</li>
                                            <li><strong>Elastic Resize:</strong> Cambios en minutos</li>
                                            <li><strong>Spectrum:</strong> Consultas sobre exabytes</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <h5 style="color: var(--warning-yellow);">DynamoDB</h5>
                                        <ul>
                                            <li><strong>On-demand:</strong> Scaling automático</li>
                                            <li><strong>Global Tables:</strong> Multi-región</li>
                                            <li><strong>Auto-scaling:</strong> Target utilization</li>
                                            <li><strong>Burst Capacity:</strong> Picos temporales</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="solution-card mt-4">
                                <h4><i class="bi bi-calendar-event"></i> Manejo de Estacionalidad en Turismo</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5>Temporada Alta (Dic-Ene, Jun-Ago)</h5>
                                        <ul>
                                            <li><strong>Tráfico:</strong> 5-10x incremento en búsquedas</li>
                                            <li><strong>S3:</strong> Auto-scaling transparente</li>
                                            <li><strong>DynamoDB:</strong> On-demand scaling</li>
                                            <li><strong>Redshift:</strong> Concurrency scaling</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <h5>Temporada Baja</h5>
                                        <ul>
                                            <li><strong>Optimización:</strong> Reducción automática de costos</li>
                                            <li><strong>Intelligent Tiering:</strong> Datos a capas frías</li>
                                            <li><strong>Reserved Capacity:</strong> Para cargas base</li>
                                            <li><strong>Maintenance:</strong> Ventanas de optimización</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="stat-box">
                            <p style="color: var(--success-green); font-size: clamp(1rem, 2vw, 1.3rem);">
                                <strong><i class="bi bi-check-circle"></i> Arquitectura que crece desde gigabytes hasta exabytes sin re-arquitectura</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide14() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-shield-check"></i> Factores Clave: Rendimiento & Seguridad</h2>
                        
                        <div class="row">
                            <!-- Sección de Rendimiento -->
                            <div class="col-lg-6 mb-4">
                                <div class="performance-section factor-section h-100">
                                    <h3 style="color: var(--info-cyan); margin-bottom: 1.5rem;">
                                        <i class="bi bi-speedometer2"></i> Optimización de Rendimiento
                                    </h3>
                                    
                                    <div class="metric-card mb-3">
                                        <h5>⚡ Métricas de Latencia</h5>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="stat-number">&lt;1ms</div>
                                                <small>DynamoDB (single-digit)</small>
                                            </div>
                                            <div class="col-6">
                                                <div class="stat-number">&lt;100ms</div>
                                                <small>S3 Standard first-byte</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="architecture-box">
                                        <h5>🚀 Estrategias de Performance</h5>
                                        <ul>
                                            <li><strong>Caching Multi-Layer:</strong> DynamoDB DAX + ElastiCache</li>
                                            <li><strong>CDN Integration:</strong> CloudFront para assets estáticos</li>
                                            <li><strong>Query Optimization:</strong> Índices optimizados en Redshift</li>
                                            <li><strong>Parallel Processing:</strong> MPP en consultas complejas</li>
                                            <li><strong>Connection Pooling:</strong> Para alta concurrencia</li>
                                        </ul>
                                    </div>

                                    <div class="performance-card">
                                        <h5>📊 Throughput Targets</h5>
                                        <ul>
                                            <li><strong>API Responses:</strong> &lt;200ms p95</li>
                                            <li><strong>Search Queries:</strong> &lt;500ms complex</li>
                                            <li><strong>Analytics:</strong> &lt;5sec dashboard load</li>
                                            <li><strong>Batch Jobs:</strong> Sub-hour processing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Sección de Seguridad -->
                            <div class="col-lg-6 mb-4">
                                <div class="security-section factor-section h-100">
                                    <h3 style="color: #9c27b0; margin-bottom: 1.5rem;">
                                        <i class="bi bi-shield-lock"></i> Seguridad Integral
                                    </h3>
                                    
                                    <div class="security-card mb-3">
                                        <h5>🔐 Cifrado End-to-End</h5>
                                        <ul>
                                            <li><strong>En Reposo:</strong> AES-256 en todos los servicios</li>
                                            <li><strong>En Tránsito:</strong> TLS 1.2+ obligatorio</li>
                                            <li><strong>Key Management:</strong> AWS KMS integrado</li>
                                            <li><strong>Client-side:</strong> Cifrado antes de envío</li>
                                        </ul>
                                    </div>

                                    <div class="architecture-box">
                                        <h5>👥 Control de Acceso</h5>
                                        <ul>
                                            <li><strong>IAM Roles:</strong> Least privilege principle</li>
                                            <li><strong>VPC Endpoints:</strong> Tráfico privado AWS</li>
                                            <li><strong>Resource Policies:</strong> Fine-grained control</li>
                                            <li><strong>MFA:</strong> Operaciones críticas</li>
                                            <li><strong>SAML/SSO:</strong> Integración corporativa</li>
                                        </ul>
                                    </div>

                                    <div class="security-card">
                                        <h5>📋 Compliance y Auditoría</h5>
                                        <ul>
                                            <li><strong>GDPR Ready:</strong> Data residency y right to be forgotten</li>
                                            <li><strong>CloudTrail:</strong> Audit trail completo</li>
                                            <li><strong>Config Rules:</strong> Compliance automático</li>
                                            <li><strong>GuardDuty:</strong> Threat detection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="solution-card">
                            <h4><i class="bi bi-diagram-3"></i> Arquitectura de Seguridad en Capas</h4>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <h5 style="color: #ff6b6b;">🌐 Perimeter</h5>
                                    <ul>
                                        <li>WAF protection</li>
                                        <li>DDoS mitigation</li>
                                        <li>Rate limiting</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <h5 style="color: var(--warning-yellow);">🔗 Network</h5>
                                    <ul>
                                        <li>VPC isolation</li>
                                        <li>Security Groups</li>
                                        <li>NACLs</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <h5 style="color: var(--info-cyan);">💽 Data</h5>
                                    <ul>
                                        <li>Encryption at rest</li>
                                        <li>Field-level encryption</li>
                                        <li>PII masking</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <h5 style="color: var(--success-green);">👤 Identity</h5>
                                    <ul>
                                        <li>IAM policies</li>
                                        <li>Resource-based access</li>
                                        <li>Temporary credentials</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="stat-box mt-4">
                            <div class="row">
                                <div class="col-md-4">
                                    <span class="stat-number">99.95%</span>
                                    <p>Availability SLA compuesto</p>
                                </div>
                                <div class="col-md-4">
                                    <span class="stat-number">SOC 2</span>
                                    <p>Compliance certification</p>
                                </div>
                                <div class="col-md-4">
                                    <span class="stat-number">24/7</span>
                                    <p>Monitoreo de seguridad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide15() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-currency-dollar"></i> Factores Clave: Disponibilidad & Costos</h2>
                        
                        <div class="row">
                            <!-- Sección de Disponibilidad -->
                            <div class="col-lg-6 mb-4">
                                <div class="performance-section factor-section h-100">
                                    <h3 style="color: var(--success-green); margin-bottom: 1.5rem;">
                                        <i class="bi bi-arrow-repeat"></i> Alta Disponibilidad
                                    </h3>
                                    
                                    <div class="metric-card mb-3">
                                        <h5>📊 SLAs Garantizados</h5>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="stat-number">99.999%</div>
                                                <small>DynamoDB Global Tables</small>
                                            </div>
                                            <div class="col-6">
                                                <div class="stat-number">99.99%</div>
                                                <small>S3 Standard</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="architecture-box">
                                        <h5>🏗️ Estrategias de Resiliencia</h5>
                                        <ul>
                                            <li><strong>Multi-AZ Deployment:</strong> Failover automático</li>
                                            <li><strong>Cross-Region Replication:</strong> Disaster recovery</li>
                                            <li><strong>Auto-failover:</strong> RTO &lt; 5 minutos</li>
                                            <li><strong>Health Checks:</strong> Monitoreo continuo</li>
                                            <li><strong>Circuit Breakers:</strong> Prevención de cascading failures</li>
                                        </ul>
                                    </div>

                                    <div class="solution-card">
                                        <h5>⚡ Recovery Targets</h5>
                                        <ul>
                                            <li><strong>RTO (Recovery Time):</strong> &lt; 5 minutos</li>
                                            <li><strong>RPO (Recovery Point):</strong> &lt; 1 minuto</li>
                                            <li><strong>MTTR:</strong> Mean time to recovery &lt; 15 min</li>
                                            <li><strong>Uptime Target:</strong> 99.95% anual</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Sección de Costos -->
                            <div class="col-lg-6 mb-4">
                                <div class="cost-section factor-section h-100">
                                    <h3 style="color: var(--warning-yellow); margin-bottom: 1.5rem;">
                                        <i class="bi bi-piggy-bank"></i> Optimización de Costos
                                    </h3>
                                    
                                    <div class="cost-card mb-3">
                                        <h5>💰 Modelos de Pricing</h5>
                                        <ul>
                                            <li><strong>S3:</strong> $0.023/GB/mes (Standard)</li>
                                            <li><strong>DynamoDB:</strong> $0.25/WCU, $0.05/RCU</li>
                                            <li><strong>Redshift:</strong> $0.25/hora (dc2.large)</li>
                                            <li><strong>Kinesis:</strong> $0.014/hora por shard</li>
                                        </ul>
                                    </div>

                                    <div class="architecture-box">
                                        <h5>📈 Estrategias de Ahorro</h5>
                                        <ul>
                                            <li><strong>Reserved Instances:</strong> 40-75% descuento</li>
                                            <li><strong>Intelligent Tiering:</strong> Ahorro automático 68%</li>
                                            <li><strong>Spot Instances:</strong> Para procesamiento batch</li>
                                            <li><strong>Data Lifecycle:</strong> Transiciones automáticas</li>
                                            <li><strong>Compression:</strong> 70-80% reducción storage</li>
                                        </ul>
                                    </div>

                                    <div class="cost-card">
                                        <h5>🎯 Cost Optimization Tools</h5>
                                        <ul>
                                            <li><strong>Cost Explorer:</strong> Análisis detallado</li>
                                            <li><strong>Budgets:</strong> Alertas automáticas</li>
                                            <li><strong>Trusted Advisor:</strong> Recomendaciones</li>
                                            <li><strong>Right-sizing:</strong> Optimización continua</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="solution-card">
                            <h4><i class="bi bi-calculator"></i> Estimación de Costos Mensuales (1TB datos/día)</h4>
                            <div class="comparison-table table-responsive">
                                <table class="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th>Servicio</th>
                                            <th>Configuración</th>
                                            <th>Costo/Mes</th>
                                            <th>% del Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>S3 Standard</strong></td>
                                            <td>30TB almacenamiento</td>
                                            <td>$690</td>
                                            <td>45%</td>
                                        </tr>
                                        <tr>
                                            <td><strong>S3 Intelligent-Tiering</strong></td>
                                            <td>Optimización automática</td>
                                            <td>$220</td>
                                            <td>15%</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Redshift</strong></td>
                                            <td>4 nodos dc2.large</td>
                                            <td>$720</td>
                                            <td>25%</td>
                                        </tr>
                                        <tr>
                                            <td><strong>DynamoDB</strong></td>
                                            <td>On-demand pricing</td>
                                            <td>$150</td>
                                            <td>10%</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Kinesis Firehose</strong></td>
                                            <td>1GB/hr delivery</td>
                                            <td>$75</td>
                                            <td>5%</td>
                                        </tr>
                                        <tr style="border-top: 2px solid var(--aws-orange);">
                                            <td><strong>Total Estimado</strong></td>
                                            <td>-</td>
                                            <td><strong>$1,855</strong></td>
                                            <td><strong>100%</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="stat-box mt-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="stat-number">60%</span>
                                    <p>Ahorro vs infraestructura on-premise</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">12-18</span>
                                    <p>Meses para ROI completo</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">0</span>
                                    <p>CAPEX requerido inicial</p>
                                </div>
                                <div class="col-md-3">
                                    <span class="stat-number">24/7</span>
                                    <p>Soporte AWS incluido</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide16() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-building"></i> Impacto en la Empresa</h2>
                        
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="impact-card h-100">
                                    <h5><i class="bi bi-speedometer2"></i> Dashboard de Monitoreo en Tiempo Real</h5>
                                    <ul>
                                        <li><strong>CloudWatch Dashboards:</strong> Métricas técnicas centralizadas</li>
                                        <li><strong>Business Intelligence:</strong> KPIs de negocio en QuickSight</li>
                                        <li><strong>Cost Management:</strong> Tracking automático de gastos</li>
                                        <li><strong>Performance Alerts:</strong> Notificaciones proactivas</li>
                                        <li><strong>Custom Metrics:</strong> Indicadores específicos del negocio</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-lg-6 mb-4">
                                <div class="impact-card h-100">
                                    <h5><i class="bi bi-graph-up-arrow"></i> Plan de Crecimiento Post-Implementación</h5>
                                    <ul>
                                        <li><strong>Año 1:</strong> Consolidación y optimización inicial</li>
                                        <li><strong>Año 2:</strong> Expansión a nuevos mercados geográficos</li>
                                        <li><strong>Año 3:</strong> Implementación de ML avanzado</li>
                                        <li><strong>Año 4+:</strong> Nuevos productos y servicios data-driven</li>
                                        <li><strong>Escalabilidad:</strong> Crecimiento orgánico sin re-arquitectura</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="conclusion-card">
                            <h4 style="color: var(--success-green);">
                                <i class="bi bi-trophy"></i> Éxito Medible y Sostenible
                            </h4>
                            <p class="lead">
                                Con KPIs claros y monitoreo continuo, la solución garantiza no solo el cumplimiento de objetivos iniciales, 
                                sino también el crecimiento sostenible y la ventaja competitiva a largo plazo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

    `;
  }

  static getSlide17() {
    return `
        <div class="container-fluid slide-content">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8">
                    <h2><i class="bi bi-calendar-event"></i> Timeline de Implementación</h2>
                    
                    <div class="architecture-box mb-4">
                        <h4 style="color: var(--aws-orange); text-align: center;">
                            <i class="bi bi-hourglass-split"></i> Roadmap de 8 Semanas - Implementación Ágil
                        </h4>
                    </div>

                    <div class="timeline-container">
                        <div class="timeline-line"></div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="phase-badge">Fase 1: Fundación</div>
                                <h5>Semanas 1-2: Configuración Base</h5>
                                <ul>
                                    <li>Setup de cuenta AWS y configuración IAM</li>
                                    <li>Creación de buckets S3 con lifecycle policies</li>
                                    <li>Configuración de Kinesis Data Firehose</li>
                                    <li>Setup inicial de DynamoDB tables</li>
                                    <li>Network configuration (VPC, subnets, security groups)</li>
                                </ul>
                                <div class="mt-3">
                                    <strong style="color: var(--success-green);">Entregables:</strong> Infraestructura base operativa
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="phase-badge">Fase 2: Data Warehouse</div>
                                <h5>Semanas 3-4: Analytics Platform</h5>
                                <ul>
                                    <li>Implementación de cluster Redshift</li>
                                    <li>Configuración de Redshift Spectrum</li>
                                    <li>Migración de datos históricos</li>
                                    <li>Creación de schemas y tablas optimizadas</li>
                                    <li>Setup de conexiones BI (QuickSight, Tableau)</li>
                                </ul>
                                <div class="mt-3">
                                    <strong style="color: var(--info-cyan);">Entregables:</strong> Data Warehouse funcional con datos históricos
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="phase-badge">Fase 3: Optimización</div>
                                <h5>Semanas 5-6: Performance Tuning</h5>
                                <ul>
                                    <li>Fine-tuning de performance en todos los servicios</li>
                                    <li>Implementación de monitoring y alertas</li>
                                    <li>Configuración de auto-scaling policies</li>
                                    <li>Pruebas de carga y stress testing</li>
                                    <li>Optimización de queries y índices</li>
                                </ul>
                                <div class="mt-3">
                                    <strong style="color: var(--warning-yellow);">Entregables:</strong> Sistema optimizado para producción
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="phase-badge">Fase 4: Go-Live</div>
                                <h5>Semanas 7-8: Producción</h5>
                                <ul>
                                    <li>Migración gradual del tráfico de producción</li>
                                    <li>Monitoreo intensivo 24/7</li>
                                    <li>Ajustes post-implementación</li>
                                    <li>Training del equipo técnico</li>
                                    <li>Documentación y handover</li>
                                </ul>
                                <div class="mt-3">
                                    <strong style="color: var(--success-green);">Entregables:</strong> Sistema en producción completa
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-6 mb-3">
                            <div class="impact-card">
                                <h5><i class="bi bi-people"></i> Equipo Requerido</h5>
                                <ul>
                                    <li><strong>Cloud Architect:</strong> 1 senior (tiempo completo)</li>
                                    <li><strong>DevOps Engineer:</strong> 2 profesionales</li>
                                    <li><strong>Data Engineer:</strong> 2 especialistas</li>
                                    <li><strong>AWS Solutions Architect:</strong> Consultoría</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="impact-card">
                                <h5><i class="bi bi-exclamation-triangle"></i> Riesgos y Mitigaciones</h5>
                                <ul>
                                    <li><strong>Data Migration:</strong> Testing exhaustivo en ambiente staging</li>
                                    <li><strong>Performance Issues:</strong> Load testing previo a go-live</li>
                                    <li><strong>Skill Gap:</strong> Training intensivo del equipo</li>
                                    <li><strong>Downtime:</strong> Migración gradual y rollback plan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }

  static getSlide18() {
    return `
      <div class="container-fluid slide-content">
          <div class="row justify-content-center">
              <div class="col-12 col-lg-10 col-xl-8">
                  <h2><i class="bi bi-graph-up"></i> Métricas de Éxito & ROI</h2>
                  
                  <div class="architecture-box mb-4">
                      <h4 style="color: var(--aws-orange); text-align: center; margin-bottom: 2rem;">
                          <i class="bi bi-target"></i> KPIs y Objetivos Medibles
                      </h4>
                      
                      <div class="row">
                          <div class="col-lg-4 mb-3">
                              <h5 style="color: var(--success-green);">🎯 Métricas Técnicas</h5>
                              <ul>
                                  <li><strong>Latencia API:</strong> &lt;100ms p95</li>
                                  <li><strong>Query Performance:</strong> &lt;5seg dashboards</li>
                                  <li><strong>Uptime:</strong> &gt;99.9% mensual</li>
                                  <li><strong>Data Freshness:</strong> &lt;5min lag</li>
                                  <li><strong>Error Rate:</strong> &lt;0.1% requests</li>
                              </ul>
                          </div>
                          <div class="col-lg-4 mb-3">
                              <h5 style="color: var(--info-cyan);">💰 Métricas Financieras</h5>
                              <ul>
                                  <li><strong>TCO Reduction:</strong> 60% vs on-premise</li>
                                  <li><strong>CAPEX Elimination:</strong> $0 infraestructura</li>
                                  <li><strong>ROI Target:</strong> 300% en 18 meses</li>
                                  <li><strong>Cost per TB:</strong> &lt;$25/mes</li>
                                  <li><strong>Operational Savings:</strong> $2.5M anual</li>
                              </ul>
                          </div>
                          <div class="col-lg-4 mb-3">
                              <h5 style="color: var(--warning-yellow);">📈 Métricas de Negocio</h5>
                              <ul>
                                  <li><strong>Revenue Growth:</strong> +20% por personalización</li>
                                  <li><strong>Customer Satisfaction:</strong> +15% NPS</li>
                                  <li><strong>Time to Insight:</strong> 80% reducción</li>
                                  <li><strong>Fraud Detection:</strong> 99.5% accuracy</li>
                                  <li><strong>Market Share:</strong> +5% regional</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div class="metric-grid">
                      <div class="metric-card">
                          <span class="stat-number">$5.2M</span>
                          <p><strong>Valor Actual Neto</strong><br>NPV a 3 años</p>
                      </div>
                      <div class="metric-card">
                          <span class="stat-number">8 meses</span>
                          <p><strong>Payback Period</strong><br>Recuperación de inversión</p>
                      </div>
                      <div class="metric-card">
                          <span class="stat-number">65%</span>
                          <p><strong>IRR</strong><br>Tasa interna de retorno</p>
                      </div>
                      <div class="metric-card">
                          <span class="stat-number">4.2x</span>
                          <p><strong>ROI Múltiple</strong><br>Retorno sobre inversión</p>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-lg-6 mb-4">
                          <div class="impact-card h-100">
                              <h5><i class="bi bi-speedometer2"></i> Dashboard de Monitoreo en Tiempo Real</h5>
                              <ul>
                                  <li><strong>CloudWatch Dashboards:</strong> Métricas técnicas centralizadas</li>
                                  <li><strong>Business Intelligence:</strong> KPIs de negocio en QuickSight</li>
                                  <li><strong>Cost Management:</strong> Tracking automático de gastos</li>
                                  <li><strong>Performance Alerts:</strong> Notificaciones proactivas</li>
                                  <li><strong>Custom Metrics:</strong> Indicadores específicos del negocio</li>
                              </ul>
                          </div>
                      </div>
                      
                      <div class="col-lg-6 mb-4">
                          <div class="impact-card h-100">
                              <h5><i class="bi bi-graph-up-arrow"></i> Plan de Crecimiento Post-Implementación</h5>
                              <ul>
                                  <li><strong>Año 1:</strong> Consolidación y optimización inicial</li>
                                  <li><strong>Año 2:</strong> Expansión a nuevos mercados geográficos</li>
                                  <li><strong>Año 3:</strong> Implementación de ML avanzado</li>
                                  <li><strong>Año 4+:</strong> Nuevos productos y servicios data-driven</li>
                                  <li><strong>Escalabilidad:</strong> Crecimiento orgánico sin re-arquitectura</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div class="conclusion-card">
                      <h4 style="color: var(--success-green);">
                          <i class="bi bi-trophy"></i> Éxito Medible y Sostenible
                      </h4>
                      <p class="lead">
                          Con KPIs claros y monitoreo continuo, la solución garantiza no solo el cumplimiento de objetivos iniciales, 
                          sino también el crecimiento sostenible y la ventaja competitiva a largo plazo.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  `;
  }

  static getSlide19() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-check2-circle"></i> Conclusiones</h2>
                        
                        <div class="conclusion-card mb-4">
                            <h3 style="color: var(--aws-orange); margin-bottom: 2rem;">
                                <i class="bi bi-lightbulb"></i> Solución Integral y Escalable
                            </h3>
                            <p class="lead" style="font-size: clamp(1.1rem, 2.5vw, 1.6rem);">
                                La arquitectura de Data Lake híbrida propuesta resuelve de manera completa y elegante los desafíos de almacenamiento 
                                y análisis de datos para empresas del sector turismo, proporcionando una base sólida para el crecimiento futuro.
                            </p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="impact-card h-100">
                                    <h4><i class="bi bi-check-circle"></i> Objetivos Cumplidos</h4>
                                    <ul>
                                        <li><strong>✅ Escalabilidad Ilimitada:</strong> De gigabytes a exabytes sin re-arquitectura</li>
                                        <li><strong>✅ Performance Optimizado:</strong> Sub-segundo para consultas críticas</li>
                                        <li><strong>✅ Seguridad Enterprise:</strong> Compliance GDPR y auditoría completa</li>
                                        <li><strong>✅ Costos Optimizados:</strong> 60% reducción vs soluciones tradicionales</li>
                                        <li><strong>✅ Alta Disponibilidad:</strong> 99.95% uptime garantizado</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6 mb-4">
                                <div class="impact-card h-100">
                                    <h4><i class="bi bi-award"></i> Ventajas Competitivas</h4>
                                    <ul>
                                        <li><strong>🚀 Time-to-Market:</strong> Implementación en 8 semanas vs 6-12 meses</li>
                                        <li><strong>📊 Data-Driven Decisions:</strong> Insights en tiempo real para ventaja competitiva</li>
                                        <li><strong>🔄 Agilidad Operacional:</strong> Respuesta rápida a cambios del mercado</li>
                                        <li><strong>🌍 Escalabilidad Global:</strong> Expansión sin limitaciones técnicas</li>
                                        <li><strong>💡 Innovación Continua:</strong> Plataforma para nuevos productos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="architecture-box">
                            <h4><i class="bi bi-diagram-3"></i> Arquitectura Completa y Probada</h4>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <h5 style="color: var(--success-green);">Capa de Almacenamiento</h5>
                                    <ul>
                                        <li><strong>S3:</strong> Data Lake principal con Intelligent Tiering</li>
                                        <li><strong>Redshift:</strong> Data Warehouse para analytics complejos</li>
                                        <li><strong>DynamoDB:</strong> NoSQL para acceso ultra-rápido</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5 style="color: var(--info-cyan);">Integración Seamless</h5>
                                    <ul>
                                        <li><strong>Kinesis Firehose:</strong> Streaming automático a destinos</li>
                                        <li><strong>Pipeline Existente:</strong> Integración sin disrupciones</li>
                                        <li><strong>APIs Nativas:</strong> Conectividad con aplicaciones</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5 style="color: var(--warning-yellow);">Gestión Automatizada</h5>
                                    <ul>
                                        <li><strong>Auto-scaling:</strong> Capacidad ajustada automáticamente</li>
                                        <li><strong>Lifecycle Policies:</strong> Optimización de costos continua</li>
                                        <li><strong>Monitoring:</strong> Visibilidad completa y alertas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="metric-grid">
                            <div class="metric-card">
                                <span class="stat-number">100%</span>
                                <p><strong>Objetivos</strong><br>Técnicos cumplidos</p>
                            </div>
                            <div class="metric-card">
                                <span class="stat-number">5x</span>
                                <p><strong>Mejor Performance</strong><br>vs solución actual</p>
                            </div>
                            <div class="metric-card">
                                <span class="stat-number">Future-Proof</span>
                                <p><strong>Arquitectura</strong><br>Preparada para el futuro</p>
                            </div>
                            <div class="metric-card">
                                <span class="stat-number">AWS</span>
                                <p><strong>Ecosystem</strong><br>Completo disponible</p>
                            </div>
                        </div>

                        <div class="conclusion-card mt-4">
                            <h4 style="color: var(--success-green); margin-bottom: 1rem;">
                                <i class="bi bi-rocket-takeoff"></i> Recomendación Final
                            </h4>
                            <p class="lead">
                                <strong>Recomendamos la implementación inmediata</strong> de esta arquitectura de almacenamiento híbrida. 
                                La solución propuesta no solo resuelve los desafíos actuales, sino que posiciona a la empresa para 
                                aprovechar las oportunidades futuras en el mercado de análisis de datos de viajes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide20() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2><i class="bi bi-book"></i> Referencias Bibliográficas</h2>
                        
                        <div class="reference-category">
                            <i class="bi bi-bookmark-check"></i> Fuentes Obligatorias
                        </div>
                        
                        <div class="reference-item">
                            Hoecker, M., & Kunze, M. (2013). An on-demand scaling stereoscopic 3D video streaming service in the cloud. 
                            <em>Journal of Cloud Computing</em>, 2(14). https://doi.org/10.1186/2192-113X-2-14
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (s.f.). <em>Solución de datos de streaming para Amazon Kinesis</em>. 
                            https://aws.amazon.com/es/solutions/implementations/streaming-data-solution-for-amazon-kinesis/
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (s.f.). <em>Amazon Kinesis</em>. 
                            https://aws.amazon.com/es/kinesis/
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (s.f.). <em>Amazon API Gateway</em>. 
                            https://aws.amazon.com/es/api-gateway/
                        </div>

                        <div class="reference-category">
                            <i class="bi bi-plus-circle"></i> Fuentes Complementarias
                        </div>

                        <div class="reference-item">
                            Alvarado Novoa, C., Riaño Córdoba, L., Moreno Castillo, O., & Layton Gaona, D. (2017). 
                            <em>Diseño de arquitectura de respaldo en la nube pública</em>. Fundación Universitaria Unipanamericana – Compensar.
                        </div>

                        <div class="reference-item">
                            Anjum, A., Abdullah, T., Tariq, M., Baltaci, Y., & Antonopoulos, N. (2019). Video Stream Analysis in Clouds: 
                            An Object Detection and Classification Framework for High Performance Video Analytics. 
                            <em>IEEE Transactions on Cloud Computing</em>, 7(4), 1152-1167. 
                            https://anjum.web.cern.ch/papers/VideoAnalytics_in_Clouds-1.38-14_pages.pdf
                        </div>

                        <div class="reference-item">
                            López López, J., Carpintero Cruz, J., Bello Bernal, J., & Cristancho Álvarez, A. (2017). 
                            Desarrollo de plataforma web con integración de la herramienta BigQuery para la posterior toma de decisiones 
                            en cuanto al valor y proyección del servicio de Banda Ancha en hogares aplicada a la empresa Movistar. 
                            <em>Fundación Universitaria Unipanamericana – Compensar</em>. 
                            https://repositoriocrai.ucompensar.edu.co/handle/compensar/3058
                        </div>

                        <div class="reference-category">
                            <i class="bi bi-cloud"></i> Documentación Técnica AWS
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (2024). <em>AWS Well-Architected Framework</em>. 
                            https://aws.amazon.com/architecture/well-architected/
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (2024). <em>Amazon S3 User Guide</em>. 
                            https://docs.aws.amazon.com/s3/
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (2024). <em>Amazon Redshift Database Developer Guide</em>. 
                            https://docs.aws.amazon.com/redshift/
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (2024). <em>Amazon DynamoDB Developer Guide</em>. 
                            https://docs.aws.amazon.com/dynamodb/
                        </div>

                        <div class="reference-category">
                            <i class="bi bi-graph-up"></i> Estudios de Caso y Whitepapers
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (2024). <em>Data Lakes and Analytics on AWS</em>. AWS Whitepaper.
                        </div>

                        <div class="reference-item">
                            Amazon Web Services. (2024). <em>Cost Optimization for Data Lakes</em>. AWS Best Practices Guide.
                        </div>

                        <div class="architecture-box mt-4">
                            <h4><i class="bi bi-info-circle"></i> Metodología de Investigación</h4>
                            <p>
                                Esta investigación se basó en el análisis de documentación oficial de AWS, papers académicos revisados por pares, 
                                casos de estudio del sector turismo, y best practices de la industria. Se priorizaron fuentes primarias y 
                                documentación técnica actualizada para garantizar la precisión y relevancia de las recomendaciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getSlide21() {
    return `
      <div class="container-fluid slide-content">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h1><i class="bi bi-question-circle"></i> Proyecto AWS aplicado </h1>
                        
                        

                        <div class="architecture-box">
                            <h4><i class="bi bi-lightbulb"></i> Valor Agregado Solución </h4>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <h5 style="color: var(--success-green);">Escalabilidad</h5>
                                    <ul>
                                        <li>Crecimiento futuro del negocio</li>
                                        <li>Expansión geográfica</li>
                                        <li>Nuevos productos de datos</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5 style="color: var(--info-cyan);">Seguridad</h5>
                                    <ul>
                                        <li>Compliance regulatorio</li>
                                        <li>Protección de datos personales</li>
                                        <li>Auditoría y governance</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5 style="color: var(--warning-yellow);">Costos</h5>
                                    <ul>
                                        <li>Optimización continua</li>
                                        <li>Modelos de pricing</li>
                                        <li>Comparativas de TCO</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="contact-grid">
                            <div class="contact-card">
                                <h5><i class="bi bi-envelope"></i> Contacto</h5>
                                <p>Para consultas técnicas detalladas</p>
                                <strong>hfvasquez@ucompensar.edu.co</strong>
                            </div>
                            <div class="contact-card">
                                <h5><i class="bi bi-calendar"></i> Follow-up</h5>
                                <p>Sesión de profundización</p>
                                <strong>Próxima sesión</strong>
                            </div>
                            <div class="contact-card">
                                <h5><i class="bi bi-file-earmark"></i> Documentación</h5>
                                <p>Acceso a recursos adicionales</p>
                                <strong>Repositorio del proyecto</strong>
                            </div>
                            <div class="contact-card">
                                <h5><i class="bi bi-award"></i> Certificación</h5>
                                <p>AWS Solutions Architecture</p>
                                <strong>Equipo certificado</strong>
                            </div>
                        </div>

                        <div class="conclusion-card mt-4">
                            <h3 style="color: var(--aws-orange); margin-bottom: 1rem;">
                                <i class="bi bi-heart"></i> ¡Gracias por su Atención!
                            </h3>
                            <p class="lead">
                                Esperamos que esta presentación haya demostrado el valor y la viabilidad de la solución propuesta. 
                                <br><strong>¡Estamos emocionados de continuar esta conversación!</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    `;
  }
}

// Hacer la clase disponible globalmente
window.SlidesData = SlidesData;
