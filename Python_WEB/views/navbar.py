import reflex as rx

import Python_WEB.constants as constants
from Python_WEB.components.link_icon import link_icon
from Python_WEB.styles.styles import Color, Size


def navbar() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.image(
                src="logo.png",
                alt="logo",
                width=Size.VERY_BIG.value,
                height=Size.VERY_BIG.value,
            ),
            rx.vstack(
                rx.text("Andres.v", margin_bottom=Size.ZERO.value),
                rx.span("Tattoo Artist", margin_top=Size.ZERO.value),
            ),
            rx.spacer(),
            link_icon("instagram", constants.INSTAGRAM_URL),
            link_icon("youtube", constants.YOUTUBE_URL),
            link_icon("github", constants.GITHUB_URL),
            width="100%",
        ),
        bg=Color.PRIMARY.value,
        position="sticky",
        border_bottom=f".25em solid {Color.SECONDARY.value}",
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
        width="100%",
    )
