import React from 'react';
import './VistaInicio.css'

const VistaInicio = () => {
  return <div>
<header className="header">
        <h1>Bienvenido a SoporteTI </h1>
        <p>Tu Aliado Tecnológico</p>
      </header>
      <div className="container">
        <section className="about">
          <h2>¿Quiénes Somos?</h2>
          <p>En SoporteTI, nos dedicamos a ofrecerte soluciones tecnológicas integrales. Con más de 10 años de experiencia, hemos construido una reputación basada en la confianza, la innovación y el compromiso con nuestros clientes.</p>
        </section>
        <section className="services">
          <h2>Nuestros Servicios</h2>
          <ul>
            <li><strong>Soporte Técnico:</strong> Resolución de problemas técnicos y asistencia remota.</li>
            <li><strong>Mantenimiento Preventivo:</strong> Revisión periódica de tus sistemas para prevenir fallos.</li>
            <li><strong>Consultoría IT:</strong> Asesoramiento especializado para optimizar tus recursos tecnológicos.</li>
          </ul>
          <button onClick={() => window.location.href='#'}>Ver todos los servicios</button>
        </section>
        <section className="why-us">
          <h2>¿Por Qué Elegirnos?</h2>
          <ul>
            <li><strong>Calidad Garantizada:</strong> Nuestros servicios están diseñados para satisfacer tus necesidades con la más alta calidad.</li>
            <li><strong>Equipo Profesional:</strong> Contamos con un equipo de expertos apasionados y dedicados.</li>
            <li><strong>Atención Personalizada:</strong> Nos esforzamos por ofrecer una atención cercana y personalizada a cada cliente.</li>
          </ul>
        </section>
        <section className="testimonials">
          <h2>Testimonios</h2>
          <p>"Gracias a Soporte de Sistemas, hemos mejorado significativamente nuestro negocio. ¡Altamente recomendados!" - Juan Pérez</p>
          <p>"El equipo de Soporte de Sistemas nos ha brindado un servicio excepcional. Son profesionales y confiables." - María Gómez</p>
        </section>
      </div>
  </div>;
};

export default VistaInicio;
