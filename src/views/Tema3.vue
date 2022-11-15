<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 3
      h1 Administración de recursos físicos en el guionaje
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/imagen1.jpg')
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        p Los recursos físicos guardan una estrecha relación con lo establecido en la planeación, la organización, el desarrollo, la coordinación y el control de técnicas, capaces de generar eficiencia en el desempeño del personal. A la vez que posibilita para la empresa el logro de los objetivos propuestos en relación con la guianza turística. Para dar cumplimiento con la administración de los recursos físicos, se hace uso de registros mediante conteo, o fichas de registros, los cuales se explican a continuación.
    .row.mt-4
      .col-auto.fondotitulo.mb-5(data-aos="fade-down-right")
        h3.text-center.mb-0 Inventario
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-lg-4(data-aos="fade-down-left")
        span.resaltado.text-bold Según la RAE
        span , el término inventario hace referencia al registro de bienes, en el caso de la guianza los equipos o recursos físicos, pertenecientes, a una persona, comunidad y organización, el cual se debe hacer con orden y precisión. El control de los equipos para la guianza se realiza mediante el conteo físico de los equipos disponibles, siendo indispensable la fácil localización dentro de un lugar de almacenamiento apropiado. 
        p.fondo-18.p-3.mt-2 Los inventarios deben registrarse en una ficha que permita la fácil identificación de los productos que hacen parte de los bienes de la empresa, bien sea existencias físicas, materia prima, productos semiterminados o terminados. 
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/inventario.jpg')
    p.my-5.text-bold(data-aos="fade-down-right") A manera de ejemplo, en la siguiente tabla, se puede observar dicho registro, mediante una ficha técnica elaborada para tal fin.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Tabla 1
      span Ejemplo de inventario de equipo para la guianza
    .tabla-c.mt-5.sinsombra(data-aos="fade-down-left")
      table
        tr.fondo-26
          <td colspan="6">
            h4.text-center.text-white Inventario de equipos Nombre de la empresa
          </td>
        tr.fondo-24.bordesup
          <td colspan="3" style="font-weight:700;"> Nombre de quien lo realizó:</td>
          <td colspan="3" class="bordeizq" style="font-weight:700;"> Fecha de realización:</td>
        tr.fondo-27
          td.anchocol 
            p.text-bold Código
          td.bordeizq 
            p.text-bold.bordeizq  Tipo
          td.bordeizq 
            p.text-bold Marca/ Modelo
          td.bordeizq 
            p.text-bold No. de serie
          td.bordeizq 
            p.text-bold Estado
          td.bordeizq 
            p.text-bold Responsable
        tr.fondo-24
          td.anchocol PT
          td.bordeizq  Paleta para parar el tránsito Plástica Verde
          td.bordeizq  Sin
          td.bordeizq 1
          td.bordeizq  Operativo
          td.bordeizq  Nombre
        tr.fondo-27
          td.anchocol BD
          td.bordeizq  Paleta para parar el tránsito Plástica Verde
          td.bordeizq  Coleman
          td.bordeizq 12
          td.bordeizq  No operario
          td.bordeizq  Nombre
    p.my-5(data-aos="fade-down-left") Una explicación más detallada de cada uno de los elementos que componen la ficha de inventario se describe a continuación.
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        LineaTiempoD.fondo-5
          p(numero="1" titulo="Código") corresponde a las iniciales del producto o la marca. El objetivo es acortar, puede ser dos o tres letras, en el ejemplo PT = paleta de tránsito o BD=  bolsa de dormir.
          
          p(numero="2" titulo="Tipo") en este espacio se escriben las especificaciones de materiales y el nombre del tipo de bien a inventariar, por ejemplo: brújula, GPS, binoculares, arnés, entre otros. 

          p(numero="3" titulo="Marca/modelo") marca y modelo del bien, que correspondan a la información dada por el fabricante o consignada en la hoja de vida del equipo. 

          p(numero="4" titulo="No. de serie") número de serie del equipo, si hay varios equipos del mismo tipo y marca, es ideal asignar a cada uno un número para hacer el seguimiento.

          p(numero="5" titulo="Estado") en el que se encuentra el bien. Puede usarse un término como: operativo: bien que puede ser utilizado sin problema; no operativo: bien que requiere ser reparado para ser utilizado; de baja: bien que es dado de baja y que no puede ser utilizado.

          p(numero="6" titulo="Responsable") nombre o cargo de la persona responsable o que tiene asignado el cuidado y/o el uso del bien detallado.

      .col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/figura1.svg')
    .row.ampliar.px-5.fondo-28
      .col-12(data-aos="fade-down-right")
        p.my-5.text-bold Dependiendo de las políticas y las necesidades de la organización o el contratante, se puede agregar al formato columnas como:
        ul.lista-ul
          li 
            i.fas.fa-check
            | Ubicación, (nombre de la dependencia donde se encuentra el equipo).
          li 
            i.fas.fa-check
            | Fecha de ingreso, (fecha de adquisición del bien).
          li 
            i.fas.fa-check
            | N.º de factura, (número de factura del bien cuando fue adquirido).
          li 
            i.fas.fa-check
            | Observaciones/motivos de baja: observaciones relacionadas con el estado del bien u otras como motivos por el que fue dado de baja.
        .row.justify-content-center.my-5
          .col-lg-8.col-md-12.fondo-21.p-4.sombra.bordenaranja(data-aos="fade-down-left")
            .row.justify-content-center.align-items-center.p-3
              .col-lg-2.col-md-3.col-sm-3.col-3.mb-4
                img(src='@/assets/curso/tema3/inventario2.svg')
              .col-lg-10.col-md-9.col-sm-9.col-9
                p El código y la serie marcados en los equipos se utilizan para etiquetarlos, rotuladores u otro método que facilite su identificación.
                p Esta identificación de los equipos debe hacerse de manera completa. No se aceptarán descripciones genéricas como mosquetón, jumar, entre otros; es necesaria la marca, el modelo, el tipo, e incluso se sugiere registrar el color. 
    .row
      .col-auto.fondotitulo(data-aos="fade-down-right")
        h3.text-center.mb-0 Solicitud y entrega de equipos
    p.my-5(data-aos="fade-down-left") El proceso de solicitud y entrega de equipos en el guionaje se hace por medio de un soporte denominado 
      span.resaltado.text-bold “requisición”
      span , que es un documento por medio del cual el guía solicita al contratante los equipos que requiere para la prestación del servicio, y que se indica en el siguiente flujograma.
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 6 
      span Proceso de solicitud de equipos
    .row.ampliar.px-5.fondo-29
      .col-12
        .row.justify-content-center
          .col-lg-8.col-md-10.col-sm-12.py-5(data-aos="fade-down-right")
            img(src='@/assets/curso/tema3/diagrama.svg')
    p.my-5(data-aos="fade-down-left") El formato para solicitud y devolución de equipos es construido por cada contratante u organización según sus políticas empresariales, se realiza a partir del momento en el que el guía tiene la información del servicio que va a ejecutar, y selecciona los equipos que requiere, con ello se hace la solicitud al encargado del almacenamiento de los equipos, o el mismo realiza el alistamiento (SENA, 2018). A continuación, se detalla, a manera de ejemplo, un formato de requerimientos.
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Tabla 2
      span Ejemplo de un formato de requerimientos
    .tabla-c.mt-5.sinsombra(data-aos="fade-down-left")
      table
        tr.fondo-26
          <td colspan="6">
            h4.text-center.text-white Formato de requerimientos Datos de la empresa
          </td>
        tr.fondo-24.bordesup
          <td colspan="2" style="font-weight:700;">Servicio:</td>
          <td colspan="2" class="bordeizq" style="font-weight:700;">Fecha de solicitud:</td>
        tr.fondo-27
          td.anchocol 
            p.text-bold Aprobado por:
          td.bordeizq.anchocol1
            p.text-bold (quien entrega equipos para servicio)
          td.bordeizq.anchocol  
            p.text-bold Cargado a:
          td.bordeizq 
            p.text-bold (nombre del guía encargado de la administración de equipos durante el servicio)
        tr.fondo-24
          td.anchocol 
          td.bordeizq.anchocol1   
          td.bordeizq.anchocol  
          td.bordeizq 
        tr.fondo-27
          td.anchocol 
          td.bordeizq.anchocol1  
          td.bordeizq.anchocol  
          td.bordeizq
    .row.mt-5
      .col-auto.fondotitulo.mb-5(data-aos="fade-down-right")
        h3.text-center.mb-0 Técnicas de almacenamiento y ubicación de equipos
    .row.justify-content-center
      .col-lg-6.col-md-12.fondo-4.mb-4.py-5.px-3(data-aos="fade-down-left")
        p El almacenamiento es una actividad que tiene por objeto organizar, guardar y proteger equipos que hacen parte de la actividad de la guianza turística. Los equipos almacenados están debidamente registrados, lo cual facilita llevar su control, posibilitando la rotación de aquellos defectuosos o que no respaldan el cumplimiento de la normatividad.
        p Además de planear y proyectar los requerimientos de equipos, es necesario conocer la forma cómo se clasifican, se almacenan en un espacio físico adecuado, y se transportan en condiciones ambientales óptimas, garantizando su conservación y aseguramiento (SENA, 2018).
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/imagen2.jpg')
    .row.ampliar.px-5.fondo-25.my-5
      .col-12
        span.text-bold.resaltado(data-aos="fade-down-left") Una técnica genérica que se aplica a cualquier equipo o elemento corresponde a los a una acción de realizar denominados principios “Cinco S” conocida también como “5S”
        span(data-aos="fade-down-left") , esta filosofía es de origen japonés y hace referencia a diferentes principios necesarios para llevar a cabo la implementación del método, estos son: clasificación, organización, limpieza, estandarizar y seguir mejorando. En el idioma japonés, todas estas palabras inician con la letra s, y van en unísono hacia la dirección, optimización y el almacenamiento de bienes físicos. 
        span.text-bold(data-aos="fade-down-left") A continuación, se realizará la descripción del cada proceso:
        .row.justify-content-center
          .col-lg-9.col-md-12(data-aos="fade-down-right")
            ImagenInfografica.color-acento-botones.my-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/figura2.svg')

              .tarjeta.fondo-13.p-3.bordetarjeta(x="29.5%" y="22.2%" numero="+")
                p Se realiza de acuerdo con las características del equipo. Se trata de identificar y separar los equipos necesarios de los innecesarios eliminando estos últimos al momento de planear el servicio.

              .tarjeta.fondo-13.p-3.bordetarjeta(x="36.5%" y="46.2%" numero="+")
                p Consiste en establecer el modo en que deben ubicarse los equipos necesarios de manera que sea fácil y rápido encontrarlos, utilizarlos y reponerlos.

              .tarjeta.fondo-13.p-3.bordetarjeta(x="50%" y="54%" numero="+")
                p Radica en identificar y eliminar las fuentes de suciedad, asegurando que el equipo se encuentre siempre en perfecto estado de limpieza.

              .tarjeta.fondo-13.p-3.bordetarjeta(x="63.7%" y="46%" numero="+")
                p Consiste en distinguir fácilmente una situación normal de otra anormal, mediante normas sencillas y visibles para el control de equipos.

              .tarjeta.fondo-13.p-3.bordetarjeta(x="70.5%" y="22.2%" numero="+")
                p Hacer referencia a construir autodisciplina y formar el hábito de las 5S mediante el establecimiento de estándares y seguir los procedimientos en el lugar de trabajo.
    .row.justify-content-center
      .col-lg-10.col-md-12.fondo-4.mb-4.py-5.px-4(data-aos="fade-down-left")
        p Las técnicas permiten estandarizar los procedimientos de tal forma que se pueda tener un proceso único y siempre realizado de la misma manera, permitiendo sistematizar los resultados. La técnica que dice cómo hacer las cosas, se basa en experiencias previas que han permitido su estandarización (SENA, 2018). En la guianza, el almacenamiento de insumos, equipos, material en general es una actividad cuidadosa que pretende preservar y mantener en óptimas condiciones lo requerido para las actividades con turistas, de este modo la aplicación de las 5S se puede ver en este ejemplo:
    p.my-5.ps-0.ps-lg-5.text-bold(data-aos="fade-down-left") Ventajas de 5S
    .row.justify-content-center.align-items-center
      .col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        LineaTiempoD.fondo-5
          p(numero="1" titulo="En dónde almacenar") Para el correcto almacenamiento se recomienda utilizar un armario o una bodega donde se puedan dejar en ganchos anclados a la pared los diferentes equipos y elementos, para así evitar caídas y golpes de estos.
          
          p(numero="2" titulo="Condiciones del almacenamiento ") El lugar de almacenamiento debe ser ventilado y preferiblemente libre de humedad y que los equipos no queden expuestos a la luz del sol.
          p(numero="3" titulo="Cómo almacenar") En el caso de las cuerdas, estas deben quedar colgadas para que no tengan contacto con el piso, químicos u otro tipo de material que les pueda ocasionar daños; adicionalmente se deben utilizar estanterías para acomodar las carpas. Las cuerdas definidas explícitamente para trabajo en alturas se deben almacenar por separado.


          p(numero="4" titulo="Requerimientos") Los equipos se almacenan junto con la ficha técnica de las especificaciones establecidas para cada uno.

      .col-lg-5.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/figura3.svg')
    p.my-5.text-bold(data-aos="fade-down-right") Una vez analizado el aprovechamiento de los espacios y de las áreas especiales de almacenamiento, se debe tener en cuenta (SENA, 2018):
    .row.justify-content-center
      .col-lg-3.col-md-4.col-sm-5.col-5.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/figura4.svg')
      .col-lg-9.col-md-12(data-aos="fade-down-left")
        ul.lista-ul
          li 
            i.fas.fa-check
            | Revisión: comprobación del estado cada vez que se utilizan, utilización de registro al recibirlo probado y funcionando o en condición de uso, no se aceptan reclamos con posterioridad.
          li 
            i.fas.fa-check
            | Nunca guardar los equipos sucios o húmedos.
          li 
            i.fas.fa-check
            | El préstamo del equipo y su devolución es personal.
          li 
            i.fas.fa-check
            | El guía que retira el equipo se hará responsable de su oportuna devolución y de todo daño que no provenga del natural uso del material.
          li 
            i.fas.fa-check
            | El equipo se entrega limpio y ordenado. Informar al encargado cualquier daño o mal funcionamiento, con el objeto de tomar acción inmediata y así evitar inconvenientes o condiciones de uso inseguras al próximo usuario.
          li 
            i.fas.fa-check
            | Se aplicará un régimen especial de cuidado y mantenimiento al equipo clasificado, de manera que se la seguridad del guía y los usuarios esté preservada. 

</template>

<script>
export default {
  name: 'Tema3',
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
