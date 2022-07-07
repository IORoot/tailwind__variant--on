
<div id="top"></div>

<div align="center">

<img src="https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Ftailwind.svg&fill=%2306B6D4&width=200px&height=200px" style="width:200px;"/>

<h3 align="center">Tailwind 'on' variants</h3>

<p align="center">
This simple tailwind plugin will define 20 new variants that make it simple to select the Xth child, every Y children.
</p>    
</div>

##  1. <a name='TableofContents'></a>Table of Contents


* 1. [Table of Contents](#TableofContents)
* 2. [About The Project](#AboutTheProject)
	* 2.1. [Built With](#BuiltWith)
	* 2.2. [Installation](#Installation)
* 3. [Usage](#Usage)
* 4. [ Customising](#Customising)
* 5. [Troubleshooting](#Troubleshooting)
* 6. [Contributing](#Contributing)
* 7. [License](#License)
* 8. [Contact](#Contact)
* 9. [Changelog](#Changelog)



##  2. <a name='AboutTheProject'></a>About The Project


![Screenshot](https://github.com/IORoot/tailwind__variant--on/blob/master/screenshot.png?raw=true)


This simple tailwind plugin will define 20 new variants that make it simple to select the Xth child, every Y children.

Simple use-case: 

You have a flexbox with three children (33%) of the width. There are many children all on `flex-wrap`.

You want to change the background to red on the second child on each row.

Well, you can use the variant `on-2/3:bg-red-300`.


<p align="right">(<a href="#top">back to top</a>)</p>


###  2.1. <a name='BuiltWith'></a>Built With

This project was built with the following frameworks, technologies and software.

- [Tailwind](https://tailwindcss.com/)

<p align="right">(<a href="#top">back to top</a>)</p>


###  2.2. <a name='Installation'></a>Installation

Within your tailwind.config.js, do these steps:

1. `require()` the tailwind-on.js file in this repo.
2. add which utility you want the variant added to. (Remember you need to escape the backslash with a forward-slash.)
3. Remember to recompile your stylesheet using `postcss` 


```
const plugin = require('tailwindcss/plugin');

module.exports = {

  plugins: [
    require('./plugins/tailwind-on'),
  ],

  variants: {
    extend: {
      margin: ['on-2\/3'],
    },
  },

}
```


By adding many variants, your CSS file will grow very large. Make sure you are only using the ones you need and make sure you
purge any CSS too.


<p align="right">(<a href="#top">back to top</a>)</p>


##  3. <a name='Usage'></a>Usage


- `on-1/2` = The odd child element.
- `on-2/2` = The even child element.

- `on-1/3` = The first of every three child elements.
- `on-2/3` = The second of every three child elements.
- `on-3/3` = The third of every three child elements.

- `on-1/4` = The first of every four child elements.
- `on-2/4` = The second of every four child elements.
- `on-3/4` = The third of every four child elements.
- `on-4/4` = The fourth of every four child elements.

- `on-1/5` = The first of every five child elements.
- `on-2/5` = The second of every five child elements.
- `on-3/5` = The third of every five child elements.
- `on-4/5` = The fourth of every five child elements.
- `on-5/5` = The fifth of every five child elements.

- `on-1/6` = The first of every six child elements.
- `on-2/6` = The second of every six child elements.
- `on-3/6` = The third of every six child elements.
- `on-4/6` = The fourth of every six child elements.
- `on-5/6` = The fifth of every six child elements.
- `on-6/6` = The fifth of every six child elements.

##  4. <a name='Customising'></a> Customising

All Includes

```
const plugin = require('tailwindcss/plugin');

module.exports = {

  plugins: [
    require('./plugins/tailwind-on'),
  ],

  variants: {
    extend: {
      backgroundColor: [
        'on-1\/2', 'on-2\/2', 
        'on-1\/3', 'on-2\/3', 'on-3\/3', 
        'on-1\/4', 'on-2\/4', 'on-3\/4', 'on-4\/4', 
        'on-1\/5', 'on-2\/5', 'on-3\/5', 'on-4\/5', 'on-5\/5',
        'on-1\/6', 'on-2\/6', 'on-3\/6', 'on-4\/6', 'on-5\/6', 'on-6\/6', ],
    },
  },

}
```

##  5. <a name='Troubleshooting'></a>Troubleshooting

None

<p align="right">(<a href="#top">back to top</a>)</p>


##  6. <a name='Contributing'></a>Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



##  7. <a name='License'></a>License

Distributed under the MIT License.

MIT License

Copyright (c) 2022 Andy Pearson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right">(<a href="#top">back to top</a>)</p>



##  8. <a name='Contact'></a>Contact

Author Link: [https://github.com/IORoot](https://github.com/IORoot)

<p align="right">(<a href="#top">back to top</a>)</p>

##  9. <a name='Changelog'></a>Changelog

- v1.0.0 Initial
