# Embassy Clicker 🛂
A simple clicker game i made for the browser. Click the embassy, collect stamps, buy upgrades and see how high you can get the number. Made with Html, Tailwind CSS and vanilla JavaScript.

## Description

* Click the embassy to get stamps, a floating `+N` shows up at your cursor every click
* 7 upgrades, some give stamps per click and some give stamps per second
* Big numbers get short (k, M, B, T, Qa, Qi) so the counter doesn't run off the screen
* Buy buttons turn green when you can afford them and stay gray when you can't
* A side panel with stats like per click, per second, total clicks and total stamps

### Upgrades

| Name | Effect | Price |
|------|--------|-------|
| Cloud's Mouse | +1 per click | 10 |
| Riitam's Help | +5 per sec | 50 |
| More Grants | +100 per sec | 1000 |
| American Visa | +100 per click | 1500 |
| Orepheus's Haiku | +10k per sec | 100k |
| Blob's Art | +10k per click | 200k |
| Whole Embassy | +100k per click | 2M |

### Easter Eggs
<details>
<summary>Spoilers</summary>

* Switch to another tab and look at the tab title
* Click the word "UPGRADES" at the top of the shop

</details>

## Getting Started

### Dependencies

* A modern web browser
* Node.js, only if you want to rebuild the CSS

### Installing

```
git clone https://github.com/rehan-kasim/Embassy-Clicker.git
cd Embassy-clicker
```

### Executing program

* Open `index.html` with VS Code Live Server
* Or Just Open `https://embassy-clicker.vercel.app`
* To rebuild the styles:

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## Help

Progress is not saved yet, so if you refresh the page you start from zero again.(done)
Ask CHatgpt or open a issue 

## License

This project is licensed under the MIT License - see the LICENSE.md file for details