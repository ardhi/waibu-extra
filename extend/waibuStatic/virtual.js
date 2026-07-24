async function virtual () {
  const { fromJson } = this.app.bajo
  const { pick } = this.app.lib._
  const libs = await fromJson(`${this.dir.pkg}/lib/libs.json`, { readFromFile: true }) ?? []
  const virts = []
  for (const l of libs) {
    if (this.config.libs.includes(l.prefix)) virts.push(pick(l, ['prefix', 'root']))
  }
  return virts
}

export default virtual
