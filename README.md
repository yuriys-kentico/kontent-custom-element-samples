# Examples of Custom Element Extensions for Kentico Cloud

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-cloud)

This repository contains samples of the HTML web pages that can be used as Custom Element (BETA) Extensions in Kentico Cloud.

[Custom elements](https://developer.kenticocloud.com/docs/integrating-content-editing-features) help you with extending the basic functionality of Kentico Cloud UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed <iframe> and interacts with the [Kentico Cloud](https://kenticocloud.com/) app via the [Custom Elements API](https://developer.kenticocloud.com/reference#custom-elements-api).

Note that Custom elements are only supported in the latest versions of our SDKs.

# Custom elements' samples overview
## ColorPicker
[ColorPicker](https://github.com/Kentico/custom-element-samples/blob/master/ColorPicker/color-picker.html) is a simple Custom element based on a [color-picker](https://github.com/tovic/color-picker) JavaScript library. It allows user to choose a color from palette and sets it as a HEX string, e.g. '#ff0000' for red color, '#00ff00' for green, and so on. Selected color is then seen as the Custom element's background. When the element is disabled, its color palette is still visible in a content item but does not react when clicked on.

## Markdown editor
[Mardown editor](https://github.com/Kentico/custom-element-samples/blob/master/Markdown/markdown.html) is a WYSIWYG Custom element which allows users to write formatted text using [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor). In this sample element, you can find examples of setting dynamic height and reacting on the window 'resize' events. When the element is disabled, the editor is set to the readonly mode.

# How to create a custom element
You can find a detailed tutorial on how to create a Custom element in our [documentation](https://developer.kenticocloud.com/docs/integrating-content-editing-features).

## Custom element devkit
To make development of custom elements as easy as possible, we created a [custom element devkit](https://github.com/Kentico/custom-element-devkit). The devkit includes Kentico Cloud alike wireframe and mocked API to enable seamless debugging experience. It is also capable of minimizing all assets and preparing custom element for production use.

## Styling your custom elements

By including Kentico Cloud default styles, you can make your Custom element look consistent with the rest of the UI.

The [/shared](https://github.com/Kentico/custom-element-samples/tree/master/shared) folder in this GitHub repository contains:

* [custom-element.css](https://github.com/Kentico/custom-element-samples/blob/master/shared/custom-element.css) – a CSS stylesheet
* [kentico-icons-v1.6.0.woff](https://github.com/Kentico/custom-element-samples/blob/master/shared/kentico-icons-v1.6.0.woff) – a font file
* [examples.html](https://github.com/Kentico/custom-element-samples/blob/master/shared/examples.html) – An HTML page containing the implementation details and an HTML markup of some of the basic elements. See also the link in Demo section.

We recommend you clone the files and host them locally yourself. The `kentico-icons-v1.6.0.woff` file needs to be hosted in the same directory as the CSS stylesheet to be properly linked.

# Demo 
If you plan on using these demo examples in your own production project, we recommend you to clone this repository. This way, you will not be affected by the possible changes made to the Custom elements in the future.
- ColorPicker - [https://kentico.github.io/custom-element-samples/ColorPicker/color-picker.html](https://kentico.github.io/custom-element-samples/ColorPicker/color-picker.html)
- Markdown editor - [https://kentico.github.io/custom-element-samples/Markdown/markdown.html](https://kentico.github.io/custom-element-samples/Markdown/markdown.html)
- CSS usage examples - [https://kentico.github.io/custom-element-samples/shared/examples.html](https://kentico.github.io/custom-element-samples/shared/examples.html)

# Feedback & Contributing

You can contribute by implementing a Custom Element Extension of your choice or pick one from the [ideas](https://github.com/Kentico/custom-element-samples/issues). Create an HTML web page, include the Custom Elements API in the code, describe what your element does in the Readme file, and send us a pull request. 

We'll also appreciate if you [submit your ideas](https://github.com/Kentico/custom-element-samples/issues) for custom elements or vote for [the existing ones](https://github.com/Kentico/custom-element-samples/issues).

Check out the [Contributing](https://github.com/Kentico/custom-element-samples/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions, and begin contributing.

# Custom Elements Contest 2019

We all like to play! During the March of 2019 we are hosting the Custom Elements Contest 2019. Do you have what it takes to code an awesome Custom Element and compete with others for $150 Amazon vouchers? Then take a look at these few rules we've put together:

* The contest runs between 1st and 31st of March 2019
* Every extension submitted between these dates is automatically included in the contest
* Every extension must comply with all applicable licenses
* Every extension must be submitted only by its author
* Every submission (pull request) must follow these rules:
  * extension is stored within a folder named after it
  * the folder contains compiled and minimized code of the custom element extension (html, css, js) and markdown file with documentation (how to set it up, etc.)
  * the documentation must contain a link to the source code repository (if there is any) of the custom element extension
  * the source code is licensed under MIT
* Prize for top 10 winning custom element extensions is $150 Amazon voucher. Winning authors who are non-US residents will be eligible to claim a virtual visa card to the same value.
* Every custom element extension will be evaluated in following areas:
  * innovation/originality - does the extension use some new concepts, is it somehow different from what we are used to?
  * usefulness - is it an extension to be used by many users or is meant for a very specific, niche segment?
  * complexity - is it a prefilled drop-down list vs. complex selection dialog with plenty of JS logic
  * quality - is it bug-free?
* Custom element extensions will be evaluated by Kentico internal committee after the end of the contest
* Ideas for custom element extensions may be optionally picked from our list at https://github.com/Kentico/custom-element-samples/issues

## How to contribute to the repository and be included in the contest?

* Pull requests are to be submitted to https://github.com/Kentico/custom-element-samples
* Every custom element extension submitted between 1st and 31st of March 2019 is automatically included in the contest
* If you are working on a custom element extension based on an idea from our list, let us know via GitHub issues and we will assign the issue to you.

## Winners
If your custom element extension will place in the top 10, we will get in touch with you via GitHub to collect your contact info so that you can receive your prize. Please make sure your GitHub contact info is current.

If you have any questions regarding the Custom Elements Contest 2019, please [get in touch with us](mailto:developerscommunity@kentico.com).



![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-element-samples?pixel)
