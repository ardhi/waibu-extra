async function virtual () {
  const { readConfig } = this.app.bajo
  const { pick } = this.app.bajo.lib._
  const libs = await readConfig(`${this.name}:/lib/libs.json`)
  const virts = []
  for (const l of libs) {
    if (this.config.virtuals.includes(l.prefix)) virts.push(pick(l, ['prefix', 'root']))
  }
  return virts
}

export default virtual
