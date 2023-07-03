const data = [
    {
        "color": "rojo",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuántos dientes de más tiene un adulto si lo comparamos con un niño?",
        "correcta": "A",
        "A": 12,
        "B": 11,
        "C": 10,
        "D": 8
    },
    {
        "color": "rojo",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿A cuántos Km\/h sale el aire por nuestra boca al toser?",
        "correcta": "D",
        "A": "50 Km\/h",
        "B": "100 Km\/h",
        "C": "120 Km\/h",
        "D": "140 Km\/h"
    },
    {
        "color": "rojo",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuál es el músculo más rápido del cuerpo humano?",
        "correcta": "A",
        "A": "Los párpados",
        "B": "La lengua",
        "C": "El glúteo",
        "D": "El estribo"
    },
    {
        "color": "rojo",
        "tema": "HISTORIA",
        "pregunta": "¿Qué animal utilizó Anibal para cruzar los Alpes?",
        "correcta": "A",
        "A": "Elefantes",
        "B": "Caballos",
        "C": "Mulas",
        "D": "Camellos"
    },
    {
        "color": "rojo",
        "tema": "HISTORIA",
        "pregunta": "¿Qué emperador romano nombró cónsul a su caballo?",
        "correcta": "C",
        "A": "Nerón",
        "B": "Claudio",
        "C": "Calígula",
        "D": "Vespasiano"
    },
    {
        "color": "rojo",
        "tema": "BALONCESTO",
        "pregunta": "¿Cuántos puntos llegó a anotar Wilt Chamberlain en un solo partido?",
        "correcta": "B",
        "A": 85,
        "B": 100,
        "C": 150,
        "D": 185
    },
    {
        "color": "rojo",
        "tema": "PLAYAS",
        "pregunta": "¿Cuál es la playa más famosa de Santander?",
        "correcta": "D",
        "A": "El Arenal",
        "B": "La Barceloneta",
        "C": "La Concha",
        "D": "El Sardinero"
    },
    {
        "color": "rojo",
        "tema": "SERIES TELEVISIÓN",
        "pregunta": "¿Cuál de los siguientes personajes no aparece en Los Simpson?",
        "correcta": "D",
        "A": "Lenny",
        "B": "Krusty el Payaso",
        "C": "Rainer Wolfcastle",
        "D": "Kevin McClaire"
    },
    {
        "color": "rojo",
        "tema": "HISTORIA",
        "pregunta": "¿Qué reina portuguesa fué sentada en el trono después de muerta?",
        "correcta": "B",
        "A": "Leonor de Portugal",
        "B": "Inés de Castro",
        "C": "María I",
        "D": "Urraca de Portugal"
    },
    {
        "color": "rojo",
        "tema": "CIUDADES",
        "pregunta": "¿En qué ciudad suiza fue asesinada la emperatriz austriaca Sisi en 1898?",
        "correcta": "D",
        "A": "Berna",
        "B": "Basilea",
        "C": "Zurich",
        "D": "Ginebra"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Cuál de estas frases se dijo primero en la gran pantalla?",
        "correcta": "A",
        "A": "¡Más madera!",
        "B": "Nadie es perfecto",
        "C": "Siempre nos quedará París",
        "D": "Mi casa, teléfono"
    },
    {
        "color": "rojo",
        "tema": "LITERATURA",
        "pregunta": "¿Cuál de estos no es uno de Los Tres Mosqueteros?",
        "correcta": "D",
        "A": "Athos",
        "B": "Porthos",
        "C": "Aramis",
        "D": "D'Artagnan"
    },
    {
        "color": "rojo",
        "tema": "JUEGOS",
        "pregunta": "¿Qué rey en una baraja de cartas no tiene bigote?",
        "correcta": "B",
        "A": "Rey de espadas",
        "B": "Rey de corazones",
        "C": "Rey de picas",
        "D": "Rey de tréboles"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "¿De qué tiene miedo una persona con catisofobia?",
        "correcta": "A",
        "A": "De sentarse",
        "B": "De las novedades",
        "C": "De las agujas",
        "D": "Del infinito"
    },
    {
        "color": "rojo",
        "tema": "MARES",
        "pregunta": "¿Que animal utilizó Anibal para cruzar los Alpes?",
        "correcta": "A",
        "A": "Mar Rojo",
        "B": "Mar de Barents",
        "C": "Mar del Norte",
        "D": "Mar Báltico"
    },
    {
        "color": "rojo",
        "tema": "CORAL",
        "pregunta": "¿En qué parte del mundo se encuentra el coral rojo?",
        "correcta": "A",
        "A": "Mar Mediterráneo",
        "B": "Mar Cantábrico",
        "C": "Océano Atlántico",
        "D": "Océano Índico"
    },
    {
        "color": "rojo",
        "tema": "VOLCANES",
        "pregunta": "¿En qué isla se encuentra el volcán Etna?",
        "correcta": "A",
        "A": "Sicilia",
        "B": "Córcega",
        "C": "Malta",
        "D": "Mallorca"
    },
    {
        "color": "rojo",
        "tema": "FRASES CÉLEBRES",
        "pregunta": "¿A qué científico se le atribuye la frase \"Y sin embargo, se mueve\"?",
        "correcta": "C",
        "A": "Copérnico",
        "B": "Einstein",
        "C": "Galileo",
        "D": "Bruno"
    },
    {
        "color": "rojo",
        "tema": "COMIDA Y BEBIDA",
        "pregunta": "¿Con qué bebida alcohólica se prepara un Martini clásico?",
        "correcta": "B",
        "A": "Ron",
        "B": "Gin",
        "C": "Vodka",
        "D": "Tequila"
    },
    {
        "color": "rojo",
        "tema": "TELEVISIÓN INFANTIL",
        "pregunta": "¿Qué Teletubby es de color lila?",
        "correcta": "A",
        "A": "Tinky Winky",
        "B": "Dipsy",
        "C": "Laa-Laa",
        "D": "Po"
    },
    {
        "color": "rojo",
        "tema": "PAÍSES",
        "pregunta": "¿Cuál de estos países no es una república?",
        "correcta": "B",
        "A": "China",
        "B": "Australia",
        "C": "Corea",
        "D": "Irlanda"
    },
    {
        "color": "rojo",
        "tema": "PICANTE",
        "pregunta": "¿Cuál de estas variedades de curry es la más picante?",
        "correcta": "D",
        "A": "Dhansak",
        "B": "Madras",
        "C": "Vindaloo",
        "D": "Phaal"
    },
    {
        "color": "rojo",
        "tema": "CONDUCIR",
        "pregunta": "¿En cuál de estos países debes conducir por el carril derecho de la carretera?",
        "correcta": "A",
        "A": "Islandia",
        "B": "Japón",
        "C": "Malta",
        "D": "Bahamas"
    },
    {
        "color": "rojo",
        "tema": "NÚMEROS",
        "pregunta": "¿Cuál de estos no es un número primo?",
        "correcta": "B",
        "A": 173,
        "B": 573,
        "C": 701,
        "D": 727
    },
    {
        "color": "rojo",
        "tema": "MÚSICA",
        "pregunta": "¿Cuál de estos términos significa \"a un ritmo lento\"?",
        "correcta": "D",
        "A": "Ronaldo",
        "B": "Figo",
        "C": "Baggio",
        "D": "Adagio"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "¿Qué son Sabamiki, Ishi Seki y Moyogi?",
        "correcta": "B",
        "A": "Artes marciales",
        "B": "ärboles bonsai",
        "C": "Tipos de sushi",
        "D": "Figuras de papiroflexia"
    },
    {
        "color": "rojo",
        "tema": "SERIES TELEVISIÓN",
        "pregunta": "¿De qué serie son personajes Emilio Delgado, Vicenta Benito y Mauri?",
        "correcta": "A",
        "A": "Aquí no hay Quién viva",
        "B": "El barco",
        "C": "Los protegidos",
        "D": "Gavilanes"
    },
    {
        "color": "rojo",
        "tema": "BANDERAS",
        "pregunta": "¿De qué colores es la bandera de Lituania de arriba hacia abajo?",
        "correcta": "D",
        "A": "Verde, amarillo, rojo",
        "B": "Azul, rojo, amarillo",
        "C": "Amarillo. rojo, verde",
        "D": "Amarillo, verde, rojo"
    },
    {
        "color": "rojo",
        "tema": "PINTURA",
        "pregunta": "¿En qué cuadro aparece un niño?",
        "correcta": "B",
        "A": "La maja vestida",
        "B": "Guernica",
        "C": "Mona Lisa",
        "D": "La rendición de Breda"
    },
    {
        "color": "rojo",
        "tema": "VIAJAR",
        "pregunta": "¿De dónde provenían las cenizas volcánicas que detuvieron los vuelos en 2010?",
        "correcta": "B",
        "A": "Java",
        "B": "Islandia",
        "C": "Groenlandia",
        "D": "Hawai"
    },
    {
        "color": "rojo",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Qué hay en ambos lados de la glabela?",
        "correcta": "C",
        "A": "Testículos",
        "B": "Muslos",
        "C": "Cejas",
        "D": "Pezones"
    },
    {
        "color": "rojo",
        "tema": "POP",
        "pregunta": "¿Cuál es el nombre artístico de la estrella del pop Alecia Moore?",
        "correcta": "D",
        "A": "Lady Gaga",
        "B": "Madonna",
        "C": "Paloma Faith",
        "D": "Pink"
    },
    {
        "color": "rojo",
        "tema": "ACTRICES",
        "pregunta": "¿Cuál de las siguientes actrices representa a los EE.UU. en la edición del concurso Miss Mundo 1986?",
        "correcta": "B",
        "A": "Jennifer Aniston",
        "B": "Halle Berry",
        "C": "Courtney Cox",
        "D": "Angelina Jolie"
    },
    {
        "color": "rojo",
        "tema": "INTERNET",
        "pregunta": "¿De qué color es la letra Y en el logo de eBay?",
        "correcta": "C",
        "A": "Rojo",
        "B": "Amarillo",
        "C": "Verde",
        "D": "Azul"
    },
    {
        "color": "rojo",
        "tema": "BANDERAS",
        "pregunta": "¿Cuál de las siguientes banderas no contiene el color blanco?",
        "correcta": "A",
        "A": "Suecia",
        "B": "Italia",
        "C": "Francia",
        "D": "Suiza"
    },
    {
        "color": "rojo",
        "tema": "LEYENDAS DE HOLLYWOOD",
        "pregunta": "¿Con Cuál de los siguientes no se casó Marilyn Monroe?",
        "correcta": "B",
        "A": "Un dramaturgo",
        "B": "Un escapista",
        "C": "Un jugador de béisbol",
        "D": "Un policía"
    },
    {
        "color": "rojo",
        "tema": "MEDICIONES",
        "pregunta": "¿Qué mide un dispositivo de Brannock?",
        "correcta": "A",
        "A": "Los pies",
        "B": "El cuello",
        "C": "La cabeza",
        "D": "Las piernas"
    },
    {
        "color": "rojo",
        "tema": "DINERO",
        "pregunta": "¿Cuánto dinero tendrías en tu cartera si llevaras una moneda de todas las de euro que están en circulación hasta 2 €?",
        "correcta": "B",
        "A": 3.66,
        "B": 3.88,
        "C": 3.93,
        "D": 3.97
    },
    {
        "color": "rojo",
        "tema": "DEPORTES",
        "pregunta": "¿Donde se celebraron los Juegos OLímpicos de 2016?",
        "correcta": "D",
        "A": "Moscú",
        "B": "Londres",
        "C": "Madrid",
        "D": "Rio de Janeiro"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Qué actriz interpretó el papel de Ellen Ripley, conocida también como el teniente Ripley?",
        "correcta": "B",
        "A": "Demi Moore",
        "B": "Sigourney Weaver",
        "C": "Naomi Watts",
        "D": "Jodie Foster"
    },
    {
        "color": "rojo",
        "tema": "ESCRITORES",
        "pregunta": "¿Qué escritor estadounidense era un ferviente admirador de los Sanfermines?",
        "correcta": "D",
        "A": "Edgar Allan Poe",
        "B": "Henry James",
        "C": "Mark Twain",
        "D": "Ernest Hemingway"
    },
    {
        "color": "rojo",
        "tema": "ISLAS",
        "pregunta": "¿Cuál de las Islas Canarias es también conocida como \"La isla bonita\"?",
        "correcta": "A",
        "A": "La Palma",
        "B": "Tenerife",
        "C": "Lanzarote",
        "D": "El Hierro"
    },
    {
        "color": "rojo",
        "tema": "CUCOS",
        "pregunta": "¿Donde pasan el invierno los cucos?",
        "correcta": "B",
        "A": "En Brasil",
        "B": "En África",
        "C": "En España",
        "D": "En Inglaterra"
    },
    {
        "color": "rojo",
        "tema": "LA TIERRA",
        "pregunta": "¿Qué porcentaje de la superficie del planeta Tierra es agua?",
        "correcta": "C",
        "A": 0.25,
        "B": 0.56,
        "C": 0.71,
        "D": 0.92
    },
    {
        "color": "rojo",
        "tema": "BANDAS FEMENINAS",
        "pregunta": "¿Cuál fué la primera Spice Girl que grabó un hit en solitario?",
        "correcta": "B",
        "A": "Mel B",
        "B": "Mel C",
        "C": "Geri Halliwell",
        "D": "Emma Bunton"
    },
    {
        "color": "rojo",
        "tema": "LIBROS",
        "pregunta": "¿Cuál es el título de la primera novela de James Bond?",
        "correcta": "D",
        "A": "Vive y deja morir",
        "B": "Dr. No",
        "C": "Diamantes para la eternidad",
        "D": "Casino Royale"
    },
    {
        "color": "rojo",
        "tema": "TABLERO OUIJA",
        "pregunta": "¿Qué palabra aparece en la parte superior izquierda del tablero?",
        "correcta": "A",
        "A": "Si",
        "B": "Quizás",
        "C": "Improbable",
        "D": "No"
    },
    {
        "color": "rojo",
        "tema": "FÚTBOL",
        "pregunta": "¿Cuál de estos equipos no lleva la palabra \"Real\" en su nombre?",
        "correcta": "B",
        "A": "Betis",
        "B": "Sevilla",
        "C": "Madrid",
        "D": "Santander"
    },
    {
        "color": "rojo",
        "tema": "GOLF",
        "pregunta": "¿Cada cuanto tiempo se disputa la Ryder Cup?",
        "correcta": "B",
        "A": "Cada año",
        "B": "Cada dos años",
        "C": "Cada tres años",
        "D": "Cada cuatro años"
    },
    {
        "color": "rojo",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuanto pesaba el cerebro de Albert Einstein en relación a la media?",
        "correcta": "D",
        "A": "100 g más",
        "B": "50 g más",
        "C": "100 g menos",
        "D": "200 g menos"
    },
    {
        "color": "rojo",
        "tema": "ATLETISMO",
        "pregunta": "¿Cuál de estos objetos puede ser lanzado a mayor distancia?",
        "correcta": "D",
        "A": "Silla",
        "B": "Martillo",
        "C": "Disco",
        "D": "Jabalina"
    },
    {
        "color": "rojo",
        "tema": "LETRAS",
        "pregunta": "¿Cuantas letras diferentes aparecen en la siguiente frase: El chico saltó la cuerda seguido de su perro marrón?",
        "correcta": "A",
        "A": 16,
        "B": 18,
        "C": 19,
        "D": 15
    },
    {
        "color": "rojo",
        "tema": "MÚSICA",
        "pregunta": "¿Cuál de las siguientes canciones no es de Michael Jackson?",
        "correcta": "D",
        "A": "Thriller",
        "B": "Beat it",
        "C": "In the closet",
        "D": "Layla"
    },
    {
        "color": "rojo",
        "tema": "FÚTBOL",
        "pregunta": "¿En qué temporada ganó el F.C. Barcelona el \"triplete\"?",
        "correcta": "C",
        "A": "2006-2007",
        "B": "2007-2008",
        "C": "2008-2009",
        "D": "2009-2010"
    },
    {
        "color": "rojo",
        "tema": "ATLETISMO",
        "pregunta": "¿Qué distancia se corre sin poder cambiar de carril en las carreteras de 4x400 metros?",
        "correcta": "D",
        "A": "100 metros",
        "B": "200 metros",
        "C": "400 metros",
        "D": "500 metros"
    },
    {
        "color": "rojo",
        "tema": "ORDENADORES",
        "pregunta": "¿Cuál de las siguientes letras se encuentra entre la Z y la C en un teclado de ordenador?",
        "correcta": "D",
        "A": "S",
        "B": "V",
        "C": "D",
        "D": "X"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "¿Qué son bedaos, brosmios y marucas?",
        "correcta": "A",
        "A": "Tipos de peces",
        "B": "Sinónimos de dinero",
        "C": "Instrumentos quirúrgicos",
        "D": "Instrumentos musicales"
    },
    {
        "color": "rojo",
        "tema": "HISTORIA",
        "pregunta": "¿En qué década se construyó el muro de Berlín y en qué época fué destruido?",
        "correcta": "C",
        "A": "Años 50 - años 70",
        "B": "Años 60 - años 70",
        "C": "Años 60 - años 80",
        "D": "Años 70 - años 80"
    },
    {
        "color": "rojo",
        "tema": "ESQUÍ",
        "pregunta": "¿Cuál es la estación invernal más alta en España?",
        "correcta": "A",
        "A": "Sierra Nevada",
        "B": "La Molina",
        "C": "La Marsella",
        "D": "Candanchú"
    },
    {
        "color": "rojo",
        "tema": "EXPOSICIONES UNIVERSALES ",
        "pregunta": "¿Como se llamaba la mascota de la Exposición Universal de Sevilla '92?",
        "correcta": "A",
        "A": "Curro",
        "B": "Fluvi",
        "C": "Cobi",
        "D": "Gavi"
    },
    {
        "color": "rojo",
        "tema": "TRANSPORTE",
        "pregunta": "¿En cuál de los siguientes países encontraremos los trenes más rápidos?",
        "correcta": "C",
        "A": "España",
        "B": "Francia",
        "C": "China",
        "D": "Estados Unidos"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Cuál es el título de la segunda parte de la saga Torrente?",
        "correcta": "C",
        "A": "El protector",
        "B": "El brazo tonto de la ley",
        "C": "Misión en Marbella",
        "D": "Isi Disi"
    },
    {
        "color": "rojo",
        "tema": "AÑOS",
        "pregunta": "¿Como se escribe el año 1999 en números romanos?",
        "correcta": "B",
        "A": "MDMLXIX",
        "B": "MCMXCIX",
        "C": "DCDCZIX",
        "D": "LMLCXIX"
    },
    {
        "color": "rojo",
        "tema": "COLORES",
        "pregunta": "¿Hasta 2011 qué bandera era la única del mundo qué estaba compuesta por un solo color y ninguna otra insignia?",
        "correcta": "A",
        "A": "Libia",
        "B": "Bangladesh",
        "C": "Austria",
        "D": "Túnez"
    },
    {
        "color": "rojo",
        "tema": "LA BIBLIA",
        "pregunta": "¿Cuál de los siguientes libros aparece en el Nuevo Testamento?",
        "correcta": "B",
        "A": "Deuteronomio",
        "B": "Apocalipsis",
        "C": "Proverbios",
        "D": "Números"
    },
    {
        "color": "rojo",
        "tema": "AMÉRICA",
        "pregunta": "¿Cuál es el distrito más pequeño de Nueva York?",
        "correcta": "B",
        "A": "Queens",
        "B": "Manhattan",
        "C": "Brooklyn",
        "D": "Bronx"
    },
    {
        "color": "rojo",
        "tema": "ARQUITECTURA",
        "pregunta": "¿En qué continente están nueve de los diez edificios más altos del mundo?",
        "correcta": "C",
        "A": "América del Norte",
        "B": "Europa",
        "C": "Asia",
        "D": "Sudamérica"
    },
    {
        "color": "rojo",
        "tema": "EDIFICIOS FAMOSOS",
        "pregunta": "¿Cuál de los siguientes edificios es el más antiguo?",
        "correcta": "A",
        "A": "La Torre de Pisa",
        "B": "La Torre Eiffel",
        "C": "El Taj Mahal",
        "D": "La Catedral de San Pablo"
    },
    {
        "color": "rojo",
        "tema": "DIBUJOS ANIMADOS",
        "pregunta": "¿Qué famoso dibujante belga creó a Tintín?",
        "correcta": "B",
        "A": "Peyo",
        "B": "Hergé",
        "C": "Vergé",
        "D": "Dupond y Dupond"
    },
    {
        "color": "rojo",
        "tema": "MITOLOGÍA",
        "pregunta": "¿Qué era la esposa del rey chipriota Pigmalión antes de convertirse en su mujer?",
        "correcta": "A",
        "A": "Una estatua",
        "B": "Un rosal",
        "C": "Una rana",
        "D": "Una medusa"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "¿Qué significa la palabra musculus en latín?",
        "correcta": "D",
        "A": "Fuerte",
        "B": "Mejillón",
        "C": "Hipopótamo",
        "D": "Ratoncito"
    },
    {
        "color": "rojo",
        "tema": "ANIMALES",
        "pregunta": "¿Cuál de los siguientes animales tiene un periodo de gestación más largo?",
        "correcta": "C",
        "A": "Cabra",
        "B": "Perro",
        "C": "Elefante",
        "D": "Gato"
    },
    {
        "color": "rojo",
        "tema": "PELÍCULAS",
        "pregunta": "¿Cuál fué la primera película de Harry Potter?",
        "correcta": "C",
        "A": "Harry Potter y la cámara secreta",
        "B": "Harry Potter y el prisionero de Azkaban",
        "C": "Harry Potter y la piedra filosofal",
        "D": "Harry Potter y el cáliz de fuego"
    },
    {
        "color": "rojo",
        "tema": "DIBUJOS ANIMADOS",
        "pregunta": "¿Cuál es el más antiguo de los siguientes personajes?",
        "correcta": "A",
        "A": "Mickey Mouse",
        "B": "Superman",
        "C": "Snoopy",
        "D": "Scooby-Doo"
    },
    {
        "color": "rojo",
        "tema": "INVENTOS",
        "pregunta": "¿Quién fué el inventor de la señal de radio?",
        "correcta": "A",
        "A": "Guglielmo Marconi",
        "B": "Nikola Tesla",
        "C": "Alexander Bell",
        "D": "Antonio Meucci"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Con qué director de cine se casó Ingrid Bergman?",
        "correcta": "D",
        "A": "Federico Fellini",
        "B": "Giuseppe Bertolucci",
        "C": "Luchino Visconti",
        "D": "Roberto Rossellini"
    },
    {
        "color": "rojo",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "El cerebro supone un 2% del peso total de cuerpo humano. ¿Qué porcentaje de energía gasta?",
        "correcta": "B",
        "A": "Absolutamente nada",
        "B": 0.2,
        "C": 0.1,
        "D": 0.05
    },
    {
        "color": "rojo",
        "tema": "MÚSICA",
        "pregunta": "¿Cuál de las siguientes cantantes fué capaz de llevarse 6 grammys en una sola noche en 2010?",
        "correcta": "A",
        "A": "Beyoncé Knowles",
        "B": "Alicia Keys",
        "C": "Norah Jones",
        "D": "Rihanna"
    },
    {
        "color": "rojo",
        "tema": "ENFERMEDADES",
        "pregunta": "¿Qué enfermedad provocó la muerte de Chopin?",
        "correcta": "A",
        "A": "Tuberculosis",
        "B": "Escarlatina",
        "C": "Malaria",
        "D": "Tosferina"
    },
    {
        "color": "rojo",
        "tema": "ANIMALES",
        "pregunta": "¿Qué animal aparece en los escudos de armas de Luxemburgo?",
        "correcta": "D",
        "A": "Águila",
        "B": "Tigre",
        "C": "Oso",
        "D": "León"
    },
    {
        "color": "rojo",
        "tema": "DINERO",
        "pregunta": "¿De qué país es moneda el nuevo shekel?",
        "correcta": "C",
        "A": "Egipto",
        "B": "Marruecos",
        "C": "Israel",
        "D": "Afganistán"
    },
    {
        "color": "rojo",
        "tema": "PARTES DEL CUERPO",
        "pregunta": "¿Cuál es el nombre del apéndice carnoso que cuelga cerca de nuestra garganta y que es una extensión del velo del paladar?",
        "correcta": "A",
        "A": "Úvula",
        "B": "Hioides",
        "C": "Ganglio basal",
        "D": "Tráquea"
    },
    {
        "color": "rojo",
        "tema": "COLECCIONISTAS",
        "pregunta": "¿Qué significa \"numismática\"?",
        "correcta": "D",
        "A": "Coleccionismo de números",
        "B": "Coleccionismo de sellos",
        "C": "Coleccionismo de cervezas",
        "D": "Coleccionismo de monedas"
    },
    {
        "color": "rojo",
        "tema": "SHAKESPEARE",
        "pregunta": "¿Cuál de estos es un personaje de la obra Otelo?",
        "correcta": "C",
        "A": "Agio",
        "B": "Ogia",
        "C": "Iago",
        "D": "Giao"
    },
    {
        "color": "rojo",
        "tema": "LAGOS",
        "pregunta": "¿Cuál de estos no es uno de los grandes lagos?",
        "correcta": "D",
        "A": "Michigan",
        "B": "Superior",
        "C": "Ontario",
        "D": "Toronto"
    },
    {
        "color": "rojo",
        "tema": "POBLACIÓN",
        "pregunta": "¿Cuál de las siguientes ciudades fué la primera en superar el millón de habitantes",
        "correcta": "D",
        "A": "Nueva York",
        "B": "Londres",
        "C": "Paris",
        "D": "Roma"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Quien dirigió E.T., Indiana Jones y Parque Jurásico, entre otras?",
        "correcta": "A",
        "A": "Steven Spielberg",
        "B": "Alfred HItchcock",
        "C": "Sir Ridley Scott",
        "D": "James Cameron"
    },
    {
        "color": "rojo",
        "tema": "CONTINENTES",
        "pregunta": "¿Como se llama el único continente que existía en la tierra 270 millones de años atrás?",
        "correcta": "C",
        "A": "Avatar",
        "B": "Vieja Europa",
        "C": "Pangea",
        "D": "Pandora"
    },
    {
        "color": "rojo",
        "tema": "MÚSICA",
        "pregunta": "¿Cuál de los siguientes videoclips es el más caro?",
        "correcta": "B",
        "A": "Heart Breaker (Mariah Carey)",
        "B": "Scream (Michael Jackson)",
        "C": "November Rain (Guns N' Roses)",
        "D": "Toxic (Britney Spears)"
    },
    {
        "color": "rojo",
        "tema": "DEPORTES",
        "pregunta": "¿Donde se jugó el mundial de fútbol en 1994 ganado por la selección de Brasil?",
        "correcta": "C",
        "A": "Francia",
        "B": "Italia",
        "C": "Estados Unidos",
        "D": "Alemania"
    },
    {
        "color": "rojo",
        "tema": "LÍDERES ESTADOUNIDENSES",
        "pregunta": "¿En qué ciudad fue asesinado Martin Luther King?",
        "correcta": "A",
        "A": "Memphis, Estados Unidos",
        "B": "Toronto, Canadá",
        "C": "Washington, Estados Unidos",
        "D": "Filadelfia, Estados Unidos"
    },
    {
        "color": "rojo",
        "tema": "ACTORES Y CANTANTES",
        "pregunta": "¿A qué edad murieron Elvis Presley y Gary Coleman?",
        "correcta": "B",
        "A": "39 años",
        "B": "42 años",
        "C": "48 años",
        "D": "55 años"
    },
    {
        "color": "rojo",
        "tema": "AVES",
        "pregunta": "¿Como se denomina a un grupo de aves?",
        "correcta": "B",
        "A": "Cardumen",
        "B": "Parvada",
        "C": "Maizal",
        "D": "Coro"
    },
    {
        "color": "rojo",
        "tema": "MARAVILLAS DEL MUNDO",
        "pregunta": "¿Cuál es la única de las siete maravillas del mundo que aún se puede contemplar?",
        "correcta": "D",
        "A": "El coloso de Rodas",
        "B": "El faro de Alejandría",
        "C": "Los jardines colgantes de Babilonia",
        "D": "La pirámide de Keops"
    },
    {
        "color": "rojo",
        "tema": "ISLAS",
        "pregunta": "¿Cuál es la isla más grande del Mediterráneo?",
        "correcta": "D",
        "A": "Mallorca",
        "B": "Sicilia",
        "C": "Córcega",
        "D": "Cerdeña"
    },
    {
        "color": "rojo",
        "tema": "LAGOS",
        "pregunta": "¿Cuántos lagos tiene Finlandia aproximadamente?",
        "correcta": "A",
        "A": "Unos 190.000",
        "B": "Unos 150.000",
        "C": "Unos 126.000",
        "D": "Unos 70.000"
    },
    {
        "color": "rojo",
        "tema": "DEPORTES",
        "pregunta": "¿Qué podría usar si participara en una competición de snooker?",
        "correcta": "A",
        "A": "Taco",
        "B": "Raqueta",
        "C": "Pelota",
        "D": "Stick"
    },
    {
        "color": "rojo",
        "tema": "NATURALEZA",
        "pregunta": "¿Qué es un mandril?",
        "correcta": "B",
        "A": "Pato",
        "B": "Babuino",
        "C": "Camello",
        "D": "Serpiente"
    },
    {
        "color": "rojo",
        "tema": "ANIVERSARIOS",
        "pregunta": "¿Cuándo se cumplen las bodas de bronce?",
        "correcta": "B",
        "A": "A los 5 años",
        "B": "A los 8 años",
        "C": "A los 10 años",
        "D": "A los 25 años"
    },
    {
        "color": "rojo",
        "tema": "GRUPOS MUSICALES",
        "pregunta": "¿Quienes son Michael Stipe, Peter Buck y Mike Mills?",
        "correcta": "A",
        "A": "REM",
        "B": "Queen",
        "C": "Crowded House",
        "D": "U2"
    },
    {
        "color": "rojo",
        "tema": "VOLCANES",
        "pregunta": "¿Qué temperatura puede alcanzar la lava de una erupción volcánica?",
        "correcta": "B",
        "A": "500º C",
        "B": "1200 ºC",
        "C": "2000 ºC",
        "D": "3000 ºC"
    },
    {
        "color": "rojo",
        "tema": "FRASES CÉLEBRES",
        "pregunta": "¿Quien dice \"Lo intentaste con todas tus fuerzas y fracasaste. La lección es: nunca lo intentes\"?",
        "correcta": "B",
        "A": "Johan Cruyff",
        "B": "Homer Simpson",
        "C": "Peter Griffin",
        "D": "Fabio Capello"
    },
    {
        "color": "rojo",
        "tema": "ACTRICES",
        "pregunta": "¿Cuál de las siguientes actrices no ha sido nunca \"chica King Kong\"?",
        "correcta": "A",
        "A": "Janet Leigh",
        "B": "Fay Wray",
        "C": "Naomi Watts",
        "D": "Jessica Lange"
    },
    {
        "color": "rojo",
        "tema": "PELÍCULAS",
        "pregunta": "¿En cual de estas películas no aparece Sigourney Weaver?",
        "correcta": "D",
        "A": "Avatar",
        "B": "Héroes fuera de órbita (Galaxy Quest)",
        "C": "Aliens",
        "D": "The Matrix"
    },
    {
        "color": "rojo",
        "tema": "ATLETISMO",
        "pregunta": "¿Cuál de éstas es la distancia más corta que se corre en pista cubierta?",
        "correcta": "B",
        "A": "50 metros",
        "B": "60 metros",
        "C": "70 metros",
        "D": "80 metros"
    },
    {
        "color": "rojo",
        "tema": "CIUDADES",
        "pregunta": "¿Qué ciudad de Estados Unidos se llamó New Amsterdam?",
        "correcta": "A",
        "A": "Nueva York",
        "B": "Nueva Orleans",
        "C": "Washington",
        "D": "Los Ángeles"
    },
    {
        "color": "rojo",
        "tema": "TENIS",
        "pregunta": "¿Qué ocurrió en 2005 durante el torneo de Wimbledon en la pista central por segunda vez en la historia de la competición?",
        "correcta": "A",
        "A": "La red se derrumbó",
        "B": "La silla del árbitro se rompió",
        "C": "Apareció un espontáneo",
        "D": "Cantó Cliff Richard"
    },
    {
        "color": "rojo",
        "tema": "JUEGOS",
        "pregunta": "¿En cuál de estos juegos el jugador intentará sacar todas sus piezas del tablero?",
        "correcta": "D",
        "A": "Solitario",
        "B": "Go",
        "C": "Mahjong",
        "D": "Backgammon"
    },
    {
        "color": "rojo",
        "tema": "PELÍCULAS",
        "pregunta": "¿En qué provincia española se han rodado numerosos westerns?",
        "correcta": "A",
        "A": "Almería",
        "B": "Granada",
        "C": "Cádiz",
        "D": "Córdoba"
    },
    {
        "color": "rojo",
        "tema": "TRANSPORTE",
        "pregunta": "¿Cuántas ruedas tiene un Segway?",
        "correcta": "C",
        "A": 3,
        "B": 4,
        "C": 2,
        "D": 0
    },
    {
        "color": "rojo",
        "tema": "CUERPO HUMANO",
        "pregunta": "¿Cuántos dientes incisivos tiene un adulto?",
        "correcta": "B",
        "A": 4,
        "B": 8,
        "C": 12,
        "D": 16
    },
    {
        "color": "rojo",
        "tema": "GOLF",
        "pregunta": "¿Cuál de los siguientes términos no expresa una puntuación bajo par?",
        "correcta": "D",
        "A": "Albatros",
        "B": "Eagle",
        "C": "Birdie",
        "D": "Bogey"
    },
    {
        "color": "rojo",
        "tema": "JUEGOS",
        "pregunta": "¿Qué deben aguantar los jugadores de kabaddi?",
        "correcta": "D",
        "A": "Unas pelotas",
        "B": "Unas cestas",
        "C": "Unos discos",
        "D": "Su respiración"
    },
    {
        "color": "rojo",
        "tema": "LAS ESTRELLAS",
        "pregunta": "A la constelación de la Osa Mayor también se le llama por otro nombre. ¿Cuál?",
        "correcta": "A",
        "A": "Carro",
        "B": "Segador",
        "C": "Hoz",
        "D": "Cosechero"
    },
    {
        "color": "rojo",
        "tema": "LITERATURA",
        "pregunta": "La célebre obra española La Celestina es también conocida con el nombre de Tragicomedia de Calixto y...",
        "correcta": "D",
        "A": "Dulcinea",
        "B": "Gala",
        "C": "Areusa",
        "D": "Melibea"
    },
    {
        "color": "rojo",
        "tema": "PLANTAS",
        "pregunta": "¿De cuál de las siguientes plantas está hecho el pesto?",
        "correcta": "A",
        "A": "Albahaca",
        "B": "Hierbabuena",
        "C": "Romero",
        "D": "Menta"
    },
    {
        "color": "rojo",
        "tema": "DELETREAR",
        "pregunta": "¿Cuál de las siguientes palabras está bien escrita?",
        "correcta": "B",
        "A": "Ovoviríparo",
        "B": "Ovovivíparo",
        "C": "Ovobivíparo",
        "D": "Ovobiríparo"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "¿Qué es \"La venganza de Montezuma\"?",
        "correcta": "C",
        "A": "Montaña rusa",
        "B": "Volcán",
        "C": "Dolor de estómago",
        "D": "Juego de cartas"
    },
    {
        "color": "rojo",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Dónde se encuentran las antípodas de Madrid?",
        "correcta": "C",
        "A": "China",
        "B": "Australia",
        "C": "Nueva Zelanda",
        "D": "Cuba"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Qué película norteamericana se rodó en Peñíscola en los años 60?",
        "correcta": "D",
        "A": "Hércules",
        "B": "Gladiator",
        "C": "Ben Hur",
        "D": "El Cid"
    },
    {
        "color": "rojo",
        "tema": "ALIMENTOS",
        "pregunta": "¿De qué se alimentan los peces loro?",
        "correcta": "B",
        "A": "Cacahuetes",
        "B": "Algas",
        "C": "Estrellas marinas",
        "D": "Mejillones"
    },
    {
        "color": "rojo",
        "tema": "SISTEMA DIGESTIVO",
        "pregunta": "¿De qué sensación suele ir acompañado el proceso de digestión?",
        "correcta": "D",
        "A": "Euforia",
        "B": "Felicidad",
        "C": "Tristeza",
        "D": "Somnolencia"
    },
    {
        "color": "rojo",
        "tema": "POP",
        "pregunta": "¿Cuál de los siguientes era un miembro de los Jackson 5?",
        "correcta": "B",
        "A": "Franco",
        "B": "Tito",
        "C": "Stalin",
        "D": "Lenin"
    },
    {
        "color": "rojo",
        "tema": "TURISMO",
        "pregunta": "¿Cuál de los siguientes países recibió más visitantes extranjeros en 2009?",
        "correcta": "A",
        "A": "Francia",
        "B": "Estados Unidos",
        "C": "España",
        "D": "China"
    },
    {
        "color": "rojo",
        "tema": "LEYENDAS",
        "pregunta": "Según la leyenda, ¿qué héroe mítico se enamoró del estuario de Lisboa?",
        "correcta": "A",
        "A": "Ulises",
        "B": "Telémaco",
        "C": "Teseo",
        "D": "Aquiles"
    },
    {
        "color": "rojo",
        "tema": "LENGUAJES",
        "pregunta": "¿De qué isla es característico el lenguaje silbado llamado silbo?",
        "correcta": "A",
        "A": "La Gomera",
        "B": "Tenerife",
        "C": "Lanzarote",
        "D": "El Hierro"
    },
    {
        "color": "rojo",
        "tema": "LITERATURA",
        "pregunta": "¿Qué célebre griego escribió La Ilíada y La Odisea?",
        "correcta": "A",
        "A": "Homero",
        "B": "Virgilio",
        "C": "Heráclito",
        "D": "Sófocles"
    },
    {
        "color": "rojo",
        "tema": "DEPORTES",
        "pregunta": "¿Qué deporte no es típico de Inglaterra?",
        "correcta": "A",
        "A": "El hurling",
        "B": "El cricket",
        "C": "El bádminton",
        "D": "El rugby"
    },
    {
        "color": "rojo",
        "tema": "PINTORES",
        "pregunta": "¿Qué pintor es el autor del cuadro La iglesia de Auvers-sur-Oise?",
        "correcta": "A",
        "A": "Vincent van Gogh",
        "B": "Johannes Vermeer",
        "C": "Claude Monet",
        "D": "Rembrandt"
    },
    {
        "color": "rojo",
        "tema": "GASTRONOMÍA",
        "pregunta": "¿Cómo se llaman los espaguetis gigantes con agujero?",
        "correcta": "A",
        "A": "Bucatini",
        "B": "Tagliatelle",
        "C": "Rigatoni",
        "D": "Espaguettoni"
    },
    {
        "color": "rojo",
        "tema": "PUBLICIDAD",
        "pregunta": "¿Cuál de las siguientes compañías se anuncia bajo el lema \"I'm lovin' it\"?",
        "correcta": "D",
        "A": "Bocatta",
        "B": "Calvin Klein",
        "C": "BMW",
        "D": "McDonald's"
    },
    {
        "color": "rojo",
        "tema": "DEPORTES",
        "pregunta": "¿Desde qué distancia debe lanzar como mínimo un jugador de la ACB para anotar triple?",
        "correcta": "C",
        "A": 6.25,
        "B": 6.5,
        "C": 6.75,
        "D": 6
    },
    {
        "color": "rojo",
        "tema": "OCIO",
        "pregunta": "¿Cuál es la secuencia de colores correcta para los botones del teletexto en un mando a distancia?",
        "correcta": "C",
        "A": "Rojo, amarillo, azul, verde",
        "B": "Rojo, azul, amarillo, verde",
        "C": "Rojo, verde, amarillo, azul",
        "D": "Rojo, amarillo, verde, azul"
    },
    {
        "color": "rojo",
        "tema": "AUSTRALIA",
        "pregunta": "¿En qué mes tiene lugar el día más largo en Australia?",
        "correcta": "D",
        "A": "Marzo",
        "B": "Junio",
        "C": "Septiembre",
        "D": "Diciembre"
    },
    {
        "color": "rojo",
        "tema": "MAMÍFEROS",
        "pregunta": "¿Con cuál de los siguientes nombres se denomina a una cría de vaca?",
        "correcta": "A",
        "A": "Becerro",
        "B": "Verraco",
        "C": "Potro",
        "D": "Novillo"
    },
    {
        "color": "rojo",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Cuál de los siguientes mares es el más salado?",
        "correcta": "D",
        "A": "Mar Báltico",
        "B": "Mar Cantábrico",
        "C": "Mar Mediterráneo",
        "D": "Mar Muerto"
    },
    {
        "color": "rojo",
        "tema": "CIUDADES",
        "pregunta": "¿En qué ciudad holandesa se firmó un importante tratado el 7 de febrero de 1992?",
        "correcta": "A",
        "A": "Maastricht",
        "B": "Ámsterdam",
        "C": "La Haya",
        "D": "Utrecht"
    },
    {
        "color": "rojo",
        "tema": "FRASES CÉLEBRES",
        "pregunta": "¿Quién fue el autor de la célebre frase \"Pienso, luego existo\"?",
        "correcta": "A",
        "A": "René Descartes",
        "B": "Paracelso",
        "C": "Immanuel Kant",
        "D": "Parménides"
    },
    {
        "color": "rojo",
        "tema": "FELINOS",
        "pregunta": "¿Cuál es el único de los siguientes felinos que no puede retraer sus uñas?",
        "correcta": "C",
        "A": "Jaguar",
        "B": "Tigre",
        "C": "Guepardo",
        "D": "León"
    },
    {
        "color": "rojo",
        "tema": "VELOCIDAD",
        "pregunta": "¿Cuál de los siguientes animales puede correr a mayor velocidad?",
        "correcta": "C",
        "A": "Elefante",
        "B": "Cocodrilo",
        "C": "Jirafa",
        "D": "Humano"
    },
    {
        "color": "rojo",
        "tema": "PLANTAS",
        "pregunta": "¿Cuál de las siguientes plantas no es venenosa?",
        "correcta": "A",
        "A": "Orquídea",
        "B": "Glicina",
        "C": "Digitalis purpurea",
        "D": "Hortensia"
    },
    {
        "color": "rojo",
        "tema": "METALES",
        "pregunta": "¿Qué está hecho de bronce?",
        "correcta": "A",
        "A": "Sirenita de Copenhague",
        "B": "Torre Eiffel",
        "C": "Copa del mundial de fútbol",
        "D": "Máscara de Tutankamón"
    },
    {
        "color": "rojo",
        "tema": "EVENTOS",
        "pregunta": "¿Quien llegó a París en avión por primera vez el 21 de mayo de 1927?",
        "correcta": "A",
        "A": "Charles Lindbergh",
        "B": "Winston Churchill",
        "C": "Amelia Earhart",
        "D": "Adolf Hitler"
    },
    {
        "color": "rojo",
        "tema": "ICONOS",
        "pregunta": "¿Qué diseño se le atribuye a la mujer llamada Betsy Ross?",
        "correcta": "D",
        "A": "Los anillos olímpicos",
        "B": "El mapa del metro de Inglaterra",
        "C": "La tabla periódica",
        "D": " La bandera de los Estados Unidos"
    },
    {
        "color": "rojo",
        "tema": "LOCALIDADES",
        "pregunta": "¿Qué localidad granadina es famosa por su agua de excelentes propiedades?",
        "correcta": "A",
        "A": "Lanjarón",
        "B": "Ribes",
        "C": "Galera",
        "D": "Motril"
    },
    {
        "color": "rojo",
        "tema": "PROVINCIAS ESPAÑOLAS",
        "pregunta": "¿Cuál es la provincia más grande de España?",
        "correcta": "D",
        "A": "Zaragoza",
        "B": " León",
        "C": "Cáceres",
        "D": "Badajoz"
    },
    {
        "color": "rojo",
        "tema": "OSCARS",
        "pregunta": "¿Cuál de las siguientes películas ganó más Oscars?",
        "correcta": "D",
        "A": "West Side Story",
        "B": "Titanic",
        "C": "El paciente inglés",
        "D": "Gandhi"
    },
    {
        "color": "rojo",
        "tema": "ANIMALES",
        "pregunta": "¿Qué animal tiene dientes en su estómago?",
        "correcta": "B",
        "A": "Cobra",
        "B": "Langosta",
        "C": "Tarántula",
        "D": "Dragón de komodo"
    },
    {
        "color": "rojo",
        "tema": "TECNOLOGÍA",
        "pregunta": "¿En un teléfono, que dos números no tienen letras a su lado?",
        "correcta": "C",
        "A": "1 y 2",
        "B": "9 y 0",
        "C": "1 y 0",
        "D": "1y 3"
    },
    {
        "color": "rojo",
        "tema": "DIBUJOS ANIMADOS",
        "pregunta": "¿Qué lleva Popeye tatuado en el brazo?",
        "correcta": "D",
        "A": "Una calavera",
        "B": "Latas de espinaca",
        "C": "El nombre \"Olivia\"",
        "D": "Áncoras"
    },
    {
        "color": "rojo",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Cuál de los siguientes países no está en Sudamérica",
        "correcta": "A",
        "A": "El Salvador",
        "B": "Guyana",
        "C": "Surinam",
        "D": "Venezuela"
    },
    {
        "color": "rojo",
        "tema": "ARTES MARCIALES",
        "pregunta": "¿Qué usa un luchador de Kendo?",
        "correcta": "A",
        "A": "Espadas de bambú",
        "B": "Cuchillos",
        "C": "Únicamente sus manos",
        "D": "Palillos chinos"
    },
    {
        "color": "rojo",
        "tema": "CIUDADES",
        "pregunta": "¿Qué ciudad posee las murallas más largas de España?",
        "correcta": "B",
        "A": "Valladolid",
        "B": "Ávila",
        "C": "Burgos",
        "D": "Tarragona"
    },
    {
        "color": "rojo",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Qué río atraviesa la capital de Aragón?",
        "correcta": "A",
        "A": "Ebro",
        "B": "Turia",
        "C": "Duero",
        "D": "Tajo"
    },
    {
        "color": "rojo",
        "tema": "PALACIOS",
        "pregunta": "¿En qué palacio londinense reside la familia real británica actualmente?",
        "correcta": "B",
        "A": "Palacio de Whitehall",
        "B": "Palacio de Buckingham",
        "C": "Palacio de Kensington",
        "D": "Palacio de Saint James"
    },
    {
        "color": "rojo",
        "tema": "HISTORIA",
        "pregunta": "¿En qué isla murió Napoleón Bonaparte?",
        "correcta": "B",
        "A": "Elba",
        "B": "Córcega",
        "C": "Santa Elena",
        "D": "Guadalupe"
    },
    {
        "color": "rojo",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Cuál de las siguientes ciudades no está en Marruecos?",
        "correcta": "B",
        "A": "Casablanca",
        "B": "Alejandría",
        "C": "Tánger",
        "D": "Marrakech"
    },
    {
        "color": "rojo",
        "tema": "COCHES",
        "pregunta": "¿Cuál era el coche más caro del mundo a principios de 2010?",
        "correcta": "B",
        "A": "Lamborghini Reventon",
        "B": "BUgatti Veyron",
        "C": "McLaren F1",
        "D": "Ferrari Enzo"
    },
    {
        "color": "rojo",
        "tema": "DELETREAR",
        "pregunta": "¿Cuál de las siguientes palabras está escrita de manera incorrecta?",
        "correcta": "C",
        "A": "Hibernación",
        "B": "Hipocampo",
        "C": "Incommovible",
        "D": "Lambetada"
    },
    {
        "color": "rojo",
        "tema": "ÁRBOLES",
        "pregunta": "¿Cuál de estos árboles es de madera blanda?",
        "correcta": "C",
        "A": "Fresno",
        "B": "Olmo",
        "C": "Abeto",
        "D": "Roble"
    },
    {
        "color": "rojo",
        "tema": "TELEVISIÓN",
        "pregunta": "¿Cuál de los siguientes no es un personaje de Los Simpson?",
        "correcta": "D",
        "A": "Kent Brockman",
        "B": "Julius Hibbert",
        "C": "Marvin Monroe",
        "D": "Peter Griffin"
    },
    {
        "color": "rojo",
        "tema": "ANIMALES",
        "pregunta": "¿Qué país es el que tiene una mayor población de patos?",
        "correcta": "C",
        "A": "Canadá",
        "B": "India",
        "C": "China",
        "D": "Finlandia"
    },
    {
        "color": "rojo",
        "tema": "LITERATURA",
        "pregunta": "¿Cuál de los siguientes títulos no es obra de Robert Louis Stevenson?",
        "correcta": "A",
        "A": "Robinson Crusoe",
        "B": "La isla del tesoro",
        "C": "Dr. Jekyll y Mr. Hyde",
        "D": "Secuestrado"
    },
    {
        "color": "rojo",
        "tema": "CALENDARIO",
        "pregunta": "¿Cuántos meses del año tienen 31 días?",
        "correcta": "B",
        "A": 6,
        "B": 7,
        "C": 8,
        "D": 9
    },
    {
        "color": "rojo",
        "tema": "LETRAS",
        "pregunta": "¿Cuál es la quinta letra del alfabeto griego?",
        "correcta": "B",
        "A": "Delta",
        "B": "Epsilon",
        "C": "Lambda",
        "D": "Beta"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Qué estudio de cine tiene por logo unos proyectores explorando el cielo?",
        "correcta": "D",
        "A": "Paramount",
        "B": "MGM",
        "C": "Warner brothers",
        "D": "20th Century Fox"
    },
    {
        "color": "rojo",
        "tema": "FÚTBOL",
        "pregunta": "¿Cuántas veces fue pichichi de la liga española de fútbol con el Barça Ronaldo Luis Nazario da Lima?",
        "correcta": "A",
        "A": 1,
        "B": 2,
        "C": 3,
        "D": "Ninguna"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "Maltés, Collie y Epagneul... ¿De qué hablamos?",
        "correcta": "C",
        "A": "Tribus",
        "B": "Gatos",
        "C": "Perros",
        "D": "Idiomas"
    },
    {
        "color": "rojo",
        "tema": "MÚSICA",
        "pregunta": "¿Cuál de los siguientes cantantes murió en noviembre de 1991?",
        "correcta": "C",
        "A": "Elvis Presley",
        "B": "Kurt Cobain",
        "C": "Freddie Mercury",
        "D": "Frank Sinatra"
    },
    {
        "color": "rojo",
        "tema": "CINE",
        "pregunta": "¿Qué deporte practican los protagonistas en la película Evasión o victoria?",
        "correcta": "C",
        "A": "Tenis",
        "B": "Baloncesto",
        "C": "Fútbol",
        "D": "Ninguno"
    },
    {
        "color": "rojo",
        "tema": "RÍOS",
        "pregunta": "¿Qué es el estuario de un río?",
        "correcta": "C",
        "A": "Meandro",
        "B": "Cauce",
        "C": "Desembocadura",
        "D": "Ribera"
    },
    {
        "color": "rojo",
        "tema": "CARRETERAS",
        "pregunta": "¿Qué deporte practican los protagonistas en la prlícula Evasión o victoria?",
        "correcta": "A",
        "A": "Puerta del Sol",
        "B": "Puerta de Alcalá",
        "C": "La Cibeles",
        "D": "El Escorial"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "La iguana es un tipo de...",
        "correcta": "A",
        "A": "Reptil",
        "B": "Anfibio",
        "C": "Pez",
        "D": "Planta"
    },
    {
        "color": "rojo",
        "tema": "DÍA D",
        "pregunta": "¿Cuál de estas era una de las cinco playas de Normandía?",
        "correcta": "D",
        "A": "Rifle",
        "B": "Pistol",
        "C": "Concha",
        "D": "Sword"
    },
    {
        "color": "rojo",
        "tema": "ANIMALES",
        "pregunta": "¿Qué peso son capaces de ganar por semana los osos preparándose para hibernar?",
        "correcta": "A",
        "A": "Unos 14 Kg",
        "B": "Unos 9 Kg",
        "C": "Unos 8 Kg",
        "D": "Unos 2 Kg"
    },
    {
        "color": "rojo",
        "tema": "CAZADORES",
        "pregunta": "¿A manos de qué animal murió el conocido cazador de cocodrilos Steve Irwin en 2006?",
        "correcta": "B",
        "A": "Un cocodrilo",
        "B": "Una raya látigo",
        "C": "Una serpiente de cascabel",
        "D": "Un tiburón"
    },
    {
        "color": "rojo",
        "tema": "MÚSICA",
        "pregunta": "¿De donde salió Lady Gaga en la última entrega de los premios Grammy?",
        "correcta": "A",
        "A": "De un huevo",
        "B": "De un pastel",
        "C": "De un sobre",
        "D": "De un ordenador"
    },
    {
        "color": "rojo",
        "tema": "ANIMACIÓN",
        "pregunta": "¿Cuál de estos personajes no es de una serie de Disney?",
        "correcta": "D",
        "A": "Pepito Grillo",
        "B": "Perdita y Pongo",
        "C": "Mulán",
        "D": "Hello Kitty"
    },
    {
        "color": "rojo",
        "tema": "POLÍTICA EE.UU.",
        "pregunta": "¿Quién es el 44º presidente de los EE.UU.?",
        "correcta": "D",
        "A": "George Bush",
        "B": "Bill Clinton",
        "C": "George W. Bush",
        "D": "Barack Obama"
    },
    {
        "color": "rojo",
        "tema": "PALABRAS",
        "pregunta": "El travertino, el chipolino y la lumaquela son diferentes tipos de...",
        "correcta": "A",
        "A": "Mármol",
        "B": "Arcilla",
        "C": "Faldas",
        "D": "Chucherías"
    },
    {
        "color": "rojo",
        "tema": "CIENCIA",
        "pregunta": "¿Qué científico demostró en 1687 el concepto de la velocidad de escape?",
        "correcta": "B",
        "A": "Henry Ford",
        "B": "Isaac Newton",
        "C": "Albert Einstein",
        "D": "Georgius Agricola"
    },
    {
        "color": "rojo",
        "tema": "RASCACIELOS",
        "pregunta": "¿Donde se encuentra el rascacielos más alto del mundo, que mide más de 800 metros?",
        "correcta": "D",
        "A": "Nueva York",
        "B": "Hong Kong",
        "C": "Taipei",
        "D": "Dubai"
    },
    {
        "color": "rojo",
        "tema": "CASTILLOS",
        "pregunta": "¿Qué uso daban los checos al castillo de Týrov?",
        "correcta": "C",
        "A": "Hotel",
        "B": "Colegio",
        "C": "Prisión",
        "D": "Hospital"
    },
    {
        "color": "rojo",
        "tema": "MÚSICA",
        "pregunta": "¿Qué grupo pop sueco ganó el festival de Eurovisión en 1974?",
        "correcta": "C",
        "A": "The Cardigans",
        "B": "Hep Stars",
        "C": "Abba",
        "D": "Ninguno"
    },
    {
        "color": "rojo",
        "tema": "PELÍCULAS",
        "pregunta": "¿Cuál de estas películas costó más dinero producir?",
        "correcta": "D",
        "A": "Piratas del Caribe: El cofre del hombre muerto",
        "B": "Superman Returns (El regreso de superman)",
        "C": "Spiderman 3",
        "D": "Piratas del Caribe: En el fín del mundo"
    },
    {
        "color": "rojo",
        "tema": "ANIMALES",
        "pregunta": "¿Cuál de las siguientes serpientes no es venenosa?",
        "correcta": "B",
        "A": "Serpiente de cascabel",
        "B": "Serpiente de leche",
        "C": "Víbora",
        "D": "Mamba verde"
    },
    {
        "color": "rojo",
        "tema": "LITERATURA",
        "pregunta": "¿Qué escritor español es autor de El árbol de la ciencia?",
        "correcta": "A",
        "A": "Pío Baroja",
        "B": "Buero Vallejo",
        "C": "Antonio Machado",
        "D": "Miguel Delibes"
    },
    {
        "color": "rojo",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Cuál es el único río de España que posee puerto fluvial?",
        "correcta": "D",
        "A": "Guadiana",
        "B": " Duero",
        "C": "Ebro",
        "D": "Guadalquivir"
    },
    {
        "color": "rojo",
        "tema": "COCHES",
        "pregunta": "¿Los coches de qué país tienen escrito \"PL\" en su matrícula?",
        "correcta": "B",
        "A": "Filipinas",
        "B": "Polonia",
        "C": "Paquistán",
        "D": "Portugal"
    },
    {
        "color": "rojo",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿En qué país se encuentra Timbuktu?",
        "correcta": "C",
        "A": "Laos",
        "B": "Jordania",
        "C": "Mali",
        "D": "Rumanía"
    },
    {
        "color": "rojo",
        "tema": "CIUDADES",
        "pregunta": "¿A qué ciudad finlandesa se la conoce como \"La hija del Báltico\"?",
        "correcta": "A",
        "A": "Helsinki",
        "B": "Mikkeli",
        "C": "Turku",
        "D": "Tampere"
    },
    {
        "color": "rojo",
        "tema": "TURRONES",
        "pregunta": "¿Qué fruto seco es el más frecuente en la elaboración del turrón de Jijona?",
        "correcta": "A",
        "A": "Almendra",
        "B": "Avellana",
        "C": "Pistacho",
        "D": "Nuez"
    },
    {
        "color": "azul",
        "tema": "CINE",
        "pregunta": "¿Qué film ganó el premio a la mejor película del año 2004 en la gala de los Oscar?",
        "correcta": "A",
        "A": "Million Dollar Baby",
        "B": "Una mente maravillosa",
        "C": "Titanic"
    },
    {
        "color": "azul",
        "tema": "ANTIGUA ROMA",
        "pregunta": "¿Con qué pagaban el salario de los soldados romanos?",
        "correcta": "A",
        "A": "Sal",
        "B": "Vino",
        "C": "Zapatos"
    },
    {
        "color": "azul",
        "tema": "PAÍSES",
        "pregunta": "¿Qué país regaló a los Estados Unidos la Estatua de la Libertad en conmemoración de su centenario?",
        "correcta": "A",
        "A": "Francia",
        "B": "Inglaterra",
        "C": "España"
    },
    {
        "color": "azul",
        "tema": "MONUMENTOS",
        "pregunta": "¿Donde podemos encontrar la estatua del Cristo Redentor?",
        "correcta": "A",
        "A": "Rio de Janeiro",
        "B": "Ciudad del Vaticano",
        "C": "Roma"
    },
    {
        "color": "azul",
        "tema": "PAÍSES",
        "pregunta": "¿Cuál es el estado más pequeño de la tierra?",
        "correcta": "B",
        "A": "Luxemburgo",
        "B": "Ciudad del Vaticano",
        "C": "Nauru"
    },
    {
        "color": "azul",
        "tema": "EDIFICIOS",
        "pregunta": "¿Cuál es el motivo que propició la construcción de la torre Eiffel?",
        "correcta": "B",
        "A": "El fin de la Revolución Francesa",
        "B": "La Exposición Universal de París",
        "C": "La victoria de Napoleón en Portugal"
    },
    {
        "color": "azul",
        "tema": "GASTRONOMÍA",
        "pregunta": "¿De qué está rellena la típica ensaimada de Mallorca?",
        "correcta": "C",
        "A": "Mazapán",
        "B": "Mermelada",
        "C": "Cabello de ángel"
    },
    {
        "color": "azul",
        "tema": "ISLAS",
        "pregunta": "Además de Islas Afortunadas, ¿Qué otro nombre reciben las Islas Canarias?",
        "correcta": "B",
        "A": "Las Saharianas",
        "B": "Las Hespérides",
        "C": "Las Palmeras"
    },
    {
        "color": "azul",
        "tema": "EXPLORADORES",
        "pregunta": "¿Qué portugués inició una vuelta al mundo en barco en el siglo XVI?",
        "correcta": "A",
        "A": "Fernando de Magallanes",
        "B": "Willy Fog",
        "C": "Juan Sebastián Elcano"
    },
    {
        "color": "azul",
        "tema": "HISTORIA",
        "pregunta": "¿En qué fecha salió Cristóbal Colón del Puerto de Palos?",
        "correcta": "A",
        "A": "3 de August de 1492",
        "B": "15 de July de 1492",
        "C": "3 de May de 1492"
    },
    {
        "color": "azul",
        "tema": "SEXO EN NUEVA YORK",
        "pregunta": "¿Cuál de los siguientes no es un personaje principal de Sexo en Nueva York?",
        "correcta": "C",
        "A": "Charlotte",
        "B": "Miranda",
        "C": "Jessica"
    },
    {
        "color": "azul",
        "tema": "IDIOMAS",
        "pregunta": "¿Cuál es la única lengua hablada de forma oficial en más de 50 PAÍSES?",
        "correcta": "A",
        "A": "Inglés",
        "B": "Swahili",
        "C": "Español"
    },
    {
        "color": "azul",
        "tema": "CINE",
        "pregunta": "¿Qué mujer es, con 4 premios, la que más veces ha sido premiada como mejor actriz en la gala de los Oscar?",
        "correcta": "C",
        "A": "Meryl Streep",
        "B": "Angelina Jolie",
        "C": "Katharine Hepburn"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuál de los siguientes es el músculo más grande del cuerpo humano?",
        "correcta": "C",
        "A": "El sartorio",
        "B": "El estribo",
        "C": "El glúteo"
    },
    {
        "color": "azul",
        "tema": "ANIMALES",
        "pregunta": "¿Cuál de los siguientes animales es más grande?",
        "correcta": "A",
        "A": "Ballena azul",
        "B": "Anaconda",
        "C": "Ballena gris"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿A qué edad empieza a encogerse nuestro esqueleto?",
        "correcta": "B",
        "A": "60 años",
        "B": "35 años",
        "C": "20 años"
    },
    {
        "color": "azul",
        "tema": "SENTIDOS",
        "pregunta": "¿Cuál de los siguientes animales posee un campo visual más amplio?",
        "correcta": "A",
        "A": "Perro",
        "B": "Humano",
        "C": "Murciélago"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Qué profundidad tiene la piel humana?",
        "correcta": "A",
        "A": "2 mm",
        "B": "1 cm",
        "C": "2 cm"
    },
    {
        "color": "azul",
        "tema": "MARES",
        "pregunta": "¿Cuál de estos tres mares baña las costas de Suecia?",
        "correcta": "B",
        "A": "Mar de Barents",
        "B": "Mar Báltico",
        "C": "Mar Caspio"
    },
    {
        "color": "azul",
        "tema": "PERSONAJES FAMOSOS",
        "pregunta": "¿De qué murió Diego de Marcilla, el amante de Teruel?",
        "correcta": "C",
        "A": "De fiebre",
        "B": "Envenenado",
        "C": "De pena"
    },
    {
        "color": "azul",
        "tema": "RÉCORDS",
        "pregunta": "¿Qué récord mantuvo el Red Savina desde 1994 hasta 2006?",
        "correcta": "C",
        "A": "Planta más maloliente",
        "B": "Serpiente más pequeña",
        "C": "Chile más picante"
    },
    {
        "color": "azul",
        "tema": "NOTICIAS",
        "pregunta": "¿Por qué aparecieron en los periódicos durante 2004 Iván, Francés y Charley?",
        "correcta": "C",
        "A": "Eran cerdos fugitivos",
        "B": "Fueron el primer matrimonio triple",
        "C": "Eran huracanes"
    },
    {
        "color": "azul",
        "tema": "ANIMALES",
        "pregunta": "¿Cuál de estos animales es más lento?",
        "correcta": "A",
        "A": "Caracol",
        "B": "Tortuga",
        "C": "Oso perezoso"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuál de esos nombres se utiliza comúnmente para referirse al hallux valgus?",
        "correcta": "A",
        "A": "Juanete",
        "B": "Lóbulo de la oreja",
        "C": "Codo"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuanto tarda aproximadamente una célula sanguínea en recorrer nuestro cuerpo?",
        "correcta": "C",
        "A": "2 minutos",
        "B": "15 segundos",
        "C": "30 segundos"
    },
    {
        "color": "azul",
        "tema": "FABRICACIÓN",
        "pregunta": "¿Cuántas veces debe doblarse el alambre para obtener un clip estándar?",
        "correcta": "B",
        "A": "Dos",
        "B": "Tres",
        "C": "Cuatro"
    },
    {
        "color": "azul",
        "tema": "MEDICINA",
        "pregunta": "¿A qué griego ilustre le deben los médicos su juramento ético?",
        "correcta": "B",
        "A": "Sócrates",
        "B": "Hipócrates",
        "C": "Aristóteles"
    },
    {
        "color": "azul",
        "tema": "CIUDADES",
        "pregunta": "¿Qué ciudad eslovaca perteneció a Hungría del año 906 al 1913?",
        "correcta": "A",
        "A": "Bratislava",
        "B": "Praga",
        "C": "Vilna"
    },
    {
        "color": "azul",
        "tema": "ARQUITECTURA",
        "pregunta": "¿Qué arquitecto estadounidense diseñó el museo Guggenheim de Bilbao?",
        "correcta": "C",
        "A": "N. Foster",
        "B": "F.L. Wright",
        "C": "F. Gehry"
    },
    {
        "color": "azul",
        "tema": "NATURALEZA",
        "pregunta": "¿Cuál de los siguientes fenómenos podemos ver en Finlandia?",
        "correcta": "A",
        "A": "La aurora boreal",
        "B": "La aurora austral",
        "C": "La aurora austral y boreal"
    },
    {
        "color": "azul",
        "tema": "VIAJAR",
        "pregunta": "¿A qué ciudad se la conoce como \"La perla del Adriático\"?",
        "correcta": "B",
        "A": "Atenas",
        "B": "Venecia",
        "C": "Corfú"
    },
    {
        "color": "azul",
        "tema": "MORTÍFERO",
        "pregunta": "¿Qué animales son responsables de la muerte de más personas al año?",
        "correcta": "C",
        "A": "Monos",
        "B": "Tiburones",
        "C": "Mosquitos"
    },
    {
        "color": "azul",
        "tema": "CINE",
        "pregunta": "En la película Fuera de Juego (Fever Pitch), ¿con qué club de fútbol está obsesionado Colin Firth?",
        "correcta": "B",
        "A": "Manchester United",
        "B": "Arsenal",
        "C": "F.C. Barcelona"
    },
    {
        "color": "azul",
        "tema": "DEPORTES",
        "pregunta": "¿Donde se celebra la carrera anual de caballos de Laytown, en Irlanda?",
        "correcta": "B",
        "A": "En un lago",
        "B": "En la playa",
        "C": "En la carretera"
    },
    {
        "color": "azul",
        "tema": "ACTRICES",
        "pregunta": "¿Qué famosa actriz sueca protagonizó Casablanca?",
        "correcta": "A",
        "A": "Ingrid Bergman",
        "B": "Ingmar Bergman",
        "C": "Grace Kelly"
    },
    {
        "color": "azul",
        "tema": "CAPITALES",
        "pregunta": "¿De qué isla es capital Palermo?",
        "correcta": "A",
        "A": "Sicilia",
        "B": "Cerdeña",
        "C": "Córcega"
    },
    {
        "color": "azul",
        "tema": "SENTIDOS",
        "pregunta": "¿Donde tienen el sentido del gusto los pulpos?",
        "correcta": "A",
        "A": "Tentáculos",
        "B": "Ojos",
        "C": "Estómago"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuál es la arteria más ancha del cuerpo humano?",
        "correcta": "B",
        "A": "Femoral",
        "B": "Aorta",
        "C": "Occipital"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuál de los siguientes huesos es más resistente?",
        "correcta": "A",
        "A": "Mandíbula",
        "B": "Fémur",
        "C": "Escafoides"
    },
    {
        "color": "azul",
        "tema": "HÉROES GRIEGOS",
        "pregunta": "¿Qué héroe griego se llama igual que un tendón?",
        "correcta": "A",
        "A": "Aquiles",
        "B": "Parménides",
        "C": "Ulises"
    },
    {
        "color": "azul",
        "tema": "MITOLOGÍA",
        "pregunta": "¿Qué diosa llegó hasta las costas chipriotas en una concha nacarada que era a la vez un carro y una cuna?",
        "correcta": "C",
        "A": "Artemisa",
        "B": "Zeus",
        "C": "Afrodita"
    },
    {
        "color": "azul",
        "tema": "CINE",
        "pregunta": "¿Qué actriz dio vida en el cine a la emperatriz austriaca Sisi?",
        "correcta": "A",
        "A": "Romy Schneider",
        "B": "Ava Gardner",
        "C": "Liz Taylor"
    },
    {
        "color": "azul",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Por Cuál de los siguientes países no pasa el Ecuador?",
        "correcta": "C",
        "A": "Congo",
        "B": "Colombia",
        "C": "Camboya"
    },
    {
        "color": "azul",
        "tema": "NOMBRES",
        "pregunta": "¿Qué son la coquina, la cañailla y el busano?",
        "correcta": "A",
        "A": "Moluscos",
        "B": "Plantas",
        "C": "Insectos"
    },
    {
        "color": "azul",
        "tema": "POBLACIÓN",
        "pregunta": "¿Cuál de los siguientes países tiene mayor número de habitantes?",
        "correcta": "A",
        "A": "India",
        "B": "Brasil",
        "C": "EE.UU."
    },
    {
        "color": "azul",
        "tema": "METEOROLOGÍA",
        "pregunta": "¿En Cuál de los siguientes lugares hay como mínimo una cascada?",
        "correcta": "B",
        "A": "Desierto del Sahara",
        "B": "Antártida",
        "C": "Desierto de Gobi"
    },
    {
        "color": "azul",
        "tema": "COCHES",
        "pregunta": "¿Qué marca de coche nos preguntaba si nos gustaba conducir?",
        "correcta": "A",
        "A": "BMW",
        "B": "Audi",
        "C": "Volvo"
    },
    {
        "color": "azul",
        "tema": "PAÍSES",
        "pregunta": "¿Cuál de estos países es conocido como \"El país del arcoiris\"?",
        "correcta": "C",
        "A": "India",
        "B": "Japón",
        "C": "Sudáfrica"
    },
    {
        "color": "azul",
        "tema": "LIBROS INFANTILES",
        "pregunta": "¿De qué color es la parte superior del gorro del personaje de ¿Dónde está Wally?",
        "correcta": "A",
        "A": "Rojo",
        "B": "Azul",
        "C": "Blanco"
    },
    {
        "color": "azul",
        "tema": "RÍOS",
        "pregunta": "¿Qué río francés comparte su nombre con una estrella del pop?",
        "correcta": "B",
        "A": "Lulu",
        "B": "Cher",
        "C": "Dido"
    },
    {
        "color": "azul",
        "tema": "NOTICIAS",
        "pregunta": "¿Qué permitieron por primera vez los periódicos de la Unión Soviética en 1988?",
        "correcta": "B",
        "A": "Modelos en topless",
        "B": "Anuncios",
        "C": "Comentarios políticos"
    },
    {
        "color": "azul",
        "tema": "CIUDADES",
        "pregunta": "¿Qué ciudad de los Estados Unidos es también conocida como \"La ciudad del viento\"?",
        "correcta": "B",
        "A": "Los Ángeles",
        "B": "Chicago",
        "C": "Detroit"
    },
    {
        "color": "azul",
        "tema": "ANIMALES",
        "pregunta": "¿Cuál de estos famosos perros fué interpretado por un pastor alemán?",
        "correcta": "B",
        "A": "Toto",
        "B": "Rin Tin Tin",
        "C": "Lassie"
    },
    {
        "color": "azul",
        "tema": "TRIATLÓN",
        "pregunta": "¿Cuál de las siguientes no es una de las especialidades del triatlón?",
        "correcta": "A",
        "A": "Tiro",
        "B": "Natación",
        "C": "Ciclismo"
    },
    {
        "color": "azul",
        "tema": "OBJETOS",
        "pregunta": "¿Cohiba, Montecristo y Che son...",
        "correcta": "A",
        "A": "Puros",
        "B": "Motos",
        "C": "Sombrero"
    },
    {
        "color": "azul",
        "tema": "MÚSICA",
        "pregunta": "¿Qué popular canción incluye las palabras \"I ate it up and spit it out\"?",
        "correcta": "A",
        "A": "My way",
        "B": "I will survive",
        "C": "New York, New York"
    },
    {
        "color": "azul",
        "tema": "TRIBUS",
        "pregunta": "¿Cuál de las siguientes tribus fué liderada por Jerónimo?",
        "correcta": "B",
        "A": "Sioux",
        "B": "Apache",
        "C": "Cherokee"
    },
    {
        "color": "azul",
        "tema": "EMPLEOS",
        "pregunta": "¿Quien usaría un aherramienta conocida con el nombre de \"yunque de viaje plegable\"?",
        "correcta": "A",
        "A": "Un herrero",
        "B": "Un fabricante de velas",
        "C": "Una azafata de vuelo"
    },
    {
        "color": "azul",
        "tema": "PELÍCULAS",
        "pregunta": "¿Cuál fué considerada la mejor canción de película de la historia por el Instituto Americano de Cine (AFI)?",
        "correcta": "A",
        "A": "Over the rainbow",
        "B": "As time goes by",
        "C": "Singin' in the rain"
    },
    {
        "color": "azul",
        "tema": "DINERO",
        "pregunta": "¿A Quién iba dedicada la moneda belga conmemorativa de 10 euros en el año 2004?",
        "correcta": "B",
        "A": "Audrey Hepburn",
        "B": "Tintín",
        "C": "Hércules Poirot"
    },
    {
        "color": "azul",
        "tema": "MATERIALES",
        "pregunta": "¿A qué material se le denomina \"el oro blanco de Portugal\"?",
        "correcta": "B",
        "A": "Perlas",
        "B": "Mármol",
        "C": "Alabastro"
    },
    {
        "color": "azul",
        "tema": "NOMBRES",
        "pregunta": "¿De qué nombre es diminutivo Sisí en Austria?",
        "correcta": "A",
        "A": "De Elizabeth",
        "B": "De Silvia",
        "C": "De Eloisa"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Qué es un dracma?",
        "correcta": "B",
        "A": "Una tragedia",
        "B": "Una moneda",
        "C": "Un animal mitológico"
    },
    {
        "color": "azul",
        "tema": "ARQUITECTURA",
        "pregunta": "¿A qué arquitecto mítico se le atribuye la construcción del Laberinto del Minotauro?",
        "correcta": "C",
        "A": "Héctor",
        "B": "Agamenón",
        "C": "Dédalo"
    },
    {
        "color": "azul",
        "tema": "DEPORTES",
        "pregunta": "¿Cuántas horas dura la famosa competición automovilística de Le Mans?",
        "correcta": "A",
        "A": "24 horas",
        "B": "36 horas",
        "C": "12 horas"
    },
    {
        "color": "azul",
        "tema": "ARTISTAS",
        "pregunta": "¿De qué escritor es la obra El beso?",
        "correcta": "A",
        "A": "Auguste Rodin",
        "B": "Antoine-Louis Barye",
        "C": "Miguel Ángel"
    },
    {
        "color": "azul",
        "tema": "DIBUJO",
        "pregunta": "¿Cuál de los siguientes personajes es famoso por su técnica de dibujo de línea clara?",
        "correcta": "A",
        "A": "Georges Remi (Hergé)",
        "B": "Francisco de Zurbarán",
        "C": "Matt Groening"
    },
    {
        "color": "azul",
        "tema": "ANIMALES",
        "pregunta": "¿Cuál de estos animales puede levantar 850 veces su peso?",
        "correcta": "A",
        "A": "Escarabajo pelotero",
        "B": "Hormiga de fuego",
        "C": "Tigre"
    },
    {
        "color": "azul",
        "tema": "GASTRONOMÍA",
        "pregunta": "¿Qué ingrediente añaden en Irlanda a la mantequilla?",
        "correcta": "C",
        "A": "Azúcar",
        "B": "Canela",
        "C": "Sal"
    },
    {
        "color": "azul",
        "tema": "LITERATURA",
        "pregunta": "¿Quién escribió El retrato de Dorian Grey?",
        "correcta": "A",
        "A": "Oscar Wilde",
        "B": "Orson Welles",
        "C": "James Joyce"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿La hiperpolisilabicomanía es una fobia?¿A qué?",
        "correcta": "B",
        "A": "Palabras que riman",
        "B": "Palabras largas",
        "C": "Palabras sin sentido"
    },
    {
        "color": "azul",
        "tema": "LA LUNA",
        "pregunta": "¿Cuál de las siguientes denominaciones no corresponde a una fase lunar?",
        "correcta": "C",
        "A": "Luna creciente",
        "B": "Gibosa menguante",
        "C": "Órbita ondulada"
    },
    {
        "color": "azul",
        "tema": "TELEVISIÓN INFANTIL",
        "pregunta": "¿Cuál de las siguientes no es una de las famosas Tortugas Ninja?",
        "correcta": "A",
        "A": "El Greco",
        "B": "Leonardo",
        "C": "Donatello"
    },
    {
        "color": "azul",
        "tema": "POP",
        "pregunta": "¿Qué llevo Lilly Allen en el Festival de Glastonbury en 2009 como tributo a Michael Jackson?",
        "correcta": "B",
        "A": "Una camiseta de Bad",
        "B": "Un guante",
        "C": "Calcetines blancos"
    },
    {
        "color": "azul",
        "tema": "JUEGOS",
        "pregunta": "Si jugamos al dominó, ¿el jugador que posee ficha empezará la partida?",
        "correcta": "B",
        "A": "Doble siete",
        "B": "Doble seis",
        "C": "Doble uno"
    },
    {
        "color": "azul",
        "tema": "COMIDA",
        "pregunta": "¿Cuál de estos platos mexicanos no consiste en una tortilla envolviendo un relleno?",
        "correcta": "C",
        "A": "Enchilada",
        "B": "Burrito",
        "C": "Picadillo"
    },
    {
        "color": "azul",
        "tema": "TELEVISIÓN",
        "pregunta": "¿Cómo se llamaba a Bugs Bunny en 1935?",
        "correcta": "C",
        "A": "Doc",
        "B": "Wabbit",
        "C": "Conejo feliz"
    },
    {
        "color": "azul",
        "tema": "BANDAS MASCULINAS",
        "pregunta": "¿En qué banda masculina podíamos encontrar a Justin Timberlake?",
        "correcta": "A",
        "A": "N Sync",
        "B": "Backstreet Boys",
        "C": "New Kids on the Block"
    },
    {
        "color": "azul",
        "tema": "LITERATURA",
        "pregunta": "¿Qué escritor creó a Oliver Twist y a David Copperfield?",
        "correcta": "A",
        "A": "Charles Dickens",
        "B": "Samuel Beckett",
        "C": "Graham Greene"
    },
    {
        "color": "azul",
        "tema": "PELÍCULAS",
        "pregunta": "¿Qué grupo de actores británicos es autor de la película La vida de Brian?",
        "correcta": "A",
        "A": "Monty Python",
        "B": "Hermanos Marx",
        "C": "Hermanos Coen"
    },
    {
        "color": "azul",
        "tema": "ARQUITECTURA",
        "pregunta": "El palacio El Capricho de Comillas es obra del arquitecto...",
        "correcta": "B",
        "A": "Wright",
        "B": "Gaudí",
        "C": "Sert"
    },
    {
        "color": "azul",
        "tema": "HISTORIA",
        "pregunta": "¿En qué provincia nació el Cid Campeador?",
        "correcta": "A",
        "A": "Burgos",
        "B": "León",
        "C": "Soria"
    },
    {
        "color": "azul",
        "tema": "CIUDADES",
        "pregunta": "¿Qué ciudad valenciana tiene su homónima en Venezuela?",
        "correcta": "C",
        "A": "Manises",
        "B": "Castellón",
        "C": "Valencia"
    },
    {
        "color": "azul",
        "tema": "ÁRBOLES",
        "pregunta": "¿Qué clase de árbol es el famoso árbol de Guernica?",
        "correcta": "B",
        "A": "Sauce",
        "B": "Roble",
        "C": "Higuera"
    },
    {
        "color": "azul",
        "tema": "COLORES",
        "pregunta": "¿Cuál de los siguientes colores puede obtenerse mezclando los otros dos?",
        "correcta": "B",
        "A": "Amarillo",
        "B": "Verde",
        "C": "Azul"
    },
    {
        "color": "azul",
        "tema": "JAMES BOND",
        "pregunta": "¿Qué tema de una película de James Bond fue interpretado por Lulu?",
        "correcta": "C",
        "A": "Goldeneye",
        "B": "James Bond contra Goldfinger",
        "C": "El hombre de la pistola de oro"
    },
    {
        "color": "azul",
        "tema": "HISTORIA",
        "pregunta": "¿Contra qué país se sublevaron los Países Bajos en el siglo XVI?",
        "correcta": "A",
        "A": "Contra España",
        "B": "Contra Francia",
        "C": "Contra Alemania"
    },
    {
        "color": "azul",
        "tema": "DIRECTORES",
        "pregunta": "¿Cuál de estos directores cinematográficos españoles no ha recibido un Oscar de Hollywood?",
        "correcta": "C",
        "A": "José Luis Garci",
        "B": "Pedro Almodóvar",
        "C": "José Luis Cuerda"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Qué significa el sufijo griego filia?",
        "correcta": "A",
        "A": "Amistad",
        "B": "Hija",
        "C": "Libertad"
    },
    {
        "color": "azul",
        "tema": "GEOGRAFÍA",
        "pregunta": "¿Con cuál de estos países no limita Grecia?",
        "correcta": "C",
        "A": "Albania",
        "B": "Bulgaria",
        "C": "Rumanía"
    },
    {
        "color": "azul",
        "tema": "LITERATURA",
        "pregunta": "¿Quién acompaña a Dante en la Divina Comedia?",
        "correcta": "B",
        "A": "Laura",
        "B": "Beatrice",
        "C": "Francesca"
    },
    {
        "color": "azul",
        "tema": "FRASES CÉLEBRES",
        "pregunta": "¿Qué italiano acuñó la frase \"El fin justifica los medios\"?",
        "correcta": "A",
        "A": "Maquiavelo",
        "B": "Gian Battista Guarini",
        "C": "Sócrates"
    },
    {
        "color": "azul",
        "tema": "DEPORTES",
        "pregunta": "¿Cuántos puntos ganaría un tenista masculino si se impusiera en todos los puntos posibles durante un partido en Wimbledon?",
        "correcta": "B",
        "A": 48,
        "B": 72,
        "C": 96
    },
    {
        "color": "azul",
        "tema": "NOCHEVIEJA",
        "pregunta": "¿Qué significa Auld Lang Syne?",
        "correcta": "C",
        "A": "Fin de año",
        "B": "Feliz año nuevo",
        "C": "Hace mucho tiempo"
    },
    {
        "color": "azul",
        "tema": "LITERATURA",
        "pregunta": "¿Qué autora inglesa ha sido la más traducida después de Shakespeare?",
        "correcta": "A",
        "A": "Agatha Christie",
        "B": "Jane Austen",
        "C": "Virginia Woolf"
    },
    {
        "color": "azul",
        "tema": "ESCRITORES",
        "pregunta": "¿Qué famoso escritor inglés nació en 1564?",
        "correcta": "A",
        "A": "William Shakespeare",
        "B": "Charles John Huffam Dickens",
        "C": "Thomas Wyatt"
    },
    {
        "color": "azul",
        "tema": "AMÉRICA",
        "pregunta": "¿Cuál de estas ciudades no comparte la misma franja horaria con las otras dos?",
        "correcta": "B",
        "A": "Seattle",
        "B": "Nueva Orleans",
        "C": "Los Ángeles"
    },
    {
        "color": "azul",
        "tema": "TRIÁNGULOS",
        "pregunta": "¿Qué nombre recibe un triángulo con dos lados iguales?",
        "correcta": "A",
        "A": "Isósceles",
        "B": "Escaleno",
        "C": "Equilátero"
    },
    {
        "color": "azul",
        "tema": "FÚTBOL",
        "pregunta": "¿Quién dijo \"A veces en el fútbol tienes que marcar goles\"?",
        "correcta": "A",
        "A": "Thierry Henry",
        "B": "Iván de la Peña",
        "C": "Andrés Iniesta"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Qué significa la palabra finlandesa géiser?",
        "correcta": "C",
        "A": "Agua",
        "B": "Vapor",
        "C": "Surtidor"
    },
    {
        "color": "azul",
        "tema": "RÉCORDS",
        "pregunta": "¿Cuántos piercings llevó John Lynch en su cuerpo para lograr un nuevo récord Guinness en 2008?",
        "correcta": "C",
        "A": 102,
        "B": 185,
        "C": 241
    },
    {
        "color": "azul",
        "tema": "SERIES DE TELEVISIÓN",
        "pregunta": "¿Cómo se llaman los tres hijos de Peter Griffin?",
        "correcta": "A",
        "A": "Meg, Chris y Stewie",
        "B": "Bart, Lisa y Maggie",
        "C": "Nerón, Claudio y Galerio"
    },
    {
        "color": "azul",
        "tema": "CATEDRALES",
        "pregunta": "La catedral de Colonia se empezó en 1248, pero no se terminó hasta...",
        "correcta": "B",
        "A": 1402,
        "B": 1880,
        "C": 1613
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Qué comerás si te sirven Remoudou, De Nivelles y Djotte?",
        "correcta": "A",
        "A": "Quesos",
        "B": "Licores",
        "C": "Chocolates"
    },
    {
        "color": "azul",
        "tema": "PLANETA TIERRA",
        "pregunta": "¿Cómo ha evolucionado el nivel del mar en los últimos 100 años?",
        "correcta": "A",
        "A": "Ha aumentado 15 cm",
        "B": "Ha aumentado 1 metro",
        "C": "Ha disminuido 20 cm "
    },
    {
        "color": "azul",
        "tema": "ANIMALES",
        "pregunta": "¿Cómo son las rayas del cuerpo y las patas de las cebras, respectivamente?",
        "correcta": "B",
        "A": "Horizontales\/Verticales",
        "B": "Verticales\/Horizontales",
        "C": "Verticales\/Verticales"
    },
    {
        "color": "azul",
        "tema": "JAPÓN",
        "pregunta": "¿Qué significa la palabra geisha?",
        "correcta": "B",
        "A": "Surtidor",
        "B": "Artista",
        "C": "Camarera"
    },
    {
        "color": "azul",
        "tema": "CONSTRUCCIONES",
        "pregunta": "¿Cuál es la construcción más antigua visible desde el espacio?",
        "correcta": "A",
        "A": "La Gran Muralla China",
        "B": "La Pirámide de Keops",
        "C": "El Coloso de Rodas"
    },
    {
        "color": "azul",
        "tema": "MÚSICA",
        "pregunta": "¿Cuál fue la ciudad natal de Wolfgang Amadeus Mozart?",
        "correcta": "A",
        "A": "Salzburgo",
        "B": "Linz",
        "C": "Graz"
    },
    {
        "color": "azul",
        "tema": "RÍOS",
        "pregunta": "¿Qué río nace en la selva Negra y muere en el mar Negro?",
        "correcta": "A",
        "A": "El Danubio",
        "B": "El río Eno",
        "C": "El río Breg"
    },
    {
        "color": "azul",
        "tema": "ARTE",
        "pregunta": "¿Cuál de los siguientes artistas pintó más autorretratos?",
        "correcta": "C",
        "A": "Rubens",
        "B": "Renoir",
        "C": "Rembrandt"
    },
    {
        "color": "azul",
        "tema": "LEYENDAS",
        "pregunta": "¿Quién era Eustache Dauger, supuestamente?",
        "correcta": "A",
        "A": "El hombre de la máscara de hierro",
        "B": "Pimpinela Escarlata",
        "C": "El conde de Montecristo"
    },
    {
        "color": "azul",
        "tema": "IMPERIOS",
        "pregunta": "Los dos imperios más grandes de Europa en el siglo XVI eran Polonia y...",
        "correcta": "A",
        "A": "España",
        "B": "Alemania",
        "C": "Grecia"
    },
    {
        "color": "azul",
        "tema": "CINE",
        "pregunta": "¿Qué director de cine vivió su infancia en un gueto judío de Varsovia?",
        "correcta": "A",
        "A": "Roman Polanski",
        "B": "Woody Allen",
        "C": "Steven Spielberg"
    },
    {
        "color": "azul",
        "tema": "CIENCIA",
        "pregunta": "¿Con qué nombre se conoce la Teoría de Copérnico?",
        "correcta": "A",
        "A": "Teoría heliocéntrica",
        "B": "Teoría de la gravitación",
        "C": "Teoría de geocéntrica"
    },
    {
        "color": "azul",
        "tema": "UNIÓN EUROPEA",
        "pregunta": "¿Qué político creó en 1950 un plan que sería el embrión de la Unión Europea?",
        "correcta": "A",
        "A": "Robert Schuman",
        "B": "Charles de Gaulle",
        "C": "John Profumo"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Qué significa en griego la palabra hipopótamo?",
        "correcta": "C",
        "A": "Gran animal",
        "B": "Vaca de agua",
        "C": "Caballo de río"
    },
    {
        "color": "azul",
        "tema": "TELEVISIÓN",
        "pregunta": "¿Para qué serie televisiva compuso una banda sonora el músico checo Jan Hammer?",
        "correcta": "B",
        "A": "Perdidos",
        "B": "Corrupción en Miami",
        "C": "Los Simpson"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuantas neuronas tenemos los humanos en el cerebro aproximadamente?",
        "correcta": "C",
        "A": "5 millones",
        "B": "50 mil millones",
        "C": "100 mil millones"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Con qué está relacionada la cartografía?",
        "correcta": "C",
        "A": "Escritura a mano",
        "B": "Pintura de cuevas",
        "C": "Elaboración de mapas"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "Los hombres tienen 12 pares de costillas. ¿Cuántas tienen las mujeres?",
        "correcta": "B",
        "A": "11 pares",
        "B": "12 pares",
        "C": "13 pares"
    },
    {
        "color": "azul",
        "tema": "¿En cuál de estos países debes conducir por el carril derecho de la carretera?",
        "pregunta": "¿En cuál de los siguientes países hay una mayor esperanza de vida?",
        "correcta": "A",
        "A": "Japón",
        "B": "Suiza",
        "C": "Mozambique"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Qué extensión obtendríamos al poner todos los vasos sanguíneos de una persona en fila?",
        "correcta": "A",
        "A": "90.000 km",
        "B": "15 m",
        "C": "2000 km"
    },
    {
        "color": "azul",
        "tema": "FESTIVALES",
        "pregunta": "¿En qué país se celebra el Montreux Film Festival?",
        "correcta": "B",
        "A": "Francia",
        "B": "Suiza",
        "C": "Italia"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Cuánto crece en el primer año de vida el cerebro de un bebé?",
        "correcta": "B",
        "A": "El doble",
        "B": "El triple",
        "C": "No crece hasta el segundo año"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Qué detecta un polígrafo?",
        "correcta": "B",
        "A": "Velocidad",
        "B": "Mentiras",
        "C": "Terremotos"
    },
    {
        "color": "azul",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿De qué está compuesto mayoritariamente el cerebro?",
        "correcta": "A",
        "A": "Agua",
        "B": "Proteínas",
        "C": "Lípidos"
    },
    {
        "color": "azul",
        "tema": "COMIDA",
        "pregunta": "¿De qué planta se obtiene el azafrán?",
        "correcta": "A",
        "A": "De la crocus sativus",
        "B": "Del girasol",
        "C": "De la camelia"
    },
    {
        "color": "azul",
        "tema": "COMPOSITORES",
        "pregunta": "¿Qué célebre compositor austríaco es autor de la ópera La flauta mágica?",
        "correcta": "A",
        "A": "W.A. Mozart",
        "B": "Joseph Haydn",
        "C": "Franz Schubert"
    },
    {
        "color": "azul",
        "tema": "CASTILLOS",
        "pregunta": "¿Qué uso daban los checos al castillo de Týrov?",
        "correcta": "C",
        "A": "Hotel",
        "B": "Colegio",
        "C": "Prisión"
    },
    {
        "color": "azul",
        "tema": "ESCRITORES",
        "pregunta": "¿Qué escritor nacido en Dublín creó al conde Drácula?",
        "correcta": "A",
        "A": "Bram Stoker",
        "B": "Mary Shelley",
        "C": "Oscar Wilde"
    },
    {
        "color": "azul",
        "tema": "ALIMENTOS",
        "pregunta": "¿Qué alimento básico faltó en la Irlanda del siglo XIX causando la Gran Hambruna?",
        "correcta": "B",
        "A": "El arroz",
        "B": "La patata",
        "C": "El trigo"
    },
    {
        "color": "azul",
        "tema": "EL CUERPO HUMANO",
        "pregunta": "¿Qué es epicondilitis lateral?",
        "correcta": "A",
        "A": "Codo de tenista",
        "B": "Pies de atleta",
        "C": "Pezón de corredor"
    },
    {
        "color": "azul",
        "tema": "INVENTORES",
        "pregunta": "¿Quién inventó el bolígrafo de bola?",
        "correcta": "B",
        "A": "Bic",
        "B": "Biró",
        "C": "Waterman"
    },
    {
        "color": "azul",
        "tema": "CALENDARIO",
        "pregunta": "Si hay un viernes 13 de un mes, ¿qué día de la semana es el primero de dicho mes?",
        "correcta": "A",
        "A": "Domingo",
        "B": "Martes",
        "C": "Jueves"
    },
    {
        "color": "azul",
        "tema": "CANCIONES",
        "pregunta": "¿Quién escribió la letra de la canción de Elton John en la película El Rey León?",
        "correcta": "A",
        "A": "Tim Rice",
        "B": "Phil Collins",
        "C": "Bernie Taupin"
    },
    {
        "color": "azul",
        "tema": "PELÍCULAS",
        "pregunta": "En la película Batman Forever, ¿qué actor interpreta a Batman?",
        "correcta": "A",
        "A": "Val Kilmer",
        "B": "Michael Keaton",
        "C": "Christian Bale"
    },
    {
        "color": "azul",
        "tema": "ANIMALES",
        "pregunta": "¿Cuál de las siguientes acciones puede emular un emú?",
        "correcta": "A",
        "A": "Nadar",
        "B": "Volar",
        "C": "Caminar hacia atrás"
    },
    {
        "color": "azul",
        "tema": "PALABRAS",
        "pregunta": "¿Qué colecciona un lepidopterólogo?",
        "correcta": "C",
        "A": "Postales",
        "B": "Monedas",
        "C": "Mariposas"
    },
    {
        "color": "azul",
        "tema": "LITERATURA",
        "pregunta": "¿Quién escribió Cuentos de así-fue-como...?",
        "correcta": "A",
        "A": "Rudyard Kipling",
        "B": "Daniel Defoe",
        "C": "Mark Twain"
    },
    {
        "color": "azul",
        "tema": "PREMIOS NOBEL",
        "pregunta": "¿Cuál de los siguientes no es una categoría de los Premios Nobel?",
        "correcta": "C",
        "A": "Economía",
        "B": "Literatura",
        "C": "Geometría"
    },
    {
        "color": "azul",
        "tema": "PELÍCULAS",
        "pregunta": "¿Cuál era el único enanito de Disney que llevaba gafas?",
        "correcta": "B",
        "A": "Dormilón",
        "B": "Sabio",
        "C": "Mocoso"
    },
    {
        "color": "azul",
        "tema": "CIUDADES",
        "pregunta": "¿A qué ciudad se le conoce como \"La ciudad blanca\"?",
        "correcta": "A",
        "A": "Lisboa",
        "B": "Barcelona",
        "C": "Madrid"
    },
    {
        "color": "azul",
        "tema": "MÚSICA",
        "pregunta": "¿En qué club de Liverpool se dieron a conocer los Beatles?",
        "correcta": "A",
        "A": "Cavern Club",
        "B": "Liverpool Club",
        "C": "Dark Cavern"
    },
    {
        "color": "negro",
        "tema": "VELOCIDAD",
        "pregunta": "¿Cuál de estos animales es más rápido?",
        "correcta": "B",
        "A": "Babosa",
        "B": "Caracol"
    },
    {
        "color": "negro",
        "tema": "RUBIAS",
        "pregunta": "¿Cuál de estas rubias tenia un coeficiente intelectual de 163?",
        "correcta": "B",
        "A": "Marilyn Monroe",
        "B": "Jayne Mansfield"
    },
    {
        "color": "negro",
        "tema": "OBRAS",
        "pregunta": "¿Qué conocido drama de Shakespeare está ambientado en el castillo de Elsinor?",
        "correcta": "A",
        "A": "Hamlet",
        "B": "Macbeth"
    },
    {
        "color": "negro",
        "tema": "LEYENDAS",
        "pregunta": "Según la leyenda, ¿a quienes transformó Gefion en bueyes? ",
        "correcta": "A",
        "A": "A sus hijos",
        "B": "A sus hermanos"
    },
    {
        "color": "negro",
        "tema": "LIBROS",
        "pregunta": "¿Qué libro sostenía Mark Chapman cuando disparó a John Lennon?",
        "correcta": "B",
        "A": "Trampa 22",
        "B": "El Guardián entre el centeno"
    },
    {
        "color": "negro",
        "tema": "MONUMENTOS",
        "pregunta": "¿Qué sostiene en su mano izquierda la Estatua de la Libertad?",
        "correcta": "A",
        "A": "Libro",
        "B": "Antorcha"
    },
    {
        "color": "negro",
        "tema": "HISTORIA",
        "pregunta": "¿En qué ciudad griega se abrió la primera biblioteca pública del mundo?",
        "correcta": "A",
        "A": "Atenas",
        "B": "Macedonia"
    },
    {
        "color": "negro",
        "tema": "LITERATURA",
        "pregunta": "¿Qué pintor francés es autor del célebre cuadro La libertad guiando al pueblo?",
        "correcta": "B",
        "A": "Monet",
        "B": "Delacroix"
    },
    {
        "color": "negro",
        "tema": "JUEGOS OLÍMPICOS",
        "pregunta": "¿En qué ciudad alemana se celebraron los Juegos Olímpicos de 1972?",
        "correcta": "A",
        "A": "Munich",
        "B": "Moscú"
    },
    {
        "color": "negro",
        "tema": "MUROS",
        "pregunta": "¿Cuántos kilómetros tenía el muro de Berlín?",
        "correcta": "B",
        "A": "133 Km",
        "B": "165 Km"
    },
    {
        "color": "negro",
        "tema": "JUEGOS",
        "pregunta": "¿De qué país es originario el Cubo Rubik?",
        "correcta": "B",
        "A": "Alemania",
        "B": "Hungría"
    },
    {
        "color": "negro",
        "tema": "ISLAS",
        "pregunta": "¿Cuál de las Islas Baleares es conocida como la isla blanca?",
        "correcta": "A",
        "A": "Ibiza",
        "B": "Menorca"
    },
    {
        "color": "negro",
        "tema": "MITOLOGÍA",
        "pregunta": "¿A qué héroe se le atribuye la creación del estrecho de Gibraltar?",
        "correcta": "A",
        "A": "Hércules",
        "B": "Ulises"
    },
    {
        "color": "negro",
        "tema": "GASTRONOMÍA",
        "pregunta": "¿Con qué leche no se elabora el queso de Burgos?",
        "correcta": "A",
        "A": "Cabra",
        "B": "Oveja"
    },
    {
        "color": "negro",
        "tema": "DINERO",
        "pregunta": "¿Cuál es considerado según la revista Forbes el español más rico?",
        "correcta": "A",
        "A": "Amancio Ortega",
        "B": "Emilio Botín"
    },
    {
        "color": "negro",
        "tema": "LITERATURA",
        "pregunta": "¿Cuál de los siguientes no es un personaje de las novelas de Charles Dickens?",
        "correcta": "B",
        "A": "Oliver Twist",
        "B": "John Silver"
    },
    {
        "color": "negro",
        "tema": "ÁRBOLES",
        "pregunta": "¿De qué árbol son las ramas con qué se golpea suavemente el cuerpo en una sauna?",
        "correcta": "B",
        "A": "Arce",
        "B": "Abedul"
    },
    {
        "color": "negro",
        "tema": "CINE",
        "pregunta": "¿Qué actor da vida a Conan, el Bárbaro?",
        "correcta": "A",
        "A": "Arnold Schwarzenegger",
        "B": "Sylvester Stallone"
    },
    {
        "color": "negro",
        "tema": "DEPORTES",
        "pregunta": "¿Quién perdió la final de Wimbledon frente a su hermana?",
        "correcta": "B",
        "A": "Venus Williams",
        "B": "Serena Williams"
    },
    {
        "color": "negro",
        "tema": "EPITAFIOS",
        "pregunta": "¿Qué estaba escrito en la lápida del artista de voz de dibujos animados Mel Blanc?",
        "correcta": "B",
        "A": "¿Qué hay de nuevo, viejo?",
        "B": "Esto es todo amigos"
    },
    {
        "color": "negro",
        "tema": "ANATOMÍA HUMANA",
        "pregunta": "¿Qué pulmón pesa más en el cuerpo humano?",
        "correcta": "A",
        "A": "El derecho",
        "B": "El izquierdo"
    },
    {
        "color": "negro",
        "tema": "GENÉTICA",
        "pregunta": "¿Dónde desarrolló Darwin la teoría de la evolución?",
        "correcta": "A",
        "A": "Las Islas Galápagos",
        "B": "Las Islas Maldivas"
    },
    {
        "color": "negro",
        "tema": "CONSTRUCCIÓN",
        "pregunta": "¿Cuál de estos muros era el más largo?",
        "correcta": "A",
        "A": "Muro de Berlín",
        "B": "Muro de Adriano"
    },
    {
        "color": "negro",
        "tema": "COLORES",
        "pregunta": "¿De qué color es la leche de yak?",
        "correcta": "A",
        "A": "Rosa",
        "B": "Amarillo"
    },
    {
        "color": "negro",
        "tema": "ANIMACIÓN",
        "pregunta": "¿Quien dice \"¡Esto es todo amigos!\" al final de los dibujos animados Looney Tunes?",
        "correcta": "A",
        "A": "Porky el cerdo",
        "B": "El pato Lucas"
    },
    {
        "color": "negro",
        "tema": "VIAJAR",
        "pregunta": "¿Qué viaja a 186.200 millas por segundo?",
        "correcta": "A",
        "A": "La luz",
        "B": "El sonido"
    },
    {
        "color": "negro",
        "tema": "LITERATURA",
        "pregunta": "¿Quien es el autor del cuento El patito feo?",
        "correcta": "A",
        "A": "Anderson",
        "B": "Los hermanos Grimm"
    },
    {
        "color": "negro",
        "tema": "COMPOSITORES",
        "pregunta": "¿Qué compositor alemán se quedó ciego en 1749?",
        "correcta": "A",
        "A": "Johann Sebastian Bach",
        "B": "Wilhelm Richard Wagner"
    },
    {
        "color": "negro",
        "tema": "GASTRONOMÍA",
        "pregunta": "¿Cuál de los siguientes quesos es el más antiguo?",
        "correcta": "A",
        "A": "Roquefort",
        "B": "Camembert"
    },
    {
        "color": "negro",
        "tema": "TRANSPORTE",
        "pregunta": "¿Qué tren nos lleva de París a Londres por debajo del canal de la mancha?",
        "correcta": "B",
        "A": "Euromed",
        "B": "Eurostar"
    },
    {
        "color": "negro",
        "tema": "PALABRAS",
        "pregunta": "¿Qué significa el nombre Covadonga?",
        "correcta": "A",
        "A": "Cueva larga",
        "B": "Cueva falsa"
    },
    {
        "color": "negro",
        "tema": "ÁRBOLES",
        "pregunta": "¿Donde se encuentra el bosque de palmeras más grande de Europa?",
        "correcta": "B",
        "A": "Orihuela",
        "B": "Elche"
    },
    {
        "color": "negro",
        "tema": "AVENTURAS",
        "pregunta": "¿Qué aventurero escribió el libro de las maravillas?",
        "correcta": "A",
        "A": "Marco Polo",
        "B": "Julio Verne"
    },
    {
        "color": "negro",
        "tema": "DISTANCIA",
        "pregunta": "¿A cuántos centímetros equivale una pulgada?",
        "correcta": "B",
        "A": "A 2,45 cm",
        "B": "A 2,54 cm"
    },
    {
        "color": "negro",
        "tema": "MODELOS",
        "pregunta": "¿Cuál es el nombre real de la modelo de los sesenta conocida como Twiggy?",
        "correcta": "A",
        "A": "Lesley Hornby",
        "B": "Marie Lawrie"
    },
    {
        "color": "negro",
        "tema": "DINERO",
        "pregunta": "¿Cuál es la moneda de Vietnam?",
        "correcta": "A",
        "A": "Dong",
        "B": "Ding"
    },
    {
        "color": "negro",
        "tema": "FESTIVALES",
        "pregunta": "¿En qué mes tiene lugar la mayoría de las veces el Oktoberfest en Munich?",
        "correcta": "A",
        "A": "Septiembre",
        "B": "Noviembre"
    },
    {
        "color": "negro",
        "tema": "HISTORIA",
        "pregunta": "¿Cuál de estas universidades se fundó antes?",
        "correcta": "B",
        "A": "Cambridge",
        "B": "Oxford"
    },
    {
        "color": "negro",
        "tema": "INVENTOS",
        "pregunta": "¿Qué se inventó antes?",
        "correcta": "B",
        "A": "Pan de molde",
        "B": "Tractor"
    },
    {
        "color": "negro",
        "tema": "PELÍCULAS",
        "pregunta": "¿Cuál es el nombre del barco comandado por Davy Jones en Piratas del Caribe: En el fin del mundo?",
        "correcta": "A",
        "A": "El Holandés Errante",
        "B": "La Perla Negra"
    },
    {
        "color": "negro",
        "tema": "FOBIAS",
        "pregunta": "¿A que le tienen miedo las personas que sufren eritrofobia?",
        "correcta": "B",
        "A": "A los payasos",
        "B": "A sonrojarse"
    },
    {
        "color": "negro",
        "tema": "VIAJAR",
        "pregunta": "¿Qué color indica tradicionalmente el agua caliente en un cuarto de baño de Canadá?",
        "correcta": "A",
        "A": "Rojo",
        "B": "Azul"
    },
    {
        "color": "negro",
        "tema": "RÉCORDS DEL MUNDO",
        "pregunta": "¿Cuál de estas distancias es mayor?",
        "correcta": "A",
        "A": "Récord mundial de salto de longitud",
        "B": "Récord mundial de salto con pértiga"
    },
    {
        "color": "negro",
        "tema": "CIENCIA",
        "pregunta": "¿En cual de estas características es 330.330 mayor el Sol que la Tierra?",
        "correcta": "B",
        "A": "Calor",
        "B": "Tamaño"
    },
    {
        "color": "negro",
        "tema": "JUEGOS",
        "pregunta": "¿Cuál de los siguientes juegos fue inventado por el periodista Arthur Wynne?",
        "correcta": "A",
        "A": "Crucigrama",
        "B": "Sudoku"
    },
    {
        "color": "negro",
        "tema": "COMPOSITORES",
        "pregunta": "¿Quién nació antes?",
        "correcta": "B",
        "A": "Beethoven",
        "B": "Mozart"
    },
    {
        "color": "negro",
        "tema": "TELEVISIÓN",
        "pregunta": "¿Cuál de las siguientes actrices nació antes?",
        "correcta": "B",
        "A": "Patricia Conde",
        "B": "Marta Torné"
    },
    {
        "color": "negro",
        "tema": "MOTOCICLISMO",
        "pregunta": "¿Por cuál de los siguientes equipos no ha pasado nunca Valentino Rossi?",
        "correcta": "B",
        "A": "Honda",
        "B": "Suzuki"
    }
]
let preguntas = [];
cargarPreguntas(data)

