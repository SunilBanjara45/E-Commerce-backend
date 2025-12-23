const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const { fileURLToPath } = require('url')


const _filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(_filename)

const readTemplate = (template) => {
    const templatePath = path.join(__dirname, '../template', template)
    return fs.readFileSync(templatePath).toString()
}

const renderTemplate = (template, metaData) => {
    return ejs.render(template, metaData)
}

const prepareTemplate = (template, metaData) => {
    const baseTemplate = readTemplate('base.ejs')

    const baseHTML = renderTemplate(baseTemplate, metaData)

    const templateData = readTemplate(template)

    const templateHTML = renderTemplate(templateData, metaData)

    const finalHTML = baseHTML.replace('REPLACE_WITH_TEMPLATE', templateHTML)

    return finalHTML

}

exports.sendMail = (to, template = '', metaData = {}) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIN_USER,
            pass: process.env.MAIL_PASS
        }
    })

    const mailOptions = {
        to,
        subject: metaData.subject,
        html: prepareTemplate(template, metaData)
    }

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log(err)
        }
        else {

        }
    })
}
global.sendMail = this.sendMail