import finanzas from "../assets/analytics/finanzas.png";
import customerExperience from "../assets/analytics/customer-experience.png";
import rrhh from "../assets/analytics/rrhh.png";
import ventas from "../assets/analytics/ventas.png";
import cryptoPipeline from "../assets/analytics/crypto-elt-pipeline.svg";

/**
 * Cómo agregar un proyecto de analítica:
 * 1. Guardá la captura en src/assets/analytics/
 * 2. Importala arriba.
 * 3. Copiá un objeto de este array y completá los campos.
 * 4. githubUrl y demoUrl pueden quedar en "" — los botones no se muestran.
 */
export const analyticsProjects = [
  {
    id: "crypto-elt-pipeline",
    name: "Crypto ELT Pipeline",
    image: cryptoPipeline,
    description:
      "Pipeline automatizado que extrae precios de criptomonedas desde CoinGecko, conserva los datos crudos en staging y los transforma en un esquema estrella en Azure SQL.",
    tools: ["Python", "SQL Server", "GitHub Actions", "Azure SQL"],
    businessProblem:
      "Los datos de mercado pierden valor rápidamente si dependen de una descarga manual o de una captura estática. El proyecto resuelve cómo mantener un historial actualizado sin depender de una computadora encendida.",
    analysisGoal:
      "Automatizar la captura periódica de precios y dejar un modelo histórico estructurado, confiable y listo para consultas analíticas.",
    dataPrep:
      "Python extrae y carga los datos sin alterarlos en una tabla de staging. Un procedimiento almacenado en T-SQL los transforma en un esquema estrella con dimensiones de criptomoneda y fecha, y una tabla de hechos de precios.",
    kpis: [
      "Precio actual y variaciones porcentuales",
      "Máximos y mínimos de 24 horas",
      "Capitalización de mercado",
      "Volumen de operaciones",
    ],
    insights:
      "La separación entre extracción, carga y transformación conserva el dato original para reprocesarlo. GitHub Actions ejecuta el flujo periódicamente y la lógica de reintento contempla el auto-pausado de Azure SQL serverless.",
    githubUrl: "https://github.com/Guillermo-Costilla/crypto-etl-pipeline",
    demoUrl: "",
    published: true,
    statusLabel: "Pipeline automatizado",
  },
  {
    id: "finanzas",
    name: "Control de cuotas financieras",
    image: finanzas,
    description:
      "Dashboard de seguimiento financiero con medidores de cumplimiento para ingresos, gastos, utilidad y saldo, comparados contra metas y con filtros por año y mes.",
    tools: ["Power BI", "DAX"],
    businessProblem:
      "Necesidad de ver, en una sola vista, si las cuotas de ingreso, gasto, utilidad y saldo se están cumpliendo respecto de lo planificado.",
    analysisGoal:
      "Contrastar resultados del período seleccionado con las metas definidas y facilitar el control mensual y anual.",
    dataPrep:
      "Modelo de indicadores con metas y resultados, presentado mediante medidores de porcentaje de cumplimiento y valores absolutos.",
    kpis: [
      "Cuota de ingreso vs meta",
      "Cuota de gastos vs presupuesto",
      "Cuota de utilidad vs utilidad esperada",
      "Cuota de saldo vs saldo esperado",
    ],
    insights:
      "La vista concentra cuatro controles de gestión y deja explícita la distancia entre lo ejecutado y lo esperado para cada cuota.",
    githubUrl: "https://github.com/Guillermo-Costilla/retail-bi-project/blob/main/README.md",
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiOTA2YjA4YTctZTNiZS00ZTI4LWIxOTAtYTAyZGRiNmEyNjJiIiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9",
    published: false,
    statusLabel: "Dashboard — captura",
  },
  {
    id: "customer-experience",
    name: "Análisis Customer Experience",
    image: customerExperience,
    description:
      "Dashboard de experiencia de cliente orientado a entender el desempeño del servicio de atención y detectar oportunidades de mejora.",
    tools: ["Power BI"],
    businessProblem:
      "La operación de atención necesita leer NPS, satisfacción y rendimiento de representantes en un mismo análisis, no en reportes aislados.",
    analysisGoal:
      "Comprender la experiencia del usuario y señalar dónde mejorar el servicio.",
    dataPrep:
      "Tablero organizado para explorar NPS por canal y negocio, satisfacción por dimensión y desempeño individual de cada representante.",
    kpis: [
      "NPS por canal y negocio",
      "Satisfacción por dimensión",
      "Rendimiento por representante",
    ],
    insights:
      "El reporte está pensado para pasar de una lectura general del servicio a un análisis por canal, dimensión y persona.",
    githubUrl: "https://github.com/Guillermo-Costilla/powerbi-projects/blob/main/Customer-Experience/README.md",
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYmQ0YzFlZDYtYzRmZS00M2JiLTkwNzUtMDRjMTFlMDUzODBlIiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9",
    published: false,
    statusLabel: "Dashboard — captura",
  },
  {
    id: "rrhh",
    name: "Reporte de Recursos Humanos",
    image: rrhh,
    description:
      "Reporte de plantilla con indicadores de personal, distribución geográfica, composición por departamento y un detalle de colaboradores.",
    tools: ["Power BI", "Azure"],
    businessProblem:
      "RR. HH. necesita una foto consolidada de la plantilla: volumen, compensación, evaluación, edad y distribución interna.",
    analysisGoal:
      "Describir la estructura de personal y facilitar cortes por edad, sueldo, evaluación y departamento.",
    dataPrep:
      "Modelo presentado con KPIs de cabecera, mapa, barras por grupo y una tabla de colaboradores. Incluye visualización geográfica sobre Azure Maps.",
    kpis: [
      "Total de empleados",
      "Sueldo promedio",
      "Evaluación promedio",
      "Edad promedio",
      "Distribución por departamento",
    ],
    insights:
      "El tablero permite cruzar una visión agregada de la plantilla con el detalle por persona, departamento y ubicación.",
    githubUrl: "https://github.com/Guillermo-Costilla/powerbi-projects/blob/main/RRHH/README.md",
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNDczYWIxZjMtZTRlYy00YTc1LWE2M2ItNDE4ZWE2MzEwMjZlIiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9",
    published: false,
    statusLabel: "Dashboard — captura",
  },
  {
    id: "ventas",
    name: "Resumen ejecutivo de ventas",
    image: ventas,
    description:
      "Tablero ejecutivo de ingresos, ganancias y margen, con cortes por región, evolución temporal y margen por categoría.",
    tools: ["Power BI", "DAX"],
    businessProblem:
      "Dirección comercial necesita un resumen único para leer volumen, rentabilidad y concentración geográfica y de categoría.",
    analysisGoal:
      "Exponer ingresos, ganancias, margen y cantidad, y explicarlos por región, tiempo y categoría.",
    dataPrep:
      "Páginas de resumen con KPIs, comparativas regionales, serie de evolución de ingresos y ranking de margen por categoría, con selector de año.",
    kpis: [
      "Ingresos",
      "Ganancias",
      "Margen %",
      "Cantidad",
      "Ingresos y ganancias por región",
      "Margen por categoría",
    ],
    insights:
      "La composición deja ver tanto el resultado agregado como las diferencias entre regiones y categorías a lo largo del tiempo.",
    githubUrl: "https://github.com/Guillermo-Costilla/powerbi-projects/blob/main/Finanzas%20Personales/README.md",
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZTE5ZTNmNDAtOTNmMC00MDlmLThjNzgtNTZlNjBhNzdhMDc0IiwidCI6IjFlZmUxZjBmLTMwNWUtNDI5Zi1hYzg5LTRkMThmNmI2OTAyMCIsImMiOjR9",
    published: false,
    statusLabel: "Dashboard — captura",
  },
];