class Jugador {
    constructor(nombre) {
        this.nombre = nombre
        this.dinero = 1000000
        this.nrespuestas = 0
    }
}

let jugadores = [];
let turnos = 0
let histdinero = [1000000, 1000000];
let npregunta = 1;
let nopciones = 4

function cargarPreguntas(data) {
    data.forEach(p => {
        preguntas.push(p)
    });
}

let intervalo = null;

function empezarCuenta() {
    intervalo = setInterval(restarSegundo, 1000);
}

function restarSegundo() {
    let m = document.getElementById("m").innerHTML;
    let s = document.getElementById("s").innerHTML;
    let s2;

    if (m == "1:") {
        s2 = "59";
        document.getElementById("m").innerHTML = ""
    } else {
        s2 = parseInt(s) - 1;
        if (s2 < 10 && s2 >= 0) { s2 = "0" + s2; }
        else { s2 = s2.toString(); }
    }

    if (s2 == "-1") {
        pararCuenta();
        hecho();
    } else {
        document.getElementById("s").innerHTML = s2
    }
}

function pararCuenta() {
    clearInterval(intervalo);
    intervalo = null;
}


//Empieza la partida, después de introducir los nombres de los equipos

function empezarJuego() {
    let ovacion = document.getElementById("ovacion")
    ovacion.pause()
    ovacion.currentTime = 0

    document.getElementById("dineroj1").value = '1000000€'
    document.getElementById("dineroj2").value = '1000000€'
    document.getElementById("comenzar").hidden = true
    document.getElementById("m").innerHTML = "1:"
    document.getElementById("s").innerHTML = "00"
    document.getElementById("cronometro").hidden = false

    document.getElementById("fin").innerHTML = ""
    jugadores = []
    turnos = 0
    histdinero = [1000000, 1000000]
    npregunta = 1
    nopciones = 4

    document.querySelectorAll(".nombre").forEach(input => {
        jugadores.push(new Jugador(input.value))
        input.disabled = true
    });



    jugadores = jugadores.concat(jugadores, jugadores, jugadores, jugadores, jugadores, jugadores, jugadores)

    empezarTurno()

}

