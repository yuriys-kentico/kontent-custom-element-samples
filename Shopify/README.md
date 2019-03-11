# Shopify product selector
Shopify product selector is a selector connected to Shopify Storefront which allows users to search and select a product from Shopify product catalog. When the element is disabled, it only displays the selected product.

![Shopify product selector](Shopify/ShopifyProductSelector.gif)

# Usage

If you want to use the Shopify product selector in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open Content types tab
* Open / create a content model to which you want to add the Shopify product selector
* Add **Custom element** content element
* Open configuration of the content element
* Use following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/Shopify/product-selector.html
* Provide the following JSON parameters for the custom element to connect it to your store, replace the macros with the actual values from Shopify admin UI

`
{
    "storeFrontAccessToken": "<YOUR ACCESS TOKEN>",
    "apiEndpoint": "https://<YOUR STORE NAME>.myshopify.com/api/graphql"
}
`

# Installation

Shopify product selector source code is in following repository: https://github.com/kenticomartinh/kc-shopify

If you want to adjust the implementation, first download [Kentico Cloud Custom Elements Devkit](https://github.com/kentico/custom-element-devkit). Source code of this selector needs be positioned within `/client/custom-elements` folder. For further instructions on devkit implementation, please refer to [Custom Element Devkit README](https://github.com/Kentico/custom-element-devkit/blob/master/readme.md).
