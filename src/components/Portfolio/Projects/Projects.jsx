import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Context";
import "./Projects.scss";
import { Link } from "react-router-dom";
function Projects() {
  const portfolioData =  [
    {
      id: 1,
      title_en: "Minimalist Logo Design",
      title_uz: "Minimalistik Logotip Dizayni",
      description_en: "A simple and clean logo designed for a tech startup.",
      description_uz:
        "Texnik startap uchun mo'ljallangan oddiy va toza logotip.",
      category_en: "Logo Design",
      category_uz: "Logotip Dizayni",
      type: "logo",
      client: "TechCorp",
      date: "2024-02-15",
      img: [
        "https://i.pinimg.com/originals/2a/68/83/2a688362cb693b95c43842602a7aa2f5.png",
        "https://i.pinimg.com/originals/2a/68/83/2a688362cb693b95c43842602a7aa2f5.png",
        "https://i.pinimg.com/originals/2a/68/83/2a688362cb693b95c43842602a7aa2f5.png",
      ],
      tech: ["Adobe XD", "Sketch", "CorelDRAW"],
    },
    {
      id: 2,
      title_en: "Creative Logo for Bakery",
      title_uz: "Novvoyxona uchun Kreativ Logotip",
      description_en: "A fun and engaging logo design for a bakery business.",
      description_uz:
        "Novvoyxona biznesi uchun qiziqarli va jozibali logotip dizayni.",
      category_en: "Logo Design",
      category_uz: "Logotip Dizayni",
      type: "logo",
      client: "SweetBites",
      date: "2024-01-20",
      img: [
        "https://i.pinimg.com/originals/15/83/e7/1583e7130770ebcffcb2406ab0a52caf.jpg",
        "https://i.pinimg.com/originals/15/83/e7/1583e7130770ebcffcb2406ab0a52caf.jpg",
        "https://i.pinimg.com/originals/15/83/e7/1583e7130770ebcffcb2406ab0a52caf.jpg",
      ],
      tech: ["Photoshop", "Figma", "Illustrator"],
    },
    {
      id: 3,
      title_en: "Corporate Branding Kit",
      title_uz: "Korporativ Brending To‘plami",
      description_en:
        "Full branding kit including business cards and letterhead for a financial company.",
      description_uz:
        "Moliya kompaniyasi uchun vizitkalar va rasmiy blanklarni o‘z ichiga olgan to‘liq brending to‘plami.",
      category_en: "Branding",
      category_uz: "Brending",
      type: "branding",
      client: "FinancePro",
      date: "2024-03-01",
      img: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3af5b089594999.5df9bd7b793ef.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3af5b089594999.5df9bd7b793ef.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3af5b089594999.5df9bd7b793ef.jpg",
      ],
      tech: ["Adobe XD", "Sketch", "CorelDRAW"],
    },
    {
      id: 4,
      title_en: "E-commerce Brand Identity",
      title_uz: "Elektron Savdo Brend Identifikatsiyasi",
      description_en: "Created a cohesive brand identity for an online store.",
      description_uz:
        "Onlayn do‘kon uchun yaxlit brend identifikatsiyasi yaratildi.",
      category_en: "Branding",
      category_uz: "Brending",
      type: "branding",
      client: "ShopNow",
      date: "2024-02-10",
      img: [
        "https://i.pinimg.com/originals/2a/d4/c4/2ad4c4dbaef8cbbb2edd347b0a5cc1de.png",
        "https://i.pinimg.com/originals/2a/d4/c4/2ad4c4dbaef8cbbb2edd347b0a5cc1de.png",
        "https://i.pinimg.com/originals/2a/d4/c4/2ad4c4dbaef8cbbb2edd347b0a5cc1de.png",
      ],
      tech: ["Photoshop", "Figma", "Illustrator"],
    },
    {
      id: 5,
      title_en: "E-commerce Website UI/UX",
      title_uz: "Elektron Savdo Vebsayti UI/UX",
      description_en:
        "Designed a modern and user-friendly interface for an online store.",
      description_uz:
        "Onlayn do‘kon uchun zamonaviy va foydalanuvchiga qulay interfeys yaratildi.",
      category_en: "UI/UX Design",
      category_uz: "UI/UX Dizayn",
      type: "ui-ux",
      client: "ShopEasy",
      date: "2024-03-02",
      img: [
        "https://i.pinimg.com/originals/1e/48/57/1e4857e9a8fff5d2b074186e2e15c536.png",
        "https://i.pinimg.com/originals/1e/48/57/1e4857e9a8fff5d2b074186e2e15c536.png",
        "https://i.pinimg.com/originals/1e/48/57/1e4857e9a8fff5d2b074186e2e15c536.png",
      ],
      tech: ["Adobe XD", "Sketch", "CorelDRAW"],
    },
    {
      id: 6,
      title_uz: "Mobil ilova UI/UX",
      title_en: "Mobile App UI/UX",
      description_uz:
        "Mobil fitnes ilovasi uchun intuitiv UI/UX ishlab chiqildi.",
      description_en: "Designed an intuitive UI/UX for a mobile fitness app.",
      category_uz: "UI/UX Dizayn",
      category_en: "UI/UX Design",
      type: "ui-ux",
      client: "FitTrack",
      date: "2024-01-25",
      img: [
        "https://i.pinimg.com/736x/94/f8/d5/94f8d52e7b967e9c19b1bca60656680a.jpg",
        "https://i.pinimg.com/736x/94/f8/d5/94f8d52e7b967e9c19b1bca60656680a.jpg",
        "https://i.pinimg.com/736x/94/f8/d5/94f8d52e7b967e9c19b1bca60656680a.jpg",
      ],
      tech: ["Photoshop", "Figma", "Illustrator"],
    },
    {
      id: 7,
      title_uz: "Vizitka dizayni",
      title_en: "Business Card Design",
      description_uz:
        "Tadbirkor uchun professional va zamonaviy vizitka dizayni.",
      description_en:
        "A professional and sleek business card design for an entrepreneur.",
      category_uz: "Bosma Dizayn",
      category_en: "Print Design",
      type: "print",
      client: "John Doe",
      date: "2024-02-20",
      img: [
        "https://i.pinimg.com/originals/4c/9d/71/4c9d71880d65e61e0228585d3acb6816.png",
        "https://i.pinimg.com/originals/4c/9d/71/4c9d71880d65e61e0228585d3acb6816.png",
        "https://i.pinimg.com/originals/4c/9d/71/4c9d71880d65e61e0228585d3acb6816.png",
      ],
      tech: ["Adobe XD", "Sketch", "CorelDRAW"],
    },
    {
      id: 8,
      title_uz: "Restoran menyusi dizayni",
      title_en: "Restaurant Menu Design",
      description_uz:
        "Restoran uchun nafis va o‘qilishi oson menyu ishlab chiqildi.",
      description_en: "Designed an elegant and readable menu for a restaurant.",
      category_uz: "Bosma Dizayn",
      category_en: "Print Design",
      type: "print",
      client: "Gourmet Bites",
      date: "2024-03-05",
      img: [
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/99591650/original/bca9a982821aaad929753c47adc2d356013f0617/design-print-banner-for-you-in-24-hours.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/99591650/original/bca9a982821aaad929753c47adc2d356013f0617/design-print-banner-for-you-in-24-hours.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/99591650/original/bca9a982821aaad929753c47adc2d356013f0617/design-print-banner-for-you-in-24-hours.jpg",
      ],
      tech: ["Photoshop", "Figma", "Illustrator"],
    },
    {
      id: 9,
      title_uz: "Instagram posti dizayni",
      title_en: "Instagram Post Design",
      description_uz:
        "Influencer marketing kampaniyasi uchun kreativ Instagram posti dizayni.",
      description_en:
        "Creative Instagram post design for an influencer marketing campaign.",
      category_uz: "Ijtimoiy Tarmoq Dizayni",
      category_en: "Social Media Design",
      type: "social-media",
      client: "InfluencePro",
      date: "2024-03-10",
      img: [
        "https://i.pinimg.com/originals/41/06/01/410601573f222ceb36aceda80d3e566e.jpg",
        "https://i.pinimg.com/originals/41/06/01/410601573f222ceb36aceda80d3e566e.jpg",
        "https://i.pinimg.com/originals/41/06/01/410601573f222ceb36aceda80d3e566e.jpg",
      ],
      tech: ["Adobe XD", "Sketch", "CorelDRAW"],
    },
    {
      id: 10,
      title_uz: "Facebook reklama banneri",
      title_en: "Facebook Ad Banner",
      description_uz:
        "Onlayn kurs uchun samarali Facebook reklama banneri ishlab chiqildi.",
      description_en:
        "Designed a high-converting Facebook ad banner for an online course.",
      category_uz: "Ijtimoiy Tarmoq Dizayni",
      category_en: "Social Media Design",
      type: "social-media",
      client: "EduMaster",
      date: "2024-02-12",
      img: [
        "https://i.pinimg.com/originals/4d/53/90/4d5390bb88e64a0d8cdfd6a902a1baf4.png",
        "https://i.pinimg.com/originals/4d/53/90/4d5390bb88e64a0d8cdfd6a902a1baf4.png",
        "https://i.pinimg.com/originals/4d/53/90/4d5390bb88e64a0d8cdfd6a902a1baf4.png",
      ],
      tech: ["Photoshop", "Figma", "Illustrator"],
    },
  ];

  const [portfolio, setPortfolio] = useState();
  const { setCategory } = useContext(Context);
  const { type } = useContext(Context);
  useEffect(() => {
    // fetch("http://localhost:5000/portfolio")
    //   .then((response) => response.json())
    //   .then((data) => setPortfolio(data))
    //   .catch((error) => console.error("Xatolik:", error));
    setPortfolio(portfolioData)
  }, []);

  const { lang } = useContext(Context);

  useEffect(() => {
    const uniqueCategory = [
      ...new Set(portfolio?.map((item) => item[`category_${lang}`])),
    ];
    setCategory(uniqueCategory);
  }, [portfolio, lang]);

  const [info, setInfo] = useState(false);
  const [infoValue, setInfoValue] = useState("");
  const { setProjectId } = useContext(Context);
  const handleInfo = (itemInfo) => {
    setInfo(true);
    setInfoValue(itemInfo);
  };

  const handleResponseId = (responseId) => {
    setProjectId(responseId);
    window.localStorage.setItem("aboutId", responseId);
  };

  return (
    <div className="projects">
      {portfolio
        ?.filter(
          (projects) => projects[`category_${lang}`] == type || type === "All"
        )
        .map((item, index) => (
          <div className="projects_item" key={index}>
            <div className="img_item">
              <img src={item.img[0]} onClick={() => handleInfo(item)} alt="" />
            </div>
            <div className="img_body">
              <h3>{item.client}</h3>
              <Link
                to={"/about-project"}
                onClick={() => handleResponseId(item.id)}
              >
                <i className="bi bi-three-dots"></i>
              </Link>
            </div>
          </div>
        ))}
      <div className={info ? "item_img active" : "item_img"}>
        <div className="info_close" onClick={() => setInfo(false)}>
          <i onClick={() => setInfo(false)} className="bi bi-x-lg"></i>
        </div>
        <div className="info_body">
          {/* <i className="bi bi-arrow-left-circle" onClick={()=> ""}></i> */}
          {infoValue?.img && infoValue.img.length > 0 && (
            <img src={infoValue.img[0]} alt="" />
          )}
          {/* <i className="bi bi-arrow-right-circle"></i> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
