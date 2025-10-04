<script setup lang="ts">
const email = ref('');
const stateClass = ref('');
const isSubmitted = ref(false);
const emailExists = ref(false);
const { $toast, $attribution } = useNuxtApp();

const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const submitForm = async () => {
  isSubmitted.value = true;
  const ls = window.localStorage;
  const emailInStorage = ls.getItem('email');

  if (!validateEmail(email.value)) {
    stateClass.value = 'is-invalid';
    isSubmitted.value = false;
    return;
  }

  if (emailInStorage !== email.value) ls.setItem('email', email.value);
  stateClass.value = 'is-valid';

  try {
    const config = useRuntimeConfig();
    const attribution = $attribution?.get?.() || {}
    const payload: Record<string, unknown> = {
      email: email.value,
      source: 'lead-magnet_calendario',
      fbclid: attribution.fbclid || undefined,
      fbp: attribution.fbp || undefined,
      fbc: attribution.fbc || undefined,
    }

    Object.entries(attribution.utm || {}).forEach(([key, value]) => {
      payload[key] = value
    })

    await $fetch(config.public.apiBase + '/pre-register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    // Entrega de la plantilla (puedes servir un link corto o iniciar descarga)
    useRouter().push({ name: 'gracias', query: { asset: 'plantilla-calendario' } });
  } catch (e: any) {
    if (e.status === 422) $toast.error(e.data.message);
    else $toast.error('¡Ha ocurrido un error! Intenta más tarde.');
  } finally {
    isSubmitted.value = false;
  }
};

onMounted(() => {
  const ls = window.localStorage;
  email.value = (ls.getItem('email') as string) || '';
  emailExists.value = !!email.value;
});
</script>

<template>
  <section id="newsletter" class="section bg-gray ptb_100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-7">
          <div class="subscribe-content text-center">
            <h2>Descarga gratis la plantilla de <strong>calendario de liga</strong></h2>
            <p class="mt-4">
              Recibe un <strong>Excel editable + imagen</strong> para publicar tu fixture.
              Úsala hoy y descubre cómo <strong>Futzo</strong> lo automatiza en segundos.
            </p>

            <form class="subscribe-form" @submit.prevent="submitForm" novalidate>
              <div class="form-group">
                <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    :class="stateClass"
                    placeholder="Ingresa tu correo electrónico"
                />
                <div class="invalid-feedback">Ingresa un correo electrónico válido.</div>
              </div>
              <button :disabled="isSubmitted" type="submit" class="btn btn-lg btn-block">
                Obtener plantilla gratis
                <span v-show="isSubmitted" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Schema actualizado (sin cupón) -->
    <component :is="'script'" type="application/ld+json">
      {
        "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué incluye la plantilla gratis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un archivo Excel editable y una imagen del calendario para publicar en redes."
            }
          },
          {
            "@type": "Question",
            "name": "¿La plantilla funciona con cualquier liga?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, es genérica para ligas amateur. Con Futzo puedes generarla automáticamente y actualizarla en segundos."
            }
          },
          {
            "@type": "Question",
            "name": "¿Necesito tarjeta para el trial de 7 días?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Puedes probar Futzo por 7 días sin tarjeta y elegir tu plan al finalizar."
            }
          }
        ]
      }
    </component>
  </section>
</template>

<style scoped>
button.btn { background: #9155FD !important; }
.btn-outline { border: 1px solid #9155FD; color: #9155FD; background: transparent; }
</style>
