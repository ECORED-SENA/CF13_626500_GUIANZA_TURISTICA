<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 2
      h1 Herramientas ofimáticas
    p.mb-5 Existe una variedad de métodos para identificar los riesgos, especialmente en ambientes laborales, y muchos se sustentan en la medición de la valoración de la probabilidad y la severidad de las consecuencias, atribuyéndole un valor numérico al riesgo, ejemplificado en esta fórmula Probabilidad x Consecuencia = Riesgo.
    .row.justify-content-center
      .col-lg-10.col-md-12.display1(data-aos="fade-down-left")
        img(src='@/assets/curso/tema2/figura1.svg')

    .row.justify-content-center
      .col-12.fondo-18.padd1.mb-4(data-aos="fade-down-right")
        p.display2 Interacción con el usuario del servicio, para conocer al detalle sus necesidades, asimismo con otros prestadores de servicios. 
      .col-12.fondo-19.padd2.mb-4(data-aos="fade-down-left")
        p.display2 Mostrar gráficamente los productos y servicios disponibles y ejemplos de servicios prestador o el potencial.
      .col-12.fondo-20.padd3(data-aos="fade-down-right")
        p.display2 Presentar una propuesta de servicio en formato adecuado.
      .col-12.fondo-21.padd2(data-aos="fade-down-left")
        p.display2 Organización  eficaz de la información de los usuarios.
      .col-12.fondo-22.padd4.mb-5(data-aos="fade-down-right")
        p.display2 Construir una memoria sobre los conocimientos adquiridos.
</template>

<script>
export default {
  name: 'Tema2',
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
