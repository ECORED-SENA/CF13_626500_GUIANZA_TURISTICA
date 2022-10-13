<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down-left") Le damos la bienvenida al componente formativo 
      span.resaltado.text-bold “Organización del servicio de guionaje”
      span . Para comenzar, se invita a ver el siguiente video.
    figure.mb-5(data-aos="fade-down-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x0eIrm7hY30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
