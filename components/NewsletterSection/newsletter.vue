<script setup lang="ts">
const email = ref('');
const stateClass = ref('');
const isSubmitted = ref(false);
const emailExists = ref(false);
const {$toast} = useNuxtApp()
import {PRE_REGISTER_CODE} from '~/utils/constants'
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


const submitForm = () => {
  isSubmitted.value = true;
  const localStorage = window.localStorage;
  const emailInStorage = localStorage.getItem('email');

  if (validateEmail(email.value)) {
    if (emailInStorage !== email.value) {
      localStorage.setItem('email', email.value);
    }
    stateClass.value = 'is-valid';
    const config = useRuntimeConfig();
    $fetch(config.public.apiBase + '/pre-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
      }),
    }).then((e) => {
      useRouter().push({name: 'gracias', query: {code: PRE_REGISTER_CODE}});
      isSubmitted.value = false;
    })
        .catch((e) => {
          if (e.status === 422) {
            $toast.error(e.data.message);
          } else {
            $toast.error('¡Ha ocurrido un error! Por favor, intenta de nuevo más tarde.');
          }
          isSubmitted.value = false;
        });
  } else {
    stateClass.value = 'is-invalid';
  }
}
onMounted(() => {
  const localStorage = window.localStorage;
  if (localStorage.getItem('email')) {
    email.value = localStorage.getItem('email') as string;
    emailExists.value = true;
  } else {
    email.value = '';
  }
});
</script>
<template>
  <section id="newsletter" class="section price-plan-area bg-gray ptb_100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-7">
          <div class="subscribe-content text-center">
            <h2>Paga menos, juega más: primer mes en <strong>Futzo</strong> por <strong>$299 MXN</strong></h2>
            <p class="mt-4"> Administra tu <strong>liga de fútbol</strong> con facilidad: registra equipos y jugadores, genera calendarios
              y lleva estadísticas en un solo lugar. Tu <strong>primer mes</strong> cuesta solo <strong>$299 MXN</strong>,
              válido para <strong>cualquier plan</strong>.</p>
            <form class="subscribe-form" @submit.prevent="submitForm">
              <div class="form-group">

                <input type="email"
                       v-model="email"
                       class="form-control"
                       :class="stateClass"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       placeholder="Ingresa tu correo electrónico"
                       formnovalidate
                >
                <div id="validationServer03Feedback" class="invalid-feedback">
                  Ingresa un correo electrónico válido.
                </div>
              </div>
              <button :disabled="isSubmitted" type="submit" class="btn btn-lg btn-block"> Obtener cupón de Futzo
                <span v-show="isSubmitted" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <component :is="'script'" type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo obtengo el cupón de $299 MXN?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ingresa tu correo en el formulario y te enviaremos el cupón por email para aplicarlo al momento de tu primera facturación."
          }
        },
      {
        "@type": "Question",
        "name": "¿El precio de $299 MXN aplica a cualquier plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. El cupón reduce el costo del primer mes a $299 MXN en cualquier plan de Futzo."
        }
      }
    ]
  }
  </component>
</template>
<style scoped>
button.btn {
  background: linear-gradient(-47deg, #28243D 0%, #9155FD 100%) !important;
}
</style>

