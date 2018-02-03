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
            const baseClass = 'c-modal';
            const triggerClass = 'js-modal';

            /*--------------------------------------------------*\
                #OPEN A MODAL
            \*--------------------------------------------------*/

            _this.open = function() {

                $(this.hash).addClass(`${baseClass}--visible`).trigger('modal:open');

                $('body').addClass('locked');
            };

            $(document).on('click', `.${triggerClass}--open`, _this.open);



            /*--------------------------------------------------*\
                #CLOSE A MODAL
            \*--------------------------------------------------*/

            _this.close = function(element) {

                if ( $(`.${baseClass}--visible`).length === 1 ) {

                    $('body').removeClass('locked');
                }

                $(element).closest(`.${baseClass}`).removeClass(`${baseClass}--visible`).trigger('modal:close');
            };


            $(document).on('click', `${triggerClass}--close`, function(event) {

                event.preventDefault();

                _this.close(this);
            });


            $(document).on('click', `.${baseClass}`, function(event) {

                if ( $(this).hasClass(`${baseClass}`) && event.target === this ) {

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


