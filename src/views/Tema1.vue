<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 1
      h1 Herramientas de organización administrativa del servicio
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/imagen1.jpg')
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        p El guía de turismo, por ser un prestador de servicios turísticos, puede desempeñarse de manera independiente, y es reconocido como una empresa unipersonal. Sin embargo, es una empresa que igualmente se debe organizar con una estructura antes de empezar la operación. La guianza al adoptar los principios de la administración, planificar, controlar, dirigir y organizar recursos, también requiere de una estructura, es decir, de la definición de funciones, responsabilidades, relaciones de coordinación y comunicaciones con el fin de lograr los objetivos de un servicio.
        p.p-3.fondo-1 Con miras a establecer una estructura empresarial, se requieren herramientas de organización administrativa, para que el guía puede trazar procesos dinámicos, coordinar e integrar un conjunto de personas en relación con unos recursos, y así conseguir el resultado u objeto planteado en el plan de acción.
    p.mb-5(data-aos="fade-down-left") Al generar una estructura, todos los actores que intervienen en el servicio guiado comprenden los objetivos, funciones y sus responsabilidades, con el fin de determinar dicha estructura organizacional, para lo cual se requiere la aplicación de los siguientes principios de acuerdo con Chiavenato (2012).
    .row.justify-content-center.align-items-center
      .col-lg-7.col-md-12(data-aos="fade-down-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-center.justify-content-center(titulo="División de trabajo")
            .col-lg-3.col-md-3.col-sm-4.col-4
              figure
                img(src='@/assets/curso/tema1/figura1.svg')
            .col-lg-9.col-md-9.mb-4.mb-md-0
              p Se basa en descomponer un proceso complejo en pequeñas tareas. Esto se realiza para lograr mayor productividad, eficiencia y reducción de costos en recursos humanos y físicos.
          .row(data-aos="fade-down-left").align-items-center.justify-content-center(titulo="Unidad de objetivos")
            .col-lg-3.col-md-3.col-sm-4.col-4
              figure
                img(src='@/assets/curso/tema1/figura2.svg')
            .col-lg-9.col-md-9.mb-4.mb-md-0
              p Se trata de un objetivo claramente definido y que sea comprendido por las diferentes personas que interactuarán durante el servicio.
          .row.align-items-center.justify-content-center(titulo="Jerarquía - Niveles de autoridad")
            .col-lg-3.col-md-3.col-sm-4.col-4
              figure
                img(src='@/assets/curso/tema1/figura3.svg')
            .col-lg-9.col-md-9.mb-4.mb-md-0
              p La división de trabajo trae consigo diversas funciones que, si no se articulan, no constituyen una organización eficiente. Cuanto más número de usuarios o mayor sea el número de recursos necesarios para el servicio o experiencia turísticas, tiende a ser mayor el número de niveles jerárquicos.

          .row.align-items-center.justify-content-center(titulo="Autoridad y responsabilidad")
            .col-lg-3.col-md-3.col-sm-4.col-4
              figure
                img(src='@/assets/curso/tema1/figura4.svg')
            .col-lg-9.col-md-9.mb-4.mb-md-0
              p La responsabilidad tiene que ir acompañada de una correspondiente delegación de autoridad para que pueda cumplir con los compromisos que se le exige.
          .row.align-items-center.justify-content-center(titulo="Delegación")
            .col-lg-3.col-md-3.col-sm-4.col-4
              figure
                img(src='@/assets/curso/tema1/figura5.svg')
            .col-lg-9.col-md-9.mb-4.mb-md-0
              p Se trata de la confianza y entregar a otra persona del equipo una o más funciones bien definidas para liberarse de algunas cargas y poderse dedicar a otras labores de más importancia.
      .col-lg-5.col-md-8.col-sm-8.col-10.mb-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura.svg')
    .row.ampliar.px-5.fondo-3
      .col-12
        .cajon.fondocuadrado.p-4.mb-4.fondo-2(data-aos="fade-down-left")
          p.px-0.px-md-4.mb-0 Para aplicar los principios de la organización se recomienda el uso de herramientas como el diagrama de afinidad, el mapa de proceso, el flujograma, manuales de procedimiento y hoja de verificación. 
        separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
          h2 1.1 Mapa de procesos
        p(data-aos="fade-down-right") Según Pardo (2013), el mapa de procesos es una herramienta para representar gráficamente los procesos de una organización. Se caracteriza por mostrar de manera global, las entradas y salidas, e interrelaciones entre participantes, y su desarrollo secuencial, por tanto, hace visible la estructura de los diferentes métodos utilizados para la generación del servicio y para el funcionamiento interno.
        p.text-bold(data-aos="fade-down-left") En el guionaje, el mapa de procesos contribuye al establecimiento de las siguientes acciones específicas que se explican a continuación.
        .row.justify-content-center
          .col-lg-7.col-md-12.mb-4(data-aos="fade-down-right")
            LineaTiempoD.fondo-5
              p(numero="1" titulo="Determina el proceso del servicio") El mapa de procesos determina al interior del proceso en el servicio dónde empieza y dónde acaba y, además, qué incluye dicho proceso.
              
              p(numero="2" titulo="Indica actividades no cubiertas ") El mapa de procesos permite descubrir actividades que se creía estaban cubiertas por un tercero y en realidad no tiene un responsable.
              
              p(numero="3" titulo="Marco para la actuación") El mapa de procesos es un marco para la actuación del guía, ayuda a no perder la perspectiva, y dar sentido a la forma en la que se presta el servicio, a situar adecuadamente cada elemento, a sacar conclusiones para la mejora continua.

              p(numero="4" titulo="Contiene elementos en su construcción") Algunos elementos que debe tener en cuenta el guía a la hora de construir un mapa de procesos son:
                ul.lista-ul.mb-3
                  li 
                    i.lista-ul__vineta
                    | Identificar la acción del usuario del servicio guiado realiza echar a andar o iniciar el proceso.
                  li 
                    i.lista-ul__vineta
                    | Situar al cliente como primer participante.
                  li 
                    i.lista-ul__vineta
                    | Localizar las actividades en forma horizontal, en orden cronológico. 
                  li 
                    i.lista-ul__vineta
                    | Dibujar un cuadro alrededor del mapa para mostrar sus límites.
          .col-lg-5.col-md-12.fondo-4(data-aos="fade-down-left")
            .row.justify-content-center
              .col-4.pt-5
                img(src='@/assets/curso/tema1/figura6.svg')
              .col-12
                p.px-4.pt-4 Al ser el mapa de proceso una representación global, no especifica el flujo de trabajo dentro del servicio, en consecuencia, no contiene símbolos de toma de decisión ni almacenamiento, para esos detalles se utiliza el diagrama de flujo. 
                p.px-4 La siguiente imagen muestra una representación gráfica de este mapa de procesos y su aplicación en el guionaje turístico, donde se deben tener en cuenta las necesidades de los usuarios a nivel de apoyo operativo o estratégico.
    .row.px-5.ampliar.fondo-6
      .col-12
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
          h5 Figura 1. 
          span Mapa de procesos del guionaje turístico
        .row.justify-content-center
          .col-lg-8.col-md-12(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura7.svg')
        separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.2 Diagrama de flujo
    p(data-aos="fade-down-left") En el quehacer del guía de turismo, en el que tiene que sincronizar recursos, tiempos y movimiento, el diagrama de flujo es una herramienta fundamental, utilizada para la representación de un proceso como ente individual. 
    p(data-aos="fade-down-right") El flujograma fue ideado por programadores informáticos en la década de 1940, aprovechando métodos de representación ya existentes. Pasó de ser protagonista en el campo informático al mundo empresarial, porque demostró ser de gran utilidad para ilustrar gráficamente los procesos y, con ello, hacer más visible para un equipo de trabajo un concepto abstracto (Pardo, 2013).
    p.text-bold(data-aos="fade-down-left") El flujograma en guionaje permite:
    .row.justify-content-center.my-5
      .col-lg-6.col-md-12.p-5.fondo-8(data-aos="fade-down-right")
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/tema1/figura8.svg')
          .col-12
            h4.text-white.mt-4 Comprender ágilmente las acciones a realizar
            p.text-white Los actores involucrados llegan a un acuerdo sobre los métodos a seguir con más convicción y rapidez. En las reuniones de trabajo se identifican más rápido los problemas y oportunidades de mejora, establecer recursos, coordinar actuaciones, delimitar tiempos.
      .col-lg-6.col-md-12.p-5.fondo-9(data-aos="fade-down-left")
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/tema1/figura9.svg')
          .col-12
        h4.mt-4 Documentar procesos
        p.mb-0 Al visualizarse las funciones y responsabilidades de cada uno de los actores intervinientes, se pueden establecer indicadores operativos, asimismo, diseñar nuevos procesos cuando se requiera. 
        p.mb-0
    .row.justify-content-center.margensup(data-aos="fade")
      .col-12.fondo-7.pt-4
        .row.justify-content-center.align-items-center
          .col-lg-4.col-md-5.col-sm-5.col-6(data-aos="fade-down-right")
            img.posicion(src='@/assets/curso/tema1/imagen2.png')
          .col-lg-6.col-md-auto.col-sm-auto.col-auto.mt-3(data-aos="fade-down")
            h3 Ejemplo flujograma del servicio guiado
            p La siguiente imagen presenta un ejemplo del flujograma de un servicio guiado.
          .col-lg-2.col-md-auto.col-sm-auto.col-auto.mb-4(data-aos="fade-down-left")
            a.boton.color-acento-botones(:href="obtenerLink('downloads/flujograma.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.3 Manuales de procedimiento
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        span.mb-0.resaltado.text-bold El manual es una herramienta necesaria para el trabajo en equipo
        span , especialmente cuando constituye una agencia operadora en la ejecuta el proceso de manera independiente, es decir, cuando la contratación del servicio es directa sin intermediación de la agencia de viajes y turismo, por tanto, la agencia operadora asume todas responsabilidad sobre la exitosa prestación del servicio.
    p.mt-5(data-aos="fade-down-left") Según Tarí  y Molina (2007), un manual es una recopilación minuciosa y detallada en forma de texto, con las  instrucciones  que  se  deben  seguir  para  realizar una determinada actividad. Se caracteriza por estar pensado en el lector, para que pueda desarrollar correctamente la tarea encomendada. 
    p.mb-5(data-aos="fade-down-right") Cuando una organización, puede ser una agencia operadora o en este caso el guía, genera y adopta un manual de procedimientos, está documentando su experiencia, conocimiento y las técnicas del como prestar el servicio guiado. Una breve descripción sobre el manual de procedimientos puede consultarse a continuación.
    .row
      .col-auto.fondotitulo(data-aos="fade-down-right")
        h3.text-center.mb-0 Elementos que debe contener un manual de procedimientos
    .row.justify-content-center.my-5
      .col-lg-4.col-md-8.col-sm-10.col-10.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/figura10.svg')
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        LineaTiempoD.fondo-5
          .row(numero="1" titulo="Objetivos trazados").p-3.align-items-center.justify-content-center
            .col-sm-8.col-12.mb-4.mb-md-0
              p Los objetivos que se encuentran en el manual de procedimientos, representan el motivo por el cual se está redactando este documento y deben proporcionar una visión integral de los procesos que lo componen.
            .col-sm-4.col-5
              img(src='@/assets/curso/tema1/figura11.svg')
          
          .row(numero="2" titulo="Procesos y su alcance, incluido el mapa de procesos").p-3.align-items-center.justify-content-center
            .col-sm-8.col-12.mb-4.mb-md-0
              p Esta es la sección más importante del manual, debido a que contiene la descripción global de lo que se hace y cómo hay que hacerlo, también dónde y con qué frecuencia.
              p Esta sección incluye los puestos de los responsables de cada operación que están involucrados en el proceso.
            .col-sm-4.col-5
              img(src='@/assets/curso/tema1/figura12.svg')

          .row(numero="3" titulo="Normas y políticas").p-3.align-items-center.justify-content-center
            .col-sm-8.col-12.mb-4.mb-md-0
              p En este espacio es importante mencionar cuáles son las normas de la organización a través de sus valores, la misión y visión. Con esto es posible alinear el enfoque empresarial de la organización.
            .col-sm-4.col-5
              img(src='@/assets/curso/tema1/figura13.svg') 
          
          .row(numero="4" titulo="Responsables").p-3.align-items-center.justify-content-center
            .col-sm-8.col-12.mb-4.mb-md-0
              p El manual de procedimientos, al ser un documento de actualización constante, requiere la asignación de unos responsables tanto en su construcción inicial, como en su actualización. Siempre debe indicarse el nombre de la persona asignada para llevar a cabo el cambio, así como la fecha en la cual se llevó a cabo.
            .col-sm-4.col-5
              img(src='@/assets/curso/tema1/figura14.svg')

          .row(numero="5" titulo="Diagrama de flujo").p-3.align-items-center.justify-content-center
            .col-sm-8.col-12.mb-4.mb-md-0
              p El manual de procedimientos debe contener un diagrama de flujo que ilustre el procedimiento en general y los responsables que intervienen en cada operación. Se trata de una representación gráfica sencilla que facilita la comprensión del proceso.
            .col-sm-4.col-5
              img(src='@/assets/curso/tema1/figura15.svg')

    .row.justify-content-center.margensup(data-aos="fade")
      .col-12.fondo-10
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-4.col-sm-4.col-4(data-aos="fade-down-right")
            img.posicion(src='@/assets/curso/tema1/imagen4.png')
          .col-lg-7.col-md-auto.col-sm-auto.col-auto(data-aos="fade-down")
            h3.mt-3.ms-3 Manual de procesos y procedimientos de la Empresa Social del Estado Hospital Universitario del Caribe
            p.ms-3 Para apreciar un ejemplo a este respecto, se recomienda revisar en el material complementario el Manual de procesos y procedimientos de la Empresa Social del Estado Hospital Universitario del Caribe.
          .col-lg-2.col-md-auto.col-sm-auto.col-auto.mb-4(data-aos="fade-down-left")
            a.boton.color-acento-botones(:href="obtenerLink('downloads/manual_procesos_procedimientos.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.4 Diagrama de afinidad
    .row.justify-content-center
      .col-lg-8.col-md-12.mb-4(data-aos="fade-down-left")
        span.fondo-11.p-1 Conocido como el método KJ 
        span por las iniciales de su creador <em>Kawakita Jiro</em> en la década de 1960, es una herramienta útil para organizar el equipo de trabajo, en una operación en la que intervienen guías rastrillo o guías de apoyo, guía con formación en primeros auxilios o APH (atención prehospitalaria), intérprete, también en una operación grande o más compleja en donde interviene personal de alojamiento, restaurante, transporte, entre otros. Se utiliza cuando falta un manual de procedimientos, el servicio es complejo, la orden de servicio no es clara, y cuando se requiere de la participación y soporte de todo el equipo de trabajo.
        .cajon.fondocuadrado1.p-4.my-4.fondo-12(data-aos="fade-down-left")
          p.px-0.px-md-4.mb-0 Se usa con la técnica de lluvia de ideas para agrupar aquellos elementos que están relacionados entre sí de forma natural. Es un proceso creativo diseñado para reunir hechos, opiniones e ideas que se encuentran en un estado de desorganización y producir consenso por medio de la clasificación que hace el equipo de trabajo. 
      .col-lg-4.col-md-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/imagen5.jpg')
    p.my-5.text-bold(data-aos="fade-down-left") A continuación, se presentan los pasos a seguir, los cuales generalmente el guía líder debe dirigir para hacer el diagrama de afinidad (Secretaría de Gestión Pública, 2015).

    SlyderF.anchotar(data-aos="fade-down").mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
      .tarjeta-avatar
        img.sizeimg(src='@/assets/curso/tema1/imagen6.png')
        .tarjeta.fondo-4
          .text-dark.p-4
            p.mt-2.mt-sm-3.mt-md-0.mt-lg-3 Determinar el tema o proceso a revisar. Es de gran ayuda plantearlo en forma de pregunta.  

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/imagen7.png')
        .tarjeta.fondo-4
          .text-dark.p-4
            p.mt-2.mt-sm-3.mt-md-0.mt-lg-3 Los datos pueden reunirse en una sesión tradicional de lluvia de ideas, por observación directa, entrevistas y cualquier otro material de referencia.

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/imagen8.png')
        .tarjeta.fondo-4
          .text-dark.p-4
            p.mt-2.mt-sm-3.mt-md-0.mt-lg-3 Cada participante deberá plasmar en fichas o tarjetas, frases independientes con un claro y evidente significado sobre la situación que se está analizando.

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/imagen9.png')
        .tarjeta.fondo-4
          .text-dark.p-4
            p.mt-2.mt-sm-3.mt-md-0.mt-lg-3 Las fichas o tarjetas deberán ponerse en una pizarra o papelógrafo de tal manera que todos los participantes puedan verlas fácilmente.

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/imagen10.png')
        .tarjeta.fondo-4
          .text-dark.px-4.py-4
            p.mt-2.mt-sm-3.mt-md-0.mt-lg-3 Luego, los miembros del equipo agrupan las fichas en categorías similares.

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/imagen11.png')
        .tarjeta.fondo-4
          .text-dark.p-4
            p.mt-2.mt-sm-3.mt-md-0.mt-lg-3 Las fichas o tarjetas deberán leerse y revisarse una vez más con el fin de verificar si han sido agrupadas de forma apropiada.

      .tarjeta-avatar
        img(src='@/assets/curso/tema1/imagen12.png')
        .tarjeta.fondo-4
          .text-dark.p-4
            p.mt-2.mt-sm-3.mt-md-0.mt-lg-3 Mediante un consenso se asignará un nombre que transmita el significado de cada grupo de fichas o tarjetas.
    .cajon.fondocuadrado.p-4.mb-4.fondo-2(data-aos="fade-down-left")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-sm-3.col-3.mb-4
          img(src='@/assets/curso/tema1/bombilla.svg')
        .col-lg-10.col-md-9.col-sm-9.col-12
          p.px-3.mb-0 Existen varios ejemplos que contextualizan lo que debe incorporar un diagrama de afinidad, en la siguiente gráfica se establece, a manera de modelo y de forma general, cómo elaborar el diagrama mediante la lluvia de ideas:
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 2
      span Ejemplo diagrama de afinidad
    .row.justify-content-center
      .col-lg-8.col-md-12.fondo-13(data-aos="fade-down-left")
        h4.text-center.mt-5 Diagrama de afinidad / Método KJ
        img.p-5.display1(src='@/assets/curso/tema1/figura16.svg')
        .row.justify-content-center
          .col-sm-8.col-10
            img.px-5.mt-4.display2(src='@/assets/curso/tema1/figura16-1.svg')
          .col-sm-8.col-10
            img.px-5.mt-4.display2(src='@/assets/curso/tema1/figura16-2.svg')
          .col-sm-8.col-10
            img.px-5.my-4.display2(src='@/assets/curso/tema1/figura16-3.svg')
    p.my-5(data-aos="fade-down-right") Para empezar a trabajar en un diagrama de afinidad, es importante tener en cuenta que no se obtienen los mismos resultados si se trabaja solo, con otra persona o en un equipo, lo ideal es trabajar en grupos de 4 a 12 personas para alcanzar los mejores resultados, y se deben seguir los siguientes pasos que garantice este proceso:
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 3 
      span Proceso que se realiza al construir un diagrama de afinidad
    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-4.col-sm-4.me-3.me-md-5.fondo-14.mb-4(data-aos="fade-down-left")
        p.margen Trabajar mediante la formulación de preguntas, tipo método <em>Scamper</em>.
      .col-lg-5.col-md-7.col-sm-7(data-aos="fade-down-right")
        .row
          .col-12.fondo-15.p-3.mb-2
            p Nombrar un líder de equipo que dinamice y mantenga el foco de atención del problema a resolver. 
          .col-12.fondo-16.p-3.mb-2
            p Disponer de un espacio físico en donde se puedan colocar las ideas, mediante <em>post it</em> o cartulinas.
          .col-12.fondo-15.p-3.mb-2
            p Definir el punto de partida semejante al <em>design thinking</em>.
          .col-12.fondo-16.p-3.mb-2
            p Hacer la lluvia de ideas o <em>brainstorming</em> de manera individual.
          .col-12.fondo-15.p-3.mb-2
            p Trabajar mediante grupos de características comunes o categorías definidas.
          .col-12.fondo-16.p-3.mb-2
            p Relacionar los elementos o jerarquizar los datos obtenidos.
          .col-12.fondo-15.p-3.mb-2
            p Llevar a cabo la toma de decisiones.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.5 Hoja de verificación
    .row.justify-content-center
      .col-lg-7.col-md-12(data-aos="fade-down-left")
        p Esta es una herramienta útil para la evaluación del desempeño de cada actor con responsabilidades en la realización de procedimientos en el guionaje. Se caracteriza por ser una lista de oraciones, frases o párrafos que describen aspectos específicos de la conducta a controlar durante la observación del servicio guiado. 
        p La lista brinda información descriptiva de lo que el lector debe realizar en determinada situación, es decir, el análisis paso a paso de la tarea y del procedimiento a evaluar.
      .col-lg-1
      .col-lg-3.col-md-6.col-sm-6.col-7(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura17.svg')
      .col-lg-1
    .cajon.fondocuadrado2.p-4.mb-4.fondo-17.mt-5(data-aos="fade-down-left")
      p.px-4.mb-0 Para quien es evaluado (el guía o apoyo del servicio guiado) es una herramienta de un respaldo detallado de todas las condiciones y etapas del procedimiento que debe realizar. En ámbitos como la aviación, los pilotos controlan mediante <em>“check list”</em> cada una de las condiciones antes de despegar. Igual tratamiento merecen las personas usuarias de un servicio guiado. (Delfino, Delfino y Bernadá, 2010).
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
