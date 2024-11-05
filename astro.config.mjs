import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://tero.tilus.net',
  compressHTML: true,
  integrations: [mdx(), tailwind({
    applyBaseStyles: false,
  }), compress()],
  redirects: {
    '/politiikka': '/rutina-aihe/politiikka',
    '/politiikka/kuntavaalit-2008': '/rutinat/2008/09/28/kuntavaalit-2008',
    '/politiikka/seurakuntavaalit-2008': '/rutinat/2008/11/29/seurakuntavaalit-2008',
    '/politiikka/seurakuntavaalit-2010': '/rutinat/2010/10/30/seurakuntavaalit-2010',
    '/loytoja/sattuvasti-sanottua/': '/loytoja',
  },
})
