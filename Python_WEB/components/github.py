import reflex as rx

import Python_WEB.constants as constants
from Python_WEB.styles.styles import Size


def github() -> rx.Component:
    return rx.link(
        rx.box(class_name="nes-octocat animate"),
        rx.vstack(
            rx.vstack(
                rx.span("Progetto"),
                rx.span("su GitHub"),
                align_items="start",
                class_name="nes-balloon from-left is-dark",
            ),
            rx.box(
                rx.span("Vers.", constants.VERSION, class_name="is-error"),
                class_name="nes-badge",
            ),
        ),
        href=constants.GITHUB_REPO_URL,
        is_external=True,
        align_items="end",
        display="flex",
        margin_top=Size.ZERO.value,
        margin_bottom=Size.SMALL.value,
    )
