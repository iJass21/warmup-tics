import * as d3 from "https://cdn.skypack.dev/d3@7";

document.getElementById("upload").addEventListener("change", upload, false);
document.getElementById("calcularButton").addEventListener ("click", calcularImpuestos, false);

function upload(e) {
	var data = null;
    var file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csvData = event.target.result;
        var parsedCSV = d3.csvParseRows(csvData);

        parsedCSV.forEach(function (d, i) {
			document.getElementById("si-"  + (i + 1)).value = parseInt(d[0]);
			document.getElementById("irs-" + (i + 1)).value = parseInt(d[1]);
			document.getElementById("hb-"  + (i + 1)).value = parseInt(d[2]);
			document.getElementById("irh-" + (i + 1)).value = parseInt(d[3]);
        });
    }
}

function download(filename) {
	var element = document.createElement('a');
	element.setAttribute('download', filename);
	document.body.appendChild(element);
	element.click();
}

function cargarTabla(filepath) {
	let matriz = [];
	var data = null;
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filepath, false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		data = xmlhttp.responseText;
	}
	
	var parsedCSV = d3.csvParseRows(data);
		
	parsedCSV.forEach(function (d, i) {
		matriz[i] = [parseInt(d[0]), parseFloat(d[1]), parseInt(d[2])]
	});
	
	return matriz;
}

function descargarTabla() {
	// var text = document.getElementById("text").value;
	var filename = "js/tablaIntervalos.csv";
	download(filename);
}

function calcularImpuestos() {
    const matriz = [];

    for (let i = 0; i < 12; i++) {
        let si = document.getElementById("si-" + (i + 1)); // Sueldo imponible
        let irs = document.getElementById("irs-" + (i + 1)); // Impuesto retenido sueldo
        let hb = document.getElementById("hb-" + (i + 1)); // Honorarios brutos
        let irh = document.getElementById("irh-" + (i + 1)); // Impuesto retenido honorarios

        matriz[i] = [parseInt(si.value), parseInt(irs.value), parseInt(hb.value), parseInt(irh.value)];
    }
	
	let ssi = 0;
	for	(let i = 0; i < matriz.length; i++) {
		ssi += matriz[i][0]; // Sumatoria de sueldo imponible
	}
	
	let shb = 0;
	for	(let i = 0; i < matriz.length; i++) {
		shb += matriz[i][2]; // Sumatoria de honorarios brutos
	}
	
	let tabla = cargarTabla("js/tablaIntervalos.csv");
	
	let ingreso_total = ssi + shb;
	
	console.log(ingreso_total);
	console.log(tabla);
	
	let factor = 1;
	let rebaja = 0;
	let intervalo = 0;
	
	for (let i = 0; i < tabla.length; i++) {
		if (ingreso_total <= tabla[i][0] || i + 1 == tabla.length) {
			factor = tabla[i][1];
			rebaja = tabla[i][2];
			intervalo = i + 1;
			break;
		}
	}
	
	console.log("Intervalo: " + intervalo);
	console.log("Factor: " + factor);
	console.log("Rebaja: " + rebaja);
	
	let impuestos_reales = ingreso_total * factor - rebaja
	
	let sirs = 0;
	for	(let i = 0; i < matriz.length; i++) {
		sirs += matriz[i][1]; // Sumatoria de Impuesto retenido sueldo
	}
	
	let sirh = 0;
	for	(let i = 0; i < matriz.length; i++) {
		sirh += matriz[i][3]; // Sumatoria de Impuesto retenido honorario
	}
	
	let impuesto_a_pagar = impuestos_reales - sirs - sirh;

    let result = document.getElementById("resultado");
    result.innerHTML = "Resultado: " + impuesto_a_pagar.toLocaleString('es-CL') + " - " + ((impuesto_a_pagar >= 0) ? "por pagar." : "devolución.");
}
