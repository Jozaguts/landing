<template>
    <section id="features" class="section features-area ptb_100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-6">
                        <!-- Section Heading -->
                        <div class="section-heading text-center">
                            <h2>Características principales de Futzo para la gestión de ligas de fútbol</h2>
                            <p class="d-none d-sm-block mt-4">Todas las herramientas que necesitas en un solo lugar
                              Con Futzo, controla todos los aspectos de tu liga de fútbol.</p>
                            <p class="d-block d-sm-none mt-4">Futzo te ofrece todo lo que necesitas para gestionar tu liga de fútbol de manera eficiente y profesional.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <!-- Icon Box -->
                        <div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s">
                            <!-- Featured Icon -->
                            <div class="featured-icon mb-3">
                              <nuxt-icon class="feature-icon" name="trophy" filled></nuxt-icon>
                            </div>
                            <!-- Icon Text -->
                            <div class="icon-text">
                                <h3 class="mb-2">Gestión de Torneos</h3>
                                <p>Organiza y administra múltiples torneos con facilidad. Desde la creación hasta la finalización, todo en una plataforma intuitiva.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <!-- Icon Box -->
                        <div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <!-- Featured Icon -->
                            <div class="featured-icon mb-3">
                              <nuxt-icon class="feature-icon" name="calendar" filled></nuxt-icon>
                            </div>
                            <!-- Icon Text -->
                            <div class="icon-text">
                                <h3 class="mb-2">Calendario de Partidos</h3>
                                <p>Planifica y visualiza todos los encuentros de tu liga con un calendario interactivo que facilita la programación y el seguimiento de los partidos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <!-- Icon Box -->
                        <div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                            <!-- Featured Icon -->
                            <div class="featured-icon mb-3">
                                <nuxt-icon name="field" filled class="feature-icon" />

                            </div>
                            <!-- Icon Text -->
                            <div class="icon-text">
                                <h3 class="mb-2">Asignación de Canchas</h3>
                                <p>Evita conflictos de horarios y asegura la disponibilidad de las canchas con nuestra herramienta de gestión de ubicaciones.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <!-- Icon Box -->
                        <div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                            <!-- Featured Icon -->
                            <div class="featured-icon mb-3">
                              <nuxt-icon name="football" filled class="feature-icon" />
                            </div>
                            <!-- Icon Text -->
                            <div class="icon-text">
                                <h3 class="mb-2">Gestión de Equipos y Jugadores</h3>
                                <p>Mantén un registro detallado de los equipos y jugadores, incluyendo estadísticas, rendimientos y más.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <!-- Icon Box -->
                        <div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                            <!-- Featured Icon -->
                            <div class="featured-icon mb-3">
                                <nuxt-icon name="communication" filled class="feature-icon" />
                            </div>
                            <!-- Icon Text -->
                            <div class="icon-text">
                                <h3 class="mb-2">Comunicación Efectiva</h3>
                                <p>Envía notificaciones y actualizaciones a todos los miembros de la liga directamente desde la plataforma.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <!-- Icon Box -->
                        <div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                            <!-- Featured Icon -->
                            <div class="featured-icon mb-3">
                                <nuxt-icon name="stats" filled class="feature-icon" />
                            </div>
                            <!-- Icon Text -->
                            <div class="icon-text">
                                <h3 class="mb-2">Informe y Estadísticas</h3>
                                <p>Genera informes detallados y analiza estadísticas para tomar decisiones informadas y mejorar la gestión de tu liga.</p>
                            </div>
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
.nuxt-icon.feature-icon svg{
  width: 70px;
  height: 70px;
  min-height: 100%;
  min-width: 100%;
}
</style>