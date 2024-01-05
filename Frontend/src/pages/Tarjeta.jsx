
import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';



const Tarjeta = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_id === id);

  if (!selectedExperience) {
    return <div>No se encontró la experiencia</div>;
  }

  const features = [
    { name: 'Tipo', description: selectedExperience.experience_type },
    { name: 'Ubicación', description: selectedExperience.experience_location },
    { name: 'País', description: selectedExperience.experience_country },
    { name: 'Disciplina Principal', description: selectedExperience.experience_main_discipline },
    { name: 'Geografía', description: selectedExperience.experience_geography },
    { name: 'Nivel de Demanda', description: selectedExperience.experience_demand_level },
    { name: 'Precio Desde', description: `${selectedExperience.experience_price_from} USD` },
  ];

  return ( //GRID: seccion fotos, seccion informacion + invitacion anfitrion, reserva
      
  <div className="flex flex-col items-center justify-center align-top">

    <div className="mx-0 grid sm:grid-cols-2 grid-cols-1 items-center gap-x-8 gap-y-8 sm:px-6 sm:py-8"> 

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-50 mb-4">{selectedExperience.experience_name}</h2>
        
            
          <div className="flex justify-between py-5 items-center min-w-0 gap-x-4">
            <div className="flex items-center min-w-0 gap-x-4">
              <div className="h-24 w-24 flex-none rounded-full overflow-hidden bg-gray-50">
                {selectedExperience.experience_instructor_img}
              </div>
              
              <div>
                    <p className="text-base font-semibold leading-6 text-gray-50">{selectedExperience.experience_instructor}</p>
                    <p className="text-sm leading-6 text-gray-50">{selectedExperience.experience_instructor_type}</p>
              </div>
            </div>

            <div>
                <p className=' text-base font-semibold leading-6 text-gray-50'>{selectedExperience.experience_instructor_evaluation}</p>
            </div>
         </div>

        <div>
          <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 sm:gap-y-2">
            {features.map((feature, index) => (
              <div key={index} className="border-t border-gray-700 pt-2">
                <dt className=" text-base font-medium text-gray-50">{feature.name}</dt>
                <dd className="text-s mt-2 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        </div>


        <div className="grid grid-cols-2 grid-rows-2 gap-0 sm:gap-0 lg:gap-0 rounded-lg overflow-hidden">
          <div>{selectedExperience.experience_img_1}</div>
          <div>{selectedExperience.experience_img_2}</div>
          <div>{selectedExperience.experience_img_3}</div>
          <div>{selectedExperience.experience_img_4}</div>
        </div>
    </div>

    <div className="bg-black ">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-800 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-50">Que incluye la experiencia?</h3>
            <p className="text-s tracking-tight text-gray-300 mb-4">{selectedExperience.experience_description_small}</p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-gray-50">Incluye</h4>
              <div className="h-px flex-auto bg-gray-500" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-4 sm:gap-0"
            >
            {selectedExperience.experience_included.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-gray-50" aria-hidden="true" />
                {feature}
              </li>
            ))}

            </ul>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-gray-50">No incluye</h4>
              <div className="h-px flex-auto bg-gray-500" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-4 sm:gap-0"
            >
            {selectedExperience.experience_not_included.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-gray-50" aria-hidden="true" />
                {feature}
              </li>
            ))}

            </ul>
          </div>
          <div className="-mt-2 p-2 flex justify-center lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-black py-10  text-center ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
              
              <div className="mx-auto max-w-xs px-8 justify-center">
                <p className="text-base font-semibold text-gray-300">Valor por persona</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-50">$1500</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-50">USD</span>
                </p>
                <Link to={`https://mpago.la/23vUZtJ`}  className="mt-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-center text-xl font-semibold text-gray-900 shadow-sm hover:bg-gray-700 hover:text-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <strong>Reservar</strong>
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  Impuestos incluidos
                </p>
              </div>

            </div>
          </div>
      </div>
    </div>

  </div>
  

  );
  
};

export default Tarjeta;