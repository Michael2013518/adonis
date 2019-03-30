'use strict'
//const Antl = use('Antl')
class AntlDemoController {
  async demo({ view, antl, locale }) {
    //console.log(view)
    return view.render('demo.antl', {
        message: antl.formatNumber(0.22223, {
            //minimumIntegerDigits:2,
            //minimumFractionDigits: 2,
            //maximumFractionDigits: 2,
            style: 'percent'
        }),
        locale
    })
  }
}

module.exports = AntlDemoController
