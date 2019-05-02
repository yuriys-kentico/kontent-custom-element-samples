# Bynder image selector
Bynder image selector is a selector connected to Bynder instance which allows users to search and select images from Bynder assets. When the element is disabled, it only displays the selected images.

![Bynder image selector](BynderImageSelector.gif)

# Usage

If you want to use the Bynder image selector in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open Content types tab
* Open / create a content model to which you want to add the Bynder image selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/Bynder/image-selector.html
* Optionally provide the following JSON parameters for the custom element

```
{
  "bynderUrl": "<YOUR BYNDER URL>",
  "previewDerivative": "webimage",
  "webDerivative": "webimage"
}
```

If you don't provide bynder URL, the selector will prompt for it while logging in.

The derivative parameters can be used to alter which of the defined image derivatives will be used by the selector and output. By default the web image URL is used. 

# Installation

Bynder image selector source code is in following repository: https://github.com/kenticomartinh/kc-bynder

If you want to adjust the implementation, first download [Kentico Cloud Custom Elements Devkit](https://github.com/kentico/custom-element-devkit). Source code of this selector needs be positioned within `/client/custom-elements` folder. For further instructions on devkit implementation, please refer to [Custom Element Devkit README](https://github.com/Kentico/custom-element-devkit/blob/master/readme.md).

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-element-samples/Bynder?pixel)
