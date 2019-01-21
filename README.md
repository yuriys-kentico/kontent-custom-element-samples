# custom-element-samples
[Custom elements](https://developer.kenticocloud.com/v1/docs/extending-kentico-cloud-beta) are essentially a small HTML application that exists in a sandboxed <iframe> and interacts with the [Kentico Cloud](https://kenticocloud.com/) app through the Custom elements API.

This repository contains samples of html web pages that can be used in Custom element content type.

[![Forums](https://img.shields.io/badge/chat-on%20forums-orange.svg)](https://forums.kenticocloud.com)

# Custom elements' samples overview
## ColorPicker
[ColorPicker](https://github.com/Kentico/custom-element-samples/blob/master/ColorPicker/color-picker.html) is an simple custom element, based on [color-picker](https://github.com/tovic/color-picker) JavaScript library. It allows user to choose a color from palette and sets it as a HEX string, e.g. '#ff0000' for red color, '#00ff00' for green and so on. Selected color is being seen as custom element's background. When custom element is disabled, palette is visible nevertheless does not react on mouse click.

## Markdown editor
[Mardown editor](https://github.com/Kentico/custom-element-samples/blob/master/Markdown/markdown.html) is a WYSIWYG custom element which allows users to write formatted text using [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor). You can find examples of setting dynamic height and reacting on the window 'resize' events. Editor is set to the readonly mode in case of the disabled element.

# How to create a custom element
Detailed user-guide you can find in [documentation](https://developer.kenticocloud.com/v1/docs/extending-kentico-cloud-beta)

# Feedback & Contributing

Check out the [contributing](https://github.com/Kentico/delivery-sdk-net/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions, and begin contributing.

You can contribute by adding your custom element here. Create html web page with some functionality, describe in readme file what your element does and send us a pull request.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-element-samples?pixel)
