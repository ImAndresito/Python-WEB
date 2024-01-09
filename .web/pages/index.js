
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { isTrue } from "/utils/state"
import NextHead from "next/head"



export function Simplegrid_c8c8f90f20c4bd40b5a65e8eddafbf33 () {


  return (
    <SimpleGrid columns={[3, 3, 4, 5, 6]} sx={{"width": "100%", "paddingTop": "2em"}}>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number, index_fae35d697e8fef47c292578abffa07aa) => (
  <Box key={index_fae35d697e8fef47c292578abffa07aa} sx={{"bg": "#EA5940", "width": "100%", "aspectRatio": "1", "position": "relative"}}>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <Link as={NextLink} href={``} isExternal={true} sx={{"position": "absolute"}}>
  <ChakraImage alt={`Regalo associato al giorno ${number},`} src={`gift.png`}/>
</Link>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <ChakraImage alt={`Regalo associato al giorno ${number}`} src={`gift.png`} sx={{"position": "absolute"}}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Text sx={{"padding": "1em", "position": "absolute"}}>
  {number}
</Text>
</Box>
))}
</SimpleGrid>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='it'`}
</Script>
  <Script src={`/js/snow.js`} strategy={`afterInteractive`}/>
  <VStack sx={{"bg": "#212529", "position": "sticky", "borderBottom": ".25em solid #D3D3D3", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0", "width": "100%"}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage alt={`logo`} src={`logo.png`} sx={{"width": "4em", "height": "4em"}}/>
  <VStack>
  <Text sx={{"marginBottom": "0px !important"}}>
  {`Andres.v`}
</Text>
  <Text as={`span`} sx={{"marginTop": "0px !important", "fontSize": "0.8em"}}>
  {`Tattoo Artist`}
</Text>
</VStack>
  <Spacer/>
  <Link as={NextLink} className={`nes-icon instagram is-medium`} href={`https://www.instagram.com/andres.v_tattoo`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {``}
