                    ________________________________ _ _ _ _ _ _
                    \                              /    SETTINGS
                     \____________________________/_ _ _ _ _ _ _
                      \                          /         TOOLS
                       \________________________/_ _ _ _ _ _ _ _
                        \                      /         GENERIC
                         \____________________/_ _ _ _ _ _ _ _ _
                          \                  /          ELEMENTS
                           \________________/_ _ _ _ _ _ _ _ _ _
                            \              /             OBJECTS
                             \____________/_ _ _ _ _ _ _ _ _ _ _
                              \          /               PARTIES
                               \________/_ _ _ _ _ _ _ _ _ _ _ _
                                \      /              COMPONENTS
                                 \____/_ _ _ _ _ _ _ _ _ _ _ _ _
                                  \  /                    TRUMPS
                                   \/_ _ _ _ _ _ _ _ _ _ _ _ _ _

####ITCSS:
Manages source order.
Filters explicitness.
Tames the cascade.
Sanitises inheritance.

####NOTICE:
Each layer is a pass over the DOM.
Specificity increases layer-by-layer.
We affect smaller and smaller bits of the DOM at a time.
Progressively adding styles; never undoing.
Each layer is more detailed and explicit than the last one.

####OUTCOMES:
Everything has a place to live.
People know where to look to find types of rule.
A sane source order.
Reduced waste/redundancy.
Increased scalability.
The Specificity Wars are over! Unless working with gravity forms :(

####SCALING ITCSS:
We can scale our CSS much more easily.
But we can also scale the architecture itself!

####SCALING OUR CSS:
We don't need to worry about the end of a stylesheet anymore.
Add things into the relevant layers (usually the last ones).
Things never get more complicated, only bigger.
Everything grows in a well-rounded manner.
The Specificity Graph keeps trending upward.

####SCALING THE ARCHITECTURE:
Add or remove layers if, as, and when you need to.
Not using a preprocessor? Remove the Settings and Tools layers.
Don't use OOCSS? Remove the Objects layer.
Need Theming? Add a Theme layer after Components.
Need test styles or concept components? Add a Test or Concept layer.

####ADDING LAYERS:
Add layers in the correct place.
Specificity and explicitness of selectors should dictate this.
Honour the Specificity Graph (always trending upwards).

####RECAP:
Write CSS in specificity order.
Maintain the Specificity Graph.
All rulesets should only ever add to and inherit from previous ones.
Order stylesheets from far-reaching to very localised.
Add layers as needed, but only in the right place.

####FAQs:
Q = Where do Media Queries go?
A = Create screen size variables & then create media queries after each ruleset.

Q = Do I put all my plugin css in vendor?
A = Only include css for third party code if it is needed globally.
    For example if you have a calendar page for which you are using a calendar
    plugin that has its own css, then it may be better to load that separately
    on that page only.