function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            // Limpa o valor do visor
            document.getElementById('resultado').value = '';
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            document.getElementById('resultado').value += valor;
        }

        if (valor === '=') {
            // Realiza o cálculo e mostra o resultado no visor
            var valor_campo = eval(document.getElementById('resultado').value);
            document.getElementById('resultado').value = valor_campo;
        }

    } else if (tipo === 'valor') {
        // Adiciona o valor ao visor
        document.getElementById('resultado').value += valor;
    }}