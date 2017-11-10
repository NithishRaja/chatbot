# LOG

* **started at 0907 on 07-11-2017**
* install `dotenv`, `watson-developer-cloud` and `underscore` at 0908
* wrote boilerplate for `/api/startConversation` and `/api/sendMessage` route at 0926
* refactor api routes into separate middleware at 0931
* error: dotenv does not read from .env file at 0940
* error resolved at 0948
* wrote code to initiate conversation at 0958
* finished boilerplate code for sending and receiving text from chatbot api at 1017
* **ended at 1017 on 07-11-2017**

* **started at 1108 on 07-11-2017**
* start writing info.json at 1108
* finished writing `fauna.json`, `flora.json` and `nationalParks.json` in info at 1243
* **ended at 1243 07-11-2017**

* **started at 1804 on 07-11-2017**
* start writing code to save info inside database at 1804
* finished code for updating database at 1823
* wrote code to update parks in context at 1838
* updated watson conversation api with park names and synonyms at 1852
* wrote basic functionality for deciding what ti display at 1900
* **ended at 1900 07-11-2017**

* **started at 1350 on 08-11-2017**
* start to separate all functionality of `/api/sendMessage` into separate middleware at 1352
* finished writing nodes in IBM for plants at 1505
* **ended at 1505 on 08-11-2017**

* **started at 1652 on 08-11-2017**
* start writing code to identify response based on cardType at 1653
* added code to update session variables upon new message at 1704
* **ended at 1736 on 08-11-2017**

* **started at 1848 on 08-11-2017**
* error thrown: `TypeError: Cannot read property 'context' of undefined` at 1849
* error resolved at 1851
* start writing code to update conversationStack at 1851
* finished writing middleware for `/api/newMessage` route at 1904
* start refactoring middleware of `/api/newMessage` route depending upon functionality at 1905
* separated code into functions at 1935
* **ended at 1944 on 08-11-2017**

* **started at 0926 on 09-11-2017**
* start writing code to format conversationStack at 0927
* finished code to format conversationStack at 1000
* start separating functionality into multiple middleware at 1000
* finished adding `/api/getConversation` route at 1012
* **ended at 1016 on 09-11-2017**

* **started at 1549 on 09-11-2017**
* switched to client side
* start writing boilerplate for markup at 1551
* added boilerplate markup for main component at 1613
* start adding event listeners for start conversation button at 1614
* finished event listener at 1617
* start writing container for **Main** component at 1618
* finished container at 1622
* wrote action and reducer to track conversation status at 1628
* wrote code to update **Main** component view upon change in conversation status at 1638
* **ended at 1638 on 09-11-2017**

* **started at 1335 on 10-11-2017**
* start writing conversation component at 1337
* wrote basic boilerplate for **Conversation** at 1344
* wrote Text component to display chatbot and user text at 1411
* added styles to **Text** at 1415
* wrote card component at 1427
* added boilerplate for minimizing card in **Card** at 1436
* wrote functionality to expand/minimize **Card** at 1453
* started writing form component at 1456
* finished **Form** component at 1501
* start using redux to manage messageList at 1503
* finished using redux to manage messageList at 1505
* wrote code to listen to form submission at 1510
* **ended at 1510 10-11-2017**

* **started at 1736 on 10-11-2017**
* added styles to app at 1838
* start writing epic to get messages at 1839
* wrote `startConversation` action and `startConversationEpic` epic to initiate conversation at 1859
* wrote `newMessage` action and `newMessageEpic` epic to send and receive message at 1917
* start writing AJAX calls at 1923
* finished AJAX calls to server at 1933
* switch to server side
* made `api/newMessage` route listen to post requests at 1936
*
