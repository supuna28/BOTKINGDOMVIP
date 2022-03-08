import { latinToAksara } from '@bochilteam/scraper'
let handler = async (m, {text}) => {
    m.reply(latinToAksara(text))
}

handler.command = ['latintoaksara']
handler.help = ['latintoaksara']
handler.tags = ['tools']

export default handler