</Link>
  <Link as={NextLink} className={`nes-icon youtube is-medium`} href={`https://youtube.com`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {``}
</Link>
  <Link as={NextLink} className={`nes-icon github is-medium`} href={`https://github.com/ImAndresito`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {``}
</Link>
</HStack>
</VStack>
  <Center>
  <VStack spacing={`4em`} sx={{"width": "100%", "paddingBottom": "2em"}}>
  <VStack sx={{"alignItems": ["center", "center", "center", "start"], "paddingTop": "4em", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <Heading sx={{"paddingBottom": "1em", "fontFamily": "Press Start 2P", "color": "#EA5940 !important", "fontSize": ["1.27em", "1.75em", "1.85em", "1.85em"]}}>
  {`Tattoo GIVEAWAY`}
</Heading>
  <Flex sx={{"alignItems": ["center", "center", "center", "start"], "flexDirection": ["column", "column", "column", "row"]}}>
  <ChakraImage alt={`logo`} src={`logo.png`} sx={{"width": "16em", "height": "16em", "marginRight": "2em", "marginBottom": ["2em", "2em", "2em", "0px !important"]}}/>
  <VStack>
  <Box className={`nes-balloon from-left is-dark`}>
  <Text>
  {`Ogni mese.`}
</Text>
  <Text>
  {`Tema Anime sempre Diverso.`}
  <Text as={`span`} sx={{"color": "#EA5940 !important", "fontSize": "0.8em"}}>
  {`(solo anime)`}
</Text>
</Text>
</Box>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Ogni mese verrano soreteggiate 3 persone che avranno la possibilità di scegliere tra le bozze già fatte.`}
  <Text as={`span`} sx={{"color": "#EA5940 !important", "fontSize": "1em"}}>
  {`Il tatuaggio è completamente gratuito`}
</Text>
  {`!`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`La finalità di questo giveway è poter dare la possibilità a tutte le persone di avere un tatuaggio gratis, ma anche di permettere al tatuatore di poter espremire la proprio arte e ciò che più gli aggrada! :)`}
</Text>
  <Link as={NextLink} href={`https://www.instagram.com/andres.v_tattoo`} isExternal={true} sx={{"color": "#D3D3D3", "textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {`#Instagram`}
</Link>
</VStack>
</Flex>
</VStack>
  <Box sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <VStack alignItems={`start`} className={`nes-container is-dark with-title`} sx={{"width": "100%"}}>
  <Text className={`title`} sx={{"color": "#EA5940 !important"}}>
  {`Come poter partecipare`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Ogni mese verrà messa una storia in evidenza con il link a questo sito.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`• Possono partecipare solo le persone che sono di Torino o vicini. Anche persone disposte a spostarsi dal proprio comune per poter fare il tatuaggio.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`• Dovrai taggare 2 amici nel post dedicato al giveway, mettere like e condividere il post nelle tue storie.`}
</Text>
  <Link as={NextLink} href={`https://www.instagram.com/andres.v_tattoo`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Post`}
</Button>
</Link>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`• Alla fine del mese verrano annunciati i 3 vincitori tramite una storia instagram, sarete anche contattati in DM.`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`• Nel caso non vincessi questo mese ci sarà sempre il prossimo per riprovare! ^^`}
</Text>
</VStack>
</Box>
  <VStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium heart`}/>
  <Heading size={`md`} sx={{"color": "#EA5940 !important", "fontFamily": "Press Start 2P", "fontSize": ["1.27em", "1.75em", "1.85em", "1.85em"]}}>
  {`Disegni Disponibili`}
</Heading>
</HStack>
  <Simplegrid_c8c8f90f20c4bd40b5a65e8eddafbf33/>
  <Script src={`/js/countdown.js`} strategy={`afterInteractive`}/>
</VStack>
  <VStack sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px"}}>
  <HStack spacing={`1em`} sx={{"paddingBottom": "2.75em"}}>
  <Box className={`nes-icon is-medium like`}/>
  <Heading size={`md`} sx={{"color": "#EA5940 !important", "fontFamily": "Press Start 2P", "fontSize": ["1.27em", "1.75em", "1.85em", "1.85em"]}}>
  {`Ciao, mi chiamo Andres`}
</Heading>
</HStack>
  <Flex sx={{"alignItems": "start", "spacing": "2em", "flexDirection": ["column", "column", "column", "row"]}}>
  <Avatar name={`Andres Villa`} size={`2xl`} src={`logo.png`} sx={{"bg": "#212529", "padding": "2px", "border": "4px", "borderColor": "#D3D3D3", "marginRight": "1em", "marginBottom": "1em"}}/>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Sono un Junior Developer con 3`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Iniziai ai 12 anni a entrare nel mondo informatico, soprattuto in quello videoludico. Successivamente nel 2021 ho iniziato a creare pagine Web utilizando Photoshop/Figma per creare un design per successivamente andare a crearlo in HTML,CSS e Javascript vanilla. Nel 2023 ho frequentato un corso che mi ha permesso di espandere le mie conoscenze informatiche, andando a usare applicativi come `}
  <Text as={`span`} sx={{"color": "#EA5940 !important", "fontSize": "1em"}}>
  {`Angular e Java per il back-end`}
</Text>
  {`.`}
</Text>
  <Box>
  <Link as={NextLink} href={`https://youtube.com`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Youtube`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.twitch.tv`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`Twitch`}
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/ImAndresito`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Button className={`nes-btn is-error`} sx={{"marginBottom": "1em", "height": "2.75em", "color": "#212529 !important", "_hover": {"color": "#FFFFFF !important"}}}>
  {`GitHub`}
</Button>
</Link>
</Box>
</VStack>
</Flex>
</VStack>
  <HStack alignItems={`center`} sx={{"alignItems": "start", "paddingX": "2em", "width": "100%", "maxWidth": "1000px", "paddingBottom": "2em"}}>
  <VStack alignItems={`start`} spacing={`0.8em`}>
  <Text sx={{"fontSize": "0.8em", "marginBottom": "0px !important"}}>
  {`Pagina Web Creata in Python usando Reflex`}
</Text>
  <Link as={NextLink} href={`https://github.com/ImAndresito`} isExternal={true} sx={{"fontSize": "0.8em", "color": "#D3D3D3", "textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  {`Creato con `}
  <Box className={`nes-icon is-small heart`}/>
  {` da Andres Villa`}
</Link>
</VStack>
  <Spacer/>
  <ChakraImage alt={`logo`} className={`nes-avatar is-large`} src={`logo.png`} sx={{"imageRendering": "pixelated"}}/>
</HStack>
  <Link as={NextLink} href={`https://github.com/ImAndresito/Python-WEB`} isExternal={true} sx={{"alignItems": "end", "display": "flex", "marginTop": "0px !important", "marginBottom": "0.5em", "textDecoration": "none", "_hover": {"color": "#EA5940 !important", "textDecoration": "none"}}}>
  <Box className={`nes-octocat animate`}/>
  <VStack>
  <VStack alignItems={`start`} className={`nes-balloon from-left is-dark`}>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`Progetto`}
</Text>
  <Text as={`span`} sx={{"fontSize": "0.8em"}}>
  {`su GitHub`}
</Text>
</VStack>
  <Box className={`nes-badge`}>
  <Text as={`span`} className={`is-error`} sx={{"fontSize": "0.8em"}}>
  {`Vers.`}
  {`1.0.0`}
</Text>
</Box>
</VStack>
</Link>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`Tattoo GIVEAWAY`}
</title>
  <meta content={`Ogni mese si sorteggiano 3 tatuaggi gratuiti a tema Anime!`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
