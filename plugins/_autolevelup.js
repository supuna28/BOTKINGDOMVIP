import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
ආයුබෝවන් ඔබගෙ ලෙවල් අප් වී ඇත!
*${before}* -> *${user.level}*
සොයාගන්න *.profile* යොදන්න
	`.trim())
    }
}
export const disabled = true
