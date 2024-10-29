// Define the Boxever queue 
var _boxeverq = _boxeverq || [];

// Define the Boxever settings 
var _boxever_settings = {
    client_key: 'psfu6uh05hsr9c34rptlr06dn864cqrx',
    target: 'https://api.boxever.com/v1.2',
    cookie_domain: 'cdp.boxeverlibrary.com'
};

// Load the Boxever JavaScript Library asynchronously 
(function() {
     var s = document.createElement('script');
     s.type = 'text/javascript';
     s.async = true;  
     s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js';
     var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

_boxeverq.push(() => { 
    const viewEvent = { 
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "VIEW",
        language: "EN",
        currency: "USD",
        page: "home",
        pos: "CDPLearning_BoxeverLibrary"
    };

    // Send the event data to the server
    Boxever.eventCreate(viewEvent, response => console.log(response), "json");
});

function loginUser(emailaddress){
	_boxeverq.push(() => { 
    const identityEvent = { 
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "IDENTITY",
        language: "EN",
        currency: "USD",
        page: "home",
        pos: "CDPLearning_BoxeverLibrary",
		email: emailaddress
    };

    // Send the event data to the server
    Boxever.eventCreate(identityEvent, response => console.log(response), "json");
});	
}

function sendAddEvent(productType,productName,itemId,productPrice,ProductId,productCurrency){
	_boxeverq.push(() => { 
    const addEvent = { 
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "ADD",
        language: "EN",
        currency: "USD",
        page: "home",
        pos: "CDPLearning_BoxeverLibrary",
		product: {
          name: productName,
          type: productType,
          item_id: itemId,
          productId: ProductId,
          orderedAt: new Date().toISOString(),
          quantity: 1,
          price: productPrice,
          currency: productCurrency
      }
    };

    // Send the event data to the server
    Boxever.eventCreate(addEvent, response => console.log(response), "json");
});	
}

function sendConfirmEvent(confirmedProducts){
	_boxeverq.push(() => { 
    const confirmEvent = { 
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "CONFIRM",
        language: "EN",
        currency: "USD",
        page: "checkout",
        pos: "CDPLearning_BoxeverLibrary",
		product: confirmedProducts
    };

    // Send the event data to the server
    Boxever.eventCreate(confirmEvent, response => console.log(response), "json");
});	
}

function sendCheckoutEvent(){
	_boxeverq.push(() => { 
    const checkoutEvent = { 
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "CHECKOUT",
        language: "EN",
        currency: "USD",
        page: "checkout",
        pos: "CDPLearning_BoxeverLibrary",
		reference_id: "MA-490094",
		status: "PURCHASED"
    };

    // Send the event data to the server
    Boxever.eventCreate(checkoutEvent, response => console.log(response), "json");
});	
}