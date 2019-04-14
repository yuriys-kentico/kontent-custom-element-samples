# Bing image picker
The Bing image picker allows to search images on Bing and use them in your website.

![Bing image picker](BingImagePicker.gif)

# Usage

If you want to use the Bing image picker in your project in Kentico Cloud, follow these steps:

* In Kentico Cloud open the Content types tab
* Create or edit a content model to which you want to add the Bing image picker
* Add the **Custom element** content element
* Configure the content element
* Use the following URL as Hosted code URL (HTTPS): https://kentico.github.io/custom-element-samples/BingImagePicker/bingimage-input-component.html
* Get API key for MS Cognitive Services: https://azure.microsoft.com/en-us/try/cognitive-services/
* Provide JSON parameters for the custom element to configure the API Key:

```json
{
    "apikey": "[YOUR API KEY]"
}
```
* You can add more parameters
  
count (optional) number  
The number of image results to return in the response. The actual number delivered may be less than requested.  
  
offset (optional) number  
The zero-based offset that indicates the number of image results to skip before returning results.  
  
mkt (optional) string  
The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form -. For example, en-US.
  
Full list of supported markets:   
es-AR,en-AU,de-AT,nl-BE,fr-BE,pt-BR,en-CA,fr-CA,es-CL,da-DK,fi-FI,fr-FR,de-DE,zh-HK,en-IN,en-ID,en-IE,it-IT,ja-JP,ko-KR,en-MY,es-MX,nl-NL,en-NZ,no-NO,zh-CN,pl-PL,pt-PT,en-PH,ru-RU,ar-SA,en-ZA,es-ES,sv-SE,fr-CH,de-CH,zh-TW,tr-TR,en-GB,en-US,es-US  
  
safeSearch (optional) string    
A filter used to filter results for adult content. Options are "Off", "Moderate" or "Strict".   

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-elements-samples/BingImagePicker?pixel)