//Empieza el primer turno y cada uno de los demás turnos, o se acaba la partida
function empezarTurno() {
    let abucheo = document.getElementById("abucheo")
    let aplausos = document.getElementById("aplauso")
    abucheo.pause()
    abucheo.currentTime = 0
    aplausos.pause()
    aplausos.currentTime = 0

    let jugador1 = jugadores[0]
    let jugador2 = jugadores[1]

    if (turnos == 16) {
        if (jugador1.dinero > jugador2.dinero) {
            finJuego(jugador1.nombre)
        }
        else if (jugador2.dinero > jugador1.dinero) {
            finJuego(jugador2.nombre)
        }
        else if (jugador2.dinero == jugador1.dinero) {
            finJuego("empate")
        }
    }

    else if (jugador1.nrespuestas == jugador2.nrespuestas && turnos >= 2) {
        npregunta++
        if (jugador1.dinero == 0 && !(jugador2.dinero == 0)) {
            finJuego(jugador2.nombre)
        }
        else if (jugador2.dinero == 0 && !(jugador1.dinero == 0)) {
            finJuego(jugador1.nombre)
        }
        else if (jugador2.dinero == 0 && jugador1.dinero == 0) {
            let dineroanteriorj1 = histdinero[turnos - 2]
            let dineroanteriorj2 = histdinero[turnos - 1]

            if (dineroanteriorj1 > dineroanteriorj2) {
                finJuego(jugador1.nombre)
            }
            else if (dineroanteriorj2 > dineroanteriorj1) {
                finJuego(jugador2.nombre)
            }
            else if (dineroanteriorj1 == dineroanteriorj2) {
                finJuego("empate")
            }
        }
        else {
            continuarPartida()
        }
    } else {
        continuarPartida()
    }
}

