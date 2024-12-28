import Marquee from 'react-fast-marquee';

export const LogoMarquee = () => {
  return (
    <Marquee
      gradient={false}
      speed={30}
      pauseOnHover={false}
      className="py-4"
    >
      <img
        src="https://inforpress.cv/favicon.ico"
        alt="Inforpress"
        className="max-w-[120px] max-h-[60px] object-contain mx-8"
        loading="lazy"
        draggable={false}
      />
      <img
        src="https://www.anacao.cv//wp-content/uploads/2020/09/logo-rodape-96.png"
        alt="A Nação"
        className="max-w-[120px] max-h-[60px] object-contain mx-8"
        loading="lazy"
        draggable={false}
      />
      <img
        src="https://assets.expressodasilhas.cv/images/expressodasilhas-logo-white-64.png"
        alt="Expresso das Ilhas"
        className="max-w-[120px] max-h-[60px] object-contain mx-8"
        loading="lazy"
        draggable={false}
      />
      <img
        src="https://asemana.cv/images/icon/logo-asemana-RGB1.png"
        alt="A Semana"
        className="max-w-[120px] max-h-[60px] object-contain mx-8"
        loading="lazy"
        draggable={false}
      />
      <img
        src="https://rtc.cv/upload/img/assets/logo.png"
        alt="RTC"
        className="max-w-[120px] max-h-[60px] object-contain mx-8"
        loading="lazy"
        draggable={false}
      />
    </Marquee>
  );
};