import reflex as rx

import Python_WEB.styles.styles as styles
from Python_WEB.components.button import button
from Python_WEB.components.drawings import drawings
from Python_WEB.components.header_text import header_text
from Python_WEB.styles.styles import Size


def calendar() -> rx.Component:
    return rx.vstack(
        header_text("heart", "Disegni Disponibili"),
        # rx.vstack(
        #     rx.hstack(
        #         rx.text("L'evento inizia tra"),
        #         rx.text(id="countdown"),
        #         align_items="start",
        #     ),
        #     button("Avvisami", url=""),
        #     rx.span("This is just a rx.span"),
        #     class_name="nes-container is-dark",
        #     align_items="start",
        #     width="100%",
        # ),
        rx.responsive_grid(
            rx.foreach(list(range(1, 13)), lambda number: drawings(number)),
            columns=[3, 3, 4, 5, 6],
            width="100%",
            padding_top=Size.BIG.value,
        ),
        rx.script(src="/js/countdown.js"),
        style=styles.max_width_style,
    )
