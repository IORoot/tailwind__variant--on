const plugin = require('tailwindcss/plugin')


const tailwindOn = plugin(

    function ({ addVariant, e }) {


        addVariant('on-1\/2', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-1\/2${separator}${className}`)} > :nth-child(odd)`
            })
        })
        addVariant('on-2\/2', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-2\/2${separator}${className}`)} > :nth-child(even)`
            })
        })



        addVariant('on-1\/3', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-1\/3${separator}${className}`)} > :nth-child(3n+1)`
            })
        })
        addVariant('on-2\/3', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-2\/3${separator}${className}`)} > :nth-child(3n+2)`
            })
        })
        addVariant('on-3\/3', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-3\/3${separator}${className}`)} > :nth-child(3n+3)`
            })
        })



        addVariant('on-1\/4', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-1\/4${separator}${className}`)} > :nth-child(4n+1)`
            })
        })
        addVariant('on-2\/4', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-2\/4${separator}${className}`)} > :nth-child(4n+2)`
            })
        })
        addVariant('on-3\/4', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-3\/4${separator}${className}`)} > :nth-child(4n+3)`
            })
        })
        addVariant('on-4\/4', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-4\/4${separator}${className}`)} > :nth-child(4n+3)`
            })
        })



        addVariant('on-1\/5', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-1\/5${separator}${className}`)} > :nth-child(5n+1)`
            })
        })
        addVariant('on-2\/5', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-2\/5${separator}${className}`)} > :nth-child(5n+2)`
            })
        })
        addVariant('on-3\/5', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-3\/5${separator}${className}`)} > :nth-child(5n+3)`
            })
        })
        addVariant('on-4\/5', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-4\/5${separator}${className}`)} > :nth-child(5n+4)`
            })
        })
        addVariant('on-5\/5', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-5\/5${separator}${className}`)} > :nth-child(5n+5)`
            })
        })



        addVariant('on-1\/6', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-1\/6${separator}${className}`)} > :nth-child(6n+1)`
            })
        })
        addVariant('on-2\/6', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-2\/6${separator}${className}`)} > :nth-child(6n+2)`
            })
        })
        addVariant('on-3\/6', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-3\/6${separator}${className}`)} > :nth-child(6n+3)`
            })
        })
        addVariant('on-4\/6', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-4\/6${separator}${className}`)} > :nth-child(6n+4)`
            })
        })
        addVariant('on-5\/6', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-5\/6${separator}${className}`)} > :nth-child(6n+5)`
            })
        })
        addVariant('on-6\/6', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`on-6\/6${separator}${className}`)} > :nth-child(6n+6)`
            })
        })
    }



)


module.exports = tailwindOn