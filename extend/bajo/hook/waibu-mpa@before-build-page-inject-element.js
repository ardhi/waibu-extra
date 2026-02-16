async function beforeBuildPageInjectElement ({ locals, css, scripts, req }) {
  if (locals.page.features.includes('jquery')) scripts.unshift('waibuExtra.virtual:/jquery/jquery.min.js')
  if (locals.page.features.includes('highlight')) {
    const base = req.darkMode ? 'github-dark' : 'github'
    css.push(`waibuExtra.virtual:/highlightjs/styles/${base}.min.css`)
    scripts.push('waibuExtra.virtual:/highlightjs/highlight.min.js')
  }
}

export default beforeBuildPageInjectElement
