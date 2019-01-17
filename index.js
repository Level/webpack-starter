import level from 'level'

async function main () {
  const db = level('webpack-test')
  const output = document.getElementById('output')

  await db.put('beep', 'boop')
  output.textContent = await db.get('beep')
}

main()
