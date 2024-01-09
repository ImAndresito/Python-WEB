import calendar

import reflex as rx

import Python_WEB.styles.styles as styles
from Python_WEB.components.github import github
from Python_WEB.styles.styles import Size
from Python_WEB.views.author import author
from Python_WEB.views.calendar import calendar
from Python_WEB.views.footer import footer
from Python_WEB.views.header import header
from Python_WEB.views.instructions import instructions
from Python_WEB.views.navbar import navbar

# from Python_WEB.views.partners import partners


def index() -> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='it'"),
        rx.script(src="/js/snow.js"),
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                instructions(),
                calendar(),
                author(),
                # partners(),
                footer(),
                github(),
                width="100%",
                spacing=Size.VERY_BIG.value,
                padding_bottom=Size.BIG.value,
            )
        ),
    )


app = rx.App(stylesheets=styles.STYLESHEETS, style=styles.BASE_STYLE)

app.add_page(
    index,
    title="Tattoo GIVEWAY",
    description="Ogni mese si sorteggiano 3 tatuaggi gratuiti a tema Anime!",
)

app.compile()