//Se continúa la partida y se muestran los temas a elegir y el dinero del jugador
function continuarPartida() {
    let jugador = jugadores[turnos]

    document.body.style.backgroundImage = "url(img/fondo2.png)"
    document.getElementById("terminar").hidden = true
    document.getElementById("hecho").hidden = true
    document.getElementById("apuesta").hidden = true
    document.getElementById("m").innerHTML = "1:"
    document.getElementById("s").innerHTML = "00"
    document.getElementById("juego").hidden = true
    document.getElementById("np").innerHTML = npregunta
    document.getElementById("jugador").innerHTML = jugador.nombre
    mostrarTemas()
    document.getElementById("dinero").innerHTML = jugador.dinero + "€"

    document.getElementById("temas").hidden = false

    document.querySelectorAll(".opcion").forEach(opcion => {
        opcion.value = "0"
    });
    document.querySelectorAll(".valor").forEach(valor => {
        valor.innerHTML = ""
    });
    document.getElementById("partida").hidden = false;

    document.querySelectorAll("#A,#B,#C,#D").forEach(input => {
        input.parentNode.style.backgroundColor = "white"
    });
}

//Se muestran los temas a elegir, escogidos aleatoriamente según el número de pregunta
function mostrarTemas() {
    let numeroPregunta = document.getElementById("np").innerHTML
    let temasPosibles = []
    if (numeroPregunta >= 1 && numeroPregunta <= 4) {
        preguntas.forEach(pregunta => {
            if (pregunta.color == "rojo") {
                temasPosibles.push(pregunta.tema)
            }
        });
    }
    else if (numeroPregunta >= 5 && numeroPregunta <= 7) {
        preguntas.forEach(pregunta => {
            if (pregunta.color == "azul") {
                temasPosibles.push(pregunta.tema)
            }
        });
    }
    else if (numeroPregunta == 8) {
        preguntas.forEach(pregunta => {
            if (pregunta.color == "negro") {
                temasPosibles.push(pregunta.tema)
            }
        });
    }

    let pos_aleatoria = randomRango(temasPosibles.length - 1)
    let tema = temasPosibles[pos_aleatoria]

    let pos_aleatoria2 = randomRango(temasPosibles.length - 1)
    let tema2 = temasPosibles[pos_aleatoria2]

    while (tema2 == tema) {
        let pos_aleatoria = randomRango(temasPosibles.length - 1)
        tema2 = temasPosibles[pos_aleatoria]
    }

    document.getElementById("t1").innerHTML = tema
    document.getElementById("t2").innerHTML = tema2
}

