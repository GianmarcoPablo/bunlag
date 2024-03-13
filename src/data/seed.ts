import bcrypt from "bcryptjs"

export const initialData = {
    users: [
        { email: "gianmarcop58@gmail.com", name: "gianmarco", "password": bcrypt.hashSync("123456"), role: "admin" },
        { email: "camila58@gmail.com", name: "camila", "password": bcrypt.hashSync("erestunoyo"), role: "user" }
    ],
    jobs: [
        {
            id: 'UUIDNUMERO-1',
            company: 'INSTITUTO DANIEL ALCIDES CARRION',
            jobTitle: 'Call Center / Ventas / Comisiones / Carreras Técnicas',
            description: 'En el Instituto Carrión, estamos Licenciados por MINEDU, certificados por Great Place To Work y comprometidos en brindar una Experiencia Educativa Excepcionaly mejorar la vida de miles de estudiantes, se parte de nuestro propósito siendo nuestro(a) próximo(a) Asesor de ventas:Objetivo Principal:Responsable de realizar llamadas para alcanzar la meta mensual de ventas y captación de prospectos.Nuestro(a) próximo(a) colaborador debe contar con: 🎓Estudios concluidos o en curso eadministración, marketing, secretariado o carreras afines. 📊Experiencia laboral mínima de un año en el árecomercial. 📞Experiencia específica en ventas vía telefónica, con un mínimo de 6 meses de práctica en esector.Estas serán tus principales funciones: 📋Proporcionar información detallada y oportuna sobre lobeneficios y requisitos de cada producto institucional, demostrando una actitud proactiva. ☎️Gestionar lmatrícula de posibles interesados mediante comunicación telefónica, asegurando un seguimiento efectivo parconcretar la venta de manera satisfactoria. 📁Elaborar de manera minuciosa los expedientes de estudiantenuevos, completando todos los documentos necesarios para la matrícula y consolidándolos. 🤝Coordinar con el Promotor de Venta la identificación y captación dposibles interesados, contribuyendo al cierre exitoso de ventas. 🖥️Registrar con precisión los datos deestudiante en el sistema, garantizando la integridad de la información al completar todos los campos necesarios y revisar la documentación proporcionada que certificla autenticidad de la información.Remuneración: La remuneración fija y en planilla es de 1200 soles, más unparte variable en comisiones del casi 150%, adicional a tu salario base.Disfruta de los beneficios qutenemos para ti: 📄 Ingreso directo a planilla con todos los beneficios de ley desde el primer día💸Remuneración competitiva, alineada con las tendencias del mercado, complementada con comisiones atractivaque reconocen y valoran tu esfuerzo y desempeño. 🌐 Únete a una empresa comprometida con el bienestar y ecrecimiento de sus colaboradores. 🚀Benefíciate de descuentos corporativos y recreativos exclusivos.¡Postuly se parte de nuestra familia Carrión y juntos sigamos brindando una experiencia educativa excepcional parmiles de estudiantes!',
            location: 'Lima, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_10007529_aviso_1116225076_bum_vfbc1348c.jpg',
            area: "UUIDNUMEROAREA-1"
        },
        {
            id: 'UUIDNUMERO-2',
            company: 'ESTUDIO JURIDICO ROMERO DEC.&amp; ASOCIADOS S.A.C.',
            jobTitle: 'ANALISTA DE PROCESOS Y DESARROLLO TI - SEMI SENIOR',
            description: 'Importante empresa dedicada a la Banca y Finanzas con sede en Perú y Ecuador, con sólida experiencia dentro del país, se encuentra en la búsqueda de personas talentosas como tú. Postula con nosotros y forma parte de nuestro equipo como ANALISTA DE PROCESOS Y DESARROLLO TI.REQUISITOS Profesional Titulado en Ingeniería de Sistemas, Computació e informático afines.Conocimiento en Lenguaje de Programación PHP o Laravel, Arquitectura de Software y base de datoExperiencia mínima de 2 años en proyectos de Sistemas integrados o CRM(no indispensable) Conocimeitnssólidos en metododologías Agile SCRUMFUNCIONES Definir las características del producto mínimo viable(prototipos).Recoger y tener claros los requisitos del software.Analizar, diseñar programar aplicaciones con buenas prácticas de desarrollo seguro.Revisar las entregas de los avances ddesarrollo ti.Implementar y ensamblar estructuras y condiciones para la ejecución correcta de aplicacioneManejar los controles de requerimientos para la ejecución de software de trabajo de acuerdo a las normas procedimientos establecidos por el departamento de sistemas.Realizar estudios y cambios necesarios en losistemas de información, corrigiendo deficiencias e implementando mejoras.Implementar mecanismos que permitacontrolar la integridad de los datos administrados por los sistemas de información de la empresa.Manteneoperativo el sistema con la versión mas estable.Gestionar con las habilidades de product owner basados emetodologías ágiles.Ejecución de pruebas funcionales.BENEFICIOS Sueldo acorde al mercado Planilla coBeneficios de Ley Seguros de Vida Aprendizaje continúo.Días libres.',
            location: 'Cercado De Lima, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/0/0/1/0/1/6/1/5/1/1/logoMainPic_10161511.jpg',
            area: "UUIDNUMEROAREA-13"
        },
        {
            id: 'UUIDNUMERO-3',
            company: 'Don Ricardo',
            jobTitle: 'Analista de Ingeniería de Procesos',
            description: 'En Don Ricardo buscamos al mejor talento para asumir el reto como Analista de Ingeniería de Procesos en la ciudad de Ica. ¡La oportunidad de tener un futuro mejor, está aquí!Analista de Ingeniería de ProcesosRequisitos: Bachiller Universitario en Ingeniería Industrial, Agroindustrial, Empresarial, Sistemas. Experiencia mínima de 2 años en posiciones similares, dentro de la cual haya liderado o participado de proyectos de mejora continua.Conocimientos: Conocimientos de análisis de causraíz, estudio del trabajo(métodos, tiempos, ergonomía), lean manufacturing, six sigma, gestión de proyectoscostos de producción, indicadores.Inglés nivel intermedioMs Office(Word, Excel y Power Point) niveintermedio – avanzado Power platform(power bi, power apps) nivel intermedio – avanzado Buen nivel de redacción y elaboración de presentación efectivas.Objetivo del Puesto: Velar por leficiencia operativa de la organización y el cumplimiento de los objetivos y necesidades del negocio, través del análisis, optimización y mejora continua de los procesos.Modalidad: Presencial"En Don Ricardo contamos con talentos diversos y promovemos la contratación de personas en igualdad de oportunidades. Valoramos las capacidades y el mérito de todos nuestros integrantes y nuestros procesos de reclutamiento son inclusivos y libres de discriminación".Por ello ¡Todos los talentos son bienvenidos!',
            location: 'Ica, Ica',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_10105080_bum_v840b67c8.jpg',
            area: "UUIDNUMEROAREA-12"
        },
        {
            id: 'UUIDNUMERO-4',
            company: 'ESTUDIO JURIDICO ROMERO DEC.&amp; ASOCIADOS S.A.C.',
            jobTitle: 'Auxiliar de Gestión del Talento Humano',
            description: 'Importante empresa dedicada a la Banca y Finanzas con sede en Perú y Ecuador, con sólida experiencia dentro del país, se encuentra en la búsqueda de personas talentosas como tú. Postula con nosotros y forma parte de nuestro equipo como Auxiliar de Gestión del Talento Humano.Requisitos: Egresados o Estudiante de los últimos ciclos de la carrera dpsicología.Experiencia mínima de 6 meses en procesos de selección para personal Call Center masivExperiencia en elaboración de informes.Disponibilidad para laborar en horario de oficina.Vivir en distritoaledaños al centro de lima.Funciones: Realizar las publicaciones en las diferentes bolsas de trabajoRealizar filtro curricular y telefónico Gestionar las entrevistas individuales o grupales por competencias. Revisar las evaluaciones Psicolaborales.Apoyar en el proceso de Onboarding del personal.Apoyar en loproyectos de Clima laboral, evaluación de desempeño y necesidades de capacitación.Gestionar las actividadede confraterndad y camaradería con los colaboradores.Elaborar y presentar los reportes del reclutamiento selección.Otras funciones que asigne su jefe directo.Beneficios: Sueldo acorde al mercado  Planilla coBeneficios de Ley   Seguros de Vida   Aprendizaje continúo.Días libres.',
            location: 'Lima Cercado, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/0/0/1/0/1/6/1/5/1/1/logoMainPic_10161511.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-5',
            company: 'Confidencial',
            jobTitle: 'Vendedores Zona Jockey - Chacarilla - Rambla San Borja - Larcomar - Sa...',
            description: 'VALDITEX S.A.Prestigiosa empresa que trabaja con las marcas de Tommy Hilfiger y Calvin Klein dedicada a la comercialización de productos textiles y artículos de cuero, en la actualidad contamos con 80 puntos de venta , por lo tanto buscamos personas para el puesto de VENDEDORES para nuestras tiendas departamentales / Boutiques para formar parte de nuestra corporación.REQUISITOS: Persona Proactiva, Responsable y sobretodo puntual. Experiencia deseable de 3 meses en ventas. Disponibilidad de Tiempo Completo. Carnet de sanidad vigente o con disponibilidad para tramitarlo.FUNCIONES: Impulsar la venta de las prendas y accesorios de las marcas. Asesorar y atención al cliente.Ordenar, reponer, vaporizar y doblar prendas.Ayudar en la decoración del locaApoyar en limpieza del local.COMPETENCIAS: Trabajo en equipo.Excelente capacidad de relacioneinterpersonales.Responsabilidad y gusto por doblar y ordenar ropa.BENEFICIOS: Horario: Tiempo Completo, dLunes a Domingo de 10 am a 10 pm, con 2 dias de descanso semanal, 1 hora de refrigerio y 30 min de descanspor la tarde.Zonas en las que trabajarías: Jockey - Chacarilla - Rambla San Borja - Larcomar - San Isidro - Salaverry.Remuneración: S / 1,025 Planilla desde el primer día, seguro EESALUD, asignacion familiar, CTS, gratificación, vacaciones, utilidades y demás beneficios de ley.',
            location: 'Lima, Lima',
            modality: 'Presencial',
            image: '',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-6',
            company: 'Instituto Científico del Pacífico',
            jobTitle: 'Asistente Académico de Ingeniería Mecánica',
            description: 'El Instituto Científico del Pacífico (ICIP) es un importante centro de capacitación e investigación que se propone impulsar y potenciar la capacidad de profesionales para que accedan a mayores oportunidades académicas laborales.Para ello, empleamos una metodología innovadora centrada en la motivación y en aprovechar al máximel conocimiento.Además, diseñamos programas de capacitación y certificación bajo los estándares de calidadpersonalización e innovación.Nos encontramos en la búsqueda de un Asistente Académico para el área dIngeniería Mecánica para elaborar material académico.REQUISITOS: Ser estudiante de último año, egresado bachiller de la carrera de Ingeniería mecánica Tener conocimientos de AutoCAD Mechanical(avanzado).Poseeconocimientos de Inventor.Manejar herramientas informáticas básicas.COMPETENCIAS: Compromiso con linnovación académica Comunicación efectiva Redacción eficaz y fluida, buena ortografía y manejo de archivoProactividadFUNCIONES Y RESPONSABILIDADES: Crear material académico relacionado con el curso.Realizainvestigaciones académicas vinculadas al curso.Proporcionar soporte académico relacionado con el cursDesempeñar funciones similares asignadas por el jefe inmediato.CONDICIONES LABORALES: Horario: lunes a sábadde 8:00 a.m.a 5:00 p.m.Trabajo presencial - Lima CercadoBENEFICIOS: Grato ambiente laboral.Pagos puntualeFlexibilidad en los horarios.Capacitaciones constantes.Llevar cualquiera de nuestros cursos de manergratuita y certificada.Oportunidades de promociones y ascensos según desempeño.Convenios educativos parcolaboradores.¡Únete a la comunidad de ICIP y potencia tus conocimientos a nivel profesional!',
            location: 'Cercado De Lima, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_10197721_bum_v989518ba.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-7',
            company: 'RCS Capital Humano',
            jobTitle: 'Gerente Comercial - Sector Ingeniería y Gerencia de Proyectos',
            description: 'Por encargo de nuestro cliente, empresa de ingeniería, supervisión y gerencia de proyectos de construcción, nos encontramos en la búsqueda de un GERENTE COMERCIAL.Requisitos: Profesional en Ingeniería Civil o Arquitectura. Experiencia mayor a 15 años en el sector construcción, gerencia de proyectos, ingeniería o supervisión. Marcada orientación comercial. Capacidad de Liderazgo, visión estratégica, negociación. Deseable con estudios de postgrados.Funciones: Asegurar el cumplimiento de las metas comerciales. Mantener excelentes relaciones comerciales con los clientes. Abrir nuevos mercados.',
            location: 'Lima, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/0/0/1/3/0/0/6/6/5/4/logoMainPic_13006654_bum_v189eb562.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-8',
            company: 'Promart',
            jobTitle: 'Supervisor(a) de Almacén - Promart La Campiña',
            description: 'Desde hace más de 10 años, venimos acompañando a miles de familias a tener su hogar soñado, gracias al talento disruptivo, innovador, apasionado y empoderado que forma parte del gran equipo Promart, empresa peruana del grupo Intercorp.Es así que, apostando siempre por la inclusión, diversidad e igualdad de oportunidades, buscamos seguir sumando al mejor talento, por lo que nos encontramos en la búsqueda de un(a) Supervisor(a) de Almacén.Misión del PuestoEjecutar de forma eficiente los procesos de recepción, almacenamiento, despacho y reposición gestionando con responsabilidad los recursos asignados para alcanzar los objetivos propuestos por el equipo de Operaciones Logísticas.¿Cuáles serán tus retos? Asegurar la correcta recepción de productos provenientes del Centro de Distribución y Proveedores Nacionales, validando reporte de faltantes y sobrantes y supervisando el escaneo de LPNs. Administrar y controlar los Despachos a Clientes, retiros de tienda, envíos a servicio técnico, Devoluciones a Proveedor y Centros de Distribución, y Transferencias entre tiendas.Responsable del proceso de reposición en los turnos que sea asignadgarantizando la ausencia de quiebres visuales en tienda impactando de forma positiva en los resultados venta.Asegurar la disponibilidad de recursos: RFs, Red Estable en Bodega y Tienda, Equipos LogísticoDotación de Personal y Gas.Control documentario: guías de remisión, check list y otros que sean de caráctauditable.Capacitar a colaboradores sobre el manejo de equipos logísticos(Montacarga, Apilador, transpalleléctrico y wave o su similar) velando por la continuidad operativa y la seguridad de todos los colaboradorAdministrar la malla horaria del personal a su cargo asegurando disponibilidad del equipo para cumplir clas operaciones del día.Capacitar a los colaboradores en todos los procesos operativos de los almacenerecepción, almacenaje, reposición, picking, despachos y control de inventarios.Garantizar la seguridad todo el equipo bajo su cargo, planificando procesos que no generen riesgos.Cumplir con la política vacaciones de la empresa para el personal que esté bajo su cargo.Realizar toda función o encargo que asigne su jefe inmediato y que conlleve a incrementar la eficiencia de la empresa.Identificar oportunidades de mejora en su operaciónproponerlas a su jefe inmediato.¿Cuál es el perfil que buscamos? Indispensable egresado(a) o en curso carrera técnica o universitaria en Administración de Empresa, Ing.Industrial o afín.Deseable conocimientcurso, diplomado, curso o maestría en Logística.Manejo de Office a nivel intermedio.Experiencia mínima de años asumiendo puesto y/ o funciones similares.Experiencia liderando equipos de trabajo.Indispensabdisponibilidad a tiempo completo, en horarios rotativo, 6 días de trabajo y 1 día de descanso semanalContar con disponibilidad para laborar en localidad o distrito de la tienda.¿Qué beneficios ofrecemosFormar parte de una de las mejores empresas para trabajar según el ranking del Great Place To Work 202Pertenecer al Club Intercorp y adquirir beneficios exclusivos para los colaboradores del grupo(hospedajeducación, tiendas por departamento, etc.).Programa de bienestar Promart integral para ti y tu familOportunidades de Crecimiento en Promart y Grupo Intercorp.Utilidades de acuerdo a los resultados de compañía.Tarjeta de alimentos.Beneficios de ley: Seguro de Salud, Asignación Familiar, GratificacióVacaciones.',
            location: 'Chorrillos, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/0/0/1/0/1/6/0/6/6/8/logoMainPic_10160668.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-9',
            company: 'Confidencial',
            jobTitle: 'Izipay Asesor Comercial (Remoto)',
            description: 'Somos YT Grupo, Empresa Líder con experiencia en el rubro de Medios de Pagos, Somos Socios Comerciales a nivel nacional de Izipay y con gran alegría te decimos que debido al crecimiento de nuestro grupo, estamos buscando a los mejores Talentos en Ventas como tú. ¡Únete a nuestro equipo de ventas en Izipay Perú!¿QUÉ OFRECEMOS? Contrato en Planilla FULL con 14 sueldos al año y todos los beneficios de ley (gratificaciones, vacaciones, CTS). Ingreso inmediato a planilla desde el primer día. Sueldo base competitivo, oscilando entre S/1200 y S/1500. Bono de Alimentacion por productividad. Bonos Semanales Aprox (s/.300). Comisiones ilimitadas, con montos que varían entre S/20 y S/200. Incentivos económicos y premios por desempeño destacado. Oportunidades de crecimiento y desarrollo profesional a través de evaluaciones trimestrales. Modalidad de trabajo desde casa (Home Office). Entrenamiento constante para potenciar tus habilidades.Ambiente laboral excepcional.Pagos puntuales y confiables. 100% de cobertura eseguro oncologico.Descuentos en Marcas y Empresas Afiliadas a la red.Presupuesto Digitales.¿QUÉ BUSCAMOSExperiencia previa en ventas remotas, preferiblemente en rubros como Medios de Pagos(P.O.S), Segurosproductos intangibles, créditos, etc.Habilidad para contactar y gestionar clientes con RUC 20, RUC 10 y DNParticipación en reuniones diarias de forma virtual con el equipo de ventas y los clientes(a través dplataformas de video llamada).Generación diaria de prospectos de manera remota a través de redes socialescorreo electrónico, video llamadas y llamadas telefónicas.Cierre efectivo de ventas de la línea de productode Izipay.Disponibilidad para trabajar de lunes a sábado en horarios de 9:00 AM a 6: 30 PM(lunes a viernes) de 9:00 AM a 1:00 PM(sábados).Habilidades destacadas de negociación y empatía.¡No esperes más y postula ahorpara formar parte de nuestro equipo!',
            location: 'Lima, Lima',
            modality: 'Híbrido',
            image: '',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-10',
            company: 'YATEL DATA S.A.C.',
            jobTitle: 'Oncosalud Ejecutivo de Ventas Remoto',
            description: 'Somos YT Grupo, Empresa Líder con experiencia en el rubro de Salud y Seguros, Somos Socios Comerciales a nivel nacional de Auna y Oncosalud y con gran alegría te decimos que debido al crecimiento de nuestro grupo, estamos buscando a los mejores Talentos en Ventas como tú.¿Cuales serían tus funciones? -Capturar clientes Para la marca Auna y oncosalud. -Reuniones diarias vía digital y presencial con el equipo de ventas y los clientes. (zoom, Google Meet, Microsoft teams). -Generar prospección diaria de manera digital, por base de datos, referidos. (Facebook, intagram correo, video llamadas, y llamadas a clientes) ¿Como saber que este puesto es para ti? - Si cuentas con experiencia mínima de 1 año a mas en ventas, negociando con clientes directos. Si tienes disponibilidad completa para realizar home office y tambien oficina presencial. (Contar con computadora Laptop propia cocámara, o PC con cámara(indispensable), celular con acceso a llamadas, internet, uso básico de Excel). - Stienes conocimientos en Microsoft Office(nivel avanzado). - Experiencia vendiendo seguros de salud.¿Cualeson los Beneficios ? -Ingreso a planilla con todos los beneficios de la ley(1 2 sueldos al año + gratificaciones + Cts. - Basico 1 2 0 0 incluido movilidad. - Bono de movilidad - Comisiones ilimitadas dmas de s /. 1 0 0 por una venta. - Horario de trabajo: lunes a viernes de 9am a 6: 3 0pm y sabados de 9 a 1pm. Equipo de alto rendimiento y ambiente de trabajo estimulante. - Trabajo en oficina y remoto. - Presupuestinterno para poder usarlo en captura de clientes - Pagos puntuales en las fechas indicadas. - Productinnovador y es el unico en Peru con ventajas vs el mercado. - Oportunidades de crecimiento y desarrollo, creemos en el desarrollo continuo te brindaremos talleres de captura de clientes, talleres dhabilidades blandas, talleres de liderazgo, talleres de producto todo con el fin de impulsarte a alcanzar tmáximo potencial.¡SUMATE A NUESTRO EQUIPO!',
            location: 'Lima, Lima',
            modality: 'Híbrido',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_13232575_bum_vd9c6b765.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-11',
            company: 'Pepsico',
            jobTitle: 'Vendedor de pre venta',
            description: '¿Estás buscando una oportunidad desafiante en una organización con un ambiente dinámico, innovador y diverso? Si es así, tu futuro es junto a nosotros en PepsiCo.Como una empresa de clase mundial, buscamos la excelencia en todo lo que hacemos desde el lanzamiento de un nuevo producto hasta su ejecución en el punto de venta. Por ello, necesitamos personas talentosas e innovadoras que sean apasionadas con lo que hacen.PepsiCo actualmente cuenta con un amplio portafolio de productos de alimentos y bebidas, tales como Lays, Doritos, Cheetos, Quaker, Chokis, Cuates, Karinto, Natuchips, Pepsi, 7Up, Gatorade, y muchas más marcas líderes en el mercado.Nuestra visión es ser el líder mundial en alimentos y bebidas al ganar con propósito. "Ganar con Propósito" refleja nuestra ambición de ganar de manera sostenible en el mercado e integrar el propósito en todos los aspectos del negocio. Para más información puedes ingresar en www.pepsico.comAhora estamos en búsqueda de esta posición:VENDEDOR PRE VENTAResponsabilidades: Cumplimiento de presupuesto de territorio, realizar pedidos adecuados al cliente, negociar venta incremental por acciones tácticas de volumen y lograr que el nivel de agotamiento en el punto de venta sea menor al 50% hasta la siguiente visita. Asegurar la implementación de los estándares de ejecución en el punto de venta(Exhibidor adecuado, posición dominante, multiposiciones, instalación dmaterial POP, rotación preventiva, mix adecuado de productos e infaltables.Atención y servicio a la zonasignada, cumplir la atención durante las fechas programadas a cada cliente, levantamiento de clientes nuevoy dar mantenimiento de la cartera de clientes.Mitigar el impacto de las devoluciones en mal estado en epunto de venta y realizar rotación preventiva del producto en los exhibidores.Lograr crecimiento sostenido eel territorio asignado.Asegurar la ejecución de las diferentes acciones de Trade Marketing en el punto dventa con el objetivo de traer venta incremental.Requisitos Deseable experiencia en Ventas Estudiosecundarios completos y de preferencia estudios superiores 1 año de experiencia en pre venta(canatradicional ¿Qué puedes esperar de nosotros?: Un entorno de trabajo flexible que promueva un equilibrisaludable entre la vida personal y profesional.Una cultura dinámica e inclusiva.Un equipo de apoyo qufomentará su crecimiento y desarrollo profesional.Oportunidad de trabajar con proyectos relevantes y dimpacto para el negocio.En PepsiCo,estamos comprometidos a brindar igualdad de oportunidades de desarrollo para todos los candidatos(as)un empleo sin excepción de raza, religión, sexo, orientación sexual, estado civil, edad, nacionalidaorigen o tipo de discapacidad.Respetamos y valoramos la diversidad como una fuerza de trabajo e innovación para la organización.¡Muchas gracias por pensar en PepsiCo para empezar o continuar con tu carrera profesional!',
            location: 'Lima, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_10140598_bum_v83f18152.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-12',
            company: 'Pepsico',
            jobTitle: 'Ejecutor de Ventas',
            description: '¿Estás buscando una oportunidad desafiante en una organización con un ambiente dinámico, innovador y diverso? Si es así, tu futuro es junto a nosotros en PepsiCo.Como una empresa de clase mundial, buscamos la excelencia en todo lo que hacemos desde el lanzamiento de un nuevo producto hasta su ejecución en el punto de venta. Por ello, necesitamos personas talentosas e innovadoras que sean apasionadas con lo que hacen.PepsiCo actualmente cuenta con un amplio portafolio de productos de alimentos y bebidas, tales como Lays, Doritos, Cheetos, Quaker, Chokis, Cuates, Karinto, Natuchips, Pepsi, 7Up, Gatorade, y muchas más marcas líderes en el mercado.Nuestra visión es ser el líder mundial en alimentos y bebidas al ganar con propósito. "Ganar con Propósito" refleja nuestra ambición de ganar de manera sostenible en el mercado e integrar el propósito en todos los aspectos del negocio. Para más información puedes ingresar en www.pepsico.comAhora estamos en búsqueda de esta posición:Ejecutor de Ventas - LimaResponsabilidades: Verificar el número de pedidos programados del día según la guía de remisión contra facturas. Asegurar la entrega de pedidos al 100% de clientes programados. Verificación del pedido con el cliente en el punto de venta. Asegurar la implementación de los estándares de ejecución en el punto de venta (Exhibidor adecuado, posición dominante, multiposiciones, instalación de material POP, rotación preventiva, mix adecuado de productos e infaltables). Respetar los acuerdos del vendedor preventa con el cliente (notas de crédito, bonificaciones, horarios de entrega). Asegurar la cobranza de la venta del día y asegurar el depósito del 100% de lo recaudo en el día. Cumplir con las medidas de seguridad establecidas por SASS (índice de conductor seguro – Telemetría). Cumplir con las rutinas establecidas de One Team, asistir de manera puntual a las sesiones matinales programadas.Asegurar el buen uso de las herramientas dtrabajo otorgadas por la compañía como el vehículo, celular, uniformes, impresora y EPPs.Revisar que el vehículo se encuentre en bueestado antes de inicar su jornada laboral Asegurar el cumplimiento de la liquidación con el área de Administración de Ventas(notade créditos, facturas, comprobantes de abonos).Asegurar la carga de los pedidos para entrega del dísiguiente.Comunicar a su jefe inmediato toda incidencia que pueda surgir en la ruta asignada.Garantizar qusus actividades diarias sean desarrolladas cumpliendo los estándares de Salud y Seguridad en el trabajo.Requisitos Deseable experiencia en Ventas ¿Qué puedes esperar de nosotros?: Uentorno de trabajo flexible que promueva un equilibrio saludable entre la vida personal y profesional.Una cultura dinámica e inclusiva.Uequipo de apoyo que fomentará su crecimiento y desarrollo profesional.Oportunidad de trabajar con proyectorelevantes y de impacto para el negocio.En PepsiCo, estamos comprometidos a brindar igualdad de oportunidadede desarrollo para todos los candidatos(as) a un empleo sin excepción de raza, religión, sexo, orientaciósexual, estado civil, edad, nacionalidad, origen o tipo de discapacidad.Respetamos y valoramos la diversidacomo una fuerza de trabajo e innovación para la organización.¡Muchas gracias por pensar en PepsiCo parempezar o continuar con tu carrera profesional!',
            location: 'Lima, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_10140598_bum_v83f18152.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-13',
            company: 'TAE CONEXION PERU S.A.C.',
            jobTitle: 'RELACIONISTA PUBLICO, MARKETING, COMUNICADOR SOCIAL, ANFITRIONAS, ATEN...',
            description: 'SOMOS UNA EMPRESA SOLIDA QUE EN ESTA OPORTUNIDAD SOLICITA A DAMAS Y CABALLEROS QUE DESEEN LABORAR CON NOSOTROS Y OCUPAR PUESTOS IMPORTANTES EN CORTO , MEDIANO Y LARGO PLAZO. Y QUIERAN DESARROLLARSE PROFESIONALMENTE CON UN EXCELENTE AMBIENTE LABORAL Y TRABAJO EN EQUIPO . NUESTRA EMPRESA BRINDA CAPACITACION CONSTANTE A NUESTRO PERSONAL PARA UN MEJOR DESEMPEÑO LABORAL . POR ELLO TENEMOS MAS DE 31 AÑOS DE TRAYECTORIA SIENDO LIDERES EN NUESTRO RUBRO.BRINDAMOS: EXCELENTE REMUNERACION ECONOMICA $$$ CARGOS EJECUTIVOS, GERENCIALES Y DIRECTIVOS . INCENTIVOS AL MEJOR DESEMPEÑO LABORAL. OPORTUNIDAD DE UNA PLANILLA INDEFINIDA CON TODO LOS BENEFICIOS DE LEY. CAPACITACIÓN CONSTATE A CADA CARGO A OCUPAR.SOLICITAMOS: DISPONIBILIDAD A TIEMPO COMPLETO (NO ESTUDIANDO NI TRABAJANDO) COMPETITIVO, CON GRAN SUPERACIÓN PERSONAL  PROACTIVO CON GANAS DE APRENDER Y LEGUSTE TRABAJO EN EQUIPO EXTROVERTIDO, EDUCADO. Y CON BUENA PRESENTACIÓN PERSONAL (DAMAS DE VESTIR, CABALLEROS SACO Y CORBATA) TENER LAPTO, INTERNET FIJO Y DOMINIO DE ZOOM.',
            location: 'San Miguel, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_13196901_bum_v1dec4b05.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-14',
            company: 'CORPORACION PRODUCTIVA S.A.C',
            jobTitle: 'COORDINADOR DE PRODUCCIÓN',
            description: 'REQUISITOS: Bachiller en Ing. Industrial, Ing. Agroindustrial, Ing. Alimentario o afines. Experiencia mínima de 3 años como coordinador de producción en rubro de alimentos y bebidas. Conocimiento en Gestión de la Demanda. Conocimiento en Gestión de Proyectos. Conociento en Gestión de la Producción. Conocimientos en HACCP.FUNCIONES: Revisar los requerimientos de productos solicitados por el área comercial para planificar la producción semanal y mensual. Cumplir con las fechas de entrega de producción para la generación de stocks. Elaborar el programa de producción semanal y difundirlo antes del inicio de la semana siguiente. Difundir el programa de rotación de personal semanalmente. Coordinar la habilitación y calibración de las máquinas de selección y envasado de acuerdo al tipo y cantidad de producto que se va procesar. Solicitar al área de almacén las materias primas e insumos necesarios para realizar las producciones de acuerdo a la programación semanal y mensual. Programar la codificación del rotulado en las máquinas envasadoras de acuerdo al lote, fecha de producción, fecha de vencimiento y otras especificaciones según necesidad. Coordinar las acciones correctivas en las desviaciones presentadas durante los procesos. Verificar que los productos elaborados cumplen con el peso, calidad y rotulados acordes a la ficha técnica de cada producto.Verificar el correcto llenado de información en loformatos de producción y asegurar su registro en el sistema SAP.Monitorear el desempeño del personal de árey asignar las funciones a realizar por cada operario de acuerdo a su rendimiento.Velar por el correcto uso cuidado de todos los equipos, accesorios e infraestructura que intervienen en los procesos de produccióPlanificar los mantenimientos preventivos en coordinación con área de mantenimiento de las maquinarias equipos que intervienen en los procesos de producción.Liderar los procesos de higiene y saneamiento del árede acuerdo al programa establecido en el Sistema de Aseguramiento de la Calidad.Elaborar cierre de Programde Producción semanal, consolidado de Hora Extras semanal y mensual.Planificar las vacaciones del personacon anticipación.Medir las unidades por hora de cada línea y proyectar cumplimiento del programa.',
            location: 'La Victoria, Lima',
            modality: 'Presencial',
            image: '',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-15',
            company: 'bumeran selecta',
            jobTitle: 'Entrenador Funcional GYM - La Molina -',
            description: 'Nos encontramos en la búsqueda de un Entrenador Funcional GYM para nuestro cliente del rubro de deporte y bienestar.Funciones:Responsable de dictar clases grupales de ejercicio funcional a clientes.Dirigir clases brindando orientación adecuada del por qué y para qué hacer los ejercicios.Elaborar las rutinas de ejercicios personalizados por cliente.Brindaatención personalizada fuera de horario de clases grupales a clientes que lo requieran, según condiciones de la administraciónprevia comunicación a Gerencia General.Supervisar operación de gimnasio.Requisitos: Lic.Educación Física Especialidad en Entrenamiento Funcional y Musculación.Experiencia mínima 02 años como entrenadoEspecialización en Biomecánica del ejercicio.Especialización en Fisiología del ejercicioCurso RCP básicDeseable certificado en Zumba o Baile(Latination).Residir en La Molina, Ate o zonas aledañas.BeneficiosIngreso a planilla MYPE desde el primer día de labores con todos los beneficios de ley(vacaciones 15 días seguro de salud).Grato ambiente laboral.',
            location: 'La Molina, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_948410_bum_v6fe2d11a.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-16',
            company: 'Confidencial',
            jobTitle: 'Motorizado Chofer',
            description: 'Compañía líder en publicidad exterior en el Perú que ofrece soluciones de comunicación a sus clientes a través de paneles estáticos y digitales. Presente en el mercado desde 2006 somos una empresa peruana que ha logrado tener un amplio crecimiento en corto plazo convirtiéndonos en una de las compañías más competitivas y reconocidas en el rubro.Noencontramos en la búsqueda de nuevos talentos para cubrir el puesto de "MOTORIZADO CHOFER".Las personas interesadas deberán de cumplir coel siguiente perfil: REQUISITOS: Experiencia de 03 años conduciendo Experiencia en manejo documentariotransacciones bancarias, traslado de personal.Moto Propia.Contar con Licencia B- IIC, A1(moto y auto) Vivien zonas cercanas de Villa el SalvadorFUNCIONES: Transportar documentos y trasladar personal desde la planthacia los distintos puntos segun programacion tanto en moto y en vehiculo según se requiera.BENEFICIOSPertenecer a una sólida organización con presencia a nivel nacional Ingreso a planilla con todos lobeneficios ley Oportunidad de crecimiento',
            location: 'Villa El Salvador, Lima',
            modality: 'Presencial',
            image: '',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-17',
            company: 'SUPERINTENDENCIA DE BANCA, SEGUROS Y AFP',
            jobTitle: 'Senior Data Analyst y Risk Management del Sistema Privado de Pensiones',
            description: 'Requisitos: Bachiller o Titulado en Ingeniería Industrial, Ingeniería de Sistemas, Ingeniería Informática, Ingeniería Económica, Economía, Administración, y/o carreras afines. Deseable contar con estudios de Postgrado, a nivel de Maestría o Diplomado en Administración, Derecho, Desarrollo Organizacional, Economía, Gestión Pública, Seguridad Social o afines. Deseables conocimientos de gestión y/o supervisión de riesgos, gestión de procesos y de proyectos, Métodos de gestión de rendimientoy Metodologías ágiles. Deseables conocimientos en análisis y procesamiento de data, lenguaje de consulta estructurada, programas de análisis de datos. Deseable el dominio del idioma inglés a nivel intermedio. Deseable contar con conocimiento de Microsoft Office a nivel avanzado, así como Python, R, SQL, Qlik Sense o similares a nivel avanzado. Competencias de Comunicación, Trabajo en Equipo, Planificación y Organización para el Trabajo, Orientación al Servicio, Involucramiento, Pensamiento analítico y Orientación al resultado. No estar inhabilitado por sanción de destitución o despido por orden del Poder Judicial u otras inhabilitaciones que determine la Ley.Experiencia: Dos (2) años de experiencia laboral como mínimo en temas relacionados con las funciones descritas o afines, en empresas o instituciones relacionadas al sector.Funciones principales: Proponer e implementar los procesos y procedimientos que fortalezcan la operación en la fase de desacumulación del Sistema Privado de Pensiones -que es la etapa en la que las personas utilizan sus recursos para acceder a pensiones y beneficios en los riesgos de jubilación, invalidez y sobrevivencia-, teniendo en consideración las buenas prácticas internacionales. Ejecutar el plan anual de supervisión programada, tomando como insumo los resultados del monitoreo permanente que se realiza sobre los procesos, los nuevos cambios en el mercado, así como las prácticas internacionales. Supervisar que las entidades reguladas cumplan con las disposiciones y la normativa del SPP, así como las disposiciones e instrucciones de carácter general o particular, emitidas por la Superintendencia. Monitorear, de manera permanente, la implementación de mejoras en el proceso de desacumulación, a partir del análisis de casuística de los procesos que representen mayor criticidad y riesgo en la fase de desacumulación. Ejecutar e implementar las medidas sancionatorias por las infracciones que se hubieran detectado en los procesos de supervisión. Procesar y elaborar periódicamente data estadística, meta data u otro tipo de base de datos, vinculadas a procesos -de otorgamiento de pensiones y beneficios en los riesgos de jubilación, invalidez y sobrevivencia- al interior del SPP en la fase de desacumulación. Desarrollar e implementar proyectos de mejora procedimental y tecnológica respecto de la fase de desacumulación, su interacción con otros organismos participantes internos y externos, así como su respectiva ejecución. Coordinar con otras entidades públicas respecto a la ejecución de políticas previsionales implementadas.Mantener informada a la Intendencia o a la coordinación del avance detrabajo, de toda observación producto de sus labores, así como de otros encargos que le asigne el Intendentde Supervisión de Pensiones y Beneficios, relacionadas con la naturaleza de las funciones en la fase ddesacumulación.Ejecutar otras actividades que le sean asignadas por su jefe inmediato.Ofrecemos: Remuneraciócompetitiva acorde con calificaciones, excelente ambiente de trabajo, capacitación permanente y unenriquecedora experiencia profesional en un organismo supervisor y regulador de primer nivel técnico.NOTALos postulantes preseleccionados deberán pasar una evaluación técnica, a fin de evaluar su nivel dconocimientos de los temas relacionados con las funciones a realizar, así como otras evaluaciones que la posición requiera, para lo cual se les comunicaroportunamente.',
            location: 'San Isidro, Lima',
            modality: 'Presencial',
            image: '',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-18',
            company: 'bumeran selecta',
            jobTitle: 'Coordinador Administración y Ventas (rubro deporte) - La Molina',
            description: 'Nos encontramos en la búsqueda de un Coordinador Administración y Ventas para nuestro cliente del rubro de deporte y bienestar.FuncionesGestionar ventas de gimnasio en los canales digital y presencial.Realizar operaciones dfacturación y cobranza en presencial, brindar soporte de medios de pago virtual.Realizar cierre de caja diario.Administrar base ddatos de clientes.Generar reportes de ventas para toma de decisiones de gerencia.Generar reportes de pago proveedores para aprobación de gerencia.Supervisar operación diaria de gimnasio.Controlar asistencia a claseAtender requerimientos de clientes sobre el servicio brindado.Mantener actualizada imagen y publicidad eredes sociales.RequisitosEgresado de la carrera de técnica de administración.Experiencia mínima 02 años en punto de venta y cierre de caja.Dominio de herramientas de Office.BeneficiosIngreso a planilla MYPdesde el primer día de labores con todos los beneficios de ley(vacaciones 15 días y seguro de salud).Gratambiente laboral.',
            location: 'La Molina, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_948410_bum_v6fe2d11a.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-19',
            company: 'bumeran selecta',
            jobTitle: 'Instructor de Baile (rubro deporte) - La Molina',
            description: 'Nos encontramos en la búsqueda de un Instructor de Baile para nuestro cliente del rubro de deporte y bienestar.Funciones:Responsable de dictar clases grupales de baile y otros ejercicios aeróbicos a clientes.Dirigir clases brindando orientación adecuada del por qué y para qué hacer los ejercicios.Brindar apoyo necesario a equipo de trabajo y clientes. Requisitos:Licenciado en Educación Física (deseable).Contar con especialización en baile o full body.Contar con certificado en Zumba o Baile (Latination).Experiencia mínima 02 años como como profesor de baile, zumba o full body.Residir en La Molina, Ate o zonas aledañas.Beneficios:Ingreso a planilla MYPE desde el primer día de labores con todos los beneficios de ley (vacaciones 15 días y seguro de salud).Grato ambiente laboral.',
            location: 'La Molina, Lima',
            modality: 'Presencial',
            image: 'https://imgbum.jobscdn.com/portal/img/empresas/11/static/logoMainPic_948410_bum_v6fe2d11a.jpg',
            area: "UUIDNUMEROAREA-19"
        },
        {
            id: 'UUIDNUMERO-20',
            company: 'Confidencial',
            jobTitle: 'Asistente de logistica',
            description: '¡Estamos en búsqueda de un(a) asistente de logística altamente motivado(a) para unirse a nuestro equipo! Si tienes una pasión por la eficiencia operativa, la organización y la resolución de problemas logísticos, ¡queremos conocerte!Responsabilidades: Coordinar y gestionar eficientemente la cadena de suministro.Realizar seguimiento y actualizaciones de inventario.Colaborar estrechamente con proveedores y equipos internos para garantizar entregas oportunas.Participar en la planificación y ejecución de estrategias logísticas.Manejar documentación y registros logísticos de manera precisa.Entre otras funciones de su jefatura o gerencia inmediata.Requisitos: Estudios en las carreras de administración, ingenieria industrial y afines.Experiencia previa en funciones logísticas o administrativas.Conocimiento sólido de procesos de cadena de suministro.Habilidades organizativas excepcionales y atención al detalle.Capacidad para trabajar de manera efectiva en equipo.Excelentes habilidades de comunicación verbal y escrita.Conocimiento básico de herramientas informáticas y sistemas logísticos.Ofrecemos: Beneficios de ley desde el primer día de labores.Un ambiente de trabajo colaborativo y motivador.Oportunidades de crecimiento profesional.Beneficios competitivos y compensación acorde a la experiencia.Participación en proyectos emocionantes y desafiantes.Si estás listo(a) para asumir un rol clave en nuestra cadena de suministro y contribuir al éxito continuo de nuestra empresa, ¡esperamos recibir tu solicitud!',
            location: 'Distrito de San Luis, Lima',
            modality: 'Presencial',
            image: '',
            area: "UUIDNUMEROAREA-19"
        }
    ],
    area: [
        {
            id: 'UUIDNUMEROAREA-1',
            name: 'Administración, Contabilidad y Finanzas'
        },
        {
            id: 'UUIDNUMEROAREA-2',
            name: 'Almacén / Logística / Transporte'
        },
        {
            id: 'UUIDNUMEROAREA-3',
            name: 'Atención al Cliente'
        },
        {
            id: 'UUIDNUMEROAREA-4',
            name: 'CallCenter / Telemercadeo'
        },
        {
            id: 'UUIDNUMEROAREA-5',
            name: 'Comercial / Ventas'
        },
        {
            id: 'UUIDNUMEROAREA-6',
            name: 'Compras / Comercio Exterior'
        },
        {
            id: 'UUIDNUMEROAREA-7',
            name: 'Construcción y Obra'
        },
        {
            id: 'UUIDNUMEROAREA-8',
            name: 'Diseño / Artes Gráficas'
        },
        {
            id: 'UUIDNUMEROAREA-9',
            name: 'Educación / Docencia'
        },
        {
            id: 'UUIDNUMEROAREA-10',
            name: 'Hostelería / Turismo'
        },
        {
            id: 'UUIDNUMEROAREA-11',
            name: 'Informática / Telecomunicaciones'
        },
        {
            id: 'UUIDNUMEROAREA-12',
            name: 'Ingeniería'
        },
        {
            id: 'UUIDNUMEROAREA-13',
            name: 'Legal / Asesoría'
        },
        {
            id: 'UUIDNUMEROAREA-14',
            name: 'Mantenimiento y Reparaciones Técnicas'
        },
        {
            id: 'UUIDNUMEROAREA-15',
            name: 'Marketing / Publicidad'
        },
        {
            id: 'UUIDNUMEROAREA-16',
            name: 'Medicina / Salud'
        },
        {
            id: 'UUIDNUMEROAREA-17',
            name: 'Recursos Humanos'
        },
        {
            id: 'UUIDNUMEROAREA-18',
            name: 'Servicios Generales, Aseo y Seguridad'
        },
        {
            id: 'UUIDNUMEROAREA-19',
            name: 'Otros'
        }
    ]
}

