import reflex as rx

import Python_WEB.constants as constants
import Python_WEB.styles.styles as styles
from Python_WEB.styles.styles import Size, TextColor


def footer() -> rx.Component:
    return rx.hstack(
        rx.vstack(
            rx.text(
                "Pagina Web Creata in Python usando Reflex",
                font_size=Size.MEDIUM.value,
                margin_bottom=Size.ZERO.value,
            ),
            rx.link(
                "Creato con ",
                rx.box(class_name="nes-icon is-small heart"),
                " da Andres Villa",
                href=constants.GITHUB_URL,
                is_external=True,
                font_size=Size.MEDIUM.value,
                color=TextColor.TERTIARY.value,
            ),
            align_items="start",
            spacing=Size.MEDIUM.value,
        ),
        rx.spacer(),
        rx.image(
            src="logo.png",
            alt="logo",
            class_name="nes-avatar is-large",
            style={"image-rendering": "pixelated"},
        ),
        padding_bottom=Size.BIG.value,
        style=styles.max_width_style,
        align_items="center",
    )
