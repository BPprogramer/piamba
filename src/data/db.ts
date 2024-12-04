import { Projects } from "../types";


export const projectsDB: Projects = [
  {
    "id": "1",
    "name": "Administrador de Archivos",
    "description": "Este proyecto es un sistema full stack desarrollado específicamente para la Alcaldía Municipal de El Tablón de Gómez pero ha sido adquirido por otras asociaciones, con el objetivo de optimizar y digitalizar la gestión documental de todas las dependencias de la entidad. Anteriormente, los archivos eran almacenados en cajas físicas, lo que dificultaba su organización y acceso. Ahora, gracias a este sistema, los documentos pueden ser gestionados de manera digital y almacenados en la nube mediante la integración con Amazon S3, garantizando una capacidad para almacenar grandes volúmenes de datos de forma eficiente y segura.\nEl sistema maneja un superusuario, que es el usuario archivador, y puede crear algunos otros usuarios de cada dependencia, pero solo algunos usuarios específicos de cada dependencia. Esto significa que cada dependencia manejará un único usuario, que tendrá acceso principalmente a la información de su dependencia, pero podrá compartir y solicitar información a otras dependencias.\nContamos con autenticación segura y nativa que provee Laravel. La recuperación de contraseñas se realiza con el usuario administrador, tal como lo solicitó la entidad.\nEl sistema de archivos se encuentra en su primera fase o versión 1, la cual se irá actualizando año tras año gracias al tipo de contrato que se maneja con la entidad.\nEl sistema ha sido construido utilizando Laravel como API, implementando las mejores prácticas de desarrollo para garantizar robustez, escalabilidad y seguridad. La API desarrollada con Laravel permite una comunicación eficiente y está diseñada para soportar consultas rápidas y confiables. Por el lado del frontend, se ha utilizado React junto con Context API, lo que facilita el manejo del estado global de la aplicación. Las interacciones con el backend se realizan mediante fetch, asegurando una comunicación fluida y eficiente. Además, es un sistema multiusuario en el que cada usuario, con su correo electrónico y contraseña, puede acceder a los archivos correspondientes a su dependencia. Entre sus funcionalidades avanzadas, incluye:\n\n- Compartición de archivos mediante enlaces únicos.\n- Gestión de usuarios basada en roles y dependencias.\n- Cumplimiento de la Circular 500 de archivos, asegurando que la gestión documental cumpla con los estándares establecidos.\nEste proyecto no solo resuelve problemas de almacenamiento físico, sino que también moderniza los procesos de la entidad, incrementando la eficiencia, seguridad y accesibilidad de los documentos.",
    "img": [
      { "name": "/project_1/2.webp" },
 
    ],
    "technologys": [
      { "name": "Laravel 11", "img": "/icons/laravel.svg" },
      { "name": "React", "img": "/icons/react.svg" },
      { "name": "MySQL", "img": "/icons/mysql.svg" },
      { "name": "Tailwin", "img": "/icons/tailwindcss.svg" },
      { "name": "Docker", "img": "/icons/docker.svg" }
    ]
  },
  {
    "id": "2",
    "name": "facturación, servicios públicos",
    "description": "Este proyecto fue desarrollado principalmente para la empresa de servicios públicos ASUAAASTAB del Tablón de Gómez. Su propósito principal es gestionar suscriptores, facturación masiva, pagos unitarios y masivos, generación de reportes, entre otras funcionalidades avanzadas.\nEste es un proyecto realizado con PHP y JavaScript. La plantilla está hecha desde cero con SASS bajo la metodología de BEM.\nEs uno de los proyectos con los que más me siento satisfecho gracias al problema que solucionó, ya que vino a reemplazar un sistema realizado en Excel. Lo que antes le tomaba un mes validar más de 800 facturas, ahora se puede realizar en un día, ya que en las nuevas facturas tenemos un código de barras, y el empleado puede cargar de forma masiva las facturas solo pasando la pistola de código de barras. El sistema valida que no se repitan las facturas, todo esto gracias a eventos manejados con JavaScript.\nEl modelo de negocio es el siguiente:\n- Registro interno de estratos como aseo, alcantarillado y acueducto cada uno con su porcentaje correspondiente a la factura.\n- Registro de usuarios, cada uno con sus estratos. Al momento de registrar los usuarios se define cuánto pagará el subscriptor y cuánto le subsidiará la alcaldía.\n- Generación de las facturas de cada suscriptor. Si el usuario no pagó alguna factura anterior, el monto pendiente llegará en la nueva factura.\n- Cargue masivo de pagos y también individuales. Esta es una parte que les fascinó a los empleados, ya que generar más de 800 facturas con el sistema anterior era muy complicado. La mayoría de las veces el sistema colapsaba y la impresión no era la mejor. Ahora solo les toma 3 segundos generar todas las facturas. Gracias a la sección de suscriptores, podemos acceder a una factura específica o a todas. Además, si ya se facturó un mes, el sistema no permite generar nuevamente las facturas para ese mes, a menos que se eliminen las facturas previamente generadas.\n- Cuenta con login de usuarios con sesiones de php, registro de usuarios, cambio y asignación de contraseñas ya que la entidad solicitó que esto sea manejado por un superadministrador.\nCon la necesidad de facturación electrónica en Colombia de manera obligatoria, se actualizará a un sistema que sea capaz de generar factura electrónica, todo dependiendo del nuevo contrato con la empresa y otras asociaciones de la misma índole del municipio de El Tablón de Gómez.\n\nEl sistema está diseñado bajo el patrón de arquitectura MVC, lo que asegura una separación clara entre lógica, datos y presentación. Además, se desarrolló un miniframework propio que optimiza la gestión de eventos y permite un flujo de trabajo ágil y modular.\n\nPara el diseño, se utilizó CSS3 con las mejores prácticas, empleando la metodología BEM (Block Element Modifier). Por ejemplo, las clases siguen una estructura organizada como 'content', 'content__image', y modificadores como 'content__image--big', lo que facilita la mantenibilidad y escalabilidad del código.\n\nTambién se utilizó SASS como preprocesador para generar un CSS más eficiente y reutilizable, junto con datatables para el manejo de tablas dinámicas y una interfaz gráfica intuitiva. Gracias a estas implementaciones, la empresa logró reducir significativamente sus tiempos de trabajo: lo que antes tardaba un mes, ahora se completa en un máximo de tres días.",

    "img": [
      { "name": "/project_2/1.webp" },
      { "name": "/project_2/2.webp" },
      { "name": "/project_2/3.webp" },
      { "name": "/project_2/4.webp" },
      { "name": "/project_2/5.webp" },
      { "name": "/project_2/6.webp" },
      { "name": "/project_2/7.webp" },
      { "name": "/project_2/8.webp" },
      { "name": "/project_2/9.webp" },
      { "name": "/project_2/10.webp" },
      { "name": "/project_2/11.webp" },
      { "name": "/project_2/12.webp" },
      { "name": "/project_2/13.webp" },
      { "name": "/project_2/14.webp" },
      { "name": "/project_2/15.webp" }

 
    ],
    "technologys": [
      { "name": "Javascript", "img": "/icons/js.svg" },
      { "name": "Php8", "img": "/icons/php.svg" },
      { "name": "Mysql", "img": "/icons/mysql.svg" },
      { "name": "CSS3", "img": "/icons/css3.svg" },
      { "name": "SASS", "img": "/icons/sass.svg" }

    ]
  },
  {
    "id": "3",
    "name": "Sistema POS (Punto de Venta)",
    "description": "Es un proyecto desarrollado de manera independiente que ha sido implementado en más de 10 puntos de venta de diferentes sectores, como ferreterías, tiendas, licorerías, droguerías, entre otros.\nEl sistema cuenta con bastantes funcionalidades, como:\n- Avance del estado actual del negocio.\n- Ventas, con diferentes métodos de pago.\n- Registro de productos.\n- Registro de proveedores.\n- Registro de categorías.\n- Abastecimiento.\n- Registro de clientes.\n- Pagos de créditos.\n- Cajas.\nEntre otras funcionalidades.\nEste proyecto se encuentra desarrollado como sistema monolítico con PHP 8, JavaScript, y MySQL. Utiliza la plantilla AdminLTE, por lo tanto, está manejado con Bootstrap y jQuery.\nEn cuanto a PHP, está bajo la arquitectura de MVC con un miniframework desarrollado por mí mismo para facilitar las consultas, similar a un ORM. Las sesiones de usuario se manejan con la variable global $_SESSION.\nPor otro lado, del lado del cliente contamos con consultas utilizando Fetch API, y los registros se muestran con DataTables proporcionado por AdminLTE, lo que hace que el manejo de datos y la interacción del usuario sea una buena experiencia."
    ,
    "img": [
      { "name": "/project_3/1.webp" }
    ],
    "technologys": [
      { "name": "php8", "img": "/icons/php.svg" },
      { "name": "javaScript", "img": "/icons/js.svg" },
      { "name": "Mysql", "img": "/icons/mysql.svg" },
      { "name": "jquery", "img": "/icons/jquery.svg" },
      { "name": "bootstrap", "img": "/icons/bootstrap.svg" }
    ]
  },
  {
    "id": "4",
    "name": "Aministrador de Tareas",
    "description": "Este proyecto es un administrador de tareas con autenticación mediante JWT (Json Web Token). Permite crear usuarios a través de un formulario de registro, el cual requiere verificación por correo electrónico. También es posible restablecer la contraseña mediante un token enviado al correo de registro. Todos los formularios incluyen validación con React Hook Form.\n\Una vez autenticados, los usuarios acceden a un panel donde pueden ver sus proyectos y tareas. Cada usuario puede ver y distinguir los proyectos que ha creado y en los que es colaborador. Para crear un proyecto, se cuenta con un formulario también validado por React Hook Form. Dentro de un proyecto, se pueden agregar colaboradores mediante su correo electrónico registrado.\n\nCada proyecto tiene tareas con cinco estados: 'Pendiente', 'En espera', 'En progreso', 'En revisión' y 'Completado'. El estado de las tareas puede cambiarse mediante un select o mediante la función de arrastrar y soltar (drag and drop). Todas las acciones realizadas en las tareas se registran para saber qué usuario realizó el último cambio, ya que tanto el manager como los colaboradores pueden participar en las tareas.\nCada tarea permite agregar notas, las cuales estarán asociadas al usuario que las creó y a la tarea correspondiente. Las tareas, proyectos y notas pueden ser editadas o eliminadas únicamente por el usuario creador. Los colaboradores, por su parte, pueden visualizarlas sin restricciones.\nEl sistema maneja roles y validaciones tanto en el frontend como en el backend, proporcionando una experiencia de usuario interactiva y fácil de usar, gracias a la interfaz creada con TailwindCSS.\nEste sistema está desarrollado con un stack completo basado en MERN (MongoDB, Express, React y Node), diseñado para la administración de tareas en empresas. La API está implementada en Express, separando claramente el backend del frontend. En el frontend, se utiliza React junto con TypeScript para garantizar un código tipado y seguro. En el backend, Mongoose se emplea como ORM para interactuar con MongoDB, optimizando el manejo de esquemas y consultas.\nLa validación de los formularios se maneja con React Hook Form y Zod, asegurando la consistencia y seguridad de los datos. El sistema sigue las mejores prácticas de desarrollo y está en su fase final, listo para implementaciones empresariales independientes",


    "img": [
      { "name": "/project_4/1.webp" },
      { "name": "/project_4/2.webp" },
      { "name": "/project_4/3.webp" },
      { "name": "/project_4/4.webp" },
      { "name": "/project_4/5.webp" },
      { "name": "/project_4/6.webp" },
      { "name": "/project_4/7.webp" },
      { "name": "/project_4/9.webp" },
      { "name": "/project_4/10.webp" },
   

    ],
    "technologys": [
      { "name": "node", "img": "/icons/node.svg" },
      { "name": "express", "img": "/icons/express.svg" },
      { "name": "react", "img": "/icons/react.svg" },
      { "name": "typescript", "img": "/icons/ts.svg" },
      { "name": "moongoDB", "img": "/icons/mongodb.svg" },
      { "name": "tailwindcss", "img": "/icons/tailwindcss.svg" }
    ]
  },

  {
    "id": "5",
    "name": "Taller de Celulares",
    "description": "Este sistema fue desarrollado específicamente para talleres de reparación de móviles. Permite registrar los datos de los equipos ingresados al taller junto con la información del propietario. Cada propietario puede acceder mediante usuario y contraseña para realizar el seguimiento del estado de su dispositivo, así como de los costos asociados. Una vez que el equipo es entregado y marcado como finalizado en el sistema, el usuario correspondiente es eliminado automáticamente.\n\nPor otro lado, el administrador cuenta con herramientas para:\n- Supervisar el estado de varios equipos simultáneamente.\n- Gestionar facturas.\n- Generar reportes.\n- Manejar valores contables\n Entre otras funcionalidades.\n\nEl sistema utiliza una interfaz similar al sistema POS, empleando la misma plantilla visual y las mismas tecnologías, lo que garantiza una experiencia familiar e intuitiva. Gracias a su diseño funcional y personalizable, ha sido muy bien recibido por los talleres que lo han adquirido, ayudándolos a optimizar sus procesos de gestión y atención al cliente.\n\nEste proyecto se encuentra desarrollado como sistema monolítico con PHP 8, JavaScript, y MySQL. Utiliza la plantilla AdminLTE, por lo tanto, está manejado con Bootstrap y jQuery.\nEn cuanto a PHP, está bajo la arquitectura de MVC con un miniframework desarrollado por mí mismo para facilitar las consultas, similar a un ORM. Las sesiones de usuario se manejan con la variable global $_SESSION.\nPor otro lado, del lado del cliente contamos con consultas utilizando Fetch API, y los registros se muestran con DataTables proporcionado por AdminLTE, lo que hace que el manejo de datos y la interacción del usuario sea una buena experiencia"
    ,
    "img": [
      { "name": "/project_5/1.webp" },

    ],
    "technologys": [
      { "name": "php8", "img": "/icons/php.svg" },
      { "name": "javaScript", "img": "/icons/js.svg" },
      { "name": "Mysql", "img": "/icons/mysql.svg" },
      { "name": "jquery", "img": "/icons/jquery.svg" },
      { "name": "bootstrap", "img": "/icons/bootstrap.svg" }
    ]
  },

]
