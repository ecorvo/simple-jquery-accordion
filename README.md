Simple jQuery Accordion
=======================

This is a simple accordion jQuery accordion, with basic functionalities using animates.css to add transition effects.
How to use it:
    -Include jQuery library
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <h2>-Include the plugin</h2>
        <script type="text/javascript" src="jquery.simple-accordion.js"></script>
    <h2>-Create an HTML markup for the accordion:</h2>
        You can use any tag you like as long as it follow this structure:
        <parent tag> Title </parent tag>
        <child tag> content here </child tag>
        Example:
        <code>
        &ltdl class="accordion" id="my-accordion"&gt
                &ltdt>Section 1</dt&gt
                &ltdd>Mauris mauris ante, blffandddfdit et, ultrices a, suscipit eget, quam.</dd&gt
                &ltdt>Section 2</dt&gt
                &ltdd>Vestibulum a velit eu ante scelerisque vulputate.</dd&gt
                &ltdt>Section 3</dt>
                &ltdd>Nam mi. Proin viverra leo ut odio. Curabitur malesuada.</dd&gt
                &ltdt>Section 4</dt&gt
                &ltdd>Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc.</dd&gt
       &ltdl&gt
        </code>
    <h2>-To initiate the plugin simple call it like this:</h2>
       <p> $('#my-accordion').simpleAccordion();</p>
    <h2>-You may pass attributes for the in and out transition like this:</h2>
        <p>$('#my-accordion').simpleAccordion({animationIn: 'slideInDown', animationOut: 'slideOutUp'});</p>

        Enjoy!
