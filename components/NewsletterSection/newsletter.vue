<template>
    <section id="newsletter" class="section price-plan-area bg-gray ptb_100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-7">
                        <div class="subscribe-content text-center">
                            <h2>¡Mantente al Tanto del Lanzamiento de Futzo!</h2>
                            <p class="my-4">Únete a nuestra lista de espera ingresando tu correo electrónico. Si estás entre los primeros 100 en registrarte, podrías recibir un código promocional que te otorgará hasta un 50% de descuento o incluso acceso gratuito por tiempo limitado. ¡No te pierdas esta oportunidad!</p>
                            <!-- Subscribe Form -->
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
                                <button :disabled="isSubmitted"  type="submit" class="btn btn-lg btn-block">Unirme
                                  <span v-show="isSubmitted" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup lang="ts">
const email = ref('');
const stateClass = ref ('');
const isSubmitted = ref(false);
const emailExists = ref(false);
const { $toast } = useNuxtApp()

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
      console.log(e)
      $toast.success('¡Gracias por unirte a la lista de espera!');
      isSubmitted.value = false;
    })
        .catch((e) => {
          if (e.status === 422) {
            $toast.error(e.data.message);
          }else {
            $toast.error ('¡Ha ocurrido un error! Por favor, intenta de nuevo más tarde.');
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
  }else {
    email.value = '';
  }
});
</script>