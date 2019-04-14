# Giphy picker
The Giphy picker allows to search images on Giphy and use them in your website.

![Giphy picker](GiphyPicker.gif)

# Usage

If you want to use the Giphy image picker in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open the Content types tab
* Create or edit a content model to which you want to add the Giphy picker
* Add the **Custom element** content element
* Configure the content element
* Use the following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/GiphyPicker/giphypicker-input-component.html
* Get API key from Giphy: https://developers.giphy.com/
* Provide JSON parameters for the custom element to configure the API Key:

```json
{
    "apikey": "[YOUR API KEY]"
}
```
* You can add more parameters
  
limit (optional) number  
The number of image results to return in the response. The actual number delivered may be less than requested.  
  
offset (optional) number  
The zero-based offset that indicates the number of image results to skip before returning results.  
  
rating (optional) string  
Filter result by rating, possible options are : Y, G, PG, PG-13, R
  
lang(optional) string    
Specify default country for regional content.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-elements-samples/GiphyPicker?pixel)
