<template>
    <section class="section work-area bg-overlay overflow-hidden ptb_100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-6">
                        <!-- Work Content -->
                        <div class="work-content text-center">
                            <h2 class="text-white">¿Cómo funciona Futzo?</h2>
                            <p class="text-white my-3 mt-sm-4 mb-sm-5">Sigue estos pasos para empezar a disfrutar de sus beneficios.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <!-- Single Work -->
                        <div class="single-work text-center p-3">
                            <!-- Work Icon -->
                            <div class="work-icon">
                              <client-only>
                                <nuxt-icon name="register" filled class="work-icon"></nuxt-icon>
                              </client-only>
                            </div>
                            <h3 class="text-white py-3">Regístrate y crea tu cuenta</h3>
                            <p class="text-white">Inscríbete en Futzo rápidamente. Con solo registrarte, tendrás acceso a todas las funciones que necesitas para administrar tu liga.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <!-- Single Work -->
                        <div class="single-work text-center p-3">
                            <!-- Work Icon -->
                            <div class="work-icon">
                              <client-only>
                                <nuxt-icon name="settings" filled class="work-icon"></nuxt-icon>
                              </client-only>
                            </div>
                            <h3 class="text-white py-3">Inicia tu liga</h3>
                            <p class="text-white">Empieza configurando tu liga: define sus reglas, horarios, y otros detalles importantes para que esté lista para el juego.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <!-- Single Work -->
                        <div class="single-work text-center p-3">
                            <!-- Work Icon -->
                            <div class="work-icon">
                                <img class="avatar-md" src="assets/img/work_thumb_3.png" alt="">
                            </div>
                            <h3 class="text-white py-3">Configura y gestiona tu liga</h3>
                            <p class="text-white">Agrega equipos y jugadores fácilmente. Asigna roles y organiza todos los aspectos de tu liga, todo desde un solo lugar, para que la administración sea más sencilla y eficiente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    
}
</script>

<style>
.nuxt-icon.work-icon > svg{
  width: 4rem;
  height: 4rem;
}
</style>