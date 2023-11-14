//document.addEventListener('DOMContentLoaded', () => { })

export class HeaderFooter {
    nav = document.getElementById('navIndex');
    footer = document.getElementById('footerIndex')

    constructor(nav, footer) {
        this.nav = nav
        this.footer = footer
    }
}