//Se indica el tema escogido por el usuario
function indicarTema(tema) {
    document.getElementById("tema").innerHTML = tema
    document.getElementById("temas").hidden = true
    empezarCuenta()
    mostrarPregunta()
    let musica = document.getElementById("musica")
    musica.currentTime = 0
    musica.play()
}

//Se muestra una pregunta aleatoria acorde al tema elegido y el número de la pregunta, así como las posibles respuestas
function mostrarPregunta() {
    document.getElementById("correcta").hidden = true

    let numeroPregunta = document.getElementById("np").innerHTML
    let temaElegido = document.getElementById("tema").innerHTML
    let posiblesPreguntas = []
    let pregunta;
    if (numeroPregunta >= 1 && numeroPregunta <= 4) {
        preguntas.forEach(pregunta => {
            if (pregunta.color == "rojo" && pregunta.tema == temaElegido) {
                posiblesPreguntas.push(pregunta)
            }
        });

        nopciones = 4
        let posAleatoria = randomRango(posiblesPreguntas.length - 1)
        pregunta = posiblesPreguntas[posAleatoria]
        document.getElementById("pregunta").innerHTML = pregunta.pregunta
        document.getElementById("pregunta").style.border = "solid 6px red"
        document.querySelectorAll(".divC").forEach(e => e.style = "display:inline-block")
        document.querySelectorAll(".divD").forEach(e => e.style = "display:inline-block")

        document.getElementById("rA").innerHTML = pregunta.A
        document.getElementById("rB").innerHTML = pregunta.B
        document.getElementById("rC").innerHTML = pregunta.C
        document.getElementById("rD").innerHTML = pregunta.D
    }

    else if (numeroPregunta >= 5 && numeroPregunta <= 7) {
        preguntas.forEach(pregunta => {
            if (pregunta.color == "azul" && pregunta.tema == temaElegido) {
                posiblesPreguntas.push(pregunta)
            }
        });

        let posAleatoria = randomRango(posiblesPreguntas.length - 1)
        pregunta = posiblesPreguntas[posAleatoria]
        document.getElementById("pregunta").innerHTML = pregunta.pregunta
        document.getElementById("pregunta").style.border = "solid blue 6px"
        document.querySelectorAll(".divD").forEach(e => e.style = "display:none")
        nopciones = 3

        document.getElementById("rA").innerHTML = pregunta.A
        document.getElementById("rB").innerHTML = pregunta.B
        document.getElementById("rC").innerHTML = pregunta.C
    }

    else if (numeroPregunta == 8) {
        preguntas.forEach(pregunta => {
            if (pregunta.color == "negro" && pregunta.tema == temaElegido) {
                posiblesPreguntas.push(pregunta)
            }
        });

        let posAleatoria = randomRango(posiblesPreguntas.length - 1)
        pregunta = posiblesPreguntas[posAleatoria]
        document.getElementById("pregunta").innerHTML = pregunta.pregunta
        document.getElementById("pregunta").style.border = "solid gray 6px"
        document.querySelectorAll(".divC").forEach(e => e.style = "display:none")
        document.querySelectorAll(".divD").forEach(e => e.style = "display:none")
        nopciones = 2

        document.getElementById("rA").innerHTML = pregunta.A
        document.getElementById("rB").innerHTML = pregunta.B
    }


    document.getElementById("correcta").innerHTML = pregunta.correcta
    document.getElementById("juego").hidden = false
    document.getElementById("terminar").hidden = true
    document.getElementById("hecho").hidden = false
    document.getElementById("apuesta").hidden = false

    let jugador = jugadores[turnos]
    document.querySelectorAll("#A, #B, #C, #D").forEach(input => {
        input.max = jugador.dinero
    });

}

