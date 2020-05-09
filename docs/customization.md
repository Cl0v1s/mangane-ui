# Customizing Soapbox

First [Install Soapbox](https://soapbox.pub/)

Soapbox supports customization of the user interface, to allow per instance branding and other features.  Current customization features include:
* Instance name
* Site logo
* Promo panel list items, e.g. blog site link
* Favicon
* About page
* Terms of Service page

## Instance Name
Instance name is edited during the Pleroma installation step

## Site Logo and Promo Panel List Items
The site logo and promo panel list items are customized by copying `soapbox.example.json` in `static/instance` folder to `soapbox.json`
Re-create the webpack and restart the soapbox-fe service to effect the changes.

An example of the contents of `soapbox.example.json`:
```
{
  "logo": "https://media.gleasonator.com/site_uploads/files/000/000/002/original/logo.svg",
  "promoPanel": {
    "items": [{
      "icon": "area-chart",
      "text": "Our Site stats",
      "url": "https://fediverse.network/example.com"
    }, {
      "icon": "comment-o",
      "text": "Our Site blog",
      "url": "https://blog.example.com"
    }]
  },
  "extensions": {
    "patron": false
  },
  "defaultSettings": {
    "autoPlayGif": false,
    "theme": "lime"
  }
}
```

## Favicon
The favicon is customized by dropping a favicon.png file into the `/static` folder. 
Re-create the webpack and restart the soapbox-fe service to effect the changes.

## About Page and Terms of Service Page
The About page is customized by ensuring that the `static/instance/about` folder exists and dropping an `index.html` file into it.
The Terms of Service page is customized by dropping a `tos.html` file into the `static/instance/about` folder.
Re-create the webpack and restart the soapbox-fe service to effect the changes.