import React from "react";
import { Container } from "react-bootstrap";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Empresária",
    initial: "M",
    text: '"Em 6 meses perdi 15kg e ganhei uma qualidade de vida incrível. O acompanhamento é impecável!"',
  },
  {
    name: "Carlos Eduardo",
    role: "Dev",
    initial: "C",
    text: '"Finalmente encontrei um profissional que entendeu meu ritmo. Resultados reais sem sofrer."',
  },
  {
    name: "Ana Paula",
    role: "Professora",
    initial: "A",
    text: '"Melhor investimento que fiz em mim mesma. Treinos desafiadores e suporte 24h."',
  },
  {
    name: "Ricardo Gomes",
    role: "Advogado",
    initial: "R",
    text: '"A consultoria mudou minha rotina. Mais disposição e foco no trabalho e nos treinos."',
  },
  {
    name: "Juliana Lins",
    role: "Médica",
    initial: "J",
    text: '"Protocolo sério e baseado em ciência. Exatamente o que eu procurava para minha saúde."',
  },
  {
    name: "Felipe Terra",
    role: "Atleta",
    initial: "F",
    text: '"O ajuste fino nos treinos me fez quebrar todos os meus recordes pessoais. Recomendo muito!"',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials py-5">
      <Container className="py-5 text-center">
        <h6 className="testimonials__badge fw-bold text-uppercase mb-3">
          Depoimentos
        </h6>
        <h2 className="display-5 fw-bold text-white">
          O que meus alunos dizem
        </h2>
        <p className="testimonials__text lead mx-auto text-secondary">
          Treinos personalizados, acompanhamento nutricional e resultados reais.
          Alcance seus objetivos com orientação profissional.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoHeight={false}
          className="pb-5 pt-5"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card text-start h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="stars text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} className="me-1" />
                    ))}
                  </div>
                  <FaQuoteRight className="quote-icon opacity-25" size={24} />
                </div>

                <p className="testimonial-text text-light opacity-75 mb-4">
                  {t.text}
                </p>

                <div className="d-flex align-items-center mt-auto">
                  <div className="avatar-circle me-3">{t.initial}</div>
                  <div>
                    <h6 className="text-white mb-0 fw-bold">{t.name}</h6>
                    <small className="text-secondary">{t.role}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
