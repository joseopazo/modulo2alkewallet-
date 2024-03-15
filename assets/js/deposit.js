document.addEventListener("DOMContentLoaded", function() {
    let balance = 0;
  
    function updateBalance() {
      document.getElementById('balance').textContent = balance.toFixed(2);
    }
  
    document.getElementById('depositBtn').addEventListener("click", function() {
      let amount = parseFloat(document.getElementById('amount').value);
      if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        document.getElementById('amount').value = '';
        alert('¡Depósito Realizado Con Exito !');
      } else {
        alert('Monto inválido. Tienes Un Saldo Insuficiente.');
      }
    });
  
    document.getElementById('withdrawBtn').addEventListener("click", function() {
      let amount = parseFloat(document.getElementById('amount').value);
      if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        document.getElementById('amount').value = '';
        alert('¡Has Retirado Monto Con Exito!');
      } else {
        alert('Cantidad Invalida. No dispones de este Saldo en Tu Cuenta.');
      }
    });
  });
  