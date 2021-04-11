// // Copyright (c) 2012 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.

// // This extension demonstrates using chrome.downloads.download() to
// // download URLs.

// // Download all visible checked links.
// function downloadCheckedLinks() {
//     // Daniel Shiffman
//     // http://codingtra.in
//     // http://patreon.com/codingtrain

//     console.log('Chrome extension go?');
//     alert("Hanif");
// };


// // Set up event handlers and inject send_links.js into all frames in the active
// // tab.
// window.onload = function() {
//     document.getElementById('downloadIMG').onclick = downloadCheckedLinks;
// };










chrome.runtime.onMessage.addListener(function (request){
    // alert(request);
    console.log("hanif");
    
    
    function simulateRightClick( element ) {
        var evt1 = new MouseEvent("mousedown", {
            bubbles: true,
            cancelable: false,
            view: window,
            buttons: 2
          });
        
        element.dispatchEvent(evt1);

        var evt2 = new MouseEvent("mouseup", {
            bubbles: true,
            cancelable: false,
            view: window,
            buttons: 2
          });
        
        element.dispatchEvent(evt2);

        var evt3 = new MouseEvent('contextmenu', {
            bubbles: true,
            cancelable: false,
            view: window,
            buttons: 2
          });
        element.dispatchEvent(evt3);
    }
    
    
    function getURLParam( queryString, key ) {
        var vars = queryString.replace( /^\?/, '' ).split( '&' );
        for ( let i = 0; i < vars.length; i++ ) {
            let pair = vars[ i ].split( '=' );
            if ( pair[0] == key ) {
                return pair[1];
            }
        }
        return false;
    }
    
    
    function createDownload( contents ) {
        var hiddenElement = document.createElement( 'a' );
        hiddenElement.href = 'data:attachment/text,' + encodeURI( contents );
        hiddenElement.target = '_blank';
        
        var res = document.title.split("-")[0];
        // alert(document.location.href)
        hiddenElement.download = res.trim()+'.txt';
        hiddenElement.click();
    }
    
    function grabUrls() {
        var urls = [];
        return new Promise( function( resolve, reject ) {
            var count = document.querySelectorAll(
                '.isv-r a:first-of-type' ).length,
                index = 0;
            Array.prototype.forEach.call( document.querySelectorAll(
                '.isv-r a:first-of-type' ), function( element ) {
                // using the right click menu Google will generate the
                // full-size URL; won't work in Internet Explorer
                // (http://pyimg.co/byukr)
                simulateRightClick( element.querySelector( ':scope img' ) );
                // Wait for it to appear on the <a> element
                var interval = setInterval( function() {
                    if ( element.href.trim() !== '' ) {
                        clearInterval( interval );
                        // extract the full-size version of the image
                        let googleUrl = element.href.replace( /.*(\?)/, '$1' ),
                            fullImageUrl = decodeURIComponent(
                                getURLParam( googleUrl, 'imgurl' ) );
                        if ( fullImageUrl !== 'false' ) {
                            urls.push( fullImageUrl );
                        }
                        // sometimes the URL returns a "false" string and
                        // we still want to count those so our Promise
                        // resolves
                        index++;
                        if ( index == ( count - 1 ) ) {
                            resolve( urls );
                        }
                    }
                }, 10 );
            } );
        } );
    }
    grabUrls().then( function( urls ) {
        urls = urls.join( '\n' );
        
        createDownload( urls );
    } );
})
