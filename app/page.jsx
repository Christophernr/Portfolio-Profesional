import Header from "@/components/Header/Header";
import Descripcion from "@/components/Descripcion/Descripcion";
import Redes from "@/components/Redes/Redes.jsx";
import Habilidades from "@/components/Habilidades/Habilidades";
import Proyectos from "@/components/Proyectos/Proyectos";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";

import { RedesJS } from "@/components/Redes/Redes.js";
import { DataHabilidades } from "@/components/Habilidades/Data.js";
import { ProyectosData } from "@/components/Proyectos/ProyectosData.js";

export default function Home() {
  return (
    <>
      <Header />

      <section id="Descripcion">
        <Descripcion />
      </section>

      <div className="flex justify-center mt-4">
        <Redes icono={RedesJS[0].iconName} link={RedesJS[0].link} />
        <Redes icono={RedesJS[1].iconName} link={RedesJS[1].link} />
        <Redes icono={RedesJS[2].iconName} link={RedesJS[2].link} />
      </div>

      <Habilidades />

      <section id="Proyectos" className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2d3e50] mb-4">
          Mis proyectos
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Proyectos
              title={ProyectosData[0].title}
              description={ProyectosData[0].description}
              image={ProyectosData[0].image}
              icono={RedesJS[0].iconName}
              tools={[
                DataHabilidades[2].skillTools1,
                DataHabilidades[2].skillTools2,
                DataHabilidades[0].skillFront1,
                DataHabilidades[0].skillFront2,
                DataHabilidades[0].skillFront3,
              ]}
              link={ProyectosData[0].link}
              video={ProyectosData[0].video}
            />

            <Proyectos
              title={ProyectosData[1].title}
              description={ProyectosData[1].description}
              image={ProyectosData[1].image}
              icono={RedesJS[0].iconName}
              tools={[
                DataHabilidades[2].skillTools4,
                DataHabilidades[2].skillTools5,
                DataHabilidades[1].skillBack2,
                DataHabilidades[1].skillBack3,
                DataHabilidades[2].skillTools3,
              ]}
              link={ProyectosData[1].link}
              video={ProyectosData[1].video}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Proyectos
              title={ProyectosData[2].title}
              description={ProyectosData[2].description}
              image={ProyectosData[2].image}
              icono={RedesJS[0].iconName}
              tools={[
                DataHabilidades[2].skillTools6,
                DataHabilidades[1].skillBack2,
                DataHabilidades[1].skillBack3,
              ]}
              link={ProyectosData[2].link}
              video={ProyectosData[2].video}
            />

            <Proyectos
              title={ProyectosData[3].title}
              description={ProyectosData[3].description}
              image={ProyectosData[3].image}
              icono={RedesJS[0].iconName}
              tools={[
                DataHabilidades[2].skillTools5,
                DataHabilidades[2].skillTools4,
                DataHabilidades[2].skillTools3,
                DataHabilidades[1].skillBack2,
                DataHabilidades[1].skillBack3,
              ]}
              link={ProyectosData[3].link}
              video={ProyectosData[3].video}
            />
          </div>
        </div>
      </section>

      <Contacto />

      <Footer />
    </>
  );
}
