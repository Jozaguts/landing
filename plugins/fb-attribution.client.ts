// plugins/fb-attribution.client.ts
export default defineNuxtPlugin(() => {
    if (import.meta.server) return

    const readCookie = (n: string) =>
        document.cookie.split('; ').find(r => r.startsWith(n + '='))?.split('=')[1] || ''

    const getLandingParams = () => {
        const qs = new URLSearchParams(location.search)
        const fbclid = qs.get('fbclid') || localStorage.getItem('fbclid') || ''
        const fbp = readCookie('_fbp') || localStorage.getItem('_fbp') || ''
        // recoge UTM si existen
        const utm: Record<string,string> = {}
        ;['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k=>{
            const v = qs.get(k); if (v) utm[k] = v
        })
        return { fbclid, fbp, utm }
    }

    const buildAppUrl = (baseUrl: string) => {
        const u = new URL(baseUrl)
        const { fbclid, fbp, utm } = getLandingParams()
        if (fbclid && !u.searchParams.get('fbclid')) u.searchParams.set('fbclid', fbclid)
        if (fbp && !u.searchParams.get('fbp')) u.searchParams.set('fbp', fbp)
        Object.entries(utm).forEach(([k,v]) => { if (!u.searchParams.get(k)) u.searchParams.set(k, v) })
        return u.toString()
    }

    return { provide: { buildAppUrl } }
})
