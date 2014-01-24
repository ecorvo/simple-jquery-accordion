Simple jQuery Accordion
=======================

This is a simple accordion jQuery accordion, with basic functionalities using animates.css to add transition effects.
How to use it:
    -Include jQuery library
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    -Include the plugin
        <script type="text/javascript" src="jquery.simple-accordion.js"></script>
    -Create an HTML markup for the accordion
        You can use any tag you like as long as it follow this structure:
        <parent tag> Title </parent tag>
        <child tag> content here </child tag>
        Example:
        <dl class="accordion" id="my-accordion">
                <dt>Section 1</dt>
                <dd>Mauris mauris ante, blffandddfdit et, ultrices a, suscipit eget, quam.</dd>
                <dt>Section 2</dt>
                <dd>Vestibulum a velit eu ante scelerisque vulputate.</dd>
                <dt>Section 3</dt>
                <dd>Nam mi. Proin viverra leo ut odio. Curabitur malesuada.</dd>
                <dt>Section 4</dt>
                <dd>Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc.</dd>
        </dl>
    -To initiate the plugin simple call it like this:
        $('#my-accordion').simpleAccordion();
    -You may pass attributes for the in and out transition like this
        $('#my-accordion').simpleAccordion({animationIn: 'slideInDown', animationOut: 'slideOutUp'});

        Enjoy!
