layout: 'home'

// module.exports = {
export default {

title: 'R.I.P. InSITE',
lang: 'en-US',
description: 'description here', 
themeConfig: {   
    logo: '../assets/phantomhead.jfif',
    nav: [
        {text: 'Home', link: '/'},
        {text: 'About', link: '/about/'}, 
        {text: 'Contact', link: '/contact'}, 
        {text: 'Vue notes', link: '/VueNotes/index.md'},  
    ],
    sidebar: [
        {
        text: 'Good Stuff', 
        items: [
            {text: 'Our Story', link: '/about/our-story'}, 
            {text: 'Recurring Meeting Links', link: '/meeting links/'},
            {text: 'AWS Accounts', link: '/AWS Accounts/'}, 
            {text: 'Commercial docs', link: '/Commercial docs/'},
            {text: 'BAH Sites', link: '/Booz Allen Sites/'},
            {text: 'Points Of Contact', link: '/POC/'},
            {text: 'Video', link: '/Video Links/'}],
        }, 
        {
        text: ' section B', 
        items: [
            {text: 'Our Story', link: '/about/our-story'}, 
        ]
        }, 
        {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "item 1", link: '/about/our-story' },
          { text: "item 2 ", link: '/about/our-story' },]
        }, 
        ],
    outlineTItle: 'fofofofof',
    },
}