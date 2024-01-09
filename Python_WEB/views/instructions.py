import reflex as rx

import Python_WEB.constants as constants
import Python_WEB.styles.styles as styles
from Python_WEB.components.button import button
from Python_WEB.styles.styles import TextColor


def instructions() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(
                "Come poter partecipare",
                class_name="title",
                color=TextColor.ACCENT.value,
            ),
            rx.span(
                "Ogni mese verrà messa una storia in evidenza con il link a questo sito."
            ),
            rx.span(
                "• Possono partecipare solo le persone che sono di Torino o vicini. Anche persone disposte a spostarsi dal proprio comune per poter fare il tatuaggio."
            ),
            rx.span(
                "• Dovrai taggare 2 amici nel post dedicato al giveway, mettere like e condividere il post nelle tue storie."
            ),
            button("Post", constants.INSTAGRAM_URL),
            rx.span(
                "• Alla fine del mese verrano annunciati i 3 vincitori tramite una storia instagram, sarete anche contattati in DM."
            ),
            rx.span(
                "• Nel caso non vincessi questo mese ci sarà sempre il prossimo per riprovare! ^^"
            ),
            class_name="nes-container is-dark with-title",
            align_items="start",
            width="100%",
        ),
        style=styles.max_width_style,
    )
