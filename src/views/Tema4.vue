<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 4
      h1 Alistamiento administrativo
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down-left")
      .bloque-texto-g__img.cambioimg(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.cambiotexto.p-4
        span.mb-0 De acuerdo con las especificaciones en la orden de servicio y necesidades especiales de los turistas, el guía debe conectar su servicio guiado con otros complementarios, es ideal hacer la verificación de las condiciones de los proveedores de los otros servicios, es decir, la documentación tributaria del prestador de servicios turísticos, o personas naturales o jurídicas que pueden proveer los recursos físicos o materiales requeridos para el trabajo. 
    p.mt-5(data-aos="fade-down-left") Asimismo, es necesario conocer del lugar a visitar, los requerimientos en cuanto a permisos si se trata de una propiedad privada, además, en relación con los pasajeros, las coberturas o tipo de seguros obligados en su adquisición o con los que ya se cuenta. 
    p.mb-5.text-bold(data-aos="fade-down-right") Con la anterior información, el guía puede realizar el alistamiento administrativo del servicio, como se indica en el siguiente gráfico.
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 7 
      span Alistamiento del servicio
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema4/diagrama1.svg')
    .row.justify-content-center.my-5
      .col-lg-10.col-md-12.fondo-17.bordesredondos.p-4(data-aos="fade-down-left")
        .row.justify-content-center.align-items-center.p-3
          .col-lg-2.col-md-3.col-sm-4.col-4.mb-4.p-lg-4
            img(src='@/assets/curso/tema4/cuenta.svg')
          .col-lg-10.col-md-9.col-sm-12.col-12
            p Desde la función administrativa, el guía asegura que los proveedores cuentan con documentación tributaria exigida, la cual respalda las operaciones de intercambio comercial de productos y servicios. En Colombia, por ejemplo, al momento de pagar un servicio es necesario en términos contables, soportar el pago de la respectiva factura, asimismo el proveedor del producto o servicio debe tener su identificación tributaria.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 4.1 Documentación tributaria de proveedores
    span.text-bold.resaltado(data-aos="fade-down-left") Según la Dirección de Impuestos y Aduanas Nacionales DIAN (2021)
    span(data-aos="fade-down-right") , a nivel nacional, para identificar, ubicar y clasificar las personas y entidades que tengan la calidad de contribuyentes declarantes del impuesto sobre la renta y no contribuyentes declarantes de ingresos y patrimonio, existe el Registro Único Tributario - RUT, puede apreciarse un facsímil del documento en la siguiente imagen. El trámite para obtener este registro es gratuito y debe mantenerse actualizado para realizar transacciones comerciales en el país, es decir que el guía de turismo debe tener su propio RUT, asimismo los proveedores de servicios conexos o que estén relacionados con ese servicio.
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 8 
      span Registro Único Tributario RUT, necesario para realizar operaciones comerciales en Colombia
    .row.justify-content-center.my-5
      .col-lg-10.col-md-12(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/tema4/imagen2.svg')
    .row.justify-content-center
      .col-auto.margensupboton(data-aos="fade-down-right")
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          span Ver imagen
          i.fas.fa-magnifying-glass-plus
          .indicador--click(v-if="mostrarIndicador")
    .row.justify-content-center.mb-5
      .col-lg-10.col-md-12.fondo-23(data-aos="fade-down-left")
        span.text-bold Nota. 
        span Tomada de DIAN (2021).    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/tema4/rut.png', alt='Formulario de Registro Único Tributario')
    p.mt-5(data-aos="fade-down-left") Para más información sobre este documento, se invita a consultar el material complementario sobre la web y redes sociales oficiales de la DIAN.
    p.mb-5(data-aos="fade-down-right") Otro documento que el guía de turismo debe solicitar al momento de hacer el pago a un proveedor es la factura. En Colombia la factura de venta tiene calidad de título valor negociable y se utiliza para soportar las operaciones de venta o prestación de servicios. Según Restrepo, et. al., (2010), la factura, trátese de un documento físico o digital, debe tener los siguientes requisitos:
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 9 
      span Ejemplo de requisitos solicitados en la factura
    .row.justify-content-center
      .col-lg-11.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema4/figura1.svg')
    .row.justify-content-center.my-5
      .col-lg-10.col-md-12.fondo-30.bordesredondos(data-aos="fade-down-left")
        .row.justify-content-center.align-items-center.px-3
          .col-lg-2.col-md-3.col-sm-4.col-4.mb-4.p-lg-4.mt-4
            img(src='@/assets/curso/tema4/figura2.svg')
          .col-lg-10.col-md-9.col-sm-12.col-12
            p La factura electrónica se genera, valida, expide, recibe, rechaza y conserva electrónicamente, lo que representa mayores ventajas, reduce costos de papel y tributariamente, es un soporte de transacciones de venta de bienes y/o servicios (DIAN, 2021).
    p.my-5(data-aos="fade-down-left") Además, es necesario tener en cuenta que la factura digital cuenta con los mismos elementos explicados anteriormente, los cuales deben identificarse plenamente, sin prestar confusión en el texto, numerales, consecutivos y demás; la siguiente gráfica explica algunos elementos para tener en cuenta en este tipo de factura:
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 10 
      span Elementos de la factura digital
    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-4.col-sm-4.col-4(data-aos="fade-down-left")
        .row.mb-2.mb-lg-4
          .col-12.fondo-31.p-2.bordenaranja.posicion1(data-aos="fade-down-right")
            p Lleva la numeración consecutiva autorizada por la DIAN.
        .row.mb-2.mb-lg-3
          .col-12.fondo-31.p-2.bordenaranja.posicion2(data-aos="fade-down-right")
            p Utiliza el formato electrónico de generación XML estándar establecido por la DIAN.

      .col-lg-4.col-md-4.col-sm-4.col-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema4/calculadora.svg')
      .col-lg-3.col-md-4.col-sm-4.col-4
        .row.mb-2.mb-lg-5
          .col-12.fondo-31.p-2.bordenaranja.posicion4(data-aos="fade-down-left")
            p Incluye la firma digital o electrónica para garantizar autenticidad e integridad y no repudio de la factura electrónica, de acuerdo con la política de firma adoptada por la DIAN.
        .row.mb-1.mb-lg-2
          .col-12.fondo-31.p-2.bordenaranja.posicion5(data-aos="fade-down-left")
            p Cumple los requisitos del art. 617 del ET y discrimina el impuesto al consumo cuando es el caso.

    .row.justify-content-center.mt-0.mt-md-4
      .col-lg-3.col-md-4.col-5.fondo-31.p-2.bordenaranja.m-0(data-aos="fade-down")
        p Incluye el Código Único de Factura Electrónica - CUFE.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 4.2 Seguros de viaje en el guionaje
    .bloque-texto-g.fondo-32.p-3.p-sm-4.p-md-5(data-aos="fade-down-left")
      .bloque-texto-g__img.cambioimg.p-3(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/imagen3.jpg')})`}"
      )
      .bloque-texto-g__texto.cambiotexto.p-5
        span.mb-0 Uno de los trámites administrativos a cargo del guía de turismo es la activación de seguros de viajes de los turistas. De acuerdo con la legislación colombiana, el guía de turismo no es un proveedor de seguros, sin embargo, en su función de asistencia, verifica y asesora a los turistas sobre su uso.
    .row.align-items-center.my-5
      .col-md-2.col-sm-3.col-3(data-aos="fade-down-left")
        img(src='@/assets/curso/tema4/figura3.svg')
      .col-md-10.col-sm-9.col-9(data-aos="fade-down-right")
        p Los seguros son servicios complementarios que el turista adquiere para que esté protegido ante determinados incidentes y circunstancias; robo, pérdida de equipaje, enfermedad o accidente, cancelación de vuelos, entre otros. Estos servicios los prestan compañías especializadas, por lo que hay varias empresas implicadas en la prestación de estos servicios.
    p(data-aos="fade-down-left") El guía de turismo además de conocer cuáles son las coberturas del seguro, también identifica las exclusiones y la documentación requerida para asistir a su usuario en determinados casos, tramita el seguro y sabe cómo actuar administrativamente para hacerlo válido. 

    p.text-bold.mb-5(data-aos="fade-down-right") Según Aguilar (2016), algunas de las coberturas de los seguros se enmarcan en los siguientes aspectos.
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 11 
      span Coberturas de seguros
    .row.justify-content-between
      .col-12.fondo-33.mb-2.sombra1.p-4(data-aos="fade-down-left")
        p.text-white.text-center.mb-0.text-bold El seguro de viaje tiene tres elementos:
        p.text-white.text-center.mb-0 1. Datos del asegurado: datos completos del mismo 
        p.text-white.text-center.mb-0 2. La póliza. Documento que emite el asegurado. Contiene coberturas y costes 
        p.text-white.text-center.mb-0 3. La prima. Importe a pagar
    .row.ampliar.px-5.fondo-29
      .col-12.mostrarmas991
        .row.justify-content-between.my-2
          .col-2.fondo-34.sombra1.p-4(data-aos="fade-down-left")
            p.text-bold.text-center.mb-0 Asistencia médica
          .col-7.fondo-34.sombra1.p-4(data-aos="fade-up")
            p.text-bold.text-center.mb-0 Responsabilidad civil. 
            p.text-center.mb-0 Cubre al viajero de posibles indemnizaciones que se le pudieran reclamar 
          .col-2.fondo-34.sombra1.p-4(data-aos="fade-down-right")
            p.text-bold.text-center.mb-0 Vehículos, 
            p.text-center.mb-0 coberturas
        .row.justify-content-between.mb-5
          .col-2.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down-left")
            p.mb-0 Tratamientos ambulatorios u hospitalarios. 
            p.mb-0 Traslados del enfermo y acompañante. 
            p.mb-0 Estancia extra en el hotel por prescripción facultativa. 
            p.mb-0 Traslado del fallecido hasta el lugar de inhumación. 
            p.mb-0 Repatriación de acompañantes. 
          .col-2.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down")
            p.mb-0 En el caso del equipaje: 
            p.mb-0 Robo. Cobertura hasta determinada cantidad. 
            p.mb-0 Cobertura instantánea (24 h) para productos de primera necesidad. 
            p.mb-0 Envío de objetos extraviados o robados. 
            p.mb-0 Pérdida de la llave de la vivienda habitual. 
          .col-2.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down")
            p.mb-0 Por demoras del viaje o en determinados traslados: 
            p.mb-0 Por pérdida de tiempo. Las esperas, cuando suponen pérdida de dinero. 
            p.mb-0 Por anulación de la salida por huelga o protesta (depende). 
            p.mb-0 Por pérdida de conexiones .
            p.mb-0 Por demora en el viaje por over booking o sobreventa.
          .col-2.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down")
            p.mb-0 Gastos de anulación el viaje o regreso anticipado cuando: 
            p.mb-0 Enfermedad grave del viajero.
            p.mb-0 Daños en una propiedad del viajero.
            p.mb-0 Imposibilidad de disfrutar del viaje: Falta de sol, exceso de lluvia o viento, etc. 
          .col-2.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down-right")
            p.mb-0 Robo 
            p.mb-0 Asistencia en caso de avería y coche de sustitución. 
            p.mb-0 Reparación de urgencia. 
            p.mb-0 Gastos de custodia del vehículo.
      .col-12.mostrarmenos991
        .row.my-2
          .col-12.fondo-34.sombra1.p-4(data-aos="fade-down-left")
            p.text-bold.text-center.mb-0 Asistencia médica        
        .row.justify-content-between.mb-5
          .col-12.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down-right")
            p.mb-0 Tratamientos ambulatorios u hospitalarios. 
            p.mb-0 Traslados del enfermo y acompañante. 
            p.mb-0 Estancia extra en el hotel por prescripción facultativa. 
            p.mb-0 Traslado del fallecido hasta el lugar de inhumación. 
            p.mb-0 Repatriación de acompañantes. 
        .row.justify-content-between.my-2
          .col-12.fondo-34.sombra1.p-4(data-aos="fade-down-left")
            p.text-bold.text-center.mb-0 Responsabilidad civil. 
            p.text-center.mb-0 Cubre al viajero de posibles indemnizaciones que se le pudieran reclamar
        .row.justify-content-between.mb-5
          .col-4.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down-left")
            p.mb-0 En el caso del equipaje: 
            p.mb-0 Robo. Cobertura hasta determinada cantidad. 
            p.mb-0 Cobertura instantánea (24 h) para productos de primera necesidad. 
            p.mb-0 Envío de objetos extraviados o robados. 
            p.mb-0 Pérdida de la llave de la vivienda habitual. 
          .col-4.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down")
            p.mb-0 Por demoras del viaje o en determinados traslados: 
            p.mb-0 Por pérdida de tiempo. Las esperas, cuando suponen pérdida de dinero. 
            p.mb-0 Por anulación de la salida por huelga o protesta (depende). 
            p.mb-0 Por pérdida de conexiones .
            p.mb-0 Por demora en el viaje por over booking o sobreventa.
          .col-4.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down-right")
            p.mb-0 Gastos de anulación el viaje o regreso anticipado cuando: 
            p.mb-0 Enfermedad grave del viajero.
            p.mb-0 Daños en una propiedad del viajero.
            p.mb-0 Imposibilidad de disfrutar del viaje: Falta de sol, exceso de lluvia o viento, etc.
        .row.justify-content-between.my-2
          .col-12.fondo-34.sombra1.p-4(data-aos="fade-up")
            p.text-bold.text-center.mb-0 Vehículos, 
            p.text-center.mb-0 coberturas
        .row.mb-5
          .col-12.fondo-35.sombra1.p-4.mt-2.mb-5(data-aos="fade-down")
            p.mb-0 Robo 
            p.mb-0 Asistencia en caso de avería y coche de sustitución. 
            p.mb-0 Reparación de urgencia. 
            p.mb-0 Gastos de custodia del vehículo.
    p.my-5(data-aos="fade-down-right") El pago de la prima depende de si es destino nacional, internacional, días de duración, medios de transporte utilizados: uno o varios, tipo de viaje, negocios, aventura y coberturas definidas.
    .row.justify-content-center
      .col-lg-10.col-md-12.fondo-36.p-4
        .row.justify-content-center.align-items-center.p-3.p-lg-5
          .col-lg-9.col-md-12(data-aos="fade-down-right")
            h3 Para cobrar o activar el seguro se recomienda:
            p Tener a la mano los números de contacto de la compañía de seguros, el número de la póliza. Si el turista tiene incapacidad para comunicarse, el guía de turismo debe asumir su labor se asistencia y ponerse en contacto con la compañía y reportar lo sucedido.
            p Si la póliza se obtuvo por medio de un corredor de seguros o una agencia de viajes y turismo, contáctelo, ellos le facilitarán el proceso de activación.
            p epende de las especificaciones del seguro, la compañía puede tener proveedores que atiendan el siniestro o condición del pasajero, en este caso le dará indicaciones para localizarlos. También puede existir el caso en que el usuario deba asumir el costo de la atención médica, la compra de elementos o cubrir lo que se requiera y luego con la factura solicitar el rembolso a la compañía de seguros.
          .col-lg-3.col-md-5.col-sm-5.col-6(data-aos="fade-down-left")
            img(src='@/assets/curso/tema4/figura4.svg')
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 4.3 Ingreso a los atractivos turísticos
    p(data-aos="fade-down-rightt") En Colombia la declaratoria de los atractivos turísticos está reglamentada por la Ley General de Turismo; Ley 2068 de 2020. Los concejos distritales o municipales y las asambleas departamentales, previo concepto del Ministerio de Comercio, Industria y Turismo, podrán declarar atractivos turísticos de utilidad pública aquellas zonas urbanas, de expansión o rurales, ecosistemas, paisajes, plazas, vías, monumentos y construcciones entre otros (Congreso de la República de Colombia, 2020). 
    p(data-aos="fade-down-left") Sin embargo, la declaratoria enmarca acciones de cuidado y administración, lo cual no debe interpretarse con que se convierta en un bien público de libre acceso para turistas y prestadores de servicios. Por lo tanto, el guía de turismo debe confirmar quien es la entidad encargada de su administración y las condiciones para su ingreso. 
    p.text-bold(data-aos="fade-down-right") Algunos ejemplos de atractivos que requieren de una gestión detallada antes de la visita son:

    .row.justify-content-center
      .col-lg-4.col-md-6(data-aos="fade-down-right")
        ImagenInfografica.color-acento-contenido.my-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/colombia.svg')

          .tarjeta.fondo-13.p-3.bordetarjeta(x="34.5%" y="19.2%" numero="+")
            p.text-bold Ubicado en territorio de minorías étnicas
            p Si los atractivos turísticos ubicados en los territorios de minorías étnicas, se debe contar con el previo consentimiento de las respectivas comunidades para visitarlos. 

          .tarjeta.fondo-13.p-3.bordetarjeta(x="36.5%" y="48.2%" numero="+")
            p.text-bold Visita a áreas protegidas
            p Es el conjunto de prestaciones tangibles e intangibles (que incluyen aspectos involucrados en la infraestructura, estructura y superestructura turística) las cuales se integran para ofrecer un producto que satisfaga las necesidades, deseos y expectativas del turista. Está conformado por tres elementos: atractivos, acceso y facilidades.

          .tarjeta.fondo-13.p-3.bordetarjeta(x="85%" y="60%" numero="+")
            p.text-bold Solicitar permiso para tomar fotografías
            p Si dentro del atractivo hay personas de la comunidad, informe a los turistas que debe pedir permiso para tomar fotografías, de lo contrario la comunidad lo puede tomar como falta de respeto. Esto aplica para la visita desde una comunidad indígena hasta una plaza de mercado.

    .row
      .col-12.fondo-37.py-5.px-4.mt-4(data-aos="fade-down-left")
        p Si el lugar a visitar no está declarado atractivo y es propiedad privada, debe realizar la respectiva gestión para el ingreso, independiente que sea paso transitorio en un sendero o permanezca con los usuarios poco tiempo, evite exponer tanto a sí mismo, como a los usuarios que le acompañan a las acciones que pueda tomar el propietario.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    modal1: false,
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
