"use strict";
// Para "registrar" no módulo, precisa ser exportado
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaCircunferencia = exports.PI = void 0;
exports.PI = 3.14;
function areaCircunferencia(raio) {
    return raio * raio * exports.PI;
}
exports.areaCircunferencia = areaCircunferencia;
