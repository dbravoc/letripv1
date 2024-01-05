import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid';




const FormularioPago = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_id === id);

  if (!selectedExperience) {
    return <div>No se encontró la experiencia</div>;
  }
  const features = [
      { name: 'Nombre Experiencia', description: selectedExperience.experience_name },
      { name: 'Ubicación', description: selectedExperience.experience_location },
      { name: 'País', description: selectedExperience.experience_country },
      { name: 'Disciplina Principal', description: selectedExperience.experience_main_discipline },
      { name: 'Monto a pagar', description: `${selectedExperience.experience_price_from} USD` },
    ];


  return (
    <form className="flex flex-col mx-auto p-4 bg-black shadow rounded-lg">
      <h1 className="text-3xl font-bold tracking-tight text-gray-50 mb-4">Formulario de pago</h1>
      <div className='flex flex-row mt-8 justify-evenly items-start'>
        <div>
          <ul role="list" className="mt-1 grid grid-cols-1 gap-1 text-xl leading-6 text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-x-1">
            <CheckIcon className="h-6 w-5 flex-none text-gray-50" aria-hidden="true" />
                    <span>{feature.name}: {feature.description}</span>

                  </li>
                ))}
          </ul>
        </div>
        
        <div className="flex flex-col p-10 rounded-3xl ring-1 ring-gray-800">
          <h1 className="text-3xl font-bold tracking-tight text-gray-50 mb-4">Ingresa los datos de tu tarjeta</h1>
          <input type="number" idp="form-checkout__cardNumber" className="mb-4 p-2 border border-gray-300 rounded-md" placeholder='Número de tarjeta' />
          <input type="date" idp="form-checkout__expirationDate" className=" mb-4 p-2 border border-gray-300 rounded-md" placeholder='Fecha de expiración'/>
          <input type="number" idp="form-checkout__securityCode" className=" mb-4 p-2 border border-gray-300 rounded-md" placeholder='Código seguridad'/>
          <input type="text" idp="form-checkout__cardholderName" className="mb-4 p-2 border border-gray-300 rounded-md" placeholder="Nombre y apellido titular" />
          <select idp="form-checkout__issuer" className="mb-4 p-2 border border-gray-300 rounded-md" placeholder=''>
            <option value="" disabled selected>Sin cuotas</option>
            <option value="" disabled selected>Con cuotas</option>
          </select>
          <select idp="form-checkout__installments" className="mb-4 p-2 border border-gray-300 rounded-md" placeholder='Nº Cuotas'>
            <option value="" disabled selected>Nº Cuotas</option>
          </select>
          <select idp="form-checkout__identificationType" className="mb-4 p-2 border border-gray-300 rounded-md" placeholder='Tipo de identificación'>
            <option value="" disabled selected>Cédula Identidad</option>
            <option value="" disabled selected>Pasaporte</option>
          </select>
          <input type="text" idp="form-checkout__identificationNumber" className="mb-4 p-2 border border-gray-300 rounded-md" placeholder="Número identificación" />
          <input type="email" idp="form-checkout__cardholderEmail" className="mb-4 p-2 border border-gray-300 rounded-md" placeholder="Email" />
          <button type="submit" idp="form-checkout__submit" className="mb-4 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:bg-white focus:text-gray-700"><strong>Pagar</strong></button>
          <a className='text-gray-50 mb-4 flex justify-center bg-green-700 py-2 px-4 rounded-md hover:bg-gray-500 focus:bg-white focus:text-gray-700' href="https://mpago.la/23vUZtJ">Pagar fácil</a>
          <progress value="0" className="progress-bar w-full"></progress>
        </div>
      </div>
    </form>
  );
};

export default FormularioPago;
