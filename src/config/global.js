export default {
  global: {
    componenteFormativo: 'Organización del servicio de guionaje',
    descripcionCurso:
      'Una vez se ha realizado el ciclo PHVA, se implementan planes de mejora mediante el uso de herramientas tanto documentales como ofimáticas, así se puede realizar el seguimiento y control de los equipos-bienes de la empresa. Además, se deben tener en cuenta los requerimientos tributarios para el prestador y los proveedores del servicio, con recomendaciones a guardar para sitios especiales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas de organización administrativa del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mapa de procesos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diagrama de flujo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Manuales de procedimiento',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diagrama de afinidad',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Hoja de verificación',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas ofimáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Administración de recursos físicos en el guionaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Alistamiento administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Documentación tributaria de proveedores',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Seguros de viaje en el guionaje',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Ingreso a los atractivos turísticos',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas de organización administrativa del servicio',
      referencia:
        'Bravo, C., J. (2011). Gestión de Procesos Alineados con la estrategia (4ª Edición). Evolución.',
      tipo: 'Libro',
      link:
        'http://hsjd.org/seminariogestion2013/docs/02-Dia5-TercerModeloProcesos.pdf',
    },
    {
      tema: 'Manuales de procedimiento',
      referencia:
        'Ortiz, I., L. O. (2020). Manual de procesos y procedimientos. Empresa Social del Estado Hospital Universitario del Caribe.',
      tipo: 'Libro',
      link: 'https://www.eumed.net/libros-gratis/2010b/689/689.pdf',
    },
    {
      tema: 'Herramientas ofimáticas',
      referencia:
        'Martínez, M., F. (2012). Ofimática y proceso de la información. McGraw-Hill.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4739',
    },
    {
      tema: 'Administración de recursos físicos en el guionaje',
      referencia:
        'Vargas, R., H. (2007). Manual de implementación de un programa 5S: un sistema de gestión de calidad. Corporación Autónoma Regional de Santander.',
      tipo: 'Documento',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/biblioteca/manual-de-implementacion-de-un-programa-5s-un-sistema-de-gestion-de-calidad',
    },
    {
      tema: 'Alistamiento administrativo',
      referencia:
        'DIAN Colombia. (2020). Paso a paso para inscribir el RUT de manera virtual - DIAN. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VOeytRHPVUw',
    },
    {
      tema: 'Alistamiento administrativo',
      referencia:
        'Cabo, N., M. (2004). Seguros de Viaje. Prestaciones que ofrecen al viajero. Paraninfo.',
      tipo: 'Página web',
      link:
        'https://link.gale.com/apps/doc/CX2184800104/GVRL?u=sena&sid=bookmark-GVRL&xid=bef74e3e.',
    },
  ],
  glosario: [
    {
      termino: 'Agencia de viajes turismo, operadora',
      significado:
        'empresas comerciales, debidamente  constituidas  por  personas naturales o jurídicas que se dediquen profesionalmente a vender planes turísticos (Dirección de Análisis Sectorial y Promoción Registro Nacional de Turismo, 2018).',
    },
    {
      termino: 'Eficiencia',
      significado:
        'se refiere a lograr las metas con la menor cantidad de recursos, enfocándose en el ahorro o reducción de recursos al mínimo. Una persona eficiente es aquella que lleva a cabo la tarea con el menor número de recursos posible (Negocios y PyMES, 2013).',
    },
    {
      termino: 'Eficacia',
      significado:
        'alcanzar las metas establecidas respecto al servicio. Una persona eficaz consigue los resultados esperados de forma satisfactoria independientemente de los recursos utilizados (Negocios y PyMES, 2013).',
    },
    {
      termino: 'Indicador operativo',
      significado:
        'permiten monitorear y medir el cumplimento de las actividades propias del funcionamiento del proceso en el servicio guiado (Gestiópolis 2007).',
    },
    {
      termino: 'Observación directa',
      significado:
        'se emplea cuando se desea estudiar el comportamiento de una persona o de un grupo de usuarios. Es la inspección y estudio del investigador empleando sus propios sentidos para identificar los hechos significativos tal como son o cómo tienen lugar espontáneamente en el tiempo en que suceden (Sanjuán, 2011).',
    },
    {
      termino: 'Orden de servicio',
      significado: 'también es conocido como <em>váucher</em> (Ceupe, 2020).',
    },
    {
      termino: 'Política organizacional',
      significado:
        'directriz que debe ser divulgada, entendida por todos los miembros de la organización, en ella se contemplan las normas y responsabilidades de cada área (Medina Mariana, 2012).',
    },
    {
      termino: 'Recursos humanos y físicos',
      significado:
        'clasificación que corresponde a los recursos que administra el guía durante el servicio, los físicos comprenden materiales y equipos, mientras los humanos se relacionan con el equipo de trabajo y el equipo de apoyo que requiera el guía (Renovetec, s. f.).',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'término informático que hace referencia a un programa o conjunto de programas de cómputo (Google, significados, 2021).',
    },
    {
      termino: 'Tabulación',
      significado:
        'consiste en presentar los datos estadísticos en forma de tablas o cuadros (Google site, 2016).',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, S., J. (2016). Promoción y ventas de servicios turísticos. Editorial CEP, S.L.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50984?page=98',
    },
    {
      referencia:
        'Beekman, G. (2005). Introducción a la informática. Pearson Educación.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3255',
    },
    {
      referencia:
        'Chiavenato, I. (2012). Introducción a la teoría general de la administración. McGraw-Hill.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2020). Reforma Ley General de Turismo.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30040295',
    },
    {
      referencia:
        'Delfino, M., Delfino, M., y Bernadá, M. (2010). Manual de procedimientos en pediatría. Universidad de la República.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/79637?page=13',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales - DIAN. (2021). RUT - Factura electrónica. Impuestos. ',
      link: 'https://www.dian.gov.co/impuestos/personas/Paginas/rut.aspx',
    },
    {
      referencia:
        'Freyle, J., De la Hoz, R., E. C., y Flórez, L., C. G. (2014). Memorias organizacionales en la era del almacenamiento en la nube. Tecnura, 18(40), 115-126.',
      link: 'https://doi.org/10.14483/udistrital.jour.tecnura.2014.2.a09',
    },
    {
      referencia:
        'Lozano, V., A., Sánchez H., D., Pineda, B., M., Maya, B., A., y Niño, A. (1986). Conceptos básicos de organización. Servicio Nacional de Aprendizaje - SENA.',
      link: 'https://hdl.handle.net/11404/666',
    },
    {
      referencia:
        'Melián, G., S., y Bulchand-Gidumal, J. (2015). Competencias requeridas por el nuevo trabajo en turismo. Investigaciones Turísticas (10), 76-89',
      link: 'https://accedacris.ulpgc.es/jspui/handle/10553/23147',
    },
    {
      referencia:
        'Pardo, Á., J. M. (2013). Configuración y usos de un mapa de procesos. AENOR - Asociación Española de Normalización y Certificación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/53587?page=50',
    },
    {
      referencia:
        'Restrepo, M. R., Calderón, C. L. F., y Romero, C., A. V. (2010). Aspectos jurídicos y tributarios de la factura como título valor. Criterio Libre, 8(13), 209-230.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3362512',
    },
    {
      referencia:
        'Secretaría de Gestión Pública. (2015). Herramientas de apoyo para la implementación de la gestión por procesos en el marco de la política nacional de modernización de la gestión pública. Presidencia del Consejo de Ministros.',
      link:
        'https://sgp.pcm.gob.pe/wp-content/uploads/2015/03/Herramienta_Diagrama_de_Afinidad.pdf',
    },
    {
      referencia:
        'Tarí, G., J. J., y Molina, A., F. (2007). Etapas para implantar la norma ISO 9000:2000. Centro de Estudios de Postgrado de Administración de Empresas (Cepade), Universidad Politécnica de Madrid (UPM). ',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/biblioteca/etapas-para-implantar-la-norma-iso-9000-2000',
    },
    {
      referencia:
        'SENA. (2018). Materiales, equipos y recursos requeridos en el plan de acción. Material de estudio del Programa tecnólogo en Guianza turística. SENA.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Manuel Gómez Morillo',
        cargo: 'Instructor técnico',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos. Regional Distrito Capital. Programa de Tecnología en Guianza Turística',
      },
      {
        nombre: 'Claudia Patricia Porras Otálora',
        cargo: 'Instructor técnico',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos. Regional Distrito Capital. Programa de Tecnología en Guianza Turística',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
}
