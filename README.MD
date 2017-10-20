Rocketpunch Labs Helper Library [![Build Status](https://travis-ci.org/rocketpunchlabs/rpl-helpers.svg?branch=master)](https://travis-ci.org/rocketpunchlabs/rpl-helpers)
=========

A small library of useful functions.

## Installation

  `npm install rpl-helpers` </br>
  or </br>
  `yarn add rpl-helpers`

## Usage

    var helpers = require('rpl-helpers');

    var validEmail = helpers.validateEmail("dave@test.com"); 
    // Should equal true

    var validPhone = helpers.validatePhone("1232342333"); 
    // Should equal true

    var shortenedText = helpers.shortenText("Bacon ipsum dolor amet turkey boudin shoulder biltong, ground round strip steak tail short loin spare ribs pork loin frankfurter.", 8); 
    //should equal "Bacon ipsum dolor amet turkey boudin shoulder biltong,..."
  
  

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.