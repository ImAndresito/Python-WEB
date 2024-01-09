import datetime

import reflex as rx

import Python_WEB.constants as constants
import Python_WEB.styles.styles as styles
from Python_WEB.components.button import button
from Python_WEB.components.header_text import header_text
from Python_WEB.styles.styles import Color, Size, TextColor


def author() -> rx.Component:
    return rx.vstack(
        header_text("like", "Ciao, mi chiamo Andres"),
        rx.flex(
            rx.avatar(
                name="Andres Villa",
                size="2xl",
                src="logo.png",
                bg=Color.PRIMARY.value,
                padding="2px",
                border="4px",
                border_color=Color.SECONDARY.value,
                margin_right=Size.DEFAULT.value,
                margin_bottom=Size.DEFAULT.value,
            ),
            rx.vstack(
                rx.span(f"Sono un Junior Developer con {experience()}"),
                rx.span(
                    "Iniziai ai 12 anni a entrare nel mondo informatico, soprattuto in quello videoludico. Successivamente nel 2021 ho iniziato a creare pagine Web utilizando Photoshop/Figma per creare un design per successivamente andare a crearlo in HTML,CSS e Javascript vanilla. Nel 2023 ho frequentato un corso che mi ha permesso di espandere le mie conoscenze informatiche, andando a usare applicativi come ",
                    rx.span(
                        "Angular e Java per il back-end",
                        color=TextColor.ACCENT.value,
                        font_size=Size.DEFAULT.value,
                    ),
                    ".",
                ),
                author_buttons(),
                width="100%",
                align_items="start",
            ),
            align_items="start",
            spacing=Size.BIG.value,
            flex_direction=["column", "column", "column", "row"],
        ),
        style=styles.max_width_style,
    )


def author_buttons() -> rx.Component:
    return rx.box(
        button("Youtube", constants.YOUTUBE_URL),
        button("GitHub", constants.GITHUB_URL),
    )


def experience() -> int:
    return datetime.date.today().year - 2021
