import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
📌 *Title:* ${title}
🔗 *Url:* ${url}
🖹 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `.trim(), wm, thumbnail, '', '', '', '', [
    ['Audio', `${usedPrefix}yta ${url} yes`], 
    ['Video', `${usedPrefix}ytv ${url} yes`]
  ], m, {asLocation: 1})
}
handler.help = ['song', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^song?$/i

handler.exp = 0
handler.limit = false

export default handler

