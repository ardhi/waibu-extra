async function script () {
  const { readConfig } = this.app.bajo
  const { routePath } = this.app.waibuMpa
  const { isArray } = this.app.bajo.lib._
  const libs = await readConfig(`${this.name}:/lib/libs.json`)
  const scripts = []
  for (const l of libs) {
    if (!this.config.virtuals.includes(l.prefix)) continue
    l.scripts = l.scripts ?? []
    if (!isArray(l.scipts)) l.scipts = [l.scripts]
    for (const s of l.scripts) {
      scripts.push(routePath(`${this.name}.virtual:/${l.prefix}/${s}`))
    }
  }
  return scripts
}

export default script
