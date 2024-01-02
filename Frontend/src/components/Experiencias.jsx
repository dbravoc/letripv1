import React from 'react';
import { Link } from 'react-router-dom';


const Experiencias = () => {
    
const experience_card = [
  {
    experience_id: '1',
    experience_name: 'Bucea con corales en Isla Providencia, Colombia', 
    experience_type: 'Curso',
    experience_location: 'Isla Providencia, San Andrés, Colombia',
    experience_country: 'Colombia',
    experience_description_small: 'Certifícate y disfruta al mismo tiempo con esta experiencia única en el mar caribe all-inclused, junto a nuestro instructor Emiliano y nuestros anfitriones locales.',
    experience_main_discipline: 'Buceo',
    experience_geography:'Mar',
    experience_demand_level: 'Intermedio',
    experience_price_from: '1000',
    experience_video: <iframe width="350" height="240"  src="https://www.youtube-nocookie.com/embed/ta9PI5KEjLA?si=SbAR8NqNNIdnZ6dY&amp;controls=0&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    experience_id: '2',
    experience_name: 'Descenso en Rafting por el Río Amazonas', 
    experience_type: 'Aventura',
    experience_location: 'Amazonas, Brasil',
    experience_country: 'Brasil',
    experience_description_small: 'Navega por las aguas del majestuoso Río Amazonas en una experiencia inolvidable de kayak. Apto para todos los niveles, con guías expertos.',
    experience_main_discipline: 'Rafting',
    experience_geography:'Río',
    experience_demand_level: 'Expertos',
    experience_price_from: '750',
    experience_video: <iframe width="350" height="240"  src="https://www.youtube-nocookie.com/embed/yBCehIKdqHY?si=vNxTJ45mIWCTAPsQ&amp;controls=0&amp;start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    experience_id: '3',
    experience_name: 'Escalada en Roca en Yosemite', 
    experience_type: 'Expedición',
    experience_location: 'Parque Nacional Yosemite, EE.UU.',
    experience_country: 'Estados Unidos',
    experience_description_small: 'Escalada guiada por los icónicos acantilados de Yosemite. Ideal para escaladores intermedios y avanzados, con equipos de seguridad de primera línea.',
    experience_main_discipline: 'Escalada',
    experience_geography:'Montaña',
    experience_demand_level: 'Expertos',
    experience_price_from: '1200',
    experience_video: <iframe width="350" height="240"  src="https://www.youtube-nocookie.com/embed/crx_UJPjlrs?si=zm13hZ_ce3clr2ic&amp;controls=0&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    experience_id: '4',
    experience_name: 'Surf en las Olas de Bali', 
    experience_type: 'Clase',
    experience_location: 'Bali, Indonesia',
    experience_country: 'Indonesia',
    experience_description_small: 'Aprende a surfear o mejora tus habilidades en las famosas olas de Bali. Clases para todos los niveles, en un ambiente tropical paradisíaco.',
    experience_main_discipline: 'Surf',
    experience_geography:'Mar',
    experience_demand_level: 'Principiantes',
    experience_price_from: '300',
    experience_video: <iframe width="350" height="240" src="https://www.youtube-nocookie.com/embed/JIrMAVcv0lo?si=5pM4bsdnLP7I37GG&amp;controls=0&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  // Puedes añadir más objetos de experiencias aquí
];

experience_card.forEach(experience => {
  experience.tags = [
    experience.experience_main_discipline,
    experience.experience_country,
    experience.experience_type,
    experience.experience_geography
  ];
});

return (
  <div className="bg-black">
    <div className="mx-auto">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-6 sm:gap-0">
        {experience_card.map(experience => (
          <div key={experience.experience_id} className="flex flex-col justify-center mb-10 md:flex-row bg-black shadow-lg rounded-lg overflow-hidden">
            <div className="flex max-w-[350px] flex-col justify-between leading-normal">
            <div>{experience.experience_video}
            </div> 
             <h3 className="text-gray-50 font-bold text-xl">{experience.experience_name}</h3>
              <div className="mt-6">
                <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_type}</div>
                <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_country}</div>
                <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_main_discipline}</div>
                <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_demand_level}</div>
              </div>
              <h3 className="text-gray-50 font-bold text-xl mt-6"><span className='text-sm'>Desde </span>{experience.experience_price_from}<span> USD /Persona</span></h3>
              <Link to="/reserva" className="text-gray-700 bg-gray-50 focus:outline-none focus:text-white focus:bg-gray-700 focus:ring-offset-2 rounded-lg px-4 py-2 mt-2 transition-all ease-in-out duration-100 text-center"><strong>Reservar</strong></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Experiencias;