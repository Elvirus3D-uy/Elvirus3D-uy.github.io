import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import AdminPinDialog from "./AdminPinDialog";
import AdminNewsForm from "./AdminNewsForm";

const newsItems = [
    {
    image: "Recursos/VirusFutbolWEB0.3.0.webp",
    date: "Miércoles, 1 de julio del 2026",
    title: "Virus Fútbol Web continúa evolucionando",
    content:
      "Virus Fútbol Web continúa creciendo con la llegada del nuevo Modo Mundial. Esta actualización permite disputar una Copa del Mundo completa, desde la fase de grupos hasta la final, incluyendo clasificación de primeros, segundos y mejores terceros, fases eliminatorias y partido por el tercer puesto. Además, cada encuentro registra goles, tarjetas y sucesos minuto a minuto, junto con estadísticas individuales y tabla de goleadores. También se incorpora un calendario visual de las eliminatorias y una ceremonia final para la selección campeona. Con este avance, Virus Fútbol Web se acerca cada vez más a una experiencia futbolística completa y al futuro Virus Fútbol 3D.",
  },
      {
    image: "/Recursos/LaEscalera.webp",
    date: "Domingo, 28 de junio del 2026",
    title: "NUEVO LANZAMIENTO!!! La Escalera",
    content:
      "Después de varios meses de desarrollo, pruebas y ajustes, **La Escalera** ya se encuentra disponible para jugar a través de **itch.io**. Se trata de un juego de mesa digital para 2 a 4 jugadores que combina preguntas, minijuegos, memoria y estrategia en partidas por turnos donde el objetivo es alcanzar el Juego Final y convertirse en el ganador. Además del Modo Clásico, el juego incorpora un Modo Fiesta con retos especiales y un Modo Picante opcional para quienes buscan una experiencia más atrevida entre amigos. Este lanzamiento representa un nuevo proyecto para El Virus 3D y el comienzo de una etapa de crecimiento donde continuaremos incorporando mejoras, nuevos contenidos y actualizaciones basadas en los comentarios de la comunidad. Invitamos a todos los jugadores a visitar nuestra sección de juegos en itch.io, reunir a sus amigos y descubrir quién es capaz de llegar hasta el último escalón.",
  },
  {
    image: "/Recursos/ElSecretoDeMiAbuela.webp",
    date: "Lunes, 2 de febrero del 2026",
    title: "Global Game Jam 2026",
    content:
      "El pasado fin de semana participé en la Global Game Jam. Durante 48 horas, en las instalaciones de Globant, asumimos el desafío de crear un juego completo bajo la temática \"Máscaras\". De esa colaboración nació \"El secreto de mi abuela\", un juego desarrollado íntegramente en el marco de la jam.",
  },
  {
    image: "/Recursos/Virusmania.webp",
    date: "Martes, 12 de agosto del 2025",
    title: "Virusmania",
    content:
      "El equipo de El Virus 3D trabajó intensamente en Virusmania para dejarlo listo para su lanzamiento. Este juego, desarrollado en Unity, te pone en la piel de un virus en un único nivel donde el objetivo es sobrevivir el mayor tiempo posible. A medida que eliminas enemigos, aparecen nuevos, aumentando el desafío constantemente.",
  },
];

const CLICKS_REQUIRED = 5;
const CLICK_WINDOW_MS = 3000;

const NewsSection = () => {
  const clickTimestamps = useRef<number[]>([]);
  const [showPin, setShowPin] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleTitleClick = useCallback(() => {
    const now = Date.now();
    clickTimestamps.current.push(now);
    // Keep only clicks within the time window
    clickTimestamps.current = clickTimestamps.current.filter(
      (t) => now - t < CLICK_WINDOW_MS
    );
    if (clickTimestamps.current.length >= CLICKS_REQUIRED) {
      clickTimestamps.current = [];
      setShowPin(true);
    }
  }, []);

  return (
    <section id="noticias" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 glow-text select-none cursor-default"
          onClick={handleTitleClick}
        >
          NOTICIAS
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-10" />

        <div className="space-y-8">
          {newsItems.map((item, i) => (
            <motion.article
              key={i}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="md:flex">
                <div className="md:w-80 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-xs font-medium text-primary mb-2 font-display tracking-wider">
                    {item.date}
                  </span>
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Hidden Admin: PIN Dialog */}
      <AdminPinDialog
        open={showPin}
        onOpenChange={setShowPin}
        onSuccess={() => setShowForm(true)}
      />

      {/* Hidden Admin: News Form */}
      <AdminNewsForm open={showForm} onOpenChange={setShowForm} />
    </section>
  );
};

export default NewsSection;
