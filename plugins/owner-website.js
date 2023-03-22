import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 Owner Website 」*

My instagram -> https://instagram.com/anggatzi123
My GroupBotz -> https://chat.whatsapp.com/Ly28IB8Fel4JbPS0qCUy2p
Donasi DANA -> https://wa.me/p/9545254345500673/6281998425782

----------------------
My instagram -> https://instagram.com/anggatzi123
----------------------

My instagram -> https://instagram.com/anggatzi123
My GroupBotz -> https://chat.whatsapp.com/Ly28IB8Fel4JbPS0qCUy2p
Donasi DANA -> https://wa.me/p/9545254345500673/6281998425782
`.trim()
  m.reply(caption)
}
handler.help = ['website']
handler.tags = ['main']
handler.command = /^(website)$/i
handler.limit = false

export default handler