function cambiarValorInput(valor, id) {
    document.getElementById(id).innerHTML = valor + "€"
    let jugador = jugadores[turnos]
    let totalApostado = 0
    document.querySelectorAll("#A, #B, #C, #D").forEach(input => {
        totalApostado += parseInt(input.value)
    });
    document.getElementById("dinero").innerHTML = jugador.dinero - totalApostado + "€"
}
function cambiarMax() {
    let jugador = jugadores[turnos]
    let a = document.getElementById('A').value
    let b = document.getElementById('B').value
    let c = document.getElementById('C').value
    let d = document.getElementById('D').value
    document.getElementById('A').max = jugador.dinero - b - c - d
    document.getElementById('B').max = jugador.dinero - a - c - d
    document.getElementById('C').max = jugador.dinero - a - b - d
    document.getElementById('D').max = jugador.dinero - a - b - c
}

//Al hacer una apuesta, se determinan las opciones incorrectas y la correcta, y se actualiza el dinero del jugador
function hecho() {
    pararCuenta()
    let total = 0;
    let apuestas = 0;
    let jugador = jugadores[turnos]
    let jugador1 = jugadores[0]
    let jugador2 = jugadores[1]


    document.querySelectorAll(".opcion").forEach(opcion => {
        let cantidad = parseInt(opcion.value)
        total += cantidad
        if (cantidad > 0) {
            apuestas++
        }
    });


    if (document.getElementById("s").innerHTML == "00" && (total != jugador.dinero || apuestas == nopciones)) {
        let musica = document.getElementById("musica")
        musica.pause()

        jugador.dinero = 0
        document.getElementById("dinero").innerHTML = 0 + "€"
        document.getElementById("dineroj1").value = jugador1.dinero
        document.getElementById("dineroj2").value = jugador2.dinero
        histdinero.push(0)
        jugador.nrespuestas++
        turnos++

        document.getElementById("correcta").hidden = false
        document.getElementById("terminar").hidden = false
        document.getElementById("hecho").hidden = true

        document.querySelectorAll("#A,#B,#C,#D").forEach(input => {
            if (opcionCorrecta(input.id)) {
                input.parentNode.style.backgroundColor = "green"
            } else {
                input.parentNode.style.backgroundColor = "red"
            }
        });
    }
    else if (document.getElementById("s").innerHTML != "00" && (total != jugador.dinero || apuestas == nopciones)) {
        if (total != jugador.dinero) {
            alert("Hay que depositar todo el dinero en una o varias opciones")
            empezarCuenta()
        }
        else if (apuestas == nopciones) {
            alert("Debe haber al menos una casilla vacía")
            empezarCuenta()
        }
    }
    else {
        let musica = document.getElementById("musica")
        musica.pause()
        terminarTurno()
    }
}

