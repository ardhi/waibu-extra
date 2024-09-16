async function virtual () {
  const { readJson } = this.app.bajo
  const { pick } = this.app.bajo.lib._
  const libs = readJson(`${this.dir.pkg}/lib/libs.json`)
  const virts = []
  for (const l of libs) {
    if (this.config.scripts.includes(l.prefix)) virts.push(pick(l, ['prefix', 'root']))
  }
  return virts
}

export default virtual
