import reflex as rx

import Python_WEB.constants as constants
import Python_WEB.styles.styles as styles
from Python_WEB.styles.styles import Size, TextColor


def header() -> rx.Component:
    return rx.vstack(
        rx.heading("Tattoo GIVEAWAY", size="lg", padding_bottom=Size.DEFAULT.value),
        rx.flex(
            rx.image(
                src="logo.png",
                alt="logo",
                width="16em",
                height="16em",
                margin_right=Size.BIG.value,
                margin_bottom=[
                    Size.BIG.value,
                    Size.BIG.value,
                    Size.BIG.value,
                    Size.ZERO.value,
                ],
            ),
            rx.vstack(
                rx.box(
                    rx.text("Ogni mese."),
                    rx.text(
                        "Tema Anime sempre Diverso.",
                        rx.span("(solo anime)", color=TextColor.ACCENT.value),
                    ),
                    class_name="nes-balloon from-left is-dark",
                ),
                rx.span(
                    "Ogni mese verrano soreteggiate 3 persone che avranno la possibilità di scegliere tra le bozze già fatte.",
                    rx.span(
                        "Il tatuaggio è completamente gratuito",
                        color=TextColor.ACCENT.value,
                        font_size=Size.DEFAULT.value,
                    ),
                    "!",
                ),
                rx.span(
                    "La finalità di questo giveway è poter dare la possibilità a tutte le persone di avere un tatuaggio gratis, ma anche di permettere al tatuatore di poter espremire la proprio arte e ciò che più gli aggrada! :)"
                ),
                rx.link(
                    "#Instagram",
                    href=constants.INSTAGRAM_URL,
                    is_external=True,
                    color=TextColor.TERTIARY.value,
                ),
            ),
            flex_direction=["column", "column", "column", "row"],
            style={
                "align_items": [
                    "center",
                    "center",
                    "center",
                    "start",
                ],
            },
        ),
        padding_top=Size.VERY_BIG.value,
        style={
            "align_items": [
                "center",
                "center",
                "center",
                "start",
            ],
        },
        padding_x=Size.BIG.value,
        width="100%",
        max_width=styles.MAX_WIDTH,
    )
