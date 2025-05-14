import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../Context/Context";
import "./AboutProject.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

function AboutProject() {
  const portfolio = [
    {
      id: 1,
      title_en: "Korean School Logo",
      title_uz: "Koreys Maktabi Logotipi",
      description_en:
        "A modern and symbolic logo representing a Korean school, featuring traditional architectural elements and academic symbols.",
      description_uz:
        "Koreys maktabini ifodalovchi zamonaviy va ramziy logotip, an’anaviy me’moriy elementlar va akademik belgilar bilan.",
      category_en: "Logo Design",
      category_uz: "Logotip Dizayni",
      type: "logo",
      client: "Korean School",
      img: [
        "http://images-ecru.vercel.app/PortfoliAD/logo/korean1.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/korean2.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/korean3.jpg",
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      id: 2,
      title_en: "Zarbod Bakery Logo",
      title_uz: "Zarbod Nonvoyxonasi Logotipi",
      description_en:
        "A soft and elegant bakery logo featuring a chef's hat and fresh bread elements, symbolizing quality and craftsmanship.",
      description_uz:
        "Bosh oshpaz shapkasi va yangi non elementlarini o‘z ichiga olgan yumshoq va nafis nonvoyxona logotipi, sifat va hunarmandchilik ramzi sifatida.",
      category_en: "Branding",
      category_uz: "Brending",
      type: "logo",
      client: "Zarbod",
      img: [
        "http://images-ecru.vercel.app/PortfoliAD/logo/zar1.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/zar2.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/zar3.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/zar4.jpg",
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      id: 3,
      title_en: "Simurgh Medical Logo",
      title_uz: "Simurgh Tibbiyot Logotipi",
      description_en:
        "A sophisticated medical logo featuring a bird, leaves, and a medical symbol, representing health, nature, and care.",
      description_uz:
        "Salomatlik, tabiat va g‘amxo‘rlikni ifodalovchi qush, barglar va tibbiy ramzdan iborat nafis tibbiyot logotipi.",
        category_en: "Branding",
        category_uz: "Brending",
      type: "logo",
      client: "Simurgh Medical",
      img: [
        "http://images-ecru.vercel.app/PortfoliAD/logo/med1.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/med2.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/med3.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/med4.jpg",
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      id: 4,
      title_en: "Osh Markazi Logo",
      title_uz: "Osh Markazi Logotipi",
      description_en:
        "A traditional Uzbek plov logo featuring a large bowl of rice, domes, and minarets, symbolizing national cuisine and culture.",
      description_uz:
        "O‘zbek milliy taomi va madaniyatini ifodalovchi katta kosa, guruch, gumbazlar va minoralardan iborat osh logotipi.",
      category_en: "Logo Design",
      category_uz: "Logotip Dizayni",
      type: "logo",
      client: "Osh Markazi",
      img: [
        "http://images-ecru.vercel.app/PortfoliAD/logo/osh1.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/osh2.jpg",
        "http://images-ecru.vercel.app/PortfoliAD/logo/osh3.jpg",
      ],
      tech: ["Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      id: 5,
      title_en: "Ecosun trifold Brochure",
      title_uz: "Ecosun Flayer",
      description_en:
        "They prepared a trifold brochure for the presentation of their solar panel service, and the client was pleased with the work. Leave your thoughts and questions in the comments section!",
      description_uz:
        "Quyosh  panellari servisi bo'yicha faoliyat olib borar ekanlar taqdimot uchun uchun flayer tayorlab berildi, va mijozga ish maqul bo'ldi.",
      category_en: "Print Design",
      category_uz: "Print Dizayni",
      type: "logo",
      client: "Ecosun",
      img: [
        "https://images-ecru.vercel.app/PortfoliAD/print/eco1.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/print/eco2.png",
        "https://images-ecru.vercel.app/PortfoliAD/print/eco3.png",
  
      ],
      tech: ["Adobe Photoshop"],
    },
    {
      id: 6,
      title_en: "Emu trifold Brochure",
      title_uz: "Emu Flayer",
      description_en:
        "They wanted the work to be distributed to students to familiarize them with EMU, and it was prepared in accordance with the brand's style.",
      description_uz:
        "O'quvchilarga tarqatiladigan EMU bilan yaqindan tanishtiradigan ish bo'lishini hohlagandilar, brend stiliga moslab tayorlab berildi.",
      category_en: "Print Design",
      category_uz: "Print Dizayni",
      type: "logo",
      client: "Emu",
      img: [
        "https://images-ecru.vercel.app/PortfoliAD/print/emu1.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/print/emu2.png",
        "https://images-ecru.vercel.app/PortfoliAD/print/emu3.png",
        "https://images-ecru.vercel.app/PortfoliAD/print/emu4.png",
        "https://images-ecru.vercel.app/PortfoliAD/print/emu5.png",
  
      ],
      tech: ["Adobe Photoshop"],
    },
    {
      id: 7,
      title_en: "Helium trifold Brochure",
      title_uz: "Helium Flayer",
      description_en:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla, reiciendis officiis ratione consectetur velit ullam aspernatur quis quia porro non beatae pariatur molestias vel? Voluptates est fugit possimus distinctio?",
      description_uz:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla, reiciendis officiis ratione consectetur velit ullam aspernatur quis quia porro non beatae pariatur molestias vel? Voluptates est fugit possimus distinctio?",
      category_en: "Print Design",
      category_uz: "Print Dizayni",
      type: "logo",
      client: "Helium",
      img: [
        "https://images-ecru.vercel.app/PortfoliAD/print/helium1.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/print/helium2.png"
  
      ],
      tech: ["Adobe Photoshop"],
    },
    {
      id: 8,
      title_en: "Mantality Health trifold Brochure",
      title_uz: "Mantality Health Flayer",
      description_en:
        "They prepared a trifold brochure for the presentation of their solar panel service, and the client was pleased with the work. Leave your thoughts and questions in the comments section!",
      description_uz:
        "Quyosh  panellari servisi bo'yicha faoliyat olib borar ekanlar taqdimot uchun uchun flayer tayorlab berildi, va mijozga ish maqul bo'ldi.",
      category_en: "Print Design",
      category_uz: "Print Dizayni",
      type: "logo",
      client: "Mantality Health ",
      img: [
        "https://images-ecru.vercel.app/PortfoliAD/print/kachok1.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/print/kachok2.jpg",
  
      ],
      tech: ["Adobe Photoshop"],
    },
    {
      id: 9,
      title_en: "Ecosun Social Media Design",
      title_uz: "Ecosun Ijtimoiy Tarmoq Dizayni",
      description_en:
        "While operating in the field of solar panel service, minimalistic and premium SMD products were produced with a greater emphasis on eco-friendliness, and the customer was satisfied with the work.",
      description_uz:
        "Quyosh panellari servisi bo'yicha faoliyat olib borar ekanlar va ko'proq eco ga urg'ru berilgan holda minimalistik va  premium smd tayorlab berildi, va mijozga ish maqul bo'ldi.",
      category_en: "Social Media Design",
      category_uz: "Ijtimoiy Tarmoq Dizayn",
      type: "smd",
      client: "Ecosun",
      img: [
        "https://images-ecru.vercel.app/PortfoliAD/SMD/eco3.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/eco4.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/eco5.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/eco2.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/eco1.jpg",
  
      ],
      tech: ["Adobe Photoshop"],
    },
    {
      id: 10,
      title_en: "Emu Social Media Design",
      title_uz: "Emu Ijtimoiy Tarmoq Dizayni",
      description_en:
        "Designs were prepared that matched the brand's style, and the client was pleased with the work.",
      description_uz:
        "Brend stiliga mos dizaynlar tayorlab berildi, Mijozga ish maqul keldi",
      category_en: "Social Media Design",
      category_uz: "Ijtimoiy Tarmoq Dizayn",
      type: "smd",
      client: "Emu",
      img: [
        "https://images-ecru.vercel.app/PortfoliAD/SMD/emu1.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/emu2.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/emu4.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/emu3.jpg",
  
      ],
      tech: ["Adobe Photoshop"],
    },
    {
      id: 11,
      title_en: "Isso Social Media Design",
      title_uz: "Isso Ijtimoiy Tarmoq Dizayni",
      description_en:
        "They are engaged in the production of heating equipment. They wanted the design to look minimalistic and premium, and the client liked the designs we prepared.",
      description_uz:
        "Issiqlik uskunalari ishlab chiqarish bilan shug'ullanar ekan.Dizayn minimalistik va premium ko'rinsin degandilar, tayorlagan dizaynlarimiz mijozga maqul keldi.",
      category_en: "Social Media Design",
      category_uz: "Ijtimoiy Tarmoq Dizayn",
      type: "smd",
      client: "Ecosun",
      img: [
        "https://images-ecru.vercel.app/PortfoliAD/SMD/isso1.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/isso2.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/isso3.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/isso4.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/isso5.jpg",
        "https://images-ecru.vercel.app/PortfoliAD/SMD/isso6.jpg",
  
      ],
      tech: ["Adobe Photoshop"],
    },
  ];

  const { projectId } = useContext(Context);
  const [aboutProject, setAboutProject] = useState("");
  const { lang } = useContext(Context);

  useEffect(() => {
    // fetch(
    //   `http://localhost:5000/portfolio/${projectId ? projectId : projectId}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setAboutProject(data))
    //   .catch((err) => console.error("Error", err));
    portfolio
      ?.filter((project) => projectId === project.id)
      .map((item) => setAboutProject(item));
  }, [projectId]);
  return (
    <div className="container aboutProject-wrapper">
      <Swiper
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {aboutProject.img?.map((img, index) => (
          <SwiperSlide className="swiperslide">
            <img key={index} className="slide-img" src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="projectBody">
        <h1>{aboutProject.client}</h1>
        <p className="type">{aboutProject[`title_${lang}`]}</p>
        {/* <p className="subtitle">{aboutProject[`description_${lang}`]}</p> */}
        {/* <div className="view_live">
          <p>{lang == "en" ? "View live" : "Real holatda ko‘rish"}</p>
          <a href="https://www.youtube.com/watch?v=eV25g4VK_Eg" target="_blank">
            https://www.example.com <i className="bi bi-arrow-right"></i>
          </a>
        </div> */}
        <div className="aboutProject">
          <div className="about">
            <h1>{lang == "en" ? "About the project" : "Loyiha haqida"}</h1>
            <p>
            {aboutProject[`description_${lang}`]}
            </p>
          </div>
          <div className="tech">
            <h1>{lang == "en" ? "Tech stack" : "Texnik to'plam"}</h1>
            <div className="techstack">
              {aboutProject.tech?.map((tech1) => (
                <span>{tech1}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
