Document.getElementById('pontoForm').addEventListener('submit',function(event) {
    event.preventDefault();
 
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    var horario = document.getElementById('horario').value;
 
    // Aqui você pode fazer a integração com o sistema TOTVS para registrar o ponto
 
    alert('Ponto registrado com sucesso!');
  });
 
