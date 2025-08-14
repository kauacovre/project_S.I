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

    document.addEventListener("DOMContentLoaded", () => {
        // Ativar link ativo ao rolar
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav ul li a");
      
        window.addEventListener("scroll", () => {
          let current = "";
      
          sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
              current = section.getAttribute("id");
            }
          });
      
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
              link.classList.add("active");
            }
          });
        });
      
        // Efeito de digitação (typewriter) no herói
        const heroText = document.querySelector(".hero p");
        const fullText = heroText.textContent;
        heroText.textContent = "";
        let index = 0;
      
        function typeWriter() {
          if (index < fullText.length) {
            heroText.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, 40);
          }
        }
      
        setTimeout(typeWriter, 500);
      });