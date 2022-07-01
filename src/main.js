import { Level } from 'level'

async function main () {
  const db = new Level('webpack-starter')
  const output = document.getElementById('output')

  await db.put('beep', 'boop')
  output.textContent = await db.get('beep')
}

main()
