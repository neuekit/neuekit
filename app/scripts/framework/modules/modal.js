/*--------------------------------------------------*\
    #CREATIVE LITTLE UI-KIT | MODAL COMPONENT

    This script creates the modal interactions and
    methods required for modals to function, such as
    .opn and .close

    MK1 @ Version 1.0
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((UIKit, $) => {

    UIKit.modal = (() => {

        function Modal() {

            const _this = this;

            /*--------------------------------------------------*\
                #OPEN A MODAL
            \*--------------------------------------------------*/

            _this.open = function() {

                $(this.hash).addClass('modal--visible').trigger('modal:open');

                $('body').addClass('locked');
            };

            $(document).on('click', '.js-modal--open', _this.open);



            /*--------------------------------------------------*\
                #CLOSE A MODAL
            \*--------------------------------------------------*/

            _this.close = function(element) {

                if ( $('.modal--visible').length === 1 ) {

                    $('body').removeClass('locked');
                }

                $(element).closest('.modal').removeClass('modal--visible').trigger('modal:close');
            };


            $(document).on('click', '.js-modal--close', function(event) {

                event.preventDefault();

                _this.close(this);
            });


            $(document).on('click', '.modal', function(event) {

                if ( $(this).hasClass('modal') && event.target === this ) {

                    event.preventDefault();

                    _this.close(this);
                }
            });

        }

        /*  creating a new object of helper rather than a function */

        return new Modal();

    })();


/* Checks if the namespace already exists & if not assign it */

})(window.UIKit = window.UIKit || {}, window.jQuery = window.jQuery || window.$);

