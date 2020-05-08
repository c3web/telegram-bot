const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

let level = 3
const getLevel = () => {
    let label = ''
    for (let i = 1; i <= 5; i++) {
        label += (level === i) ? '||' : '='
//        label += (level === i) ? `${level}` : '=' // coloca o numero no lugar do ||
    }
    return label
}

const botoes = () => Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('<<', '<'),
    Markup.callbackButton(getLevel(), 'result'),
    Markup.callbackButton('>>', '>'),
], { columns: 1 }))

bot.start(async ctx => {
    const name = ctx.update.message.from.first_name
    await ctx.reply(`Seja bem-vindo, ${name}`)
    await ctx.reply(`Nível: ${level}`, botoes())
})

bot.action('<', ctx => {
    if (level === 1) {
        ctx.answerCbQuery('Chegou no limite')
    } else {
        level--
        ctx.editMessageText(`Nível: ${level}`, botoes())
    }
})

bot.action('>', ctx => {
    if (level === 5) {
        ctx.answerCbQuery('Chegou no limite')
    } else {
        level++
        ctx.editMessageText(`Nível: ${level}`, botoes())
    }
})

bot.action('result', ctx => {
    ctx.answerCbQuery(`O nível está em: ${level}`)
})

bot.startPolling()