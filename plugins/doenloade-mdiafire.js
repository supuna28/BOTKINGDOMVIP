import {mediafiredl} from '@bochilteam/scraper'
let handler = async (m, {text}) => {
    let api = await mediafiredl(text)
    let res = await conn.getFile(api.url)
    if (Buffer.byteLength(res.data) < 7e+7) {
        conn.sendFile(m.chat, res.data, api.filename, wm, m)
    } else {
        m.reply('File Over 70 MB')
    }
}

handler.command = ['mediafire']
handler.tags = ['downloader']
handler.help = ['mediafire']

export default handler