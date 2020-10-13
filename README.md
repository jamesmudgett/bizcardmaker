<h1>
  <a href="https://callerdojo.com">
    CallerDojo
  </a>
</h1>

> Easily create virtual backgrounds in the browser.

Business Card Maker is mainly built with [AngularJS](https://angularjs.org/) and [Foundation](http://foundation.zurb.com/).

It uses [HTML2Canvas](http://html2canvas.hertzen.com/) and [jsPDF](http://parall.ax/products/jspdf) to generate the final business card, as a picture or PDF.

## Development

Make sure you have Node.js `>=0.8.0` installed.

Run the initial setup with:

```
  npm install -g grunt-cli
  npm install
```

Run the app in development mode with:

```
  grunt server
```

Before finishing up a feature, check the final build with:

```
  grunt server:dist
```

Everything related to the Angular app is in the `/app` folder.

**Don't edit anything outside the `/app` folder.**


## License

This projected is licensed under the terms of the GNU AFFERO GENERAL PUBLIC license.
