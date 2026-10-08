document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Previene la recarga de la página (Buenas prácticas)
      
      // Estado de carga
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
      
      // Simulación de envío a un servidor backend
      setTimeout(() => {
        // Estado de éxito
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensaje';
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        
        formStatus.textContent = '¡Mensaje enviado con éxito! Nos contactaremos pronto.';
        formStatus.classList.remove('hidden', 'text-red-400');
        formStatus.classList.add('text-green-400', 'block');
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 5000);
      }, 1500);
    });
  }
});