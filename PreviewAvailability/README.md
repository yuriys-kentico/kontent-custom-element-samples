# Preview availability
Preview availability is a custom element which automatically checks whether the content item changes reached preview and offers web link and QR code link to the preview.

![Preview availability](PreviewAvailability.png)

# Usage

If you want to use the Preview availability in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open Content types tab
* Open / create a content model to which you want to add the Shopify product selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/PreviewAvailability/preview-availability.html
* Provide the following JSON parameters for the custom element to connect it to the appropriate elements

```
{
    "previewApiKey": "<YOUR PREVIEW API KEY>",
    "previewUrlPattern": "<URL WITH PREVIEW PATTERN MACROS>",
    "urlSlugElement": "url_pattern",
}
```

Preview URL pattern has the same format as the preview URL defined in Project settings.

URL slug element is optional, you don't need to configure it provided you don't use URL slug in the URL of your content type.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-element-samples/PreviewAvailability?pixel)
