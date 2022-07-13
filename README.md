# REST API via Google Cloud Functions

Demo Rest API which was created via Google Cloud Functions and Node JS

see example https://us-central1-epam-laba-13-1527598553135.cloudfunctions.net/myWebsiteBackend/api/currency

https://us-central1-epam-laba-13-1527598553135.cloudfunctions.net/myWebsiteBackend/api/currency/USD

see documentation https://cloud.google.com/functions/docs/functions-framework


# Getting Started:

0. Create your Google Cloud Platform Account

0. Open the cloud console from the Google Cloud Functions page.

0. Open the Code Editor from the top right corner of your cloud shell.

0. `$ mkdir currencyApiBackend`

0. `$ cd currencyApiBackend`

0. `$ git clone https://github.com/ziginsider/GCP-serverless-starter.git`

0. `$ npm i`

0. `$ gcloud functions deploy currencyApiBackend --runtime=nodejs12 --trigger-http`

0. The console output will give you link to test you API (see  `httpsTrigger: url:` section). You can test it in postman (or in the browser) by navigating to 

 - `https://<your.console.outputuri>/api/currency` - for JSON with all currencies
 - `https://<your.console.outputuri>/api/currency/{base}` - for JSON with specified currency by {base}

Available currency bases: USD, EUR, CHF, HRK, MXN, ZAR, CNY, THB, AUD, ILS, KRW, BTC, 
JPY, PLN, GBP, IDR, HUF, PHP, TRY, RUB, HKD, ISK, DKK, ADA, 
CAD, MYR, BGN, NOK, RON, SGD, CZK, SEK, NZD, BRL, INR, BYN