function terminarTurno() {
    let total_correcta = 0
    let jugador = jugadores[turnos]
    let jugador1 = jugadores[0]
    let jugador2 = jugadores[1]

    document.querySelectorAll("#A,#B,#C,#D").forEach(input => {
        if (opcionCorrecta(input.id)) {
            total_correcta += parseInt(input.value)
            input.parentNode.style.backgroundColor = "green"
        } else {
            input.parentNode.style.backgroundColor = "red"
        }
    });

    if (total_correcta == 0) {
        let abucheo = document.getElementById("abucheo")
        abucheo.play()
    } else if (total_correcta > 0) {
        let aplausos = document.getElementById("aplauso")
        aplausos.play()
    }


    jugador.dinero = total_correcta
    document.getElementById("dinero").innerHTML = jugador.dinero + "€"
    document.getElementById("dineroj1").value = jugador1.dinero + "€"
    document.getElementById("dineroj2").value = jugador2.dinero + "€"
    histdinero.push(jugador.dinero)
    jugador.nrespuestas++
    turnos++

    document.getElementById("terminar").hidden = false
    document.getElementById("hecho").hidden = true
}

function opcionCorrecta(id) {
    if (id == document.getElementById("correcta").innerHTML) {
        return true
    }
}

//Se acaba el juego de acuerdo a las condiciones en la función empezarTurno
function finJuego(ganador) {
    if (ganador == "empate") {
        document.getElementById("fin").innerHTML = "¡Ha habido un empate!"
    }
    else {
        document.getElementById("fin").innerHTML = "¡Ha ganado " + ganador + "!"
        let ovacion = document.getElementById("ovacion")
        ovacion.play()
    }

    document.getElementById("partida").hidden = true
    document.getElementById("comenzar").hidden = false
    document.getElementById("cronometro").hidden = true

    document.querySelectorAll(".nombre").forEach(input => {
        input.disabled = false
    });

}

//Función que determina un número aleatorio dentro de un rango de valores pasado como parámetro
function randomRango(max) {
    return Math.floor(Math.random() * (max + 1));
}


