AOS.init();

const dataDoEvento = new Date("sept 28, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
const agora = new Date();
const timeStampAtual = agora.getTime();

const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

const diaEMS = 1000 * 60 * 60 * 24;
const horaEMS = 1000 * 60 * 60;
const minutosEMS = 1000 * 60;

const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEMS);
const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEMS) / horaEMS);
const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEMS) / minutosEMS);
const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEMS) / 1000);

document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

if (distanciaAteOEvento < 0 ) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'Evento Expirado';
}
}, 1000);