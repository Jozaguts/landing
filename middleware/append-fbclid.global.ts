import { defineNuxtRouteMiddleware, navigateTo } from '#app'


export default defineNuxtRouteMiddleware((to) => {
    if (import.meta.server) return


// Ejemplo: cuando vas a una ruta externa que guardas en query redirect_url a futzo.io
    const redirect = to.query.redirect_url as string | undefined
    if (redirect && redirect.includes('futzo.io')) {
        const fbclid = localStorage.getItem('fbclid')
        if (fbclid) {
            const u = new URL(redirect)
            if (!u.searchParams.get('fbclid')) u.searchParams.set('fbclid', fbclid)
            return navigateTo(u.toString(), { external: true })
        }
    }
})