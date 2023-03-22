import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `yameteh😋🥰`, `BotWhatsApp@gmail.com`, `🇮🇩 Indonesia`, `📍 https://instagram.com/anggatzi123`, `👤 Owner Lisabotz-MD`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Whatsapp Bot`, `📵 Dont Spam 😢`, `Nothing`, `🇮🇩 Indonesia`, `📍 https://instagram.com/anggatzi123`, `Hanya bot biasa yang kadang error ☺`]
  ], fkontak)
  await m.reply(`Hamlo kak🗿🥰 @${m.sender.split(`@`)[0]} itu nomor ownerku kak,jika ingin menyewa bot kami silahkan chat ownerbotnya kak🥰😎`)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler
