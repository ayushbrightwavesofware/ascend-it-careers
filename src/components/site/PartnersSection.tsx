import meity from "@/assets/partner-meity.png";
import cybercell from "@/assets/partner-cybercell.png";
import ec from "@/assets/partner-ec.png";
import nsdc from "@/assets/partner-nsdc.png";
import skill from "@/assets/partner-skillindia.png";

const partners = [
  { logo: meity, title: "MINISTRY OF ELECTRONICS &", subtitle: "INFORMATION TECHNOLOGY", caption: "GOVERNMENT OF INDIA" },
  { logo: cybercell, title: "CYBER CELL", subtitle: "MAHARASHTRA", caption: "" },
  { logo: ec, title: "Building A Culture Of Security", subtitle: "", caption: "" },
  { logo: nsdc, title: "NATIONAL SKILL", subtitle: "DEVELOPMENT CORPORATION", caption: "" },
  { logo: skill, title: "SKILL INDIA MISSION", subtitle: "", caption: "" },
];

export function PartnersSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg md:text-xl font-extrabold tracking-wider text-primary mb-8">
          OUR ASSOCIATES & PARTNERS
        </h2>
        <div className="bg-card border border-border/60 rounded-2xl shadow-soft p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 items-center">
            {partners.map((p, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-2 ${
                  i < partners.length - 1 ? "lg:border-r lg:border-border/60" : ""
                }`}
              >
                <img
                  src={p.logo}
                  alt={p.title}
                  loading="lazy"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0"
                />
                <div className="text-[11px] md:text-xs leading-tight">
                  {p.title && <p className="font-bold text-foreground">{p.title}</p>}
                  {p.subtitle && <p className="font-bold text-foreground">{p.subtitle}</p>}
                  {p.caption && <p className="font-bold text-primary mt-1">{p.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-wider text-primary mt-14 mb-2">
          OUR TOP PROGRAMS
        </h2>
      </div>
    </section>
  );
}
