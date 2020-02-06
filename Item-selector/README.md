# Item selector

This custom element offers items from another project to be linked with your item

![screenshot](https://amend.cz/item-selector.png)

## Configuration

```json
{
    "projectid": "302946ce-a441-00e5-3dba-ec6ccc479168",
    "filter": "system.type=article"
}
```

You need to specify the `projectid` parameter in order to make the element work. The optional `filter` parameter is for filtering just subitems of your project and you can use any filtering described in our documentation (separated by &):

[Content filtering documentation](https://docs.kontent.ai/reference/delivery-api#tag/Filtering-content)

Within the filter you can also specify what language of your items you want to retrieve (a default language is returned OOTB) - [https://docs.kontent.ai/tutorials/develop-apps/get-content/getting-localized-content#a-ignoring-language-fallbacks](https://docs.kontent.ai/tutorials/develop-apps/get-content/getting-localized-content#a-ignoring-language-fallbacks)

You can test this element by configuring https://kentico.github.io/kontent-custom-element-samples/Item-selector/item-selector.html url for your custom element.

## Output

The JSON output of such an element would look like this:

```json
"item_selector": {
        "type": "custom",
        "name": "item selector",
        "value": "[
                   {\"codename\":\"article_1\",\"name\":\"Article 1\",\"language\":\"en-US\",\"type\":\"article\"},
                   {\"codename\":\"url1\",\"name\":\"url1\",\"language\":\"en-US\",\"type\":\"video_item__url_\"}
                 ]"
      }
```
