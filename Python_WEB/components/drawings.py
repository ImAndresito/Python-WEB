import reflex as rx

from Python_WEB.styles.colors import Color
from Python_WEB.styles.styles import Size


def drawings(number: int, image: str = "gift.png", url: str = "") -> rx.Component:
    return rx.box(
        rx.cond(
            url != "",
            rx.link(
                rx.image(src=image, alt=f"Regalo associato al giorno {number},"),
                href=url,
                is_external=True,
                position="absolute",
            ),
        ),
        rx.cond(
            url == "",
            rx.image(
                src=image,
                alt=f"Regalo associato al giorno {number}",
                position="absolute",
            ),
        ),
        rx.text(
            number,
            padding=Size.DEFAULT.value,
            position="absolute",
        ),
        bg=Color.ACCENT.value,
        width="100%",
        aspect_ratio="1",
        position="relative",
    )
