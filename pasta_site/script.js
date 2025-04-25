document.addEventListener('DOMContentLoaded', function() {
    // Aqui viria o código para integrar com o sistema de agendamento
    // Poderia ser uma integração com Google Calendar, Calendly ou sistema próprio
    
    // Exemplo simples de validação
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    });
    
    // Atualizar o ano do copyright automaticamente
    document.querySelector('footer p').textContent = `S.I Alinhamento © ${new Date().getFullYear()} - Todos os direitos reservados`;
    });
