import level from 'level'

const main = async () => {
  const db = level('webpack-starter')
  await db.put('beep', 'boop')
  return console.log(await db.get('beep'))
}

main()
