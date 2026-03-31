import type { SiteContent } from './en';

export const es: SiteContent = {
  lang: 'es',
  nav: {
    about: 'Acerca de',
    experience: 'Experiencia',
    certifications: 'Certificaciones',
    projects: 'Proyectos',
    contact: 'Contacto',
    langSwitch: 'English',
    langSwitchUrl: '/',
  },
  hero: {
    greeting: 'Arquitectura Cloud y DevOps desde Guatemala',
    name: 'Jacobo Gonzalez',
    subtitle: 'Diseño plataformas AWS resilientes y pipelines de entrega que ayudan a los equipos a lanzar con confianza.',
    description: 'Trabajo en arquitectura cloud, automatización e infraestructura con una sólida base en redes. Me enfoco en construir sistemas escalables, prácticos de operar y que los equipos puedan mantener después del lanzamiento.',
    badges: ['10+ años en infraestructura', 'AWS Solutions Architect Professional', 'Profundidad en DevOps y redes'],
    cta: 'Ver Currículum',
    ctaUrl: 'https://www.kickresume.com/cv/3L5o80/',
    ctaSecondary: 'Escríbeme',
    ctaSecondaryUrl: 'mailto:me@jacobogonzalez.com',
    goldenJacketLabel: 'AWS Golden Jacket',
    goldenJacketSub: 'Las 12 certificaciones AWS — un logro extraordinario alcanzado por menos de 100 personas en el mundo.',
  },
  about: {
    title: 'Acerca de',
    content: `Soy ingeniero de cloud y DevOps con más de una década de experiencia práctica en infraestructura, redes y operaciones de TI.

Hoy ayudo a organizaciones a modernizarse en AWS mediante la construcción de landing zones, infraestructura como código, pipelines de CI/CD y plataformas de contenedores que sean confiables en producción y realistas para que los equipos operen.

Disfruto convertir restricciones técnicas complejas en planes de ejecución claros, mentorear a otros y construir sistemas que sigan funcionando bien después del lanzamiento. Basado en Guatemala, colaboro cómodamente con equipos distribuidos en las Américas.`,
    skillsTitle: 'Áreas principales:',
    skills: [
      'Arquitectura AWS',
      'Terraform',
      'Automatización CI/CD',
      'Contenedores y Kubernetes',
      'Migraciones Cloud',
      'Observabilidad',
      'Redes',
      'Confiabilidad de Plataformas',
    ],
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        job: 'Cloud & DevOps Engineer',
        company: 'Triumph Tech',
        companyUrl: 'https://www.triumphtech.com',
        date: 'Abr 2022 – Presente',
        content: [
          'Diseño e implemento infraestructura como código, pipelines de CI/CD, flujos de trabajo con contenedores y arquitecturas AWS alineadas a objetivos de negocio.',
          'Guío esfuerzos de migración con énfasis en confiabilidad, repetibilidad y simplicidad operacional.',
          'Actúo como puente técnico entre stakeholders, equipos de ingeniería y ejecución práctica.',
        ],
      },
      {
        job: 'Coordinador de Redes e Ingeniería',
        company: 'Innova Telco',
        companyUrl: 'https://innovatelco.net/',
        date: 'Jul 2021 – Abr 2022',
        content: [
          'Construí la primera iniciativa DevOps para cargas de trabajo web, migrando entornos on-prem hacia AWS, Terraform, contenedores y EKS.',
          'Mejoré la resiliencia de la plataforma y la madurez de despliegue introduciendo infraestructura como código y patrones de alta disponibilidad.',
          'Contribuí al diseño y lanzamiento de la red central MPLS utilizada para servicios L3VPN.',
        ],
      },
      {
        job: 'Ingeniero L2',
        company: 'ITS Infocom',
        companyUrl: 'https://www.itsinfocom.com',
        date: 'Sep 2019 – Nov 2020',
        content: [
          'Gestioné escalaciones, solución de problemas y coordinación entre equipos para restaurar servicios rápidamente.',
          'Investigué problemas de conectividad e infraestructura en múltiples capas del stack.',
          'Fortalecí la disciplina operacional mediante documentación, análisis de causa raíz y seguimiento continuo.',
        ],
      },
      {
        job: 'Ingeniero de Auditoría de Redes',
        company: 'Conduent',
        companyUrl: 'https://www.conduent.com/',
        date: 'Sep 2017 – Ago 2019',
        content: [
          'Revisé configuraciones, alineación de estándares, inventarios y calidad de implementación en entornos de infraestructura.',
          'Identifiqué riesgos y brechas de documentación antes de que se convirtieran en problemas de entrega o soporte.',
          'Ayudé a crear líneas base técnicas más claras para operaciones continuas y gobernanza.',
        ],
      },
      {
        job: 'Ingeniero Senior de Redes',
        company: 'Allied Global',
        companyUrl: 'https://alliedglobal.com/',
        date: 'Ene 2016 – Sep 2017',
        content: [
          'Gestioné switching, routing, WAN y trabajo de resolución de problemas en entornos de producción.',
          'Serví como punto de escalación senior para incidentes de infraestructura y planificación de implementaciones.',
          'Mantuve la conectividad alineada con el ritmo de crecimiento del negocio y la demanda operacional.',
        ],
      },
      {
        job: 'Ingeniero Pre Ventas y Post Ventas',
        company: 'Tigo',
        companyUrl: 'https://www.tigo.com.gt',
        date: 'Feb 2012 – Dic 2015',
        content: [
          'Apoyé el diseño de soluciones, planificación de implementaciones y seguimiento post-venta para clientes empresariales.',
          'Traduje necesidades comerciales en enfoques técnicos viables y expectativas de entrega.',
          'Construí una sólida base en comunicación con clientes, alcance y redes de grado operador.',
        ],
      },
    ],
  },
  education: {
    title: 'Educación',
    items: [
      {
        title: 'MBA, Minor en Finanzas',
        school: 'Universidad Francisco Marroquín',
        schoolUrl: 'https://ufm.edu',
        date: '2017 – 2018',
        gpa: '93 / 100',
        notes: ['Distinción Magna Cum Laude.'],
      },
      {
        title: 'Maestría en Tecnología de la Información',
        school: 'Universidad Galileo',
        schoolUrl: 'https://galileo.edu',
        date: '2011 – 2012',
        gpa: '92 / 100',
        notes: ['Distinción Magna Cum Laude.'],
      },
      {
        title: 'Posgrado en Seguridad de la Información',
        school: 'Universidad Galileo',
        schoolUrl: 'https://galileo.edu',
        date: '2012',
        gpa: '97 / 100',
        notes: ['Estudio avanzado en fundamentos de seguridad y protección de infraestructura aplicada.'],
      },
      {
        title: 'Ingeniería en Telecomunicaciones',
        school: 'Universidad Galileo',
        schoolUrl: 'https://galileo.edu',
        date: '2007 – 2010',
        gpa: '80 / 100',
        notes: [
          'Becado por excelencia académica.',
          'Trabajé como desarrollador junior en el sitio web de la universidad.',
        ],
      },
    ],
  },
  certifications: {
    title: 'Certificaciones',
    goldenJacketNote: 'AWS Golden Jacket — las 12 certificaciones AWS disponibles obtenidas.',
    categories: [
      {
        label: 'AWS Profesional',
        items: [
          {
            title: 'AWS Certified Solutions Architect – Professional',
            image: '/images/certs/aws-sap.png',
            url: 'https://www.credly.com/badges/fe03d8a2-cae3-4a12-8938-480574991dbc/public_url',
          },
          {
            title: 'AWS Certified DevOps Engineer – Professional',
            image: '/images/certs/aws-devops-pro.png',
            url: 'https://www.credly.com/badges/b6111895-dd5c-4f98-94a2-eda4dd03e445/public_url',
          },
        ],
      },
      {
        label: 'AWS Especialidad',
        items: [
          {
            title: 'AWS Certified Advanced Networking – Specialty',
            image: '/images/certs/aws-ans.png',
            url: 'https://www.credly.com/badges/eee986f6-b685-46a3-8bee-2e007cbaf3dc/public_url',
          },
          {
            title: 'AWS Certified Security – Specialty',
            image: '/images/certs/aws-security.png',
            url: 'https://www.credly.com/badges/40145801-6a77-4201-b47e-cfcba19c7cd9/public_url',
          },
          {
            title: 'AWS Certified Machine Learning – Specialty',
            image: '/images/certs/aws-ml-specialty.png',
            url: 'https://www.credly.com/badges/32de43d3-1e2d-4cd6-9bcf-1d98b103655a/public_url',
          },
        ],
      },
      {
        label: 'AWS Asociado',
        items: [
          {
            title: 'AWS Certified Solutions Architect – Associate',
            image: '/images/certs/aws-saa.png',
            url: 'https://www.credly.com/badges/77fbcfc3-e1bb-472e-a2d0-e429b26f533d/public_url',
          },
          {
            title: 'AWS Certified Developer – Associate',
            image: '/images/certs/aws-developer.png',
            url: 'https://www.credly.com/badges/e750befa-4a45-4f57-994a-6d3a241ea1aa/public_url',
          },
          {
            title: 'AWS Certified SysOps Administrator – Associate',
            image: '/images/certs/aws-sysops.png',
            url: 'https://www.credly.com/badges/d0a09e00-d3c7-4404-a1e0-6eeee9acbef1/public_url',
          },
          {
            title: 'AWS Certified Data Engineer – Associate',
            image: '/images/certs/aws-data-engineer.png',
            url: 'https://www.credly.com/badges/09914c4f-fcd4-4d5f-9eab-641d2bf8e9c3/public_url',
          },
          {
            title: 'AWS Certified Machine Learning Engineer – Associate',
            image: '/images/certs/aws-ml-engineer.png',
            url: 'https://www.credly.com/badges/b6bdcdfa-c543-41f1-8815-25592149be6f/public_url',
          },
        ],
      },
      {
        label: 'AWS Fundacional',
        items: [
          {
            title: 'AWS Certified Cloud Practitioner',
            image: '/images/certs/aws-cloud-practitioner.png',
            url: 'https://www.credly.com/badges/cc992dc1-e202-4b36-80fe-f9c300ff4a44/public_url',
          },
          {
            title: 'AWS Certified AI Practitioner',
            image: '/images/certs/aws-ai-practitioner.png',
            url: 'https://www.credly.com/badges/11222e2a-50ac-4237-b780-99cde561cf70/public_url',
          },
        ],
      },
      {
        label: 'Otras',
        items: [
          {
            title: 'Microsoft Certified: Azure Fundamentals',
            image: '/images/certs/azure-fundamentals.png',
            url: 'https://www.credly.com/badges/630305a6-83c6-4f48-870f-c852784b5eb6/public_url',
          },
          {
            title: 'Cisco Certified Network Professional Enterprise',
            image: '/images/certs/ccnp.png',
            url: 'https://www.credly.com/badges/236b07cd-350f-4039-ae88-05115bb9220d/public_url',
          },
        ],
      },
    ],
  },
  projects: {
    title: 'Lo que entrego',
    items: [
      {
        title: 'Fundamentos para Migraciones Cloud',
        badges: ['AWS', 'Landing Zones', 'IaC'],
        content: 'Landing zones, líneas base de IAM, infraestructura reutilizable y planes de lanzamiento para equipos que migran desde on-prem o configuraciones cloud ad-hoc a entornos AWS mantenibles.',
        cta: 'Iniciemos una conversación',
        ctaUrl: 'mailto:me@jacobogonzalez.com',
      },
      {
        title: 'Automatización de Plataformas y CI/CD',
        badges: ['Terraform', 'Pipelines', 'Contenedores'],
        content: 'Flujos de entrega que reducen pasos manuales y ayudan a los equipos a publicar de forma consistente, desde el aprovisionamiento de infraestructura hasta el despliegue de aplicaciones.',
        cta: 'Hablemos de tu plataforma',
        ctaUrl: 'mailto:me@jacobogonzalez.com',
      },
      {
        title: 'Este Portafolio en AWS',
        badges: ['Astro', 'S3', 'Route 53', 'GitHub Actions'],
        content: 'Un sitio personal liviano desplegado como infraestructura estática con entrega automatizada y distribución global.',
        cta: 'Ver código fuente',
        ctaUrl: 'https://github.com/Jacobog3/resume-hugo-s3',
      },
    ],
  },
  contact: {
    title: 'Construyamos algo confiable',
    content: 'Si estás planificando una migración, mejorando tus fundamentos en AWS o optimizando tu automatización de entrega, me encantaría saber qué estás construyendo.',
    email: 'me@jacobogonzalez.com',
    btnName: 'Escríbeme',
    links: [
      { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jacobog/' },
      { icon: 'github', label: 'GitHub', url: 'https://github.com/Jacobog3' },
    ],
  },
};
