import React from "react";
import { Container } from "react-bootstrap";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Importando as imagens (Certifique-se de que os nomes dos arquivos estão corretos na pasta assets)
import resultado1 from "../assets/resultado1.jpeg";
import resultado2 from "../assets/resultado2.jpeg";
import resultado3 from "../assets/resultado3.jpeg";
import resultado4 from "../assets/resultado4.jpeg";
import resultado5 from "../assets/resultado5.jpeg";
import resultado6 from "../assets/resultado6.jpeg";
import resultado7 from "../assets/resultado7.jpeg";
import resultado8 from "../assets/resultado8.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const transformations = [
  { img: resultado1, label: "Evolução 1" },
  { img: resultado2, label: "Evolução 2" },
  { img: resultado3, label: "Evolução 3" },
  { img: resultado4, label: "Evolução 4" },
  { img: resultado5, label: "Evolução 5" },
  { img: resultado6, label: "Evolução 6" },
  { img: resultado7, label: "Evolução 7" },
  { img: resultado8, label: "Evolução 8" },
];

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Empresária",
    initial: "M",
    text: '"Em 6 meses perdi 15kg e ganhei uma qualidade de vida incrível. O acompanhamento é impecável!"',
  },
  {
    name: "Carlos Eduardo",
    role: "Dev-Front",
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
          Resultados e Depoimentos
        </h6>
        <h2 className="display-5 fw-bold text-white mb-4">
          Transformações <span>Reais</span>
        </h2>

        {/* --- SEÇÃO DE ANTES E DEPOIS (VISUAL) --- */}
        <Swiper
          modules={[Autoplay]} // Removi Navigation aqui para o fluxo ser 100% automático e limpo
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={5000} // Velocidade da transição em milissegundos (5 segundos para atravessar)
          autoplay={{
            delay: 0, // 0 delay para não parar
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // Aumentei para 4 para o efeito contínuo ficar mais visível
          }}
          className="continuous-slider mb-5"
        >
          {transformations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="transformation-card">
                <img
                  src={item.img}
                  alt={item.label}
                  className="img-fluid rounded-4"
                />
                <div className="transformation-overlay">
                  <span className="badge-before">Antes</span>
                  <span className="badge-after">Depois</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <hr className="my-5 opacity-10" />

        {/* --- SEÇÃO DE TEXTO (O que já existia) --- */}
        <h3 className="text-white fw-bold mb-4">O que meus alunos dizem</h3>
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
          className="pb-5"
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
